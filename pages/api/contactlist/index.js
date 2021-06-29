import axios from 'axios';
// import {contacts, createContact} from "../../../services/contact-service";

export default async (req, res) => {

if (req.method === 'GET') {
    const response = await axios.post(
        'https://graphql.fauna.com/graphql',
        {
            query: `
            query {
                allContacts {
                    data{
                        _id
                        firstName
                        lastName
                        email
                        phone
                    }
                } 
            }

        `,
        },
        {
            headers: {
                Authorization: "Bearer fnAEMRw2ygACACJWAuyLMeSqaBR34adCfCcergo8",   
            },
        }
    );

  if (response.data.errors){
      res.status(404).json(response.data.errors);
      return;
  }  
    res.status(200).json(response.data.data.allContacts.data);
}

if (req.method === 'POST') {
    const response = await axios.post(
        'https://graphql.fauna.com/graphql',
        {
            query: `
            mutation createContact($data: ContactInput!) {
                createContact(data: $data) {
                        _id
                        firstName
                        lastName
                        email
                        phone
                } 
            }
        `,
        variables: {
            data: req.body,
        },
        },
        {
            headers: {
                Authorization: "Bearer fnAEMRw2ygACACJWAuyLMeSqaBR34adCfCcergo8",   
            },
        }
    );
    if (response.data.errors){
        res.status(404).json(response.data.errors);
        return;
    }  
      res.status(200).json(response.data.data.createContacts);
}


if (req.method === 'PUT') {
    const response = await axios.post(
        'https://graphql.fauna.com/graphql',
        {
            query: `
            mutation updateContact($id:ID!, $contactInput: ContactInput!) {
                updateContact(id: $id, data: $contactInput) {
                        _id
                        firstName
                        lastName
                        email
                        phone
                } 
            }
        `,
        variables: {
            id:  req.query.id,
            contactInput: req.body,
        },
        },
        {
            headers: {
                Authorization: "Bearer fnAEMRw2ygACACJWAuyLMeSqaBR34adCfCcergo8",   
            },
        }
    );
    if (response.data.errors){
        res.status(404).json(response.data.errors);
        return;
    }  
      res.status(200).json(response.data.data.updateContacts);
}

if (req.method === 'PATCH') {
    const response = await axios.post(
        'https://graphql.fauna.com/graphql',
        {
            query: `
            mutation partialUpdateContact($id:ID!, $contactInput: PartialUpdateContactInput!) {
                partialUpdateContact(id: $id, data: $contactInput) {
                        _id
                        firstName
                        lastName
                        email
                        phone
                } 
            }
        `,
        variables: {
            id:  req.query.id,
            contactInput: req.body,
        },
        },
        {
            headers: {
                Authorization: "Bearer fnAEMRw2ygACACJWAuyLMeSqaBR34adCfCcergo8",   
                "X-Schema-Preview": "partial-update-mutation"
            },
        }
    );
    if (response.data.errors){
        res.status(404).json(response.data.errors);
        return;
    }  
      res.status(200).json(response.data.data.partialUpdateContacts);
}

if (req.method === 'DELETE') {
    const response = await axios.post(
        'https://graphql.fauna.com/graphql',
        {
            query: `
            mutation partialUpdateContact($id:ID!, $contactInput: PartialUpdateContactInput!) {
                partialUpdateContact(id: $id, data: $contactInput) {
                        _id
                        firstName
                        lastName
                        email
                        phone
                } 
            }
        `,
        variables: {
            id:  req.query.id,
            contactInput: req.body,
        },
        },
        {
            headers: {
                Authorization: "Bearer fnAEMRw2ygACACJWAuyLMeSqaBR34adCfCcergo8",   
                "X-Schema-Preview": "partial-update-mutation"
            },
        }
    );
    if (response.data.errors){
        res.status(404).json(response.data.errors);
        return;
    }  
      res.status(200).json(response.data.data.partialUpdateContacts);
}


};
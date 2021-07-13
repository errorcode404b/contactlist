import axios from "axios";
import { 
    getContact,
    fullUpdate,
    partialUpdate,
    deleteContact,
} from "../../../services/contacts-service";


export default async (req, res) => {

  if (req.method === "GET") {
      const response = await axios.post('https://graphql.fauna.com/graphql',
          {
              query: `
              query {
                  findContactByID(id: ${reg.query.id}) {
                          _id
                          image
                          firstName
                          lastName
                          email
                          phone
                          work
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
      

      if (!response.data.data.findContactByID) {
          res.status(404).json();
          return;
      }

      res.status(200).json(response.data.data.findContactByID);

  }

  if (req.method === "PUT") {
      const contact = fullUpdate(req.query.id, req.body);
      if(!contact){
          res.status(404).json();
          return
      }
      res.status(200).json(contact);
  }

  if (req.method === "PATCH") {
      const contact = partialUpdate(req.query.id, req.body);
      if(!contact){
          res.status(404).json();
          return
      }
      res.status(200).json(contact);
  }

  if (req.method === "DELETE") {
      deleteContact(req.query.id);
      res.status(204).json();
  }
};
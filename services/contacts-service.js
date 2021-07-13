import axios from "axios";

const GRAPHQL_URL = "https://graphql.fauna.com/graphql";
const headers = {
  Authorization: `Bearer fnAEMRw2ygACACJWAuyLMeSqaBR34adCfCcergo8`,
};

const ALL_CONTACTS = `
query {
  allContacts {
    data {
      _id
      image
      firstName
      lastName
      email
      phone
      work
    }
  }
}`;

const CREATE_CONTACT = `
mutation createContact($data: ContactInput!) {
  createContact(data: $data) {
    _id
    image
    firstName
    lastName
    email
    phone
    work
    }    
}`;

const FIND_CONTACT_BY_ID = `
query findContactByID($id: ID!) {
  findContactByID(id: $id) {
    _id
    image
    firstName
    lastName
    email
    phone
    work
  }
}`;

const UPDATE_CONTACT = `
mutation updateContact($id: ID!, $contactInput: ContactInput!) {
  updateContact(id: $id, data: $contactInput ) {
    _id
    image
    firstName
    lastName
    email
    phone
    work
  }
}`;

const PARTIAL_UPDATE_CONTACT = `
mutation partialUpdateContact($id: ID!, $contactInput: PartialUpdateContactInput!) {
  partialUpdateContact(id: $id, data: $contactInput ) {
    _id
    image
    firstName
    lastName
    email
    phone
    work
  }
}`;

const DELETE_CONTACT = `
mutation deleteContact($id: ID!) {
  deleteContact(id: $id) {
    _id
    image
    firstName
    lastName
    email
    phone
    work
  }
}`;

const graphqlRequest = (query, variables, addtionalHeaders = {}) =>
  axios.post(
    GRAPHQL_URL,
    { query, variables },
    { headers: { ...headers, ...addtionalHeaders } }
  );

export const getAllContacts = () => graphqlRequest(ALL_CONTACTS);

export const createContact = (contactInput) =>
  graphqlRequest(CREATE_CONTACT, { data: contactInput });

export const findContactByID = (id) =>
  graphqlRequest(FIND_CONTACT_BY_ID, { id });

export const fullUpdate = (id, input) =>
  graphqlRequest(UPDATE_CONTACT, { id, data: input });

export const partialUpdate = (id, input) =>
  graphqlRequest(
    PARTIAL_UPDATE_CONTACT,
    { id, data: input },
    { "X-Schema-Preview": "partial-update-mutation" }
  );

export const deleteContact = (id) => graphqlRequest(DELETE_CONTACT, { id });

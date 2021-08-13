/** @format */

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export const apiContacts = {
  getContacts: () => axios.get('/contacts'),
};

export const apiDeleteContact = {
  delContact: (id) => axios.delete(`/contacts/${id}`),
};

export const apiAddContact = {
  addContact: (contact) => axios.post('/contacts', contact),
};

export const apiEditContact = {
  editContact: (contact) => axios.put(`/contacts/${contact.id}`, contact),
};

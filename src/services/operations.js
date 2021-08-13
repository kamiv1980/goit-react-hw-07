/** @format */
import * as Api from './api';
import { items } from './contacts/actions';

export const fetchContacts = () => (dispatch) => {
  dispatch(items.get.request());
  Api.apiContacts
    .getContacts()
    .then(({ data }) => dispatch(items.get.success(data)))
    .catch((error) => dispatch(items.get.error(error)));
};

export const addContact = (name, number) => (dispatch) => {
  const contact = {
    name,
    number,
  };

  dispatch(items.add.request());
  Api.apiAddContact
    .addContact(contact)
    .then(({ data }) => dispatch(items.add.success(data)))
    .catch((error) => dispatch(items.add.error(error)));
};

export const delContact = (id) => (dispatch) => {
  dispatch(items.add.request());
  Api.apiDeleteContact
    .delContact(id)
    .then(() => dispatch(items.delete.success(id)))
    .catch((error) => dispatch(items.delete.error(error)));
};

export const editContact = (id, name, number) => (dispatch) => {
  const contact = {
    id,
    name,
    number,
  };
  console.log(id, name, number);

  dispatch(items.edit.request());
  Api.apiEditContact
    .editContact(contact)
    .then(({ data }) => dispatch(items.delete.success(data)))
    .catch((error) => dispatch(items.delete.error(error)));
};

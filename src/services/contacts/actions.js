/** @format */
/** @format */

export const actionTypes = {
  FETCH_CONTACTS_REQUEST: 'contacts/fetchContactsRequest',
  FETCH_CONTACTS_SUCCESS: 'contacts/fetchContactsSuccess',
  FETCH_CONTACTS_ERROR: 'contacts/fetchContactsError',

  ADD_CONTACT_REQUEST: 'contacts/addContactRequest',
  ADD_CONTACT_SUCCESS: 'contacts/addContactSuccess',
  ADD_CONTACT_ERROR: 'contacts/addContactError',

  DELETE_CONTACT_REQUEST: 'contacts/deleteContactRequest',
  DELETE_CONTACT_SUCCESS: 'contacts/deleteContactSuccess',
  DELETE_CONTACT_ERROR: 'contacts/deleteContactError',

  EDIT_CONTACT_REQUEST: 'contacts/editContactRequest',
  EDIT_CONTACT_SUCCESS: 'contacts/editContactSuccess',
  EDIT_CONTACT_ERROR: 'contacts/editContactError',

  NEW_FILTER: 'NEW_FILTER',
  NEW_MODAL: 'NEW_MODAL',
  NEW_ITEM: 'NEW_ITEM',
};

export let items = {
  get: {
    request: () => ({ type: actionTypes.FETCH_CONTACTS_REQUEST }),
    success: (payload) => ({ type: actionTypes.FETCH_CONTACTS_SUCCESS, payload }),
    error: (payload) => ({ type: actionTypes.FETCH_CONTACTS_ERROR, payload }),
  },
  add: {
    request: () => ({ type: actionTypes.ADD_CONTACT_REQUEST }),
    success: (payload) => ({ type: actionTypes.ADD_CONTACT_SUCCESS, payload }),
    error: (payload) => ({ type: actionTypes.ADD_CONTACT_ERROR, payload }),
  },
  delete: {
    request: () => ({ type: actionTypes.DELETE_CONTACT_REQUEST }),
    success: (payload) => ({ type: actionTypes.DELETE_CONTACT_SUCCESS, payload }),
    error: (payload) => ({ type: actionTypes.DELETE_CONTACT_ERROR, payload }),
  },
  edit: {
    request: () => ({ type: actionTypes.EDIT_CONTACT_REQUEST }),
    success: (payload) => ({ type: actionTypes.EDIT_CONTACT_SUCCESS, payload }),
    error: (payload) => ({ type: actionTypes.EDIT_CONTACT_ERROR, payload }),
  },
};

export const newFilter = (filter) => ({
  type: actionTypes.NEW_FILTER,
  payload: {
    filter,
  },
});

export const newModal = (modal) => ({
  type: actionTypes.NEW_MODAL,
  payload: {
    modal,
  },
});

export const newEditItem = (editItem) => ({
  type: actionTypes.NEW_ITEM,
  payload: {
    editItem,
  },
});

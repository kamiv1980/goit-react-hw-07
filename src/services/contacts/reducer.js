/** @format */
import { actionTypes } from './actions';

export function contactsReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.FETCH_CONTACTS_SUCCESS:
      return action.payload;

    case actionTypes.ADD_CONTACT_SUCCESS:
      return { ...state, items: [...state.items, action.payload] };

    case actionTypes.DELETE_CONTACT_SUCCESS:
      return { ...state, items: state.contacts.filter((contact) => contact.id !== action.payload.id) };

    case actionTypes.EDIT_CONTACT_SUCCESS:
      return {
        ...state,
        items: state.items.map((contact) =>
          contact.id === action.payload.id
            ? { ...contact, name: action.payload.name, number: action.payload.number }
            : contact,
        ),
      };

    default:
      return state;
  }
}

const notes = {
  filter: '',
  modal: false,
  editItem: { id: '', name: '', number: '' },
};

export function notesReducer(state = notes, action) {
  switch (action.type) {
    case actionTypes.NEW_FILTER:
      return {
        ...state,
        filter: action.payload.filter,
      };
    case actionTypes.NEW_MODAL:
      return {
        ...state,
        modal: (state.modal = action.payload.modal),
      };
    case actionTypes.NEW_ITEM:
      return {
        ...state,
        editItem: action.payload.editItem,
      };

    default:
      return state;
  }
}

export function isLoadingReducer(state = false, action) {
  switch (action.type) {
    case actionTypes.FETCH_CONTACTS_REQUEST:
      return { ...state, state: true };
    case actionTypes.FETCH_CONTACTS_SUCCESS:
      return { ...state, state: false };
    case actionTypes.FETCH_CONTACTS_ERROR:
      return { ...state, state: false };
    case actionTypes.ADD_CONTACT_REQUEST:
      return { ...state, state: true };
    case actionTypes.ADD_CONTACT_SUCCESS:
      return { ...state, state: false };
    case actionTypes.ADD_CONTACT_ERROR:
      return { ...state, state: false };
    case actionTypes.DELETE_CONTACT_REQUEST:
      return { ...state, state: true };
    case actionTypes.DELETE_CONTACT_SUCCESS:
      return { ...state, state: false };
    case actionTypes.DELETE_CONTACT_ERROR:
      return { ...state, state: false };
    case actionTypes.EDIT_CONTACT_REQUEST:
      return { ...state, state: true };
    case actionTypes.EDIT_CONTACT_SUCCESS:
      return { ...state, state: false };
    case actionTypes.EDIT_CONTACT_ERROR:
      return { ...state, state: false };

    default:
      return state;
  }
}

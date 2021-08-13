/** @format */

import './App.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Section, ContactForm, ContactList, Filter, EditForm, Loader } from './components';
import { selContacts, selIsLoading, selModal } from './services/contacts/selectors';
import { fetchContacts } from './services/operations';

function App() {
  const contacts = useSelector(selContacts);
  const modal = useSelector(selModal);
  const dispatch = useDispatch();
  const isLoading = useSelector(selIsLoading);
  console.log(isLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {isLoading && <Loader />}
        {contacts.length > 1 && <Filter />}
        {contacts.length > 0 ? <ContactList /> : <p>Your phonebook is empty. Please add contact.</p>}
        {modal && <EditForm />}
      </Section>
    </>
  );
}

export default App;

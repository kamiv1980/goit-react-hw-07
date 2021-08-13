/** @format */

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './styles.module.css';
import { newModal } from '../../services/contacts/actions';
import { selEditContact } from '../../services/contacts/selectors';
import { editContact } from '../../services/operations';

const Input = ({ label, type, name, value, onChange, title, required }) => {
  return (
    <label className={styles.label}>
      {label}:
      <input
        className={styles.input}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        title={title}
        required={required}
      />
    </label>
  );
};

export const EditForm = () => {
  const item = useSelector(selEditContact);
  const [name, setName] = useState(item.name);
  const [number, setNumber] = useState(item.number);
  const dispatch = useDispatch();
  const onEditContact = (id, name, number) => dispatch(editContact(id, name, number));

  const nameTitle =
    "Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п.";
  const numberTitle =
    'Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +';

  const handleName = ({ currentTarget: { value } }) => setName(value);
  const handleNumber = ({ currentTarget: { value } }) => setNumber(value);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onEditContact(item.id, name, number);
    dispatch(newModal(false));
  };
  const handleCancel = () => dispatch(newModal(false));

  return (
    <form onSubmit={handleSubmit} className={styles.modal}>
      <Input value={name} label="Name" type="text" name="name" title={nameTitle} required onChange={handleName} />
      <Input
        value={number}
        label="Number"
        type="tel"
        name="number"
        title={numberTitle}
        required
        onChange={handleNumber}
      />
      <button type="submit">Ok</button>
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
};

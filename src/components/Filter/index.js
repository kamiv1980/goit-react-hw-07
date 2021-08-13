/** @format */

import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { newFilter } from '../../services/contacts/actions';
import debounce from 'lodash.debounce';
import { useRef } from 'react';

export function Filter() {
  const dispatch = useDispatch();

  const onChangeFilter = debounce((value) => dispatch(newFilter(value)), 500);
  const onChange = ({ target }) => onChangeFilter(target.value);
  const input = useRef(null);

  return (
    <label className={styles.label}>
      Find contacts by name:
      <input className={styles.input} type="text" ref={input} onChange={onChange} />
    </label>
  );
}

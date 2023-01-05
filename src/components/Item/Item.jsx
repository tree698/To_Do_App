import React from 'react';
import { BsTrash } from 'react-icons/bs';
import styles from './Item.module.css';

export default function Item({ todo, onDelete, onUpdate }) {
  const { text, status } = todo;
  const handleUpdate = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };
  const handleDelete = (e) => onDelete(todo);

  return (
    <li className={styles.item}>
      <div>
        <input
          type="checkbox"
          id="text"
          checked={status === 'completed'}
          onChange={handleUpdate}
          className={styles.input}
        />
        <label htmlFor="text">{text}</label>
      </div>
      <button onClick={handleDelete}>
        <BsTrash className={styles.trashIcon} />
      </button>
    </li>
  );
}

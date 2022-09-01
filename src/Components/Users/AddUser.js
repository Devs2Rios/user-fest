import { useState } from 'react';

import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';

export default function AddUser(props) {
  // States
  const [username, setUsername] = useState(''),
    [age, setAge] = useState(''),
    [error, setError] = useState('');
  // Handlers
  const userHandler = e => {
      setUsername(e.target.value);
    },
    ageHandler = e => {
      setAge(+e.target.value);
    },
    addUserHandler = e => {
      e.preventDefault();
      if (username.trim().length > 0 && age > 0) {
        const id = `u${`${props.users.length}`.padStart(3, 0)}`;
        props.onAddUser({ id, username, age });
        setError(false);
      } else if (username.trim().length === 0 && age === '') {
        setError({ title: 'Input Error', message: 'Check your values' });
      } else if (age < 0 || age === '') {
        setError({ title: 'Age Error', message: 'You need an age > 0' });
      } else if (username.trim().length === 0 || username === '') {
        setError({
          title: 'Username Error',
          message: 'Enter a valid username',
        });
      }
      setUsername('');
      setAge('');
    },
    modalHandler = e => {
      setError('');
    };
  // Component
  return (
    <div>
      {error ? (
        <ErrorModal
          title={error.title}
          message={error.message}
          modalHandler={modalHandler}
        />
      ) : (
        ''
      )}
      <Card className={error ? 'error' : ''}>
        <header>
          <h1>User Fest</h1>
        </header>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            value={username}
            onChange={userHandler}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input id='age' type='number' value={age} onChange={ageHandler} />
          <Button type='submit'>Submit</Button>
        </form>
      </Card>
    </div>
  );
}

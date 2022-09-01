import { useState } from 'react';
import AddUser from '../Users/AddUser';
import UsersList from '../Users/UsersList';

const mockUsers = [{ id: 'u000', username: 'first-user', age: 10 }],
  debug = false;

export default function App() {
  const [users, setUsers] = useState(debug ? [...mockUsers] : []);

  const onAddUser = newUser => {
    setUsers(prevUsers => [newUser, ...prevUsers]);
  };

  return (
    <div className='App'>
      <AddUser users={users} onAddUser={onAddUser} />
      <UsersList users={users} />
    </div>
  );
}

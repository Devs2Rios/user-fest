import Card from '../UI/Card';
import style from '../UI/Card.module.css';

export default function UsersList(props) {
  return (
    <Card className={style.users}>
      {props.users.map(user => (
        <p key={user.id}>{`${user.username} (${user.age} years old)`}</p>
      ))}
    </Card>
  );
}

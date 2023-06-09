import Card from '../UI/Card';
import style from './UsersList.module.css';

export default function UsersList({ users }) {
  return (
    <Card className={style.users}>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}
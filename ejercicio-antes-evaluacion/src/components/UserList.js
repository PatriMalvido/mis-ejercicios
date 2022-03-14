import User from './User';

const UserList = (props) => {
  const userElements = props.users.map((user) => {
    return (
      <li key={user.id} className="card">
        <User key={user.id} user={user} />
      </li>
    );
  });

  return (
    <main className='cards__main'>
    <section className="cards_section">
      <ul className="cards">
        {userElements}
      </ul>
    </section>
    </main>
  );
};
export default UserList;

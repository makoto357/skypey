import './Sidebar.css';
import User from '../../containers/User';

function Sidebar({contacts}) {
  return (
    <aside className="Sidebar">
      {contacts.map(contact => (
        <User user={contact} key={contact.user_id} />
      ))}
    </aside>
  );
}

export default Sidebar;

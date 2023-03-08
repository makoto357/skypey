import './User.css';
import store from '../../store';
import {setActiveUserId} from '../../actions';
import temporaryAvatar from '../../moon.jpeg';

function User({user}) {
  const {name, profile_pic, status} = user;
  const handleUserClick = ({user_id}) => {
    store.dispatch(setActiveUserId(user_id));
  };
  return (
    <div className="User" onClick={handleUserClick.bind(null, user)}>
      <img src={temporaryAvatar} alt={name} className="User__pic" />
      <div className="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>
    </div>
  );
}

export default User;

import './Empty.css';
import temporaryAvatar from '../../moon.jpeg';

function Empty({user, activeUserId}) {
  const {name, profile_pic, status} = user;
  const first_name = name.split(' ')[0];
  return (
    <div className="Empty">
      <h1 className="Empty__name">Welcome, {first_name} </h1>
      <div
        style={{
          backgroundImage: `url(${temporaryAvatar})`,
          width: `350px`,
          height: `350px`,
          backgroundSize: `cover`,
          borderRadius: '50%',
        }}
      >
        {/* <img src={temporaryAvatar} alt={name} className="Empty__img" /> */}
      </div>
      <p className="Empty__status">
        <b>Status:</b> {status}
      </p>
      <button className="Empty__btn">Start a conversation</button>
      <p className="Empty__info">
        Search for someone to start chatting with or go to Contacts to see who is available
      </p>
    </div>
  );
}

export default Empty;

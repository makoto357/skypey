import './ChatWindow.css';
import store from '../../store';

const Header = ({user}) => {
  const {name, status} = user;
  return (
    <header className="Header">
      <h1 className="Header__name">{name}</h1>
      <p className="Header__status">{status}</p>
    </header>
  );
};

const Chats = () => {
  return <div>chats</div>;
};
const MessageInput = () => {
  return <div>MessageInput</div>;
};

function ChatWindow({activeUserId}) {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  console.log(state);
  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats />
      <MessageInput />
    </div>
  );
}

export default ChatWindow;

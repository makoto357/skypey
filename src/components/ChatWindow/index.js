import Chats from '../Chats';
import './ChatWindow.css';
import store from '../../store';
import _ from 'lodash';

const Header = ({user}) => {
  const {name, status} = user;
  return (
    <header className="Header">
      <h1 className="Header__name">{name}</h1>
      <p className="Header__status">{status}</p>
    </header>
  );
};

const MessageInput = () => {
  return <div>MessageInput</div>;
};

function ChatWindow({activeUserId}) {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeUserMessages = _.values(state.messages[activeUserId]);
  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={activeUserMessages} />
      <MessageInput />
    </div>
  );
}

export default ChatWindow;

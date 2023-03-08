import Chats from '../../components/Chats';
import MessageInput from '../MessageInput';
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

function ChatWindow({activeUserId}) {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeUserMessages = _.values(state.messages[activeUserId]);
  const inputValue = state.typing;
  console.log(state.typing, state);
  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={activeUserMessages} />
      <MessageInput value={inputValue} />
    </div>
  );
}

export default ChatWindow;

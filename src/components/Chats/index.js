import './Chats.css';
import {useEffect, useRef} from 'react';

const Chat = ({message}) => {
  const {text, is_user_msg} = message;
  return <span className={`Chat ${is_user_msg ? 'is-user-msg' : ''}`}>{text}</span>;
};

const Chats = ({messages}) => {
  const chatsRef = useRef(null);
  const scrollToBottom = () => {
    chatsRef.current.scrollTop = chatsRef.current.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <div className="Chats" ref={chatsRef}>
      {messages.map(message => (
        <Chat message={message} key={message.number} />
      ))}
    </div>
  );
};

export default Chats;

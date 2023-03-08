import './MessageInput.css';
import store from '../../store';
import {setTypingValue, setMessage} from '../../actions';
const MessageInput = ({value}) => {
  const state = store.getState();
  const {activeUserId, typing} = state;
  const handleSubmit = e => {
    e.preventDefault();
    store.dispatch(setMessage(activeUserId, typing));
  };
  const handleChange = e => {
    store.dispatch(setTypingValue(e.target.value));
  };
  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        className="Message__input"
        value={value}
        onChange={handleChange}
        placeholder="write a message"
      />
    </form>
  );
};

export default MessageInput;

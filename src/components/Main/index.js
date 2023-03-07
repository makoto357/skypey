import './Main.css';
import Empty from '../Empty';
import ChatWindow from '../ChatWindow';
function Main({user, activeUserId}) {
  return (
    <div className="Main">
      {activeUserId ? (
        <ChatWindow activeUserId={activeUserId} />
      ) : (
        <Empty user={user} activeUserId={activeUserId} />
      )}
    </div>
  );
}

export default Main;

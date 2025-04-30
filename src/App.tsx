import Message from './Message';

function App() {
  const messageText = "Привет, это мое React-приложение!";
  return (
    <div>
      <Message text={messageText} />
    </div>
  );
}

export default App;
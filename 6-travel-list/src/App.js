export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <States />
    </div>
  );
}

function Logo() {
  return <h1>🌴Far Away 👜</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your 😍trip?</h3>
    </div>
  );
}
function PackingList() {
  return <div className="List"></div>;
}
function States() {
  return (
    <footer>
      You have X items on your list, and you already packed X (X%)
    </footer>
  );
}

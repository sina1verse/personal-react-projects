export default function App() {
  return (
    <>
      <Step />
      <Count />
      <DateString />
    </>
  );
}

function Step() {
  return (
    <div className="container">
      <button>-</button>
      <p>Step: 1</p>
      <button>+</button>
    </div>
  );
}

function Count() {
  return (
    <div className="container">
      <button>-</button>
      <p>Count: 1</p>
      <button>+</button>
    </div>
  );
}

function DateString() {
  const date = new Date().toDateString();
  return (
    <div className="container">
      <p>{`${date}`}</p>
    </div>
  );
}

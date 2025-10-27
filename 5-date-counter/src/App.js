import { useState } from "react";

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
  const [step, setStep] = useState(1);
  return (
    <div className="container">
      <button onClick={() => setStep(() => step - 1)}>-</button>
      <p>Step: {step}</p>
      <button onClick={() => setStep(() => step + 1)}>+</button>
    </div>
  );
}

function Count() {
  const [count, setCount] = useState(1);
  return (
    <div className="container">
      <button onClick={() => setCount(() => count - 1)}>-</button>
      <p>Count: {count}</p>
      <button onClick={() => setCount(() => count + 1)}>+</button>
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

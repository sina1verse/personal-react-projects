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

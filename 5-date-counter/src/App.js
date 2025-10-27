import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  return (
    <>
      <Step step={step} setStep={setStep} />
      <Count step={step} />
      <DateString />
    </>
  );
}

function Step({ step, setStep }) {
  return (
    <div className="container">
      <button onClick={() => setStep(() => (step > 0 ? step - 1 : step))}>
        -
      </button>
      <p>Step: {step}</p>
      <button onClick={() => setStep(() => step + 1)}>+</button>
    </div>
  );
}

function Count({ step }) {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <button onClick={() => setCount(() => count - step)}>-</button>
      <p>Count: {count}</p>
      <button onClick={() => setCount(() => count + step)}>+</button>
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

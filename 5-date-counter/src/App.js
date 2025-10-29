import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <>
      <Step step={step} setStep={setStep} />
      <Count step={step} count={count} setCount={setCount} />
      <DateString count={count} />
    </>
  );
}

function Step({ step, setStep }) {
  return (
    <div className="container">
      <input
        type="range"
        min={1}
        max={10}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <span id="step">{step}</span>
    </div>
  );
}

function Count({ step, count, setCount }) {
  return (
    <div className="container">
      <button onClick={() => setCount((count) => count - step)}>-</button>
      <p>Count: {count}</p>
      <button onClick={() => setCount((count) => count + step)}>+</button>
    </div>
  );
}

function DateString({ count }) {
  const date = new Date(
    Date.now() + count * 24 * 60 * 60 * 1000
  ).toDateString();
  let statement;
  if (count > 0) {
    statement = `${count} days from today is ${date}`;
  } else if (count < 0) {
    statement = `${Math.abs(count)} days ago was ${date}`;
  } else statement = `Today is ${date}`;
  return (
    <div className="container">
      <p>{statement}</p>
    </div>
  );
}

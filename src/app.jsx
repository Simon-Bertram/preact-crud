import { useState } from "preact/hooks";
import "./app.css";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="card container mx-auto mt-7">
        <button
          className="bg-slate-500 rounded-lg p-3 text-white shadow-md"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
    </>
  );
}

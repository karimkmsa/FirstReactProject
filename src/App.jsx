import { useState } from "react";

function App() {
  // const [counter, setCounter] = useState(0);

  // function increment() {
  //   setCounter(counter + 1);
  // }

  // function decrement() {
  //   if (counter > 0) {
  //     setCounter(counter - 1);
  //   }
  // }

  const [theme, setTheme] = useState(false);

  return (
    // <section className="flex gap-3 items-center justify-center p-4">
    //   <button
    //     onClick={increment}
    //     className="bg-blue-500 p-3 text-white text-3xl cursor-pointer"
    //   >
    //     +
    //   </button>

    //   <p className="text-4xl">{counter}</p>

    //   <button
    //     onClick={decrement}
    //     className="bg-blue-500 p-3 text-white text-3xl cursor-pointer disabled:bg-gray-500"
    //     id="minus"
    //     disabled={counter === 0}
    //   >
    //     -
    //   </button>
    // </section>
    <section
      className={`${theme? "bg-red-500" : "bg-green-500"}`}
      onClick={() => setTheme(!theme)}
    >
      g
    </section>
  );
}

export default App;

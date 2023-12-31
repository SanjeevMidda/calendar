import "./index.css";
import Month from "./components/Month";
import { useEffect, useState } from "react";

function App() {
  let noOfDays = 28;
  let months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  const [month, setMonth] = useState(months);
  const [counter, setCounter] = useState(0);

  let daysToAdd = [
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28,
    ],
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30,
    ],
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ],
  ];

  noOfDays = [daysToAdd[1]];

  useEffect(() => {
    if (counter < 0) {
      setCounter(0);
    }

    if (counter > 11) {
      setCounter(11);
    }
  }, [counter]);
  console.log(counter);

  if (counter === 1) {
    noOfDays = [daysToAdd[0]];
  } else if (
    counter === 3 ||
    counter === 5 ||
    counter === 8 ||
    counter === 10
  ) {
    noOfDays = [daysToAdd[1]];
  } else {
    noOfDays = [daysToAdd[2]];
  }

  return (
    <div className="App">
      <div className="mainContainer">
        <header>
          <div className="dot"></div>

          <h1>{month[counter]}</h1>
        </header>

        {<Month noOfDays={noOfDays} />}

        <h2
          className="lastMonth"
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          PREVIOUS
        </h2>
        <h2
          className="nextMonth"
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          NEXT
        </h2>
      </div>
    </div>
  );
}

export default App;

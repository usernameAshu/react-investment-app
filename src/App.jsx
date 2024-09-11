import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  /**
   * To improve app performance by delaying the onChange collection
   * thus, reducing frequent state update
   */
  const [timeoutId, setTimeoutId] = useState(null);

  const [processResults, setProcessResults] = useState(false);

  //manage state of User input
  const [userInput, setUserInput] = useState({
    initialInvestment: 100,
    annualInvestment: 10000,
    duration: 10,
    expectedReturn: 8,
  });

  //separate state for Page value, since this will update instantly on page,
  //as soon as user types, but updating the userInput state will happen in a delay
  const [pageValue, setPageValue] = useState({
    initialInvestment: 100,
    annualInvestment: 10000,
    duration: 10,
    expectedReturn: 8,
  });

  const { initialInvestment, annualInvestment, duration, expectedReturn } =
    userInput;
  const isInputValid =
    duration > 0 &&
    expectedReturn > 0 &&
    initialInvestment >= 0 &&
    annualInvestment >= 0;

  function handleOnInputChange(inputIdentifier, newValue) {
    setProcessResults((prevVal) => false);
    console.log("------------Entering App Component--------------");
    setPageValue((prevPageVal) => {
      return {
        ...prevPageVal,
        [inputIdentifier]: newValue,
      };
    });

    console.log(`Timeout set for ${timeoutId} millis`);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(() => {
      setUserInput((prevUserInput) => {
        return {
          ...prevUserInput,
          [inputIdentifier]: +newValue,
        };
      });
      console.log(
        `New state for ${inputIdentifier} is ${newValue ? newValue : 0}`
      );
      setProcessResults((prevVal) => true);
    }, 1000);

    setTimeoutId((prevTimeoutId) => newTimeoutId);
  }

  console.log("------------Rendering App Component--------------");
  return (
    <>
      <Header />
      <UserInput onInputChange={handleOnInputChange} userInput={pageValue} />
      {processResults && isInputValid && <Results input={userInput} />}
      {!isInputValid && <p>Invalid Input, please check the inputs</p>}
    </>
  );
}

export default App;

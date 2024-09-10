import { useState } from "react";

const USER_INPUT_TYPES = {
  INITIAL_INVESTMENT: "initialInvestment",
  ANNUAL_INVESTMENT: "annualInvestment",
  DURATION: "duration",
  RATE_OF_RETURN: "return",
};

export default function UserInput() {

  /**
   * To improve app performance by delaying the onChange collection
   * thus, reducing frequent state update
  */
  const[timeoutId, setTimeoutId] = useState(null);

  //manage state of User input
  const [userInput, setUserInput] = useState({
    initialInvestment: 100,
    annualInvestment: 10000,
    duration: 10,
    return: 8,
  });

  function handleOnInputChange(inputIdentifier, newValue) {
    console.log(`Timeout set for ${timeoutId} millis`);
    
    if(timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(() => {
      setUserInput((prevUserInput) => {
        return {
          ...prevUserInput,
          [inputIdentifier]: newValue,
        };
      });
      console.log(`new inputs for ${inputIdentifier} is ${newValue}`);
      //console.log(`prev state:`, ...UserInput);
    }, 1000);

    setTimeoutId(prevTimeoutId => newTimeoutId);
    
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial investment</label>
          <input
            type="number"
            required
            onChange={(event) =>
              handleOnInputChange(
                USER_INPUT_TYPES.ANNUAL_INVESTMENT,
                event.target.value
              )
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            onChange={(event) =>
              handleOnInputChange(
                USER_INPUT_TYPES.ANNUAL_INVESTMENT,
                event.target.value
              )
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            onChange={(event) =>
              handleOnInputChange(USER_INPUT_TYPES.DURATION, event.target.value)
            }
          />
        </p>
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            onChange={(event) =>
              handleOnInputChange(
                USER_INPUT_TYPES.RATE_OF_RETURN,
                event.target.value
              )
            }
          />
        </p>
      </div>
    </section>
  );
}

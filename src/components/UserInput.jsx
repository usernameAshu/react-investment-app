import { USER_INPUT_TYPES } from "../util/constants";

export default function UserInput({ onInputChange, userInput }) {
  console.log("------------Rendering UserInput Component--------------");
  console.log(userInput);

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onInputChange(
                USER_INPUT_TYPES.INITIAL_INVESTMENT,
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
            value={userInput.annualInvestment}
            onChange={(event) =>
              onInputChange(
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
            value={userInput.duration}
            onChange={(event) =>
              onInputChange(USER_INPUT_TYPES.DURATION, event.target.value)
            }
          />
        </p>
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onInputChange(USER_INPUT_TYPES.RATE_OF_RETURN, event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
}

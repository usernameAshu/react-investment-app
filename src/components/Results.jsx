import { calculateInvestmentResults, formatter } from "../util/investment";
// import { RESULT_HEADER_VALUES } from "../util/constants";

export default function Results({ input }) {
  console.log("------------Rendering Results Component--------------");
  console.log(input);

  const portfolioData = calculateInvestmentResults(input);

  console.log(portfolioData);

  const RESULT_HEADER_VALUES = [
    "Year",
    "Investment Value",
    "Interest (Year)",
    "Total Interest",
    "Invested Capital",
  ];

  // annualData.push({
  //   year: i + 1, // year identifier
  //   interest: interestEarnedInYear, // the amount of interest earned in this year
  //   valueEndOfYear: investmentValue, // investment value at end of year
  //   annualInvestment: annualInvestment, // investment added in this year
  // });

  return (
    <table id="result">
      <thead>
        <tr key="header-result">
          <th>{RESULT_HEADER_VALUES[0]}</th>
          <th>{RESULT_HEADER_VALUES[1]}</th>
          <th>{RESULT_HEADER_VALUES[2]}</th>
          <th>{RESULT_HEADER_VALUES[3]}</th>
          <th>{RESULT_HEADER_VALUES[4]}</th>
        </tr>
      </thead>
      <tbody>
        {portfolioData.map((annualData) => {
          return (
            <tr key={annualData.year}>
              <td>{annualData.year}</td>
              <td>{formatter.format(annualData.valueEndOfYear)}</td>
              <td>{formatter.format(annualData.interest)}</td>
              <td>
                {formatter.format(
                  annualData.valueEndOfYear -
                    annualData.annualInvestment * annualData.year -
                    input.initialInvestment
                )}
              </td>
              <td>
                {formatter.format(
                  input.initialInvestment +
                    annualData.annualInvestment * annualData.year
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

import { calculateInvestmentResults } from "../util/investment";

export default function Results({ input }) {
  console.log("------------Rendering Results Component--------------");
  console.log(input);

  const annualData = calculateInvestmentResults(input);
  const headerValues = [
    "year",
    "interest",
    "valueEndOfYear",
    "annualInvestment",
  ];
  console.log(annualData);

  return (
    <div id="result">
      <p>Result</p>
    </div>
  );
}

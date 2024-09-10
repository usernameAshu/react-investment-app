import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="Bag of dollars" />
      <h1>Investment Calculator</h1>
    </header>
  );
}

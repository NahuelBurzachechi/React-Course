import Expenses from "./components/Expenses/Expenses";


function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2021, 2, 28),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2022, 1, 10) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 2, 15),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2022, 1, 7),
    },
  ];

  return (
    <div>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

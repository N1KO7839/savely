import { useState } from "react";
import Navbar from "./components/Navbar";
import Informations from "./components/ExpenseInformations";
import MonthlyChart from "./components/MonthlyChart";
import AddExpense from "./components/AddExpense";
import ExpenseCategories from "./components/ExpenseCategories";
import RecentTransactions from "./components/RecentTransactions";
import Footer from "./components/Footer";

function Home() {
  const [showed, setShowed] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar setShowed={setShowed} />
      <div className="flex-grow">
        <Informations />
        <MonthlyChart />
        {showed && <AddExpense hideExpenseForm={() => setShowed(false)} />} {/* Conditionally render AddExpense */}
        <ExpenseCategories />
        <RecentTransactions />
      </div>
      <Footer />
    </div>
  );
}

export default Home;

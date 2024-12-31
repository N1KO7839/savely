import Navbar from "./components/Navbar";
import Informations from "./components/ExpenseInformations";
import MonthlyChart from "./components/MonthlyChart";
import ExpenseCategories from "./components/ExpenseCategories";
import RecentTransactions from "./components/RecentTransactions";
import Footer from "./components/Footer";
function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Informations />
        <MonthlyChart />
        <ExpenseCategories />
        <RecentTransactions />
      </div>
      <Footer />
    </div>
  );
}

export default Home;

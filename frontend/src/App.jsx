import Navbar from "./components/Navbar"
import Informations from "./components/ExpenseInformations"
import ExpenseCategories from "./components/ExpenseCategories"
import RecentTransactions from "./components/RecentTransactions"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Informations />
        <ExpenseCategories />
        <RecentTransactions />
      </div>
      <Footer />
    </div>
  )
}

export default App

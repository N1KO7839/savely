import Navbar from "./components/Navbar"
import Informations from "./components/ExpenseInformations"
import ExpenseCategories from "./components/ExpenseCategories"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Informations />
        <ExpenseCategories />
      </div>
      <Footer />
    </div>
  )
}

export default App

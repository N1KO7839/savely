import InformationsCard from "./InformationsCard";
function Informations() {
  return (
    <div className="flex flex-col md:flex-row  justify-center">
      <InformationsCard title={"Total Expense"} icon={"./src/assets/trend.png"} value={2459.50}/>
      <InformationsCard title={"Monthly Budget"} icon={"./src/assets/piggy-bank.png"} value={2459.50}/>
      <InformationsCard title={"Saving Goal"} icon={"./src/assets/target.png"} value={2459.50}/>
    </div>
  );
}

export default Informations;

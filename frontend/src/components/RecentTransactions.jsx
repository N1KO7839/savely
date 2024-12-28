import Transaction from "./Transaction";
import Button from "./Button";
function RecentTransactions() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center m-4 p-3 py-6 mobileS:min-w-mobileS mobileM:min-w-mobileM mobileL:min-w-mobileL tablet:min-w-tablet lg:min-w-lg xl:min-w-xl xl:w-4/5 2xl:w-full bg-[#1f2937] rounded-lg">
        <div className="flex flex-col tablet:flex-row items-center justify-between text-center w-full px-12 2xl:px-20">
          <h1 className="text-2xl pb-4 font-Overpass font-bold text-[#8f949b]">
            Recent Transactions
          </h1>
          <Button text={"View All"} onClick={() => {alert("asd")}}/>
        </div>
        <Transaction
          transaction={"Groceries"}
          amount={"$" + (15.99).toFixed(2)}
        />
        <Transaction transaction={"Food"} amount={"$" + (450.0).toFixed(2)} />
        <Transaction
          transaction={"Transportation"}
          amount={"$" + (350.0).toFixed(2)}
        />
      </div>
    </div>
  );
}

export default RecentTransactions;

import Category from "./Category";
function ExpenseCategories() {
    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center m-4 p-3 py-6 mobileS:min-w-mobileS mobileM:min-w-mobileM mobileL:min-w-mobileL tablet:min-w-tablet lg:min-w-lg xl:min-w-xl xl:w-4/5 2xl:w-full bg-[#1f2937] rounded-lg">

                <h1 className="text-2xl pb-4 font-Overpass font-bold text-[#8f949b]">Expense Categories</h1>
                <Category category={"Housing"} amount={"$" + (1000.00).toFixed(2)} />
                <Category category={"Food"} amount={"$" + (450.00).toFixed(2)} />
                <Category category={"Transportation"} amount={"$" + (350.00).toFixed(2)} />
                <Category category={"Other"} amount={"$" + (1350.00).toFixed(2)} />
            </div>
        </div>
    );
}

export default ExpenseCategories;
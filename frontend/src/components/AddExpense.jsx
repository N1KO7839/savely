import React, { useEffect } from "react";

const AddExpense = ({ hideExpenseForm }) => {
  useEffect(() => {
    const dateInput = document.getElementById("date");
    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    function formatDate(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }

    if (dateInput) {
      dateInput.min = formatDate(firstDayOfMonth);
      dateInput.max = formatDate(today);
    }
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-[#1f2937] w-full max-w-md p-6 rounded-lg flex flex-col text-center items-center justify-center relative shadow-lg">
        <button
          onClick={hideExpenseForm}
          className="absolute top-3 right-4 text-red-600 text-2xl font-bold p-0.5 px-2.5 hover:bg-[#11171f] rounded-md transition-colors duration-300"
        >
          X
        </button>
        <h1 className="text-white text-2xl font-Overpass font-bold mb-4">Add Expense</h1>
        <div className="w-full flex flex-col items-center gap-4">
          <input className="text-white text-center w-full bg-transparent border border-[#777F8B] py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="expenseTitle" id="expenseTitle" maxLength={30} placeholder="Enter expense title" />
          <input className="text-white text-center w-full bg-transparent border border-[#777F8B] py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" type="number" name="expenseAmount" id="expenseAmount" maxLength={9} placeholder="Enter expense amount" />
          <label
            class="text-white text-base pb-1 mt-1 block"
            for="category"
            >Category</label>
          <select
            class="border rounded-lg text-center py-2 mb-1 text-sm w-full bg-gray-800 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            id="Category"
          >
            <option value="houisng">Houisng</option>
            <option value="food">Food</option>
            <option value="transportation">Transportation</option>
            <option value="other">Other</option>
          </select>
        </div>
        
          
        

        <label htmlFor="date" className="text-white text-base mt-4">
          Expense Date:
        </label>
        <input
          type="date"
          id="date"
          className="mt-2 p-1.5 w-full rounded-md border border-gray-300 bg-[#1f2937] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{ colorScheme: "dark" }}
        ></input>
        <button className="font-SignikaNegative font-medium text-xs mobileL:text-sm lg:text-lg text-white w-full h-10 mt-7 rounded-lg border-2 border-[#727eeb] bg-[#727eeb] hover:bg-transparent transition-all duration-300">
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default AddExpense;

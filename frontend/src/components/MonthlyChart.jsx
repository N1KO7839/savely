'use client';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
//it will be replaced with data from the database
const days = [
    { day: 1, amount: 535 },
    { day: 2, amount: 532 },
    { day: 3, amount: 158 },
    { day: 4, amount: 307 },
    { day: 5, amount: 561 },
    { day: 6, amount: 126 },
    { day: 7, amount: 707 },
    { day: 8, amount: 314 },
    { day: 9, amount: 306 },
    { day: 10, amount: 527 },
    { day: 11, amount: 625 },
    { day: 12, amount: 673 },
    { day: 13, amount: 633 },
    { day: 14, amount: 178 },
    { day: 15, amount: 72 },
    { day: 16, amount: 472 },
    { day: 17, amount: 562 },
    { day: 18, amount: 238 },
    { day: 19, amount: 364 },
    { day: 20, amount: 163 },
    { day: 21, amount: 583 },
    { day: 22, amount: 611 },
    { day: 23, amount: 522 },
    { day: 24, amount: 698 },
    { day: 25, amount: 488 },
    { day: 26, amount: 658 },
    { day: 27, amount: 653 },
    { day: 28, amount: 69 },
    { day: 29, amount: 574 },
    { day: 30, amount: 331 },
    { day: 31, amount: 0 },
];


function MonthlyChart() {
    return ( 
        <div>
            <div className="flex flex-col items-center justify-center text-center mt-8">
                <h1 className="font-Overpass font-bold text-xl text-white/50 ">Expense Trends</h1>
                <p className="font-SignikaNegative font-normal text-base text-[#565c65]">Current Month</p>
            </div>
            {/* Chart container */}
            <div className="flex justify-center w-full">
                <ResponsiveContainer width="95%" height={400}>
                    <AreaChart data={days}>
                        {/* Gradient definition for the area fill */}
                        <defs>
                            <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="day" stroke="#ccc" />
                        <YAxis stroke="#ccc" />
                        {/* Grid lines configuration */}
                        <CartesianGrid stroke='#fff' opacity={0.2} strokeDasharray="6 6" />
                        <Tooltip />
                        {/* Area chart configuration */}
                        <Area type="monotone" dataKey="amount" stroke="#8884d8" fillOpacity={1} fill="url(#colorAmount)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default MonthlyChart;
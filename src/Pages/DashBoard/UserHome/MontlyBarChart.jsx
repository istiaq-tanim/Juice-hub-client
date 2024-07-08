import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

const MonthlyBarChart = ({ data }) => {
      return (
            <div>
                  <h2 className="text-center py-5 font-semibold text-xl">Monthly Payment Amounts</h2>
                  <BarChart
                        width={800}
                        height={400}
                        data={data}
                        margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
                  >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="monthYear" />
                        <YAxis />
                        <Tooltip />
                        <Legend />

                        <Bar dataKey="totalAmount" fill="#8884d8" barSize={30} />
                  </BarChart>
            </div>
      );
};

export default MonthlyBarChart;
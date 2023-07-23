import { useContext, useEffect, useState } from "react";
import { FaCarSide, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie,  ResponsiveContainer, Legend } from 'recharts';
import { UserContext } from "../../../Provider/AuthProvider";


const AdminHome = () => {
    const [stat, setStat] = useState([])
    const [chartData, setChartData] = useState([])
    const {user}=useContext(UserContext)
    useEffect(() => {
        fetch("https://juice-hub-server.vercel.app/adminHome")
            .then(res => res.json())
            .then(data => setStat(data))
    }, [])

    useEffect(() => {
        fetch("https://juice-hub-server.vercel.app/orderStats")
            .then(res => res.json())
            .then(data => setChartData(data))
    }, [])
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <div className="min-w-max mx-auto">
            <h3 className="my-10 text-2xl font-bold">Hi {user.displayName}</h3>

            <div className="stats shadow w-full">
                <div className="stat bg-gradient-to-r flex justify-center items-center from-indigo-500 to-purple-100">
                    <FaWallet className="text-white" size={30}></FaWallet>
                    <div>
                        <p className="stat-title text-center">Revenue</p>
                        <p className="stat-value text-center">${stat.revenue}</p>
                    </div>
                </div>
                <div className="stat bg-gradient-to-r flex justify-center items-center from-green-500 to-red-100">
                    <FaUsers className="text-white" size={30}></FaUsers>
                    <div>
                        <p className="stat-title text-center">Customers</p>
                        <p className="stat-value text-center">{stat.totalCustomers}</p>
                    </div>
                </div>

                <div className="stat bg-gradient-to-r flex justify-center items-center from-pink-500 to-red-100">
                    <FaUtensils className="text-white" size={30}></FaUtensils>
                    <div>
                        <p className="stat-title text-center">Products</p>
                        <p className="stat-value text-center">{stat.products}</p>
                    </div>
                </div>

                <div className="stat bg-gradient-to-r flex justify-center items-center bg-sky-500">
                    <FaCarSide className="text-white" size={30}></FaCarSide>
                    <div>
                        <p className="stat-title text-center">Orders</p>
                        <p className="stat-value text-center">{stat.orders}</p>
                    </div>
                </div>

            </div>

            <div className="flex my-10 gap-5">
                <div className="w-1/2">
                 
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="total" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>

                <div className="w-1/2">
                
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                        <Legend></Legend>
                            <Pie
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={90}
                                fill="#8884d8"
                                dataKey="count"
                            >
                                {chartData.map((entry, index) => (
                                    <Cell name={entry.category} key={`cell-${index}`} fill={colors[index % colors.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
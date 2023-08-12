import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../Provider/AuthProvider";
import HistoryRow from "./HistoryRow"

const History = () => {
    const {user}=useContext(UserContext)
    const [history,setHistory]=useState([])
    useEffect(()=>{
        fetch(`https://juice-hub-server.vercel.app/payment/?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setHistory(data))
    },[user.email])
    return (
        <div className="w-4/5 mx-auto">
            <p className="uppercase font-3xl text-center font-bold italic">{user.displayName} ALL Payment</p>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="text-center">
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Date</th>
                         
                        </tr>
                    </thead>
                    <tbody className="text-center">

                        {
                            history.map((item, index) => <HistoryRow key={item._id} index={index} item={item}></HistoryRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default History;
import { useContext } from "react";
import { FaCartPlus, FaStar, FaUserClock, FaWallet } from "react-icons/fa";
import useFetch from "../../../Hooks/useFetch";
import { UserContext } from "../../../Provider/AuthProvider";

const UserHome = () => {
    const { user } = useContext(UserContext)

    const fetchData = useFetch(`http://localhost:5000/userHome/?email=${user.email}`)
    const { reviewCount, cartsCount, paymentCounts, shop } = fetchData
    return (
        <div className="w-full px-10">
            <h3 className="text-3xl text-center my-20 font-sans uppercase text-red-400">Hello {user.displayName}</h3>
            <div className="flex">
                <div className="flex flex-col bg-[#ecb6db] border-r-1 p-5 w-1/2 justify-center items-center">
                    <img src={user.photoURL} className="w-48 rounded-full" alt="" />
                    <h3 className="mt-5 text-3xl">{user.displayName}</h3>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="w-1/2 p-5  bg-[#FEF9C3]">
                    <h3 className="text-2xl text-center font-bold font-serif">Your Activity</h3>
                    <div className="flex justify-start flex-col mt-10">
                        <ul className="w-3/4 mx-auto">
                            <li><p className="flex  items-center gap-2 text-blue-500 font-semibold"><FaCartPlus></FaCartPlus>Shop:  ${shop}</p></li>
                            <li><p className="flex  items-center text-green-500 font-semibold gap-2"><FaStar></FaStar>Reviews: {reviewCount}</p></li>
                            <li><p className="flex  items-center text-orange-500 font-semibold gap-2"><FaWallet></FaWallet>Payment: {paymentCounts}</p></li>
                            <li><p className="flex  items-center gap-2 text-indigo-400 font-semibold"><FaUserClock></FaUserClock>Pending Order: {cartsCount}</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHome;
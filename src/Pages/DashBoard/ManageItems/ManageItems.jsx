import useJuice from "../../../Hooks/useJuice";
import ManageItemsRow from "./ManageItemsRow";

const ManageItems = () => {
    
    const [juice, refetch] = useJuice()
    return (
        <div className="w-full">
            <h3 className="text-center font-bold text-3xl">All Juice Items</h3>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="text-center">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">

                        {
                            juice.map((item, index) => <ManageItemsRow key={item._id} index={index} refetch={refetch} item={item}></ManageItemsRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;
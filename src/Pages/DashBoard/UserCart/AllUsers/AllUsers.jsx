import { useQuery } from "@tanstack/react-query";
import AllUserRow from "./AllUserRow";


const AllUsers = () => {
    const {data : users = [],refetch}=useQuery({
        queryKey:["users"],
        queryFn: async () =>{
            const response=await fetch("https://juice-hub-server.vercel.app/users")
            return response.json()
        }
    })
   
    return (
        <div className="w-full">
            <h3 className="text-center font-bold text-2xl">Total Users {users.length}</h3>
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead className="text-center">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        
                       {
                         users.map((user,index)=> <AllUserRow key={user._id} refetch={refetch} user={user} index={index}></AllUserRow>)
                       }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
import { FaTrash, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUserRow = ({user,index,refetch}) => {
    const { name, email , _id ,role} = user

    const handleAdminRole = (id,name) =>
    {
        fetch(`https://juice-hub-server.vercel.app/users/admin/${id}`,{
            method:"PATCH",
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount)
            {
                refetch()
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `${name} is New Admin`,
                    showConfirmButton: false,
                    timer: 1000
                })
            }
        })
    } 
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://juice-hub-server.vercel.app/users/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount === 1) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'User has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email} </td>
            <td>{role === 'admin' ?  "Admin": <button onClick={() => { handleAdminRole(_id,name) }}><FaUserShield className='mx-auto text-lg'></FaUserShield></button>}</td>
            <td ><button onClick={() => { handleDelete(_id) }}><FaTrash className='mx-auto text-lg'></FaTrash></button></td>
        </tr>
    );
};

export default AllUserRow;
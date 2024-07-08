import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useCart } from '../../../Hooks/usecart';

const UserCartRow = ({ item, index }) => {
    const [, refetch] = useCart()
    const { name, price, image, _id } = item

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
                fetch(`https://juice-hub-server.vercel.app/carts/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount === 1) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
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
            <td><img className="w-16 h-16 mx-auto rounded-full" src={image} /></td>
            <td>$ {price}</td>
            <td ><button onClick={() => { handleDelete(_id) }}><FaTrash className='mx-auto text-lg'></FaTrash></button></td>
        </tr>
    );
};

export default UserCartRow;
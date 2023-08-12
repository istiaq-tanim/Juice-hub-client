

const HistoryRow = ({index,item}) => 
{
    const {email,price,quantity,date}=item
    const formatDate = () =>{
       const dateObj=new Date(date)
       const options = {  day: 'numeric' ,month: 'long', year: "numeric" };
       const finalDate = dateObj.toLocaleDateString(undefined, options);
       return finalDate
    }
    return (
        <tr>
        <th>{index + 1}</th>
        <td>{email}</td>
        <td>{quantity}</td>
        <td>$ {price}</td>
        <td >{formatDate()}</td>
    </tr>
    );
};

export default HistoryRow;
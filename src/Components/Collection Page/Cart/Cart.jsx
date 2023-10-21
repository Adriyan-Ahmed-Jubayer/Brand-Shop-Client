import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const Cart = ({ product }) => {
    const { image, name, brand, type, _id, price } = product;
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to Delete it!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://assignment-10-server-side-j6c21wesb-adriyan.vercel.app/collections/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your product has been deleted.',
                                    'success'
                                )
                            }
                        })
                }
            })
    }
    return (
        <>
            <div className="navbar p-4 border-purple-500 border-2 md:p-8 flex-col md:flex-row  rounded-lg  ">
                <div className="navbar-start justify-center md: md:w-1/3">
                    <img className="h-[120px] md:h-[200px] " src={image} alt="" />
                </div>
                <div className="navbar-center flex-row md:flex-col  items-start md:w-1/3">
                    <p className="text-sm md:text-lg lg:text-xl "> <span className="font-semibold ">Name :</span> {name} </p>
                    <p className="text-sm md:text-lg lg:text-xl"> <span className="font-semibold  ">Brand :</span> {brand} </p>
                    <p className="text-sm md:text-lg lg:text-xl"> <span className="font-semibold  ">Price :</span> ${price} </p>
                    <p className="text-sm md:text-lg lg:text-xl"> <span className="font-semibold  ">Price :</span> {type} </p>
                </div>
                <div className="navbar-end flex-row md:flex-col items-center justify-between md:justify-center gap-4 md:w-1/3">
                    <button className=" p-3 md:px-5 lg:py-4 lg:px-7 bg-purple-500 hover:bg-purple-600 text-white text-sm md:text-base lg:text-lg rounded-md flex items-center font-semibold" onClick={() => handleDelete(_id)}><MdDelete></MdDelete> Delete</button>
                    <Link to={`/update/${_id}`}>
                        <button className="text-xs md:text-sm lg:text-base border-purple-500 border-2 hover:bg-purple-600 p-3 md:px-7 lg:py-4 lg:px-9 rounded-md  hover:text-white font-semibold cursor-pointer">Update</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Cart;
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const CCoffeCard = ({ coffee, coffees, setCoffees}) => {

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handelClick = id => {
        console.log(id)

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

                fetch(`http://localhost:5000/coffee/${_id}`,{
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                            const remaining = coffees.filter(cof => cof._id !== _id)
                            setCoffees(remaining)
                        }
                    })
            }
        })
    }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl p-5">
                <figure><img src={photo} alt="Movie" /></figure>
                <div className="flex justify-between w-full pr-4">
                    <div className="ps-9 pt-4">
                        <h2 className="card-title">Name: {name}</h2>
                        <p>{quantity} pics</p>
                        <p>{supplier}</p>
                        <p>{taste}</p>
                        <p>{category}</p>
                        <p className="text-1xl font-bold">{details}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical space-y-4">
                            <button className="btn">View</button>
                            <Link to={`update/${_id}`}><button className="btn">Edit</button></Link>
                            <button onClick={() => handelClick(_id)} className="btn">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CCoffeCard;
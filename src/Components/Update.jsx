import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {

    const coffee = useLoaderData()
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const updateSubmit = event =>{
        event.preventDefault()

        const form = event.target;
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value

        const updateCoffee  ={name, quantity,supplier,taste,category,details,photo}

        console.log(updateCoffee);


        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateCoffee),
          })
          .then((response) => response.json())

          
          //Then with the data from the response in JSON...
          .then((data) => {
            console.log('success:', data);
            if(data.modifiedCount> 0){
                Swal.fire({
                    title: 'success!',
                    text: 'Your coffee successfully added',
                    icon: 'Success',
                    confirmButtonText: 'Happy!'
                  })
            }
          })
        

        
    }

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold mb-6">Update Coffee: {name}</h2>
            <form onSubmit={updateSubmit}>
                {/* form name and quantity row */}
                <div className="md:flex mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" autoComplete="off" name="name" defaultValue={name} placeholder="Coffee name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Avalilable quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" defaultValue={quantity} placeholder="Available quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supply and test row */}
                <div className="md:flex mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row */}
                <div className="mb-4">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={photo} placeholder="Photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <button className="btn w-full" value='add coffee'>Add Coffee</button>
            </form>
        </div>
    );
};

export default Update;
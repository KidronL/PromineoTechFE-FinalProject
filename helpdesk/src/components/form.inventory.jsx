import React from "react";

//Code for the form to create a new shoe.
export default function ShoeForm({newShoe, setNewShoe, createShoe}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        createShoe();
        setNewShoe({
            name: "",
            model: "",
            brand: "",
            inventory: "",
            price: "",
        });
    };  

    return (
        <div className="container mb-5">
            <form id="form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Shoe Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Shoe Name"
                        value={newShoe.name}
                        onChange={(e) => setNewShoe({...newShoe, name: e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor="model">Model</label>
                    <input
                        type="text"
                        className="form-control"
                        id="model"
                        placeholder="Model"
                        value={newShoe.model}
                        onChange={(e) => setNewShoe({...newShoe, model: e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor="brand">Brand</label>
                    <input
                        type="text"
                        className="form-control"
                        id="brand"
                        placeholder="Brand"
                        value={newShoe.brand}
                        onChange={(e) => setNewShoe({...newShoe, brand: e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor="inventory">Inventory</label>
                    <input
                        type="number"
                        className="form-control"
                        id="inventory"
                        placeholder="Inventory"
                        value={newShoe.inventory}
                        onChange={(e) => setNewShoe({...newShoe, inventory: e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        className="form-control"
                        id="price"
                        placeholder="Price"
                        value={newShoe.price}
                        onChange={(e) => setNewShoe({...newShoe, price: e.target.value})}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    ) 
};
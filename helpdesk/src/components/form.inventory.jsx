import React from "react";

export default function Form({newShoe, setNewShoe, createShoe}) {

    const handleSubmit = () => {
        createShoe();
    };
        

    return <div className="container mb-5">
            <form id="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="shoeName">Shoe Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="shoeName"
                        placeholder="Shoe Name"
                        value={newShoe.shoeName}
                        onChange={(e) => setNewShoe({...newShoe, shoeName: e.target.value})}
                    />
                </div>
                <div className="form-group">
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
                <div className="form-group">
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
                <div className="form-group">
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
                <div className="form-group">
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
                <button type="submit" className="btn btn-primary" onClick={createShoe}>Submit</button>
            </form>
        </div>;
};
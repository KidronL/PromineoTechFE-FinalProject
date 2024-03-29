import React from "react";


export default function InventoryTable({shoes, deleteShoe, updateInventory, setUpdateShoe, updateShoe}) {
    
    //Creating a table to display shoe inventory. Mapping over an array of objects to display each shoe.
    return (
        <div className="container">
            <table className="table table-striped table-hover table-bordered table-respoonsive rounded">
                <thead>
                    <tr>
                        <th>Shoe Name</th>
                        <th>Model</th>
                        <th>Brand</th>
                        <th>Inventory</th>
                        <th>Price</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                        {shoes.map((shoe) => {
                        return (
                            <tr key={shoe.id}>
                                <td>{shoe.name}</td>
                                <td>{shoe.model}</td>
                                <td>{shoe.brand}</td>
                                <td>{shoe.inventory}</td>
                                <td>{shoe.price}</td>
                                <td className="container d-flex flex-row">
                                    <input className="form-control col" type="number" min="0" max="100" placeholder={shoe.inventory} onChange={(e) => setUpdateShoe({...updateShoe, inventory: e.target.value})}/>
                                    <button className="form-control btn-primary btn-sm col" onClick={(e) => updateInventory(shoe.id)}>Update</button>
                                    </td>
                                <td><button className="btn btn-danger" onClick={() => deleteShoe(shoe.id)}>Delete</button></td>
                            </tr> 
                            );
})}
                </tbody>
            </table>
            
        </div>
    );
}
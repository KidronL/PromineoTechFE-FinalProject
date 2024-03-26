import React from "react";
import Inventory from "../routes/inventory/inventory.component";


export default function InventoryTable({shoes, getShoes}) {
    
}

    return (
        <div>
            <table className="table-auto">
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
                        {shoes.map((shoe) => (
                            <tr key={shoe.id}>
                                <td>{shoe.shoeName}</td>
                                <td>{shoe.model}</td>
                                <td>{shoe.brand}</td>
                                <td>{shoe.inventory}</td>
                                <td>{shoe.price}</td>
                                <td><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update</button></td>
                                <td><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button></td>
                            </tr>  
                        ))}
                </tbody>
            </table>
            
        </div>
    );
}
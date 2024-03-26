import React from "react";
import InventoryTable from "../../components/table.inventory";

export default function Inventory () {

    const SHOES_URL = "https://658125763dfdd1b11c427f36.mockapi.io/Shoes";

    const [shoes, setShoes] = useState([
        {
            id: "",
            shoeName: "",
            model: "",
            brand: "",
            inventory: 0,
            price: 0
        }
    ]);

    const [newShoe, setNewShoe] = useState([
        {
            shoeName: "",
            model: "",
            brand: "",
            inventory: 0,
            price: 0
        }
    ]);

    const [updateShoe, setUpdateShoe] = useState({
        inventory:0,
    })

    useEffect(() => {
        fetch(SHOES_URL)
            .then((response) => response.json())
            .then((shoes) => setShoes(shoes));
    }, []);

    const getShoes = () => {
        fetch(SHOES_URL)
            .then((response) => response.json())
            .then((shoes) => setShoes(shoes));
    };

    const deleteShoe = (id) => {
        fetch(`${SHOES_URL}/${id}`, {
            method: "DELETE",
        })
            .then(() => getShoes());
    };

    const createShoe = () => {
        fetch(SHOES_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newShoe),
        })
            .then(() => getShoes());
    };

    const updateInventory = (id) => {
        fetch(`${SHOES_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateShoe),
        })
            .then(() => getShoes());
    };

    return <div>
        <InventoryTable />
        </div>;
};
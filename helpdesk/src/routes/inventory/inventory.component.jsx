import React from "react";
import InventoryTable from "../../components/table.inventory";
import { useState, useEffect } from "react";
import ShoeForm from "../../components/form.inventory";

//Code for inventory
export default function Inventory () {

  const SHOES_URL = "https://658125763dfdd1b11c427f36.mockapi.io/Shoes";

  const [shoes, setShoes] = useState([
      {
          name: '',
          model: '',
          brand: '',
          inventory: 0,
          price: 0,
          id: ''
      }
  ]);

  const [newShoe, setNewShoe] = useState([
      {
          name: '',
          model: '',
          brand: '',
          inventory: 0,
          price: 0
      }
  ]);

  const [updateShoe, setUpdateShoe] = useState({
      inventory:0,
  })

  useEffect(() => {
      fetch(SHOES_URL)
          .then((data) => data.json())
          .then((data) => setShoes(data));
  }, []);

  const getShoes = () => {
      fetch(SHOES_URL)
          .then((data) => data.json())
          .then((data) => setShoes(data));
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
        <h1 id="title">Inventory</h1>
        <InventoryTable shoes={shoes} deleteShoe={deleteShoe} updateInventory={updateInventory} updateShoe={updateShoe} setUpdateShoe={setUpdateShoe}/>
        <ShoeForm newShoe={newShoe} setNewShoe={setNewShoe} createShoe={createShoe}/>
        </div>;
};
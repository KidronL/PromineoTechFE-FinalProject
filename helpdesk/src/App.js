import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Users from './routes/users/users.component';
import Inventory from './routes/inventory/inventory.component';
import './App.css';


export default function App() {
  return (
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/inventory" element={<Inventory />} />
    </Routes>
  );
}

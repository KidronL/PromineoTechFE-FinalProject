import React from "react";
import UserModal from "./usermodal.users";
import { useState } from "react";

//Code to display list of users
export default function UsersList({users}) {

    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleLearnMore = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    }

    return (
    <div className="container">

    <table className="table table-striped table-hover table-bordered table-respoonsive rounded">
        <thead>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Phone Number</th>
                <th></th>
            </tr>
        </thead>

        <tbody>
            {users.map((user) => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.position}</td>
                    <td>{user.number}</td>
                    <td><button className="btn btn-primary btn-sm" onClick={() => handleLearnMore(user)}>Learn More</button></td>   
                </tr>
            ))}
        </tbody>
    </table>

    {showModal && <UserModal show={showModal} onHide={() => setShowModal(false)} user={selectedUser} />}
</div>
);
    
}
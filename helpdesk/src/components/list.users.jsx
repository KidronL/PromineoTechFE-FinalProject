import React from "react";

export default function UsersList({users}) {
    return <div className="container">

        <table className="table table-striped table-hover table-bordered table-respoonsive rounded">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Phone Number</th>
                </tr>
            </thead>

            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.position}</td>
                        <td>{user.number}</td>
                    </tr>
                ))}
            </tbody>

        </table>
    </div>;
}
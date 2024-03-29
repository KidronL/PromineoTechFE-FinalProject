import React from "react";
import {useState, useEffect} from "react";
import UsersList from "../../components/list.users";

export default function Users() {

    const USERS_URL = "https://658125763dfdd1b11c427f36.mockapi.io/users";

    const [users, setUsers] = useState([
        {
            id: 0,
            name: "",
            position: "",
            number: ""
        }
    ]);

    useEffect(() => {
        fetch(USERS_URL)
        .then((data) => data.json())
        .then((data) => setUsers(data));
    }, []);

    const getUsers = () => {
        fetch(USERS_URL)
            .then((data) => data.json())
            .then((data) => setUsers(data));
    };

    return <div>
            <h1 id="title">
                Users
            </h1>
            <UsersList users={users} />
        </div>;
};
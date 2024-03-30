import React from "react";
import { Link } from "react-router-dom";

//Button to enter the site
export default function EnterButton() {
    return (
        <div>
            <Link to="/home">
                <button className="btn btn-secondary btn-lg">Get Started</button>
            </Link>
        </div>
    );
}
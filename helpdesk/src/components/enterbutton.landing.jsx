import React from "react";
import { Link } from "react-router-dom";

export default function EnterButton() {
    return (
        <div>
            <Link to="/home">
                <button className="btn btn-secondary btn-lg">Get Started</button>
            </Link>
        </div>
    );
}
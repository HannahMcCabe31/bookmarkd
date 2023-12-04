import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

function Dashboard() {
    return (
        <>
        <div>
            <h1 className="text-white-500">Dashboard</h1>
            <Link to="/recommendations">Recommendations</Link>
        </div>
        </>
    );
}

export default Dashboard;
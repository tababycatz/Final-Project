import React from "react";
import CardList from "../cards/CardList";

const Home = () => {
    return (
        <div className="page" style={{ textAlign: "center" }}>
            <p className="page-title">Welcome to dogMUD</p>
            <CardList />
            <div style={{ marginBottom: 20 }} />
        </div>
    );
};

export default Home;
import React, { useContext, useState } from "react";
import UserProvider from "../../context/UserProvider";
import Col from "../wrappers/Col";
import DataTags from "../navbar/DataTags";
import _ from "lodash";

const LoginMsg = "Uh oh, there's nothing to show! " +
    "Login to see how much of your invaluable personal " +
    "data tech companies have at their disposal.";

const Profile = () => {
    const [selected, setSelected] = useState("All");
    const userData = useContext(UserProvider.context);
    const text = _.isEmpty(userData) ? LoginMsg: "Explore Your Data";
    const options = Object.keys(userData).filter(key => {
        return userData[key] !== null;
    });

    return (
        <div className="page">
            <p className="page-title" style={{ textAlign: "center" }}>
                {text}
            </p>

            <Col className="col-4" style={{ verticalAlign: "top" }}>
                <DataTags
                    options={options}
                    onClick={option => setSelected(option)}
                    selected={selected}
                />
            </Col>

            <div style={{ marginBottom: 20 }} />
        </div>
    );
};

export default Profile;
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";

export function VinylsList() {
    const [vinyls, setVinyls] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/vinyls")
            .then(res => res.json())
            .then(body => setVinyls(body));
    }, []);

    return (
        <>
            <h2>Elenco vinili</h2>
            <pre>{JSON.stringify(vinyls, null, 2)}</pre>
        </>
    );
}
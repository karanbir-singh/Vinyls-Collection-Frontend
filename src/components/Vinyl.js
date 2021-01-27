import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";

export function Vinyl() {
    const [vinyl, setVinyl] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/vinyls/")
            .then(res => res.json())
            .then(body => setVinyl(body));
    }, []);

    return (
        <>
            <h1>Vinile</h1>
            <pre>{JSON.stringify(vinyl, null, 2)}</pre>
        </>
    );
}
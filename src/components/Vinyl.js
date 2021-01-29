import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { useParams } from "react-router-dom";

export function Vinyl() {
    const [vinyl, setVinyl] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetch("http://localhost:3000/vinyls/" + id )
            .then(res => res.json())
            .then(body => setVinyl(body));
    }, []);

    return (
        <>
            <h2>Vinile</h2>
            <pre>{JSON.stringify(vinyl, null, 2)}</pre>
        </>
    );
}
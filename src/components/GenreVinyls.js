import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { useParams } from "react-router-dom";

export function GenreVinyls() {
    const [vinyls, setVinyls] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        fetch("http://localhost:3000/genres/" + id + "/vinyls")
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
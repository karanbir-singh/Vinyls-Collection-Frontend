import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";

export function GenresList() {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/genres")
            .then(res => res.json())
            .then(body => setGenres(body));
    }, []);

    return (
        <>
            <h1>Elenco vinili</h1>
            <pre>{JSON.stringify(genres, null, 2)}</pre>
        </>
    );
}
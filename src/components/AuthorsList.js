import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";

export function AuthorsList() {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/authors")
            .then(res => res.json())
            .then(body => setAuthors(body));
    }, []);

    return (
        <>
            <h1>Elenco autori</h1>
            <pre>{JSON.stringify(authors, null, 2)}</pre>
        </>
    );
}
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Table } from "react-bootstrap";

export function AuthorsList() {
    const [authors, setAuthors] = useState([]);
    const urlParams = new URLSearchParams(location.search);
    const f = urlParams.get('f');

    useEffect(() => {
        fetch("http://localhost:3000/authors")
            .then(res => res.json())
            .then(body => setAuthors(body));
    }, []);

    if (f === 'table') {
        return (
            <>
                <h2>Elenco autori</h2>
                <Table striped borderless hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Author</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            authors.map((author) => {
                                return (
                                    <tr>
                                        <td>{author.id}</td>
                                        <td>{author.name}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </Table>
            </>
        );
    }
    return (
        <>
            <h2>Elenco autori</h2>
            <pre>{JSON.stringify(authors, null, 2)}</pre>
        </>
    );
}
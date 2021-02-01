import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Table } from "react-bootstrap";

export function VinylsList() {
    const [vinyls, setVinyls] = useState([]);
    const urlParams = new URLSearchParams(location.search);
    const f = urlParams.get('f');

    useEffect(() => {
        fetch("http://localhost:3000/vinyls")
            .then(res => res.json())
            .then(body => setVinyls(body));
    }, []);

    if (f === 'table') {
        return (
            <>
                <h2>Elenco vinili</h2>
                <Table striped borderless hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Genre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            vinyls.map((vinyl) => {
                                return (
                                    <tr>
                                        <td>{vinyl.id}</td>
                                        <td>{vinyl.title}</td>
                                        <td>{vinyl.author}</td>
                                        <td>{vinyl.genre}</td>
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
            <h2>Elenco vinili di un genere</h2>
            <pre>{JSON.stringify(vinyls, null, 2)}</pre>
        </>
    );

}
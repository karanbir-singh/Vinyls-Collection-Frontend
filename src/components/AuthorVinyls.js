import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";

export function AuthorVinyls() {
    const [vinyls, setVinyls] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch("http://localhost:3000/authors/" + id + "/vinyls")
            .then(res => res.json())
            .then(body => setVinyls(body));
    }, []);

    return (
        <>
            <h2>Elenco vinili di un autore</h2>
            {/* <pre>{JSON.stringify(vinyls, null, 2)}</pre> */}
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
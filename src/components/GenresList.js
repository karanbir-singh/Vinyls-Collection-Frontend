import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Table } from "react-bootstrap";

export function GenresList() {
    const [genres, setGenres] = useState([]);
    const urlParams = new URLSearchParams(location.search);
    const f = urlParams.get('f');

    useEffect(() => {
        fetch("http://localhost:3000/genres")
            .then(res => res.json())
            .then(body => setGenres(body));
    }, []);

    if (f === 'table') {
        return (
            <>
                <h2>Elenco generi</h2>
                <Table striped borderless hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Genre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            genres.map((genre) => {
                                return (
                                    <tr>
                                        <td>{genre.id}</td>
                                        <td>{genre.type}</td>
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
            <pre>{JSON.stringify(genres, null, 2)}</pre>
        </>
    );
}
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Table } from "react-bootstrap";

export function GenresList() {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/genres")
            .then(res => res.json())
            .then(body => setGenres(body));
    }, []);

    return (
        <>
            <h2>Elenco generi</h2>
            {/* <pre>{JSON.stringify(genres, null, 2)}</pre> */}
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
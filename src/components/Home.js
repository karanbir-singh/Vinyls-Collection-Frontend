import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Alert, Button } from "react-bootstrap";

const possibilities = [
    {
        method: "GET",
        uri: "/vinyls",
        variant: "success"
    },
    {
        method: "GET",
        uri: "/authors",
        variant: "success"
    },
    {
        method: "GET",
        uri: "/genres",
        variant: "success"
    },
    {
        method: "GET",
        uri: "/vinyls/:id",
        variant: "success"
    },
    {
        method: "GET",
        uri: "/authors/:id/vinyls",
        variant: "success"
    },
    {
        method: "GET",
        uri: "/genres/:id/vinyls",
        variant: "success"
    },
    {
        method: "POST",
        uri: "/vinyls",
        variant: "info"
    },
    {
        method: "POST",
        uri: "/authors",
        variant: "info"
    },
    {
        method: "POST",
        uri: "/genres",
        variant: "info"
    },
]

export function Home(props) {
    return (
        <div style={{ display: "inline-block", margin: "10px" }}>
            {
                possibilities.map((req) => {
                    return (<Alert variant={req.variant}>
                        <Button className="get-post-btn" variant={req.variant}>{req.method}</Button>
                        <span className="alert-span">{req.uri}</span>
                        <Button style={{ float: "right", marginLeft: "80px" }} variant={"outline-" + req.variant}>{req.method}</Button>
                    </Alert>);
                })
            }
        </div>

    );
}

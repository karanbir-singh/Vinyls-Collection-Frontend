import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Alert, Button, Dropdown } from "react-bootstrap";

const GETs = [
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
    }
]

const specialGETs = [
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
    }
]

const POSTs = [
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
    }
]

export function Home(props) {
    return (
        <div style={{ display: "inline-block", margin: "10px" }}>
            {
                GETs.map((req, index) => { return (<BasicAlert req={req} index={index} />) })
            }
            {
                specialGETs.map((req, index) => { return (<SpecialGETAlert req={req} index={index} />) })
            }
            {
                POSTs.map((req, index) => { return (<SpecialPOSTAlert req={req} index={index} />) })
            }

        </div>

    );
}

//GET request
function BasicAlert(props) {
    return (<Alert key={props.index} variant={props.req.variant}>
        <Button className="get-post-btn" variant={props.req.variant}>{props.req.method}</Button>
        <span className="alert-span">{props.req.uri}</span>
        <Button onClick={() => window.location.href = "http://localhost:1234" + props.req.uri}
            style={{ float: "right", marginLeft: "80px" }}
            variant={"outline-" + props.req.variant}>Try out</Button>
    </Alert>);
}

//GET request
function SpecialGETAlert(props) {
    return (<Alert key={props.index} variant={props.req.variant}>
        <Button className="get-post-btn" variant={props.req.variant}>{props.req.method}</Button>
        <span className="alert-span">{props.req.uri}</span>
        <Button onClick={() => window.location.href = "http://localhost:1234" + props.req.uri}
            style={{ float: "right", marginLeft: "80px" }}
            variant={"outline-" + props.req.variant}>Try out</Button>
    </Alert>);
}

function SpecialPOSTAlert(props) {
    return (<Alert key={props.index} variant={props.req.variant}>
        <Button className="get-post-btn" variant={props.req.variant}>{props.req.method}</Button>
        <span className="alert-span">{props.req.uri}</span>
        <Button onClick={() => window.location.href = "http://localhost:1234" + props.req.uri}
            style={{ float: "right", marginLeft: "80px" }}
            variant={"outline-" + props.req.variant}>Try out</Button>
    </Alert>);
}

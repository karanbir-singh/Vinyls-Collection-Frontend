import React, { useState } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Alert, Button, FormControl, InputGroup } from "react-bootstrap";

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

/* 
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
] */

//Input field for special GET requests and POST requests
function InputField(props) {
    const [state, setState] = useState("");

    return (
        <InputGroup >
            <FormControl onChange={() => setState(event.target.value)} placeholder={props.placeholder} aria-describedby="basic-addon2" />
            <InputGroup.Append>
                <Button onClick={() => sendGETRequest(props.uri, state)} variant={"outline-" + props.variant} >Try out</Button>
            </InputGroup.Append>
        </InputGroup >
    );
}

//!-------------------------------------------------------------------------------------------------------------------------------

//S
function sendGETRequest(uri, id) {
    let tmp = uri.split(" ");
    if (tmp.length === 1) {
        if (id === null) {
            window.location.href = tmp[0];
            return;
        }
        window.location.href = tmp[0] + id;
        return;
    }
    window.location.href = tmp[0] + id + tmp[1];
    return;
}

//GET request
function BasicAlert(props) {
    return (
        <Alert key={props.index} variant={props.req.variant}>
            <Button className="get-post-btn" variant={props.req.variant}>{props.req.method}</Button>
            <span className="alert-span">{props.req.uri}</span>
            <Button onClick={() => sendGETRequest("http://localhost:1234" + props.req.uri, null)}
                style={{ float: "right", marginLeft: "80px" }}
                variant={"outline-" + props.req.variant}>Try out</Button>
        </Alert>
    );
}

//GET requests: uri with id
function SpecialGETsAlert() {
    return (
        <>
            <Alert key="1" variant="success">
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Button className="get-post-btn" variant="success">GET</Button>
                    <span className="alert-span">/vinyls/:id</span>
                    <InputField uri="http://localhost:1234/vinyls/" variant="success" placeholder=":id" />
                </div>
            </Alert>

            <Alert key="2" variant="success">
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Button className="get-post-btn" variant="success">GET</Button>
                    <span className="alert-span">/authors/:id/vinyls</span>
                    <InputField uri="http://localhost:1234/authors/ /vinyls" variant="success" placeholder=":id" />
                </div>
            </Alert>

            <Alert key="3" variant="success">
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Button className="get-post-btn" variant="success">GET</Button>
                    <span className="alert-span">/genres/:id/vinyls</span>
                    <InputField uri="http://localhost:1234/genres/ /vinyls" variant="success" placeholder=":id" />
                </div>
            </Alert>
        </>
    );
}

//!-------------------------------------------------------------------------------------------------------------------------------

//POST
function SpecialPOSTAlert(props) {
    return (
        <Alert key={props.index} variant={props.req.variant}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <Button className="get-post-btn" variant={props.req.variant}>{props.req.method}</Button>
                <span className="alert-span">{props.req.uri}</span>
                <InputField variant={props.req.variant} placeholder={""} />
            </div>
        </Alert>
    );
}

//!-------------------------------------------------------------------------------------------------------------------------------

export function Home(props) {
    return (
        <div style={{ display: "inline-block", margin: "10px" }}>
            {
                GETs.map((req, index) => { return (<BasicAlert req={req} index={index} />) })
            }
            {
                SpecialGETsAlert()
            }
            {
                //.map((req, index) => { return (<SpecialPOSTAlert req={req} index={index} />) })
            }

        </div>

    );
}



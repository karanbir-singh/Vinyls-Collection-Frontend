import React, { useState } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Alert, Button, FormControl, InputGroup } from "react-bootstrap";

document.onload = () => { };

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

//Input field for special GET requests and POST requests
function InputField(props) {
    const [state, setState] = useState("");

    return (
        <InputGroup >
            <FormControl value={state} onChange={() => setState(event.target.value)} placeholder={props.placeholder} aria-describedby="basic-addon2" />
            <InputGroup.Append>
                <Button onClick={() => { setState(""); props.func(props.uri, state) }} variant={"outline-" + props.variant} >Try out</Button>
            </InputGroup.Append>
        </InputGroup >
    );
}

//!-------------------------------------------------------------------------------------------------------------------------------

//Sends a GET request
let sendGETRequest = function (uri, id) {
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
function SpecialGETAlerts() {
    return (
        <>
            <Alert key="1" variant="success">
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Button className="get-post-btn" variant="success">GET</Button>
                    <span className="alert-span">/vinyls/:id</span>
                    <InputField func={sendGETRequest} uri="http://localhost:1234/vinyls/" variant="success" placeholder=":id" />
                </div>
            </Alert>

            <Alert key="2" variant="success">
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Button className="get-post-btn" variant="success">GET</Button>
                    <span className="alert-span">/authors/:id/vinyls</span>
                    <InputField func={sendGETRequest} uri="http://localhost:1234/authors/ /vinyls" variant="success" placeholder=":id" />
                </div>
            </Alert>

            <Alert key="3" variant="success">
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Button className="get-post-btn" variant="success">GET</Button>
                    <span className="alert-span">/genres/:id/vinyls</span>
                    <InputField func={sendGETRequest} uri="http://localhost:1234/genres/ /vinyls" variant="success" placeholder=":id" />
                </div>
            </Alert>
        </>
    );
}

//!-------------------------------------------------------------------------------------------------------------------------------

//Sends a POST request
function sendPOSTRequest(uri, body) {
    body = JSON.parse(body);
    fetch(uri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    })
}

//POST
function SpecialPOSTAlerts() {
    return (
        <>
            <Alert key="1" variant="info">
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Button className="get-post-btn" variant="info">POST</Button>
                    <span className="alert-span">/vinyls</span>
                    <InputField func={sendPOSTRequest} uri="http://localhost:3000/vinyls" variant="info"
                        placeholder='Ex: {"title": "A love supreme", "author": "John Coltrane", "genre": "Jazz"}' />
                </div>
            </Alert>

            <Alert key="2" variant="info">
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Button className="get-post-btn" variant="info">POST</Button>
                    <span className="alert-span">/authors</span>
                    <InputField func={sendPOSTRequest} uri="http://localhost:3000/authors" variant="info"
                        placeholder='Ex: {"name": "John Coltrane"}' />
                </div>
            </Alert>

            <Alert key="3" variant="info">
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Button className="get-post-btn" variant="info">POST</Button>
                    <span className="alert-span">/genres</span>
                    <InputField func={sendPOSTRequest} uri="http://localhost:3000/genres" variant="info"
                        placeholder='Ex: {"type": "Jazz"}' />
                </div>
            </Alert>
        </>
    );
}

//!-------------------------------------------------------------------------------------------------------------------------------

export function Home() {
    return (
        <div style={{ display: "inline-block", margin: "10px", width: "775px" }}>
            {
                GETs.map((req, index) => { return (<BasicAlert req={req} index={index} />) })
            }
            {
                SpecialGETAlerts()
            }
            {
                SpecialPOSTAlerts()
            }

        </div>

    );
}



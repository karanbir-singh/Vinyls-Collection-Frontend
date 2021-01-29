import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Alert, Button, Dropdown, FormControl, InputGroup } from "react-bootstrap";

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

//GET request
function BasicAlert(props) {
    return (
        <Alert key={props.index} variant={props.req.variant}>
            <Button className="get-post-btn" variant={props.req.variant}>{props.req.method}</Button>
            <span className="alert-span">{props.req.uri}</span>
            <Button onClick={() => window.location.href = "http://localhost:1234" + props.req.uri}
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
                <div style={{display: "flex", alignItems: "center"}}>
                    <Button className="get-post-btn" variant="success">GET</Button>
                    <span className="alert-span">/vinyls/:id</span>
                    <InputField variant="success" placeholder=":id" />
                </div>
            </Alert>
            <Alert key="2" variant="success">
                <div style={{display: "flex", alignItems: "center"}}>
                    <Button className="get-post-btn" variant="success">GET</Button>
                    <span className="alert-span">/authors/:id/vinyls</span>
                    <InputField variant="success" placeholder=":id" />
                </div>
            </Alert>
            <Alert key="3" variant="success">
                <div style={{display: "flex", alignItems: "center"}}>
                    <Button className="get-post-btn" variant="success">GET</Button>
                    <span className="alert-span">/genres/:id/vinyls</span>
                    <InputField variant="success" placeholder=":id" />
                </div>
            </Alert>
        </>
    );
}

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


function InputField(props) {
    return (
        <InputGroup >
            <FormControl placeholder={props.placeholder} aria-describedby="basic-addon2" />
            <InputGroup.Append>
                <Button variant={"outline-" + props.variant} >Try out</Button>
            </InputGroup.Append>
        </InputGroup >
    );
}

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



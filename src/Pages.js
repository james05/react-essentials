import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Outlet } from "react-router";

export function Home() {
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}

export function About() {
    return (
        <div>
            <h1>About</h1>

            <nav>
                <Link to="services">Services</Link>
                <Link to="history">History</Link>
            </nav>

            <Outlet />
        </div>
    );
}

export function Services() {
    return (
        <div>
            <h2>Services</h2>
        </div>
    );
}

export function History() {
    return (
        <div>
            <h2>History</h2>
        </div>
    );
}


export function Events() {
    return (
        <div>
            <h1>Events</h1>
        </div>
    );
}

export function Contact() {
    return (
        <div>
            <h1>Contact</h1>
        </div>
    );
}

export function Error404() {
    let location = useLocation();

    return (
        <div>
            <h1>Resource not found at {location.pathname}.</h1>

        </div>
    );
}
import React from "react";
import { useLocation } from "react-router";

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
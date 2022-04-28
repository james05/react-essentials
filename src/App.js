import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import './App.css';
import React, { useReducer } from "react";
import { useState, useEffect } from "react";

const dishes = [
  "Macaroni and Cheese",
  "Salmon",
  "Tofu with Vegetables"
];

const dishObject = dishes.map((dish, i) => (
  {
    id: i,
    title: dish
  }
));

function App({ login }) {
  const [happy, setHappy] = useState(true);
  const [secondary, setSecondary] = useState("tired");

  // two arguments: toggle function and the second is the intiial value
  const [checked, toggle] = useReducer(
    (checked) => !checked,
    false
  );

  useEffect(() => {
    console.log(`It's ${secondary}`);
  }, [secondary]);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!login) {
      return;
    }

    setLoading(true);

    fetch(`https://api.github.com/users/${login}`)
    .then(response => response.json())
    .then(setData)
    .then(() => setLoading(false))
    .catch(setError);
  }, [login]);

  let content;
  if (loading) {
    content = <h1>Loading...</h1>;
  } else if (error) {
    content = <pre>{JSON.stringify(error, null, 2)}</pre>;
  } else if (!data) {
    content = null;
  } else if (data) {
    content = (
      <>
        <h1>{data.login}</h1>
        <h2>{data.name}</h2>
        <p>{data.location}</p>
        <img alt={data.login} src={data.avatar_url} />
      </>
    );
  } else {
    content = '<div>No user available</div>';
  }

  return (
    <>
      <Header name="Cindy" />
      <h1>Currently {happy ? "happy" : "not happy"}</h1>
      <Main adjective="amazing" dishes={dishObject} />
      <Footer year={new Date().getFullYear()} />

      <button onClick={() => setHappy(false)}>Frustrated</button>
      <button onClick={() => setHappy(true)}>Happy</button>
      <button onClick={() => setSecondary("sleepy")}>Make sleepy</button>

      <input type="checkbox" value={checked} onChange={toggle} />
      <p>
        {checked ? "Checked": "Not checked"}
      </p>

      <>
        {content}
      </>
    </>
  );
}

export default App;

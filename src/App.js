import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/counters";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import React, { useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Customers from "./components/customers";
import NotFound from "./components/notFound";
import Rentals from "./components/rentals";
import MovieForm from './components/movieForm';

function App() {
  const [counters, setCounters] = useState([
    { id: 1, value: 2 },
    { id: 2, value: 0 },
    { id: 3, value: 3 },
    { id: 4, value: 0 },
  ]);

  const handleDelete = (id) => {
    console.log(id);
    setCounters(counters.filter((counter) => counter.id !== id));
  };

  const handleReset = () => {
    // Create a new array with reset values
    const resetCounters = counters.map((counter) => {
      return { ...counter, value: 0 };
    });
    // Update the state with the new array of counters
    setCounters(resetCounters);
  };

  const handleIncrement = (counter) => {
    const updatedCounters = counters.map((c) => {
      if (c.id === counter.id) {
        // Return a new counter object with the incremented value
        console.log({ ...c, value: c.value + 1 });
        return { ...c, value: c.value + 1 };
      }
      return c;
    });
    // Update the state with the new array of counters
    setCounters(updatedCounters);
  };

  const handleDecrement = (counter) => {
    let updatedCounters = counters.map((c) => {
      if (c.id === counter.id) {
        if (c.value !== 0) {
          return { ...c, value: c.value - 1 };
        }
      }
      return c;
    });
    setCounters(updatedCounters);
  };

  const handleHeartFill = () => {};

  // <> <Movies heartFill={handleHeartFill} /> </>

  return (
    <>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/movies/:id" component={MovieForm}></Route>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect exact from="/" to="/movies"></Redirect>
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </main>
    </>
  );
}

export default App;

import React from "react";
import List from "./List";
import "../styles/App.css";

const App = () => {
  return (
    <div>
      <h1 className="main-header">GO FOR IT!</h1>
      <List placeholder="Manic Monday">Monday</List>
      <List placeholder="Tuesdays are almost as bad as Mondays">Tuesday</List>
      <List placeholder="Halfway there Wednesday">Wednesday</List>
      <List placeholder="Omg one more day Thursdays">Thursday</List>
      <List placeholder="Leave early Friday" />
      <List placeholder="Do your dirt Saturday">Saturday</List>
      <List placeholder="Get Right on Sunday">Sunday</List>

      <div />
    </div>
  );
};

export default App;

//when combining to or more elements in a return you
//must wrap in a "container div"

// file directories with ../ goes up and down

//List.js is a list of my components

import { PropTypes } from "prop-types";

import logo from './logo.svg';
import './App.css';

import Info from "./Components/Info.js";

function App() {
  return (
    <div className="App">
      <Info title="Ryan" />
      <Info />
      <AddItem text="yehaw" num={2}/>
    </div>
  );
}

function AddItem(props) {
  return (
    <form>
      <label for="text-form">Type {props.text}: </label>
      <input type={props.text} id="text-form" />
      <p>{props.num}</p>
    </form>
  );
}

AddItem.propTypes = {
  num: PropTypes.number,
}

export default App;

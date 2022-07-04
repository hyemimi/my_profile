import { useDispatch } from "react-redux";
import react, { useState } from "react";
import { create } from "./reducer";
import { Link } from "react-router-dom";
import "./input.css";
function Input() {
  const [state, setState] = useState({
    name: "",
    age: "",
    favorites: "",
    major: "",
  });
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(create(state));
  };

  return (
    <div id="input_model">
      <div id="title">
        <h1>My Profile</h1>
      </div>
      <div id="input">
        <span id="Name">Name</span>
        <div id="name">
          <input
            name="name"
            type="text"
            value={state.name}
            onChange={onChange}
          />
        </div>
        <span id="Age">Age</span>
        <div id="age">
          <input name="age" type="text" value={state.age} onChange={onChange} />
        </div>
        <span id="Favorites">Favorites</span>
        <div id="favorites">
          <textarea
            name="favorites"
            type="text"
            value={state.favorites}
            onChange={onChange}
          ></textarea>
        </div>
        <span id="Major">Major</span>
        <div id="major">
          <textarea
            name="major"
            type="text"
            value={state.major}
            onChange={onChange}
          ></textarea>
        </div>
        <div id="button_">
          <Link to="/my_profile_">
            <button id="button_create" onClick={onClick}>
              CREATE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Input;

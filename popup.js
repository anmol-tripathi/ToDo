import React, { useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:8005/api";

function PopUp(props) {
  const [updatedinput, setupdatedinput] = useState(props.popupvalue.text);
  const close = () => {
    props.setshowpopup(false);
  };
  const updatetodo = () => {
    axios
      .put(`${baseURL}/update/${props.popupvalue.id}`, { todo: updatedinput })
      .then((res) => {
        console.log(res.data);
        props.setupdateUI((prevState) => !prevState);
        props.setshowpopup(false);
      });
  };
  return (
    <div className="popupmain">
      <div className="popup">
        <h1>Update ToDo</h1>
        <div className="updateinput">
          <input
            value={updatedinput}
            onChange={(e) => {
              setupdatedinput(e.target.value);
            }}
            placeholder="Enter Updated Text.."
          ></input>
          <button onClick={updatetodo}>Update</button>
          <button onClick={close}>Close</button>
        </div>
      </div>
    </div>
  );
}
export default PopUp;

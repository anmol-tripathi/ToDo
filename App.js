import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ToDo from "./todo";
import PopUp from "./popup";

const baseURL = "http://localhost:8005/api";
function App() {
  const [todos, settodos] = useState([]);
  const [input, setinput] = useState("");
  const [updateUI, setupdateUi] = useState(false);
  const [showpopup, setshowpopup] = useState(false);
  const [popupvalue, setpopupvalue] = useState({});

  useEffect(() => {
    axios
      .get(`${baseURL}/get`)
      .then((res) => {
        settodos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [updateUI]);
  const saveToDo = () => {
    axios
      .post(`${baseURL}/save`, { todo: input })
      .then((res) => {
        console.log(res.data);
        setupdateUi((prevState) => !prevState);
        setinput("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="main">
      <div className="container">
        <h1>To Do List</h1>
        <div className="inputtodo">
          <input
            value={input}
            onChange={(e) => {
              setinput(e.target.value);
            }}
            placeholder="Enter a task..."
          ></input>
          <button onClick={saveToDo}>Add</button>
        </div>
        <div className="listtodo">
          {todos.map((el) => (
            <ToDo
              key={el._id}
              text={el.todo}
              id={el._id}
              setupdateUI={setupdateUi}
              setshowpopup={setshowpopup}
              setpopupvalue={setpopupvalue}
            ></ToDo>
          ))}
        </div>
      </div>
      {showpopup && (
        <PopUp
          setshowpopup={setshowpopup}
          popupvalue={popupvalue}
          setupdateUI={setupdateUi}
        ></PopUp>
      )}
    </div>
  );
}

export default App;

import "./todo.css";
import axios from "axios";
const baseURL = "http://localhost:8005/api";
function todo(props) {
  const deletetodo = () => {
    axios.delete(`${baseURL}/delete/${props.id}`).then((res) => {
      console.log(res.data);
      props.setupdateUI((prevState) => !prevState);
    });
  };
  const updatetodo = () => {
    const text = props.text;
    const id = props.id;
    props.setpopupvalue({ text, id });
    props.setshowpopup(true);
  };
  return (
    <div className="todo">
      <h2>{props.text}</h2>
      <div>
        <button onClick={updatetodo}>Update</button>
        <button onClick={deletetodo}>Delete</button>
      </div>
    </div>
  );
}
export default todo;

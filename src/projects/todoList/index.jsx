import React, { useState } from "react";
import "./styles.css";

const TodoList = () => {
  let [inp, setInp] = useState("");
  let [newTodo, setNewTodo] = useState([]);
  let [edit, setEdit] = useState("");

  function handleInput(e) {
    setInp(e.target.value);
  }
  function handleAdd() {
    if (inp.trim()) {
      setNewTodo([...newTodo, { id: Date.now(), text: inp }]);
      setInp(""); // Clear the input field after adding
    }
  }

  function handleDel(id) {
    setNewTodo(newTodo.filter((item) => item.id !== id));
  }

  function handleUpdateInfo(id) {
    let newItem = newTodo.find((item) => item.id === id);
    console.log(newItem, "21");
    setInp(newItem.text);
    setEdit(id);
  }

  function handleSave() {
    setNewTodo(
      newTodo.map((itemm) =>
        itemm.id === edit ? { ...itemm, text: inp } : itemm
      )
    );
    setInp("");
    setEdit("");
  }
  return (
    <div className="main">
      <h4>Todo-List</h4>
      <div>
        <input
          className="inpp"
          type="text"
          placeholder="enter todo"
          value={inp}
          onChange={handleInput}
        />

        <button onClick={edit ? handleSave : handleAdd} className="btn">
          {edit ? "UPDATE" : "ADD"}
        </button>
      </div>
      <div>
        {
          newTodo && newTodo.length > 0 && 
       
        <table border={1}>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>

            {newTodo.map((item) => (
              <tr key={item.id}>
                <td>{item.text}</td>
                <td>
                  <button
                    onClick={() => handleDel(item.id)}
                    className="del-btn"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleUpdateInfo(item.id)}
                    className="update-btn"
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
           }
      </div>
    </div>
  );
};

export default TodoList;

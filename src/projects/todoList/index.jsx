import React, { useState } from "react";

const TodoList = () => {
  let [inp, setInp] = useState("");
  let [newTodo, setNewTodo] = useState([]);

  function handleInput(e) {
    setInp(e.target.value);
  }
  function handleAdd() {
    if (inp !== "") {
      setNewTodo([...newTodo, { id: Date.now(), text: inp }]);
      setInp(""); // Clear input field after adding
    }
  }
  console.log(newTodo, "14==");

  return (
    <div>
      <input
        type="text"
        placeholder="enter todo"
        value={inp}
        onChange={handleInput}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {newTodo.map((item) => {
          return (
            <li key={item.id}>
              {item.text}

              <button>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;

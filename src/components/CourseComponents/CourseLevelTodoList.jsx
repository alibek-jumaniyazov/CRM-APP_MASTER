import React, { useState } from "react";
import { Icons } from "../../Assets/icons/icons";
// import "./CourseLevelTodoList.css"; // Add your CSS file for styles

export default function CourseLevelTodoList() {
    const [searchQuery, setSearchQuery] = useState("");

    const [todo, setTodo] = useState([
        {
          id: "1",
          desc: "Hello World 1",
          check: false,
          isEditing: false,
        },
        {
          id: "2",
          desc: "Hello World 2",
          check: false,
          isEditing: false,
        },
        {
          id: "3",
          desc: "Hello World 3",
          check: false,
          isEditing: false,
        },
      ]);

  
  const [list, setList] = useState("");

  const addNewList = () => {
    if (list.trim() === "") {
      alert("Bosh maydonni to'ldiring");
      return;
    }
    setTodo((prevTodo) => [
      ...prevTodo,
      { id: prevTodo.length, desc: list, check: false, isEditing: false },
    ]);
    setList("");
  };

  const removeList = (id) => {
    const newTodo = todo.filter((item) => item.id !== id);
    setTodo(newTodo);
  };

  const startEditing = (id) => {
    const updatedTodo = todo.map((item) =>
      item.id === id ? { ...item, isEditing: true } : item
    );
    setTodo(updatedTodo);
  };

  const updateList = (id, newDesc) => {
    if (newDesc.trim() === "") {
      alert("Bosh maydonni to'ldiring");
      return;
    }
    const updatedTodo = todo.map((item) =>
      item.id === id ? { ...item, desc: newDesc, isEditing: false } : item
    );
    setTodo(updatedTodo);
  };

  const handleInputChange = (e, id) => {
    const updatedTodo = todo.map((item) =>
      item.id === id ? { ...item, desc: e.target.value } : item
    );
    setTodo(updatedTodo);
  };
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredTodos = todo.filter((item) =>
    item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="CourseLevelTodoList">
      <div className="CourseLevelTodoListNavbar">
        <div className="CourseLevelTodoListHeader">
          <div className="CourseLevelTodoListTitle">
            <Icons.student />
            <p>Lessons</p>
          </div>
          <div className="CourseLevelTodoListHeaderInfos">
            <div className="CourseLevelTodoListTitles">
              <p>Must have:</p>
              <span>127 lessons</span>
            </div>
            <div className="CourseLevelTodoListTitles">
              <p>Available:</p>
              <span>48 lessons</span>
            </div>
            <button>
              <Icons.chek /> Set up for individual lessons
            </button>
            <div className="CourseLevelTodoListSearch">
              <Icons.search />
              <input type="text" placeholder="Search lesson"  value={searchQuery}
                onChange={handleSearchChange}/>
            </div>
          </div>
        </div>
        <div className="CourseLevelTodoListSendLesson">
          <input
            type="text"
            placeholder="New lesson theme"
            className="CourseLevelTodoListCreate"
            value={list}
            onChange={(e) => setList(e.target.value)}
          />
          <button onClick={addNewList}>
            <Icons.pilus /> Add new lesson
          </button>
        </div>
      </div>
      <div className="CourseLevelTodoLists">
        {filteredTodos.map((item) => (
          <div
            key={item.id}
            className={
              item.isEditing
                ? "LevelTodoList LevelTodoListActive"
                : "LevelTodoList"
            }
          >
            <div>
              <div>
                {item.isEditing ? (
                  <input
                    type="text"
                    className="listDescInput"
                    value={item.desc}
                    onChange={(e) => handleInputChange(e, item.id)}
                  />
                ) : (
                  <p>{item.desc}</p>
                )}
              </div>
            </div>
            <div className="ActionsTodoList">
              {item.isEditing ? (
                <button
                  className="TodoListSaveBtn"
                  onClick={() => updateList(item.id, item.desc)}
                >
                  Save
                </button>
              ) : (
                <div
                  className="TodoListPutBtn"
                  onClick={() => startEditing(item.id)}
                >
                  <Icons.put />
                </div>
              )}
              <div
                className="TodoListDelBtn"
                onClick={() => removeList(item.id)}
              >
                <Icons.delete />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

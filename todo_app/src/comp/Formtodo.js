import React, { useState, useEffect } from "react";
import { IconButton, FormControl, InputLabel, Input } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import "./Formtodo.css";
import Todo from "./Todo";
import { db } from "../firebase";
import firebase from "firebase";

const useStyles = makeStyles((theme) => ({
  input: {
    padding: "0px 20px 0px 0px",
  },
  button: {
    backgroundColor: "rgb(245, 0, 87)",
  },
  icon: {
    fontSize: theme.spacing.unit * 4,
    color: "#cfcfcf",
  },
}));

function Formtodo() {
  const classes = useStyles();
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            todo: doc.data().todo,
            time: doc.data().timestamp,
          }))
        );
      });
  }, [input]);

  const addTodo = (event) => {
    event.preventDefault();

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="form_container">
      <form className="form_todoinput">
        <FormControl className={classes.input}>
          <InputLabel>Write a To Do</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <IconButton
          aria-label="add"
          disabled={!input}
          onClick={addTodo}
          color="primary"
          size="large"
          className={classes.button}
        >
          <AddIcon className={classes.icon} />
        </IconButton>
      </form>
      <ul className="todo_data">
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default Formtodo;

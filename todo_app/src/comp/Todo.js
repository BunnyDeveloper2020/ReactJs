import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  ListItemIcon,
  Checkbox,
  Modal,
  makeStyles,
  Button,
  FormControl,
  InputLabel,
  Input,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { db } from "../firebase";
import "./Todo.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    left: "50%",
    top: "50%",
    margin: "-100px 0px 0px -150px",
    width: "300px",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
  },
  input: {
    padding: "0px 10px 0px 0px",
  },
}));

function Todo(props) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();
  const classes = useStyles();
  const updateTodo = () => {
    db.collection("todos")
      .doc(props.todo.id)
      .set({ todo: input }, { merge: true });
    setOpen(false);
  };
  return (
    <div>
      <>
        <Modal open={open} onClose={(e) => setOpen(false)}>
          <div className={classes.paper}>
            <h3 className="modal_text">Update Current Task</h3>
            <form className="modal_form">
              <FormControl className={classes.input}>
                <InputLabel>Update a Task</InputLabel>
                <Input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder={props.todo.todo}
                />
              </FormControl>
              <Button variant="contained" color="primary" onClick={updateTodo}>
                Update
              </Button>
            </form>
          </div>
        </Modal>
        <List>
          <ListItem>
            <ListItemText
              primary={props.todo.todo}
              secondary="my new task ⏰"
            />
            <ListItemIcon className="checkbox_todo">
              <Checkbox />
            </ListItemIcon>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="edit">
                <EditIcon onClick={(e) => setOpen(true)} />
              </IconButton>

              <IconButton edge="end" aria-label="delete">
                <DeleteIcon
                  onClick={(event) =>
                    db.collection("todos").doc(props.todo.id).delete()
                  }
                />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </>
    </div>
  );
}

export default Todo;

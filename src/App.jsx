import { useState } from "react";
import "./styles.css";
import { InputTodos } from "./components/Input";
import { IncompleteTodos } from "./components/Incomplete";
import { CompleteTodos } from "./components/Complete";

export const App = () => {
  const [inputText, setInputText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const changeInputText = (e) => {
    setInputText(e.target.value);
  };

  const addText = () => {
    if (inputText === "") return;
    const newTodos = [inputText, ...incompleteTodos];
    setIncompleteTodos(newTodos);
    setInputText("");
  };

  const changeDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const changeComplete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);

    const newcompleteTodo = incompleteTodos[index];
    setCompleteTodos([newcompleteTodo, ...completeTodos]);
  };

  const changeIncomplete = (index) => {
    const newTodos = [...completeTodos];
    newTodos.splice(index, 1);
    setCompleteTodos(newTodos);

    const newincompleteTodo = completeTodos[index];
    setIncompleteTodos([newincompleteTodo, ...incompleteTodos]);
  };

  const style = {
    color: "red"
  };

  return (
    <>
      <InputTodos
        inputText={inputText}
        changeInputText={changeInputText}
        addText={addText}
        incompleteTodos={incompleteTodos}
      />
      {incompleteTodos.length >= 5 && (
        <div style={style}>５個以上はタスクを登録できません。</div>
      )}
      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        changeComplete={changeComplete}
        changeDelete={changeDelete}
      />
      <CompleteTodos
        completeTodos={completeTodos}
        changeIncomplete={changeIncomplete}
      />
    </>
  );
};

import react from "react";

export const IncompleteTodos = (props) => {
  const { changeDelete, changeComplete, incompleteTodos } = props;
  return (
    <div>
      <p>未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo, index) => (
          <div key={todo}>
            <li>{todo}</li>
            <button onClick={() => changeComplete(index)}>完了</button>
            <button onClick={() => changeDelete(index)}>削除</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

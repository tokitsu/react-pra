import react from "react";

export const CompleteTodos = (props) => {
  const { completeTodos, changeIncomplete } = props;

  return (
    <div>
      <p>完了のTODO</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo}>
              <li>{todo}</li>
              <button onClick={() => changeIncomplete(index)}>戻る</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

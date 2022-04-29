import react from "react";

export const InputTodos = (props) => {
  const { inputText, changeInputText, addText, incompleteTodos } = props;
  return (
    <div>
      <input
        placeholder="TODOを入力"
        value={inputText}
        onChange={(e) => changeInputText(e)}
        disabled={incompleteTodos.length >= 5}
      />
      <button onClick={addText} disabled={incompleteTodos.length >= 5}>
        追加
      </button>
    </div>
  );
};

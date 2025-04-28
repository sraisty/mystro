import React, { useState } from "react";
import { useAppDispatch, appSlice } from "../../store";

export function TodoList({ todoItems }: { todoItems: { text: string }[] }) {
  const dispatch = useAppDispatch();
  const [newTodo, setNewTodo] = useState("");
  return (
    <>
      <ul>
        {todoItems.map((todoItem, index) => (
          <li key={index}>{todoItem.text}</li>
        ))}
      </ul>
      <div>
        <form
          onSubmit={async (ev) => {
            ev.preventDefault();

            // Optimistic UI update
            dispatch(appSlice.addTodo(newTodo));
            setNewTodo("");
          }}
        >
          <input type="text" onChange={(ev) => setNewTodo(ev.target.value)} value={newTodo} />
          <button type="submit">Add to-do</button>
        </form>
      </div>
    </>
  );
}

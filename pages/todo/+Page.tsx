import React from "react";
import { TodoList } from "./TodoList";
import { useAppSelector } from "../../store";

export default function Page() {
  const todo = useAppSelector((state) => state.app.todo);
  return (
    <>
      <h1>To-do List</h1>
      <TodoList todoItems={todo} />
    </>
  );
}

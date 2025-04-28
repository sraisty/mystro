import React from "react";
import { useAppSelector, useAppDispatch, appSlice } from "../../store";

export function Counter() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.app.count);

  return (
    <button type="button" onClick={() => dispatch(appSlice.increment())}>
      Counter {count}
    </button>
  );
}

import React from "react";
import { store } from "../store";
import { Provider } from "react-redux";

type Props = {
  children: React.ReactNode;
};

const Wrapper: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );
};

export default Wrapper;

import React from "react";
import { Counter } from "./Counter";
import { Link } from "../../components/Link";

export default function Page() {
  return (
    <>
      <h1>Mystro Take-home App</h1>
      This app is:
      <ul>
        <li>React based</li>
        <li>
          Rendered to HTML using <Link href="https://vike.dev">Vike</Link>
        </li>
        <li>
          And uses Redux: <Counter />
        </li>
      </ul>
    </>
  );
}

import "./style.css";

import React from "react";
import { css } from "@emotion/react";

import logoUrl from "../assets/MystroLogo.png";
import { Link } from "../components/Link";

export default function LayoutDefault({ children }: { children: React.ReactNode }) {
  return (
    <div css={styles.layout}>
      <Sidebar>
        <Logo />
        <Link href="/">Welcome</Link>
        <Link href="/todo">Todo</Link>
        {""}
      </Sidebar>
      <Content>{children}</Content>
    </div>
  );
}

function Sidebar({ children }: { children: React.ReactNode }) {
  return <div css={styles.sidebar}>{children}</div>;
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div css={styles.pageContent}>{children}</div>
    </div>
  );
}

function Logo() {
  return (
    <div css={styles.logo}>
      <a href="/">
        <img src={logoUrl} height={64} width={64} alt="logo" />
      </a>
    </div>
  );
}

const styles = {
  sidebar: css({
    padding: 20,
    flexShrink: 0,
    display: "flex",
    flexDirection: "column",
    lineHeight: "1.8em",
    borderRight: "2px solid #eee",
    a: {
      padding: "2px 10px",
      marginLeft: "-10px",
      "&.is-active": {
        backgroundColor: "#eee",
      },
    },
  }),
  layout: css({
    display: "flex",
    maxWidth: 900,
    margin: "auto",
  }),
  pageContent: css({
    padding: 20,
    paddingBottom: 50,
    minHeight: "100vh",
    opacity: 1,
    transition: "opacity 0.3s ease-in-out",
    "body.page-is-transitioning &": {
      opacity: 0,
    },
  }),
  logo: css({
    marginTop: 20,
    marginBottom: 10,
  }),
};

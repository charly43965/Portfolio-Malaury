import style from "./header.module.css";

import Nav from "./nav/Nav";

export default function Header() {
  return (
    <header className={style}>
      <Nav />
    </header>
  );
}

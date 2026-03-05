import style from "./nav.module.css";

export default function Nav() {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <a id="portfolio" href="#">
            Projects
          </a>
        </li>
        <li>
          <a id="competences" href="#">
            Skills
          </a>
        </li>
        <li>
          <a id="about" href="#">
            About me
          </a>
        </li>
      </ul>
    </nav>
  );
}

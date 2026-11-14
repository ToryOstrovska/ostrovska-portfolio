import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <a className="logo" href="/">
        Вікторія Островська
      </a>
      <button
        type="button"
        className="burger"
        aria-label="Меню"
        aria-expanded={open}
        aria-controls="header-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="burger__line" />
        <span className="burger__line" />
        <span className="burger__line" />
      </button>
      <div id="header-menu" className={"header__right" + (open ? " is-open" : "")}>
        <nav className="nav" aria-label="Основна навігація">
          <a href="#cases" onClick={close}>Кейси</a>
          <a href="#about" onClick={close}>Про мене</a>
          <a href="#contact" onClick={close}>Контакти</a>
        </nav>
        <div className="lang" role="group" aria-label="Мова сайту">
          <button type="button" className="lang__btn lang__btn--active" aria-pressed="true">
            UA
          </button>
          <button type="button" className="lang__btn" aria-pressed="false">
            EN
          </button>
          <button type="button" className="lang__btn" aria-pressed="false">
            DE
          </button>
        </div>
      </div>
    </header>
  );
}

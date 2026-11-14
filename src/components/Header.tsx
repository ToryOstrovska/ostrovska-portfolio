export default function Header() {
  return (
    <header className="header">
      <a className="logo" href="/">
        Вікторія Островська
      </a>
      <div className="header__right">
        <nav className="nav" aria-label="Основна навігація">
          <a href="#cases">Кейси</a>
          <a href="#about">Про мене</a>
          <a href="#contact">Контакти</a>
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
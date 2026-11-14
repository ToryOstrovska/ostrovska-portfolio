export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <figure className="polaroid">
        <div className="polaroid__photo">Твоє фото</div>
        <figcaption className="polaroid__caption">це я :)</figcaption>
      </figure>

      <div className="hero__center">
        <p className="hero__badge">UX/UI ДИЗАЙНЕРКА · НІМЕЧЧИНА</p>
        <h1 id="hero-title" className="hero__title">
          Проєктую сайти й застосунки для <span className="nowrap">e-commerce</span>-команд
        </h1>
        <p className="hero__lead">
          Щоб кнопка не бісила, а замовлення з телефона займало менше кроків.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#cases">
            Дивитись кейси ↓
          </a>
          <a className="btn btn--ghost" href="#" aria-disabled="true">
            Завантажити CV
          </a>
        </div>
      </div>

      <div className="mascot">
        <div className="bubble">
          <p>Привіт! Я Вікторія,</p>
          <p>рада, що ти тут</p>
        </div>
        <img className="bubble__tail" src="/assets/bubble-tail.svg" alt="" />
        <img className="mascot__img" src="/assets/mascot-hi.png" alt="Маскот — лисичка махає рукою" />
        <p className="mascot__credit">маскот · art by Tosha</p>
      </div>
    </section>
  );
}
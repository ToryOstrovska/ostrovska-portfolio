import { useRef, useState } from "react";

function FlipIcon() {
  return (
    <svg className="flip__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 12a8 8 0 1 1-2.6-5.9" />
      <path d="M20 4v5h-5" />
    </svg>
  );
}

export default function Hero() {
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);
  const lastPointer = useRef("");
  const flipped = hovered || pinned;

  return (
    <section className="hero" aria-labelledby="hero-title">
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

      <div className="hero__card">
        <div className="bubble">
          <p>Привіт! Я Вікторія,</p>
          <p>рада, що ти тут</p>
        </div>
        <button
          type="button"
          className={"flip" + (flipped ? " is-flipped" : "")}
          aria-label={
            flipped
              ? "Маскот — лисичка махає рукою. Перевернути картку"
              : "Фото Вікторії. Перевернути картку"
          }
          onPointerDown={(e) => {
            lastPointer.current = e.pointerType;
          }}
          onPointerEnter={(e) => {
            if (e.pointerType === "mouse") setHovered(true);
          }}
          onPointerLeave={(e) => {
            if (e.pointerType === "mouse") setHovered(false);
          }}
          onClick={(e) => {
            // Мишка вже перевертає наведенням; клік — для дотику й клавіатури
            if (lastPointer.current === "mouse" && e.detail > 0) return;
            setPinned((p) => !p);
          }}
        >
          <span className="flip__inner">
            <span className="flip__face flip__front">
              <span className="flip__photo">Твоє фото</span>
              <span className="flip__caption">це я :)</span>
              <FlipIcon />
            </span>
            <span className="flip__face flip__back">
              <span className="flip__photo">
                <img src="/assets/mascot-hi.png" alt="" />
              </span>
              <span className="flip__caption flip__caption--back">маскот · art by Tosha</span>
              <FlipIcon />
            </span>
          </span>
        </button>
      </div>
    </section>
  );
}

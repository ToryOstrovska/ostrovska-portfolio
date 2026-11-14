import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="page">
      <div className="top">
        <Header />
        <Hero />
      </div>
      {/* Далі: блок «Кейси» та решта головної — наступні кроки за docs/plan.md */}
      <section id="cases" aria-label="Кейси" />
    </div>
  );
}
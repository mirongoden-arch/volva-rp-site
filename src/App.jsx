import "./App.css";

const factions = ["НПУ", "СБУ", "ДСНС", "МОЗ", "ДКВС", "ВРУ", "ЗМІ", "ЗСУ"];

export default function App() {
  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const openLink = (url) => {
    if (!url || url === "#") {
      alert("Тут потім поставимо твоє посилання");
      return;
    }
    window.open(url, "_blank");
  };

  return (
    <div className="site">
      <header className="header">
        <div className="container header-inner">
          <div className="logo" onClick={() => goTo("home")}>
            <div className="logo-box">V</div>
            <div>
              <div className="logo-title">VOLVA RP</div>
              <div className="logo-sub">Сервер УКРАЇНА</div>
            </div>
          </div>

          <nav className="nav">
            <button onClick={() => goTo("home")}>Головна</button>
            <button onClick={() => goTo("about")}>Про проєкт</button>
            <button onClick={() => goTo("news")}>Новини</button>
            <button onClick={() => goTo("factions")}>Фракції</button>
            <button onClick={() => goTo("support")}>Підтримка</button>
          </nav>
        </div>
      </header>

      <section className="hero container" id="home">
        <div className="hero-left">
          <div className="badge-row">
            <span className="badge">NEW SEASON</span>
            <span className="badge dark">MTA Project</span>
          </div>

          <h1>
            Український RP-проєкт для сервера <span>УКРАЇНА</span>
          </h1>

          <p>
            VOLVA RP — це сайт твого проєкту: новини, фракції, підтримка,
            запуск гри та вся основна інформація в одному місці.
          </p>

          <div className="btn-row">
            <button
              className="btn primary"
              onClick={() => openLink("#")}
            >
              Завантажити лаунчер
            </button>

            <button
              className="btn ghost"
              onClick={() => goTo("about")}
            >
              Дізнатися більше
            </button>
          </div>

          <div className="stats">
            <div className="card">
              <div className="stat-num">5</div>
              <div className="stat-text">Максимум онлайн</div>
            </div>
            <div className="card">
              <div className="stat-num">1</div>
              <div className="stat-text">Сервер</div>
            </div>
            <div className="card">
              <div className="stat-num">24/7</div>
              <div className="stat-text">Підтримка</div>
            </div>
            <div className="card">
              <div className="stat-num">BETA</div>
              <div className="stat-text">Стадія проєкту</div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="server-box">
            <div className="server-head">
              <div>
                <div className="small-text">VOLVA RP Launcher</div>
                <h2>Швидкий старт</h2>
              </div>
              <span className="online-dot">Онлайн</span>
            </div>

            <div className="server-card">
              <div>
                <div className="server-name">01 сервер — УКРАЇНА</div>
                <div className="server-online">Онлайн: 5/2000</div>
              </div>
              <button className="btn small" onClick={() => alert("Тут буде запуск сервера")}>
                Грати
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="container section" id="about">
        <h2>Про проєкт</h2>
        <div className="grid four">
          <div className="card info-card">
            <h3>Українська атмосфера</h3>
            <p>Сервер у стилі українського RP-проєкту з власним стилем та подачею.</p>
          </div>
          <div className="card info-card">
            <h3>Держфракції</h3>
            <p>НПУ, СБУ, ДСНС, МОЗ, ДКВС, ВРУ, ЗМІ та інші організації.</p>
          </div>
          <div className="card info-card">
            <h3>Розвиток гравця</h3>
            <p>Роботи, підвищення, взаємодія з фракціями та розвиток персонажа.</p>
          </div>
          <div className="card info-card">
            <h3>Підтримка</h3>
            <p>Швидкий зв’язок із командою проєкту через Telegram та Discord.</p>
          </div>
        </div>
      </section>

      <section className="container section" id="news">
        <div className="section-top">
          <h2>Новини</h2>
          <button className="btn ghost" onClick={() => alert("Тут буде сторінка всіх новин")}>
            Усі новини
          </button>
        </div>

        <div className="grid three">
          <div className="card news-card">
            <h3>Офіційний запуск сервера УКРАЇНА</h3>
            <p>Проєкт відкривається у новому форматі з власним сайтом та системами.</p>
          </div>
          <div className="card news-card">
            <h3>Оновлення фракцій</h3>
            <p>Додані нові можливості для державних організацій та підрозділів.</p>
          </div>
          <div className="card news-card">
            <h3>Покращення лаунчера</h3>
            <p>Підготовка до зручного запуску гри для нових гравців.</p>
          </div>
        </div>
      </section>

      <section className="container section" id="factions">
        <h2>Фракції</h2>
        <div className="grid four">
          {factions.map((item) => (
            <div className="card faction-card" key={item}>
              <div>
                <div className="faction-name">{item}</div>
                <div className="faction-sub">Заявки, ранги, підрозділи</div>
              </div>
              <button className="btn small" onClick={() => alert(`Сторінка фракції: ${item}`)}>
                Відкрити
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="container section support" id="support">
        <div className="support-box">
          <h2>Потрібна допомога?</h2>
          <p>
            Тут будуть кнопки техпідтримки та офіційного Discord/Telegram.
          </p>

          <div className="btn-row">
            <button className="btn black" onClick={() => openLink("#")}>
              Telegram підтримка
            </button>
            <button className="btn ghost darkghost" onClick={() => openLink("#")}>
              Discord сервер
            </button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <div className="logo-title">VOLVA RP</div>
            <div className="logo-sub">Сервер УКРАЇНА</div>
          </div>
          <div>© 2026 VOLVA RP. Усі права захищені.</div>
        </div>
      </footer>
    </div>
  );
}
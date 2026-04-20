import "./App.css";

const newsList = [
  {
    id: "launch",
    title: "Відкриття сервера УКРАЇНА",
    text: "Офіційний старт проєкту VOLVA RP. Перший сервер уже доступний для гри.",
    full: "Сервер УКРАЇНА офіційно відкрито. Проєкт VOLVA RP переходить у новий етап розвитку. Гравцям уже доступний старт на сервері, знайомство з базовими системами, державними організаціями та основними можливостями проєкту.",
  },
  {
    id: "factions-update",
    title: "Оновлення державних фракцій",
    text: "Додані підрозділи, нові можливості для керівництва та оновлена структура організацій.",
    full: "На сайті та в структурі проєкту оновлено державні фракції. Додано підрозділи, покращено опис організацій, а також підготовлено основу для подальшого розвитку системи заявок, підвищень та керівного складу.",
  },
  {
    id: "tech-update",
    title: "Покращення технічної частини",
    text: "Оптимізовано сайт, підготовлено розділи підтримки та стартові ігрові системи.",
    full: "Було проведено базову оптимізацію сайту VOLVA RP. Розділи новин, фракцій та технічної підтримки вже доступні. Далі планується розширення функціоналу, додавання особистого кабінету та інших ігрових сервісів.",
  },
  {
    id: "launcher",
    title: "Підготовка лаунчера",
    text: "Йде розробка лаунчера для зручного запуску гри та подальших оновлень клієнта.",
    full: "Команда проєкту працює над власним лаунчером VOLVA RP. Його задача — спростити вхід у гру, перевірку файлів клієнта та подальше отримання оновлень без зайвих дій з боку гравця.",
  },
];

const factions = [
  {
    id: "npu",
    name: "НПУ",
    desc: "Національна поліція України. Патрулювання, затримання, перевірки та охорона порядку.",
    full: "НПУ — одна з ключових державних організацій на сервері. Основні задачі: патрулювання міст, реагування на порушення, затримання підозрюваних, перевірка документів, робота на блокпостах та підтримка громадського порядку.",
  },
  {
    id: "sbu",
    name: "СБУ",
    desc: "Служба безпеки України. Контррозвідка, спецоперації та боротьба з особливо небезпечними порушеннями.",
    full: "СБУ відповідає за особливо важливі операції, боротьбу з небезпечними порушниками, спецоперації та захист державних інтересів. Організація орієнтована на серйозну RP-взаємодію та підвищений рівень відповідальності.",
  },
  {
    id: "dsns",
    name: "ДСНС",
    desc: "Державна служба з надзвичайних ситуацій. Пожежі, рятувальні операції та ліквідація наслідків НС.",
    full: "ДСНС займається ліквідацією пожеж, рятувальними операціями, допомогою громадянам і реагуванням на надзвичайні ситуації. Це важлива фракція для серверного життя та RP-подій.",
  },
  {
    id: "moz",
    name: "МОЗ",
    desc: "Міністерство охорони здоров'я. Медична допомога, лікарні, огляди та підтримка населення.",
    full: "МОЗ відповідає за медичну сферу на сервері: лікування гравців, медичні огляди, допомогу в лікарнях та участь у RP-сценаріях, пов’язаних зі здоров’ям і порятунком персонажів.",
  },
  {
    id: "dkvs",
    name: "ДКВС",
    desc: "Державна кримінально-виконавча служба. Охорона установ, конвоювання та контроль режиму.",
    full: "ДКВС відповідає за роботу виправних установ, конвоювання затриманих, охорону режимних об’єктів і взаємодію з іншими силовими структурами в рамках серверних процесів.",
  },
  {
    id: "vru",
    name: "ВРУ",
    desc: "Верховна Рада України. Законодавча влада, державні рішення та управлінська діяльність.",
    full: "ВРУ — це державна організація управлінського рівня. Вона бере участь у політичному та адміністративному житті сервера, формує важливі рішення та створює додаткову глибину державного RP.",
  },
  {
    id: "zmi",
    name: "ЗМІ",
    desc: "Засоби масової інформації. Новини, інтерв’ю, репортажі та медійна діяльність.",
    full: "ЗМІ висвітлюють життя сервера: новини, інтерв’ю, репортажі, оголошення та події. Це хороша фракція для гравців, яким подобається медійний напрям і жива взаємодія з іншими організаціями.",
  },
  {
    id: "zsu",
    name: "ЗСУ",
    desc: "Збройні Сили України. Військова служба, оборона територій та бойові завдання.",
    full: "ЗСУ — військова організація сервера, яка відповідає за оборонний напрям, взаємодію з іншими держструктурами, участь у великих серверних подіях та виконання бойових і стратегічних завдань.",
  },
];

export default function App() {
  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const openLink = (url) => {
    if (!url || url === "#") {
      alert("Цей розділ у розробці, зверніться до Мирона Бумера");
      return;
    }
    window.open(url, "_blank");
  };

  const showDev = (text = "Цей розділ у розробці, зверніться до Мирона Бумера") => {
    alert(text);
  };

  const openNewsPage = (item) => {
    const newWindow = window.open("", "_blank");
    if (!newWindow) return;

    newWindow.document.write(`
      <html lang="uk">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>${item.title}</title>
          <style>
            body {
              margin: 0;
              font-family: Arial, sans-serif;
              background: #081120;
              color: white;
              padding: 30px 20px;
            }
            .container {
              max-width: 900px;
              margin: 0 auto;
            }
            .top {
              display: flex;
              justify-content: space-between;
              align-items: center;
              gap: 12px;
              margin-bottom: 24px;
              flex-wrap: wrap;
            }
            .logo {
              font-size: 14px;
              color: rgba(255,255,255,0.65);
            }
            h1 {
              margin: 0 0 18px;
              font-size: 38px;
              line-height: 1.15;
            }
            .card {
              background: rgba(255,255,255,0.05);
              border: 1px solid rgba(255,255,255,0.08);
              border-radius: 22px;
              padding: 24px;
            }
            p {
              margin: 0;
              line-height: 1.8;
              color: rgba(255,255,255,0.82);
              font-size: 17px;
            }
            button {
              border: none;
              border-radius: 14px;
              padding: 12px 18px;
              cursor: pointer;
              font-weight: 700;
              background: #00d4ff;
              color: black;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="top">
              <div class="logo">VOLVA RP — Сервер УКРАЇНА</div>
              <button onclick="window.close()">Закрити</button>
            </div>
            <div class="card">
              <h1>${item.title}</h1>
              <p>${item.full}</p>
            </div>
          </div>
        </body>
      </html>
    `);
    newWindow.document.close();
  };

  const openAllNewsPage = () => {
    const html = `
      <html lang="uk">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Новини VOLVA RP</title>
          <style>
            body {
              margin: 0;
              font-family: Arial, sans-serif;
              background: #081120;
              color: white;
              padding: 30px 20px;
            }
            .container {
              max-width: 1000px;
              margin: 0 auto;
            }
            .title {
              font-size: 40px;
              font-weight: 900;
              margin-bottom: 10px;
            }
            .subtitle {
              color: rgba(255,255,255,0.65);
              margin-bottom: 30px;
            }
            .card {
              background: rgba(255,255,255,0.05);
              border: 1px solid rgba(255,255,255,0.08);
              border-radius: 20px;
              padding: 24px;
              margin-bottom: 18px;
            }
            .card h2 {
              margin: 0 0 12px;
              font-size: 26px;
            }
            .card p {
              margin: 0;
              line-height: 1.7;
              color: rgba(255,255,255,0.78);
            }
            .back {
              margin-bottom: 24px;
            }
            .back button {
              border: none;
              border-radius: 14px;
              padding: 12px 18px;
              cursor: pointer;
              font-weight: 700;
              background: #00d4ff;
              color: black;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="back">
              <button onclick="window.close()">Закрити</button>
            </div>
            <div class="title">Новини VOLVA RP</div>
            <div class="subtitle">Останні оновлення та важлива інформація про сервер УКРАЇНА</div>
            ${newsList
              .map(
                (item) => `
                  <div class="card">
                    <h2>${item.title}</h2>
                    <p>${item.full}</p>
                  </div>
                `
              )
              .join("")}
          </div>
        </body>
      </html>
    `;
    const newWindow = window.open("", "_blank");
    if (!newWindow) return;
    newWindow.document.write(html);
    newWindow.document.close();
  };

  const openFactionPage = (item) => {
    const newWindow = window.open("", "_blank");
    if (!newWindow) return;

    newWindow.document.write(`
      <html lang="uk">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>${item.name} — VOLVA RP</title>
          <style>
            body {
              margin: 0;
              font-family: Arial, sans-serif;
              background: #081120;
              color: white;
              padding: 30px 20px;
            }
            .container {
              max-width: 900px;
              margin: 0 auto;
            }
            .top {
              display: flex;
              justify-content: space-between;
              align-items: center;
              gap: 12px;
              margin-bottom: 24px;
              flex-wrap: wrap;
            }
            .logo {
              font-size: 14px;
              color: rgba(255,255,255,0.65);
            }
            h1 {
              margin: 0 0 18px;
              font-size: 40px;
            }
            .card {
              background: rgba(255,255,255,0.05);
              border: 1px solid rgba(255,255,255,0.08);
              border-radius: 22px;
              padding: 24px;
            }
            .desc {
              font-size: 18px;
              line-height: 1.8;
              color: rgba(255,255,255,0.82);
            }
            button {
              border: none;
              border-radius: 14px;
              padding: 12px 18px;
              cursor: pointer;
              font-weight: 700;
              background: #00d4ff;
              color: black;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="top">
              <div class="logo">VOLVA RP — Сервер УКРАЇНА</div>
              <button onclick="window.close()">Закрити</button>
            </div>
            <div class="card">
              <h1>${item.name}</h1>
              <div class="desc">${item.full}</div>
            </div>
          </div>
        </body>
      </html>
    `);
    newWindow.document.close();
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
           Це не просто сервер.<br />
           Це твоє нове життя — <span>Volya RP</span>
         </h1>

          <p>
            VOLVA RP — це сайт твого проєкту: новини, фракції, підтримка,
            запуск гри та вся основна інформація в одному місці.
          </p>

          <div className="btn-row">
            <button
              className="btn primary"
              onClick={() => showDev("Лаунчер зараз у розробці, зверніться до Мирона Бумера")}
            >
              Завантажити лаунчер
            </button>

            <button className="btn ghost" onClick={() => goTo("about")}>
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
              <button
                className="btn small"
                onClick={() => showDev("Запуск сервера зараз у розробці, зверніться до Мирона Бумера")}
              >
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
          <button className="btn ghost" onClick={openAllNewsPage}>
            Усі новини
          </button>
        </div>

        <div className="grid three">
          {newsList.map((item) => (
            <div className="card news-card" key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <button className="btn small" onClick={() => openNewsPage(item)}>
                Детальніше
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="container section" id="factions">
        <h2>Фракції</h2>
        <div className="grid four">
          {factions.map((item) => (
            <div className="card faction-card" key={item.id}>
              <div>
                <div className="faction-name">{item.name}</div>
                <div className="faction-sub">{item.desc}</div>
              </div>
              <button className="btn small" onClick={() => openFactionPage(item)}>
                Відкрити
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="container section support" id="support">
        <div className="support-box">
          <h2>Потрібна допомога?</h2>
          <p>Тут розміщені кнопки офіційної технічної підтримки проєкту.</p>

          <div className="btn-row">
            <button
              className="btn black"
              onClick={() => openLink("https://t.me/Volva_rp_bot")}
            >
              Telegram підтримка
            </button>
            <button
              className="btn ghost darkghost"
              onClick={() => openLink("https://discord.gg/vRweSuwP")}
            >
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
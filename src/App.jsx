import { useState } from "react";
import { DOWNLOAD_URL, APP_VERSION, CONTACT_EMAIL } from "./config.js";

const features = [
  {
    icon: "🔔",
    title: "Lembretes que funcionam offline",
    text: "Notificações locais no horário certo, diárias ou em dias específicos da semana. Sem internet e sem conta.",
  },
  {
    icon: "📦",
    title: "Controle de estoque",
    text: "Registre o estoque inicial, reposições e ajustes. Cada administração marcada como tomada dá baixa automática.",
  },
  {
    icon: "📅",
    title: "Previsão de término",
    text: "O app calcula quando o medicamento acaba e avisa com a antecedência que você escolher, para você repor a tempo.",
  },
  {
    icon: "✅",
    title: "Registro do que foi tomado",
    text: "Marque cada dose como administrada, não administrada ou pendente — e corrija depois, com rastreio das alterações.",
  },
  {
    icon: "🗂️",
    title: "Histórico completo",
    text: "Veja administrações, movimentações de estoque e mudanças de programação em um só lugar.",
  },
  {
    icon: "🌙",
    title: "Tema claro e escuro",
    text: "Interface simples, com cadastro guiado: unidades predefinidas, datas e horários já formatados.",
  },
];

const steps = [
  { n: "1", title: "Cadastre", text: "Nome, dose, horários, dias da semana e se o uso é contínuo ou temporário." },
  { n: "2", title: "Receba lembretes", text: "O app avisa no horário e você registra se tomou a dose." },
  { n: "3", title: "Acompanhe o estoque", text: "A previsão de término é recalculada automaticamente e avisa antes de acabar." },
];

const faqs = [
  {
    q: "Preciso criar conta ou ter internet?",
    a: "Não. Os dados ficam salvos no seu celular (banco local) e os lembretes são notificações locais. Conta e internet só são necessárias se você ativar o recurso opcional do Telegram.",
  },
  {
    q: "O MediTrack indica doses ou muda meu tratamento?",
    a: "Não. O app apenas organiza o que você ou seu médico já definiram. Ele não sugere doses, não orienta compensação de doses esquecidas e não altera tratamentos. Siga sempre a orientação do seu médico ou farmacêutico.",
  },
  {
    q: "Como funcionam os lembretes no Telegram?",
    a: "É opcional. Ao conectar, o app envia ao servidor o nome, a dose, os horários e os dias ativos, e um bot do Telegram manda a mensagem no horário, mesmo com o app fechado. Você pode desconectar a qualquer momento.",
  },
  {
    q: "Meus dados são sincronizados entre aparelhos?",
    a: "Ainda não. O cadastro completo fica no aparelho. A sincronização entre dispositivos está nos planos das próximas fases.",
  },
  {
    q: "Em quais aparelhos posso instalar?",
    a: "O download direto é o instalador para Android (APK). Versão para iPhone ainda não está disponível por download direto.",
  },
];

function DownloadButton({ large = false }) {
  return (
    <a
      className={"btn btn-primary" + (large ? " btn-lg" : "")}
      href={DOWNLOAD_URL}
      download
      aria-label="Baixar o MediTrack para Android"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3v12" />
        <path d="m7 11 5 5 5-5" />
        <path d="M5 21h14" />
      </svg>
      Baixar para Android
    </a>
  );
}

function PhoneMock() {
  return (
    <div className="phone" aria-hidden="true">
      <div className="phone-notch" />
      <div className="phone-screen">
        <div className="mock-head">
          <span>Hoje</span>
          <small>Seg, 16 nov</small>
        </div>
        <div className="mock-card">
          <div>
            <strong>Losartana</strong>
            <small>50 mg · 08:00</small>
          </div>
          <span className="pill ok">Tomado</span>
        </div>
        <div className="mock-card">
          <div>
            <strong>Vitamina D</strong>
            <small>1 cápsula · 12:00</small>
          </div>
          <span className="pill wait">Pendente</span>
        </div>
        <div className="mock-card">
          <div>
            <strong>Metformina</strong>
            <small>850 mg · 20:00</small>
          </div>
          <span className="pill wait">Pendente</span>
        </div>
        <div className="mock-alert">
          📦 Losartana acaba em 6 dias — hora de repor
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a href="#topo" className="brand">
            <span className="brand-icon">💊</span> MediTrack
          </a>
          <nav className="nav-links">
            <a href="#recursos">Recursos</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#privacidade">Privacidade</a>
            <a href="#faq">Dúvidas</a>
          </nav>
          <a className="btn btn-small" href="#download">Baixar</a>
        </div>
      </header>

      <main id="topo">
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <span className="badge">Gratuito · Funciona offline</span>
              <h1>Organize seus medicamentos sem complicação.</h1>
              <p className="lead">
                O MediTrack lembra do horário de cada dose, controla o estoque e avisa quando
                está na hora de repor — tudo no seu celular, sem precisar de conta.
              </p>
              <div className="hero-actions">
                <DownloadButton large />
                <a className="btn btn-ghost btn-lg" href="#recursos">Ver recursos</a>
              </div>
              <p className="small muted">
                Versão {APP_VERSION} · Instalador para Android (APK)
              </p>
            </div>
            <PhoneMock />
          </div>
        </section>

        <section id="recursos" className="section">
          <div className="container">
            <h2>Tudo o que você precisa para não esquecer nem ficar sem</h2>
            <p className="section-sub">
              Foco no essencial: lembrar, registrar e prever.
            </p>
            <div className="grid">
              {features.map((f) => (
                <article className="card" key={f.title}>
                  <div className="card-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="section alt">
          <div className="container">
            <h2>Como funciona</h2>
            <div className="steps">
              {steps.map((s) => (
                <div className="step" key={s.n}>
                  <span className="step-n">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="privacidade" className="section">
          <div className="container split">
            <div>
              <h2>Seus dados ficam com você</h2>
              <p className="section-sub left">
                Por padrão, o MediTrack guarda tudo localmente no aparelho. Não há conta, não há
                nuvem e não há necessidade de internet para usar.
              </p>
              <ul className="checks">
                <li>Banco de dados local no celular</li>
                <li>Lembretes por notificações locais</li>
                <li>Telegram é opcional e pode ser desconectado a qualquer momento</li>
                <li>“Apagar todos os dados” remove também a configuração remota</li>
              </ul>
            </div>
            <aside className="notice">
              <strong>Importante</strong>
              <p>
                O MediTrack é uma ferramenta de organização. Ele <b>não</b> sugere doses, não indica
                o que fazer em caso de dose esquecida e não substitui a orientação de um médico ou
                farmacêutico.
              </p>
            </aside>
          </div>
        </section>

        <section id="faq" className="section alt">
          <div className="container narrow">
            <h2>Perguntas frequentes</h2>
            <div className="faq">
              {faqs.map((f, i) => (
                <div className={"faq-item" + (open === i ? " open" : "")} key={f.q}>
                  <button
                    className="faq-q"
                    aria-expanded={open === i}
                    onClick={() => setOpen(open === i ? -1 : i)}
                  >
                    {f.q}
                    <span className="chev" aria-hidden="true">+</span>
                  </button>
                  {open === i && <p className="faq-a">{f.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="download" className="cta">
          <div className="container cta-inner">
            <h2>Comece a organizar seus medicamentos hoje</h2>
            <p>Baixe o MediTrack e configure seu primeiro lembrete em poucos minutos.</p>
            <DownloadButton large />
            <details className="install">
              <summary>Como instalar o APK no Android</summary>
              <ol>
                <li>Toque em “Baixar para Android” e aguarde o download terminar.</li>
                <li>Abra o arquivo baixado.</li>
                <li>
                  Se o Android pedir, permita a instalação de apps desta fonte (Configurações →
                  Segurança). Só faça isso para este arquivo, vindo deste site.
                </li>
                <li>Toque em Instalar e abra o MediTrack.</li>
              </ol>
            </details>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} MediTrack</span>
          <span className="muted">
            Não substitui orientação médica.
            {CONTACT_EMAIL && (
              <>
                {" "}· <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </>
            )}
          </span>
        </div>
      </footer>
    </>
  );
}

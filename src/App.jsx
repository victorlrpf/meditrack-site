import { useState } from "react";
import {
  ArrowDownToLine,
  ArrowRight,
  BellRing,
  CalendarClock,
  Check,
  CheckCheck,
  ChevronDown,
  ClipboardCheck,
  Clock3,
  HeartPulse,
  History,
  Moon,
  PackageCheck,
  Pill,
  ShieldCheck,
} from "lucide-react";
import { DOWNLOAD_URL, APP_VERSION, CONTACT_EMAIL } from "./config.js";

const features = [
  {
    icon: BellRing,
    title: "Lembretes que funcionam offline",
    text: "Notificações locais no horário certo, diárias ou em dias específicos da semana. Sem internet e sem conta.",
  },
  {
    icon: PackageCheck,
    title: "Controle de estoque",
    text: "Registre o estoque inicial, reposições e ajustes. Cada administração marcada como tomada dá baixa automática.",
  },
  {
    icon: CalendarClock,
    title: "Previsão de término",
    text: "O app calcula quando o medicamento acaba e avisa com a antecedência que você escolher, para você repor a tempo.",
  },
  {
    icon: ClipboardCheck,
    title: "Registro do que foi tomado",
    text: "Marque cada dose como administrada, não administrada ou pendente — e corrija depois, com rastreio das alterações.",
  },
  {
    icon: History,
    title: "Histórico completo",
    text: "Veja administrações, movimentações de estoque e mudanças de programação em um só lugar.",
  },
  {
    icon: Moon,
    title: "Tema claro e escuro",
    text: "Interface simples, com cadastro guiado: unidades predefinidas, datas e horários já formatados.",
  },
];

const steps = [
  { n: "01", icon: Pill, title: "Cadastre", text: "Nome, dose, horários, dias da semana e se o uso é contínuo ou temporário." },
  { n: "02", icon: BellRing, title: "Receba lembretes", text: "O app avisa no horário e você registra se tomou a dose." },
  { n: "03", icon: PackageCheck, title: "Acompanhe o estoque", text: "A previsão de término é recalculada automaticamente e avisa antes de acabar." },
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
      <ArrowDownToLine size={19} strokeWidth={2.2} aria-hidden="true" />
      Baixar para Android
    </a>
  );
}

function PhoneMock() {
  return (
    <div className="preview-wrap" aria-hidden="true">
      <div className="preview-orbit" aria-hidden="true" />
      <div className="phone">
        <div className="phone-top"><span /><span /></div>
        <div className="phone-screen">
          <div className="app-greeting">
            <div>
              <span className="app-date">SEGUNDA-FEIRA, 16 NOV</span>
              <h2>Olá, Alex</h2>
            </div>
            <div className="avatar"><HeartPulse size={19} /></div>
          </div>
          <div className="today-card">
            <div className="today-title">
              <span>Suas doses de hoje</span>
              <span className="today-count">1 de 3</span>
            </div>
            <div className="progress-track"><span /></div>
            <span className="progress-caption">Você está no caminho certo</span>
          </div>
          <div className="schedule-heading">
            <strong>Próximos horários</strong>
            <span>Ver todos <ArrowRight size={13} /></span>
          </div>
          <div className="mock-card taken">
            <span className="med-icon"><Pill size={16} /></span>
            <div className="med-info">
              <strong>Losartana</strong>
              <small>50 mg · 08:00</small>
            </div>
            <span className="med-status"><Check size={14} /> Tomado</span>
          </div>
          <div className="mock-card">
            <span className="med-icon lavender"><Pill size={16} /></span>
            <div className="med-info">
              <strong>Vitamina D</strong>
              <small>1 cápsula · 12:00</small>
            </div>
            <span className="med-time">12:00</span>
          </div>
          <div className="mock-card">
            <span className="med-icon peach"><Pill size={16} /></span>
            <div className="med-info">
              <strong>Metformina</strong>
              <small>850 mg · 20:00</small>
            </div>
            <span className="med-time">20:00</span>
          </div>
          <div className="stock-card">
            <span className="stock-icon"><PackageCheck size={17} /></span>
            <div><strong>Estoque da Losartana</strong><small>Acaba em 6 dias</small></div>
            <ArrowRight size={15} />
          </div>
          <div className="app-tabbar">
            <span className="active"><CheckCheck size={17} />Hoje</span>
            <span><Pill size={17} />Remédios</span>
            <span><History size={17} />Histórico</span>
          </div>
        </div>
      </div>
      <div className="floating-note">
        <span className="floating-icon"><BellRing size={17} /></span>
        <span><strong>Lembrete ativado</strong><small>Seus dados ficam no aparelho</small></span>
        <Check size={16} className="floating-check" />
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
            <span className="brand-icon"><HeartPulse size={21} strokeWidth={2.4} /></span>
            MediTrack
          </a>
          <nav className="nav-links" aria-label="Navegação principal">
            <a href="#recursos">Recursos</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#privacidade">Privacidade</a>
            <a href="#faq">Dúvidas</a>
          </nav>
          <a className="btn btn-small" href="#download">Baixar app <ArrowRight size={15} /></a>
        </div>
      </header>

      <main id="topo">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="badge"><span className="badge-dot" /> Cuidado mais simples, todos os dias</span>
              <h1>Seu tratamento organizado. <span>Você mais tranquilo.</span></h1>
              <p className="lead">
                Lembretes, controle de estoque e histórico dos seus medicamentos — em um só lugar,
                direto no seu celular.
              </p>
              <div className="hero-actions">
                <DownloadButton large />
                <a className="btn btn-ghost btn-lg" href="#recursos">Conhecer o app <ArrowRight size={17} /></a>
              </div>
              <div className="hero-meta">
                <span><ShieldCheck size={16} /> Seus dados no seu aparelho</span>
                <span className="meta-separator" />
                <span><Clock3 size={16} /> Funciona offline</span>
              </div>
              <p className="version">Gratuito para Android <span>·</span> Versão {APP_VERSION}</p>
            </div>
            <PhoneMock />
          </div>
          <div className="hero-bottom container">
            <span>FEITO PARA A ROTINA REAL</span>
            <div><span><Check size={15} /> Sem conta</span><span><Check size={15} /> Sem mensalidade</span><span><Check size={15} /> Sem internet</span></div>
          </div>
        </section>

        <section id="recursos" className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">MAIS CONTROLE, MENOS PREOCUPAÇÃO</span>
              <h2>O cuidado do dia a dia, <span>em boas mãos.</span></h2>
              <p className="section-sub">Tudo o que você precisa para acompanhar seus medicamentos com mais clareza e tranquilidade.</p>
            </div>
            <div className="grid">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <article className="card" key={f.title}>
                    <div className="card-icon"><Icon size={21} strokeWidth={1.9} /></div>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="section how-section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">SIMPLES DESDE O PRIMEIRO DIA</span>
              <h2>Comece em <span>três passos.</span></h2>
            </div>
            <div className="steps">
              {steps.map((s) => {
                const Icon = s.icon;
                return (
                  <div className="step" key={s.n}>
                    <div className="step-top"><span className="step-n">{s.n}</span><Icon size={20} /></div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="privacidade" className="section">
          <div className="container split">
            <div>
              <span className="eyebrow">PRIVACIDADE POR PADRÃO</span>
              <h2>Seus dados ficam <span>com você.</span></h2>
              <p className="section-sub left">
                Por padrão, o MediTrack guarda tudo localmente no aparelho. Não há conta, não há
                nuvem e não há necessidade de internet para usar.
              </p>
              <ul className="checks">
                <li><Check size={15} /> Banco de dados local no celular</li>
                <li><Check size={15} /> Lembretes por notificações locais</li>
                <li><Check size={15} /> Telegram opcional e desconectável a qualquer momento</li>
                <li><Check size={15} /> “Apagar todos os dados” remove também a configuração remota</li>
              </ul>
            </div>
            <aside className="notice">
              <span className="notice-icon"><ShieldCheck size={21} /></span>
              <div>
                <strong>Um lembrete importante</strong>
                <p>
                  O MediTrack é uma ferramenta de organização. Ele <b>não</b> sugere doses, não indica
                  o que fazer em caso de dose esquecida e não substitui a orientação de um médico ou
                  farmacêutico.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section id="faq" className="section faq-section">
          <div className="container narrow">
            <div className="section-heading">
              <span className="eyebrow">TIRE SUAS DÚVIDAS</span>
              <h2>Perguntas <span>frequentes.</span></h2>
            </div>
            <div className="faq">
              {faqs.map((f, i) => (
                <div className={"faq-item" + (open === i ? " open" : "")} key={f.q}>
                  <button
                    className="faq-q"
                    aria-expanded={open === i}
                    onClick={() => setOpen(open === i ? -1 : i)}
                  >
                    {f.q}
                    <span className="chev" aria-hidden="true"><ChevronDown size={18} /></span>
                  </button>
                  {open === i && <p className="faq-a">{f.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="download" className="cta">
          <div className="container cta-inner">
            <span className="cta-icon"><HeartPulse size={24} /></span>
            <span className="eyebrow">MEDTRACK PARA ANDROID</span>
            <h2>Mais leveza para cuidar da sua rotina.</h2>
            <p>Baixe o MediTrack e configure seu primeiro lembrete em poucos minutos.</p>
            <DownloadButton large />
            <span className="cta-caption"><ShieldCheck size={15} /> Download gratuito e direto para Android (APK)</span>
            <details className="install">
              <summary>Como instalar o APK no Android <ChevronDown size={16} /></summary>
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
          <a href="#topo" className="brand footer-brand"><span className="brand-icon"><HeartPulse size={18} /></span>MediTrack</a>
          <span className="muted">
            © {new Date().getFullYear()} MediTrack <span className="footer-dot">·</span> Não substitui orientação médica.
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

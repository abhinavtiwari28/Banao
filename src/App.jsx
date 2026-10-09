import Builder from "./Builder.jsx";
import { brand, services, process, work } from "./content.js";

function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label={`${brand.name} home`}>
        {brand.name}
      </a>
      <nav aria-label="Main">
        <a href="#services">Services</a>
        <a href="#process">Kaise kaam hota hai</a>
        <a href="#work">Kaam</a>
        <a className="nav-cta" href="#brief">
          Brief bhejo
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <h1>
          <span className="h-light">Idea aapka.</span>
          <span className="h-heavy">Software hamara.</span>
        </h1>
        <p className="lead">
          Website, AI chatbot, Android app ya automation. Apna idea neeche
          likho, hum plan aur quote ke saath wapas aate hain.
        </p>
      </div>
      <Builder />
    </section>
  );
}

function Services() {
  return (
    <section className="block" id="services">
      <h2 className="block-title">Hum kya bana sakte hain</h2>
      <div className="service-list">
        {services.map((s) => (
          <details key={s.title} className="service">
            <summary>
              <span className="service-title">{s.title}</span>
              <span className="service-summary">{s.summary}</span>
            </summary>
            <div className="service-body">
              <ul>
                {s.examples.map((ex) => (
                  <li key={ex}>{ex}</li>
                ))}
              </ul>
              <p className="service-tech">Tools: {s.tech}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="block" id="process">
      <h2 className="block-title">Kaise kaam hota hai</h2>
      <ol className="steps">
        {process.map((step) => (
          <li key={step.title}>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Work() {
  return (
    <section className="block" id="work">
      <h2 className="block-title">Pehle kya banaya hai</h2>
      <ul className="work-list">
        {work.map((w) => (
          <li key={w.title}>
            <div className="work-head">
              <h3>{w.title}</h3>
              <span className="work-kind">{w.kind}</span>
            </div>
            <p>{w.text}</p>
            <p className="work-stack">{w.stack}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-line">Kuch banwana hai? Pehle brief bhejo, baaki hum sambhal lenge.</p>
        <a className="btn primary" href="#brief">
          Brief bhejo
        </a>
      </div>
      <p className="footer-small">
        {brand.email} | WhatsApp +{brand.whatsapp} | {new Date().getFullYear()}{" "}
        {brand.name}
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip" href="#services">
        Content par jao
      </a>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Work />
      </main>
      <Footer />
    </>
  );
}

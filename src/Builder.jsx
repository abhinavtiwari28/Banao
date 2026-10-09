import { useState } from "react";
import { brand, projectTypes, budgets } from "./content.js";

function buildMessage({ name, types, budget, idea }) {
  const lines = [
    `Hi ${brand.name}, main ${name.trim() || "ek naya client"} bol raha hoon.`,
    `Mujhe chahiye: ${types.join(", ")}`,
    `Budget: ${budget}`,
    `Idea: ${idea.trim()}`,
  ];
  return lines.join("\n");
}

function SheetLine({ label, value }) {
  // key={value} dobara mount karta hai, jisse line change hone par highlight chamakta hai
  return (
    <div className="sheet-line">
      <dt>{label}</dt>
      <dd key={value} className="flash">
        {value}
      </dd>
    </div>
  );
}

export default function Builder() {
  const [types, setTypes] = useState([]);
  const [budget, setBudget] = useState(budgets[0]);
  const [idea, setIdea] = useState("");
  const [name, setName] = useState("");

  const ready = types.length > 0 && idea.trim().length > 0;
  const empty = types.length === 0 && idea.trim().length === 0;

  function toggleType(type) {
    setTypes((current) =>
      current.includes(type)
        ? current.filter((t) => t !== type)
        : [...current, type]
    );
  }

  function sendWhatsApp() {
    if (!ready) return;
    const text = encodeURIComponent(buildMessage({ name, types, budget, idea }));
    window.open(`https://wa.me/${brand.whatsapp}?text=${text}`, "_blank", "noopener");
  }

  function sendEmail() {
    if (!ready) return;
    const subject = encodeURIComponent(`Naya project: ${types.join(", ")}`);
    const body = encodeURIComponent(buildMessage({ name, types, budget, idea }));
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="builder" id="brief">
      <form className="brief" onSubmit={(e) => e.preventDefault()}>
        <fieldset>
          <legend>Kya banwana hai? Ek ya zyada chuno.</legend>
          <div className="chips">
            {projectTypes.map((type) => (
              <label key={type} className="chip">
                <input
                  type="checkbox"
                  checked={types.includes(type)}
                  onChange={() => toggleType(type)}
                />
                <span>{type}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <label className="field">
          <span>Idea ek-do line mein likho</span>
          <textarea
            rows={4}
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="Jaise: meri dukaan ke orders WhatsApp par aate hain, unhe ek sheet mein apne aap likhna hai."
          />
        </label>

        <div className="row">
          <label className="field">
            <span>Budget</span>
            <select value={budget} onChange={(e) => setBudget(e.target.value)}>
              {budgets.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
          </label>
          <label className="field">
            <span>Aapka naam</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Naam"
              autoComplete="name"
            />
          </label>
        </div>
      </form>

      <aside className="sheet" aria-live="polite">
        <h2>Aapka build sheet</h2>
        {empty ? (
          <p className="sheet-empty">
            Abhi kuch nahi chuna. Left side se project type chuno aur idea likho,
            yahan aapki list banti jayegi.
          </p>
        ) : (
          <dl>
            <SheetLine
              label="Banwana hai"
              value={types.length ? types.join(", ") : "Type abhi nahi chuna"}
            />
            <SheetLine label="Budget" value={budget} />
            <SheetLine
              label="Idea"
              value={idea.trim() ? idea.trim() : "Idea abhi nahi likha"}
            />
            {name.trim() && <SheetLine label="Naam" value={name.trim()} />}
          </dl>
        )}

        <div className="sheet-actions">
          <button
            type="button"
            className="btn primary"
            onClick={sendWhatsApp}
            disabled={!ready}
          >
            WhatsApp par bhejo
          </button>
          <button
            type="button"
            className="btn quiet"
            onClick={sendEmail}
            disabled={!ready}
          >
            Email se bhejo
          </button>
        </div>
        {!ready && (
          <p className="sheet-hint">
            Bhejne ke liye kam se kam ek type chuno aur idea likho.
          </p>
        )}
      </aside>
    </div>
  );
}

import React, { useState } from 'react';
import { Check, TrendingUp, FileText, BarChart3, Zap } from 'lucide-react';

export default function ValorisationSite() {
  const [activeService, setActiveService] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    {
      icon: FileText,
      title: "Diagnostic gratuit",
      desc: "5 min pour tester",
      price: "0€",
      features: ["Questionnaire simple", "Score de santé", "3 recommandations", "Reçu par email"]
    },
    {
      icon: BarChart3,
      title: "Analyse financière",
      desc: "Compréhension complète",
      price: "300€",
      features: ["Analyse détaillée du bilan", "Ratios financiers", "Benchmarking secteur", "Plan d'action"]
    },
    {
      icon: TrendingUp,
      title: "Valorisation approfondie",
      desc: "Pour cession/levée",
      price: "800€",
      features: ["Multiples de valorisation", "DCF complet", "Comparables", "Recommandations"]
    },
    {
      icon: Zap,
      title: "Rapport complet",
      desc: "Solution premium",
      price: "1500€",
      features: ["Audit financier complet", "Scenarios de croissance", "Optimisations fiscales", "Présentation"]
    }
  ];

  const steps = [
    { num: 1, title: "Diagnostic", desc: "Vous remplissez le questionnaire gratuit en 5 min" },
    { num: 2, title: "Résultat", desc: "Vous recevez un rapport auto-généré avec score" },
    { num: 3, title: "Décision", desc: "Vous choisissez d'approfondir ou non" },
    { num: 4, title: "Analyse", desc: "Nous créons votre rapport personalisé" },
    { num: 5, title: "Livraison", desc: "Rapport professionnel + recommandations" }
  ];

  const faqs = [
    {
      q: "Vous êtes expert-comptable ?",
      a: "Non, nous offrons une analyse complémentaire à moindre coût. Nos services ne remplacent pas l'expert-comptable officiel mais vous aide à comprendre votre bilan avant de le rencontrer."
    },
    {
      q: "Comment ça marche ?",
      a: "Vous commencez par un diagnostic gratuit de 5 minutes. Si convaincu, vous choisissez une analyse payante. Nous générons un rapport professionnel avec recommandations."
    },
    {
      q: "Quels freelances y sont éligibles ?",
      a: "Tous les secteurs ! Services, conseil, e-commerce, artisans... Si vous êtes indépendant et avez un bilan, c'est pour vous."
    },
    {
      q: "Combien de temps pour le rapport ?",
      a: "24-48h après réception de vos données. Vous recevez un PDF professionnel prêt à utiliser."
    }
  ];

  return (
    <div style={{ fontFamily: "var(--font-sans)", color: "var(--color-text-primary)", background: "var(--color-background-primary)" }}>
      
      {/* Navigation */}
      <nav style={{ padding: "1.5rem 2rem", borderBottom: "0.5px solid var(--color-border-tertiary)", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, background: "var(--color-background-primary)", zIndex: 100 }}>
        <div style={{ fontSize: "20px", fontWeight: "500", background: "linear-gradient(135deg, #185FA5 0%, #1D9E75 100%)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>FinAnalyse</div>
        <div style={{ display: "flex", gap: "2rem", fontSize: "14px" }}>
          <a href="#services" style={{ color: "var(--color-text-secondary)", cursor: "pointer", textDecoration: "none" }}>Services</a>
          <a href="#tarifs" style={{ color: "var(--color-text-secondary)", cursor: "pointer", textDecoration: "none" }}>Tarifs</a>
          <a href="#faq" style={{ color: "var(--color-text-secondary)", cursor: "pointer", textDecoration: "none" }}>FAQ</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "4rem 2rem", background: "linear-gradient(135deg, #E6F1FB 0%, #E1F5EE 100%)", textAlign: "center" }}>
        <h1 style={{ fontSize: "48px", fontWeight: "500", marginBottom: "1rem", color: "var(--color-text-primary)" }}>Comprenez votre bilan en 5 minutes</h1>
        <p style={{ fontSize: "18px", color: "var(--color-text-secondary)", maxWidth: "600px", margin: "0 auto 2rem", lineHeight: "1.6" }}>Diagnostic gratuit de votre santé financière. Analyse complète. Recommandations actionnables.</p>
        <button onClick={() => window.location.href = "#diagnostic"} style={{ padding: "12px 32px", fontSize: "16px", fontWeight: "500", background: "linear-gradient(135deg, #185FA5 0%, #0C447C 100%)", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", boxShadow: "0 4px 12px rgba(24, 95, 165, 0.3)" }}>Commencer (gratuit)</button>
      </section>

      {/* Services Section */}
      <section id="services" style={{ padding: "3rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "500", marginBottom: "0.5rem", textAlign: "center" }}>Nos services</h2>
        <p style={{ fontSize: "16px", color: "var(--color-text-secondary)", textAlign: "center", marginBottom: "2rem" }}>Du diagnostic gratuit à l'analyse complète</p>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", marginBottom: "2rem" }}>
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} onClick={() => setActiveService(idx)} style={{ padding: "1.5rem", background: "var(--color-background-primary)", border: `2px solid ${activeService === idx ? "#185FA5" : "var(--color-border-tertiary)"}`, borderRadius: "12px", cursor: "pointer", transition: "all 0.3s", transform: activeService === idx ? "scale(1.02)" : "scale(1)" }}>
                <Icon size={32} style={{ color: "#185FA5", marginBottom: "12px" }} />
                <h3 style={{ fontSize: "18px", fontWeight: "500", marginBottom: "4px" }}>{service.title}</h3>
                <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", marginBottom: "12px" }}>{service.desc}</p>
                <div style={{ fontSize: "24px", fontWeight: "500", color: "#185FA5", marginBottom: "16px" }}>{service.price}</div>
              </div>
            );
          })}
        </div>

        {/* Service Details */}
        <div style={{ padding: "2rem", background: "var(--color-background-secondary)", borderRadius: "12px", marginTop: "2rem" }}>
          <h3 style={{ marginBottom: "1rem" }}>{services[activeService].title}</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {services[activeService].features.map((feature, idx) => (
              <li key={idx} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", fontSize: "14px" }}>
                <Check size={16} style={{ color: "#1D9E75", flexShrink: 0 }} /> {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: "3rem 2rem", background: "var(--color-background-secondary)", marginTop: "2rem" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "500", marginBottom: "2rem", textAlign: "center" }}>Comment ça marche</h2>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "20px" }}>
          {steps.map((step, idx) => (
            <div key={idx} style={{ textAlign: "center" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "linear-gradient(135deg, #185FA5 0%, #1D9E75 100%)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", fontWeight: "500", margin: "0 auto 12px" }}>{step.num}</div>
              <h4 style={{ fontWeight: "500", marginBottom: "4px", fontSize: "14px" }}>{step.title}</h4>
              <p style={{ fontSize: "12px", color: "var(--color-text-secondary)", lineHeight: "1.4" }}>{step.desc}</p>
              {idx < steps.length - 1 && <div style={{ margin: "12px 0", color: "var(--color-border-tertiary)" }}>↓</div>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "3rem 2rem", textAlign: "center", background: "linear-gradient(135deg, #E6F1FB 0%, #E1F5EE 100%)" }} id="diagnostic">
        <h2 style={{ fontSize: "32px", fontWeight: "500", marginBottom: "1rem" }}>Prêt à analyser votre bilan ?</h2>
        <p style={{ fontSize: "16px", color: "var(--color-text-secondary)", marginBottom: "1.5rem" }}>Diagnostic gratuit en 5 minutes, résultats immédiats</p>
        <button style={{ padding: "14px 40px", fontSize: "16px", fontWeight: "500", background: "linear-gradient(135deg, #185FA5 0%, #0C447C 100%)", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", boxShadow: "0 4px 12px rgba(24, 95, 165, 0.3)" }}>Commencer le diagnostic</button>
      </section>

      {/* Tarifs */}
      <section id="tarifs" style={{ padding: "3rem 2rem", maxWidth: "1200px", margin: "0 auto", marginTop: "2rem" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "500", marginBottom: "2rem", textAlign: "center" }}>Tarification simple et transparente</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
          {services.map((service, idx) => (
            <div key={idx} style={{ padding: "1.5rem", background: idx === 1 ? "#E6F1FB" : "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "12px" }}>
              <div style={{ fontSize: "24px", fontWeight: "500", marginBottom: "8px" }}>{service.price}</div>
              <p style={{ fontSize: "14px", fontWeight: "500", marginBottom: "1rem" }}>{service.title}</p>
              <p style={{ fontSize: "12px", color: "var(--color-text-secondary)" }}>{service.desc}</p>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", fontSize: "13px", color: "var(--color-text-secondary)", marginTop: "1.5rem" }}>💡 Diagnostic gratuit = parfait pour commencer. Payant = pour approfondir quand vous êtes convaincu.</p>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: "3rem 2rem", background: "var(--color-background-secondary)", marginTop: "2rem" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "500", marginBottom: "2rem", textAlign: "center" }}>Questions fréquentes</h2>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{ marginBottom: "12px", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "8px", overflow: "hidden" }}>
              <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} style={{ width: "100%", padding: "1rem", background: "var(--color-background-primary)", border: "none", textAlign: "left", fontSize: "14px", fontWeight: "500", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {faq.q}
                <span style={{ fontSize: "16px" }}>{openFaq === idx ? "−" : "+"}</span>
              </button>
              {openFaq === idx && (
                <div style={{ padding: "1rem", background: "var(--color-background-secondary)", fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: "1.6" }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "2rem", textAlign: "center", fontSize: "12px", color: "var(--color-text-secondary)", borderTop: "0.5px solid var(--color-border-tertiary)", marginTop: "2rem" }}>
        <p>© 2026 FinAnalyse. Service d'analyse financière pour indépendants et freelances.</p>
      </footer>
    </div>
  );
}

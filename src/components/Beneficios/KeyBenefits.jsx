import BenefitsCard from "./BenefitsCard";

const benefits = [
    {
        header: "Aumento de Produtividade",
        iconClass: "fas fa-percentage",
        text: "Aumente sua produtividade em até 30% com decisões baseadas em dados precisos e recomendações personalizadas.",
    },
    {
        header: "Redução de Custos",
        iconClass: "fas fa-dollar-sign",
        text: "Otimize o uso de recursos como água, fertilizantes e defensivos, reduzindo custos operacionais em até 25%.",
    },
    {
        header: "Sustentabilidade",
        iconClass: "fas fa-leaf",
        text: "Promova práticas agrícolas mais sustentáveis,reduzindo o impacto ambiental e preservando recursos naturais.",
    },
    {
        header: "Economia de Tempo",
        iconClass: "fas fa-clock",
        text: "Automatize processos e reduza o tempo gasto em monitoramento manual e tomada de decisões.",
    },
];

export default function KeyBenefits() {
    return (
        <section className="key-benefits">
            <div className="container">
                <div className="section-header">
                    <h2>Principais Benefícios</h2>
                    <p>
                        Nossas soluções oferecem vantagens competitivas que
                        impulsionam seu negócio agrícola.
                    </p>
                </div>
                <div className="benefits-grid">
                    {benefits.map((benefit, i) => (
                        <BenefitsCard
                            key={i}
                            header={benefit.header}
                            iconClass={benefit.iconClass}
                            text={benefit.text}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

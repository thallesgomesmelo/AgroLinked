import BenefitsCard from "./BenefitsCard";

export default function KeyBenefits() {
    const iconsClasses = [
        "fas fa-percentage",
        "fas fa-dollar-sign",
        "fas fa-leaf",
        "fas fa-clock",
    ];

    const headers = [
        "Aumento de Produtividade",
        "Redução de Custos",
        "Sustentabilidade",
        "Economia de Tempo",
    ];

    const texts = [
        "Aumente sua produtividade em até 30% com decisões baseadas em dados precisos e recomendações personalizadas.",
        "Otimize o uso de recursos como água, fertilizantes e defensivos, reduzindo custos operacionais em até 25%.",
        "Promova práticas agrícolas mais sustentáveis,reduzindo o impacto ambiental e preservando recursos naturais.",
        "Automatize processos e reduza o tempo gasto em monitoramento manual e tomada de decisões.",
    ];
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
                    {headers.map((header, i) => (
                        <BenefitsCard
                            key={i}
                            header={header}
                            iconClass={iconsClasses[i]}
                            text={texts[i]}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

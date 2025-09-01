import SustentabilidadeImg from "../../assets/Sustentabilidade.png";
import SustainabilityCard from "./SustainabilityCard";

const sustainabilityCards = [
    {
        iconClass: "fas fa-seedling",
        title: "Redução de Químicos",
        description:
            "Aplicação precisa reduz o uso de defensivos agrícolas em até 30%.",
    },
    {
        iconClass: "fas fa-chart-line",
        title: "Economia de Água",
        description: "Irrigação inteligente economiza até 40% de água.",
    },
    {
        iconClass: "fas fa-chart-bar",
        title: "Redução de Emissões",
        description: "Otimização de operações reduz emissões de carbono.",
    },
    {
        iconClass: "fas fa-leaf",
        title: "Biodiversidade",
        description: "Práticas sustentáveis preservam a biodiversidade local.",
    },
];

export default function Sustainability() {
    return (
        <section className="sustainability">
            <div className="container">
                <div className="sustainability-content">
                    <div className="sustainability-image">
                        <img src={SustentabilidadeImg} alt="Sustentabilidade" />
                    </div>
                    <div className="sustainability-text">
                        <h2>Impacto Ambiental Positivo</h2>
                        <p>
                            Além dos benefícios econômicos, nossas soluções
                            contribuem para práticas agrícolas mais sustentáveis
                            e um impacto ambiental positivo.
                        </p>

                        <div className="sustainability-grid">
                            {sustainabilityCards.map((card, idx) => (
                                <SustainabilityCard
                                    key={idx}
                                    iconClass={card.iconClass}
                                    title={card.title}
                                    description={card.description}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

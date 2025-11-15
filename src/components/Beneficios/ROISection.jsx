import RetornoImg from "../../assets/Retorno.png";
import ROIStat from "./ROIStat";
import ROICalcButton from "./ROICalcButton";

const stats = [
    {
        number: "30%",
        title: "Aumento de Produtividade",
        description: "Maior rendimento por hectare",
    },
    {
        number: "25%",
        title: "Redução de Custos",
        description: "Menor gasto com insumos",
    },
    {
        number: "40%",
        title: "Economia de Água",
        description: "Irrigação mais eficiente",
    },
    {
        number: "20%",
        title: "Redução de Perdas",
        description: "Menor perda por pragas e doenças",
    },
];

export default function ROISection() {
    return (
        <section className="roi-section">
            <div className="container">
                <div className="roi-content">
                    <div className="roi-text">
                        <h2>Retorno sobre Investimento</h2>
                        <p>
                            As soluções AgroLinked proporcionarão um retorno
                            sobre investimento expressivo, com tecnologia
                            inovadora projetada para transformar e potencializar
                            os resultados financeiros do agronegócio. Confira as
                            estimativas de impacto econômico para aqueles que
                            adotarem nossa solução.
                        </p>

                        <div className="roi-stats">
                            {stats.map((stat, idx) => (
                                <ROIStat
                                    key={idx}
                                    number={stat.number}
                                    title={stat.title}
                                    description={stat.description}
                                />
                            ))}
                        </div>

                        <ROICalcButton />
                    </div>
                    <div className="roi-image">
                        <img
                            src={RetornoImg}
                            alt="Retorno sobre Investimento"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

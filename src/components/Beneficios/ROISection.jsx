import RetornoImg from "../../assets/Retorno.png";

export default function ROISection() {
    return (
        <section className="roi-section">
            <div className="container">
                <div className="roi-content">
                    <div className="roi-text">
                        <h2>Retorno sobre Investimento</h2>
                        <p>
                            Nossos clientes relatam um retorno sobre
                            investimento significativo após a implementação das
                            soluções AgroLinked. Veja como nossa tecnologia pode
                            impactar positivamente seus resultados financeiros.
                        </p>

                        <div className="roi-stats">
                            <div className="roi-stat">
                                <div className="roi-stat-number">30%</div>
                                <div className="roi-stat-text">
                                    <h3>Aumento de Produtividade</h3>
                                    <p>Maior rendimento por hectare</p>
                                </div>
                            </div>

                            <div className="roi-stat">
                                <div className="roi-stat-number">25%</div>
                                <div className="roi-stat-text">
                                    <h3>Redução de Custos</h3>
                                    <p>Menor gasto com insumos</p>
                                </div>
                            </div>

                            <div className="roi-stat">
                                <div className="roi-stat-number">40%</div>
                                <div className="roi-stat-text">
                                    <h3>Economia de Água</h3>
                                    <p>Irrigação mais eficiente</p>
                                </div>
                            </div>

                            <div className="roi-stat">
                                <div className="roi-stat-number">20%</div>
                                <div className="roi-stat-text">
                                    <h3>Redução de Perdas</h3>
                                    <p>Menor perda por pragas e doenças</p>
                                </div>
                            </div>
                        </div>

                        <a href="#" className="btn btn-primary">
                            Calcular seu ROI
                        </a>
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

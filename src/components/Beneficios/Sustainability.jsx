import SustentabilidadeImg from "../../assets/Sustentabilidade.png";

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
                            <div className="sustainability-card">
                                <i className="fas fa-seedling"></i>
                                <h3>Redução de Químicos</h3>
                                <p>
                                    Aplicação precisa reduz o uso de defensivos
                                    agrícolas em até 30%.
                                </p>
                            </div>

                            <div className="sustainability-card">
                                <i className="fas fa-chart-line"></i>
                                <h3>Economia de Água</h3>
                                <p>
                                    Irrigação inteligente economiza até 40% de
                                    água.
                                </p>
                            </div>

                            <div className="sustainability-card">
                                <i className="fas fa-chart-bar"></i>
                                <h3>Redução de Emissões</h3>
                                <p>
                                    Otimização de operações reduz emissões de
                                    carbono.
                                </p>
                            </div>

                            <div className="sustainability-card">
                                <i className="fas fa-leaf"></i>
                                <h3>Biodiversidade</h3>
                                <p>
                                    Práticas sustentáveis preservam a
                                    biodiversidade local.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

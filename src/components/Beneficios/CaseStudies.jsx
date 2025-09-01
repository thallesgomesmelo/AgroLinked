import SojaImg from "../../assets/Soja.png";
import MilhoImg from "../../assets/Milho.png";
import CafeImg from "../../assets/Café.png";
import CanaImg from "../../assets/Cana-de-açúcar.png";

export default function CaseStudies() {
    return (
        <section className="case-studies">
            <div className="container">
                <div className="section-header">
                    <h2>Casos de Sucesso</h2>
                    <p>
                        Conheça histórias reais de produtores que transformaram
                        suas operações com a tecnologia AgroLinked.
                    </p>
                </div>

                <div className="tabs case-tabs">
                    <div className="tabs-nav">
                        <button className="tab-btn active" data-tab="soja">
                            Soja
                        </button>
                        <button className="tab-btn" data-tab="milho">
                            Milho
                        </button>
                        <button className="tab-btn" data-tab="cafe">
                            Café
                        </button>
                        <button className="tab-btn" data-tab="cana">
                            Cana-de-açúcar
                        </button>
                    </div>

                    <div className="tab-content active" id="soja">
                        <div className="case-study">
                            <div className="case-image">
                                <img
                                    src={SojaImg}
                                    alt="Caso de Sucesso - Soja"
                                />
                            </div>
                            <div className="case-info">
                                <div className="case-tag">
                                    Fazenda Santa Luzia - MT
                                </div>
                                <h3>Aumento de 35% na Produtividade da Soja</h3>
                                <p>
                                    "Com o AgroSense, conseguimos identificar
                                    áreas de baixa produtividade e aplicar
                                    correções específicas. O resultado foi um
                                    aumento de 35% na produtividade e uma
                                    redução significativa no uso de defensivos."
                                </p>
                                <p className="case-author">
                                    <strong>João Silva</strong>, Proprietário
                                </p>
                                <a href="#" className="btn btn-outline">
                                    Ler Caso Completo{" "}
                                    <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="tab-content" id="milho">
                        <div className="case-study reverse">
                            <div className="case-info">
                                <div className="case-tag">
                                    Fazenda Boa Esperança - GO
                                </div>
                                <h3>Economia de 40% no Uso de Água</h3>
                                <p>
                                    "O sistema de irrigação inteligente do
                                    AgroSense nos permitiu reduzir o consumo de
                                    água em 40%, mantendo a mesma produtividade.
                                    Além disso, conseguimos antecipar problemas
                                    de pragas antes que causassem danos
                                    significativos."
                                </p>
                                <p className="case-author">
                                    <strong>Carlos Mendes</strong>, Gerente
                                    Agrícola
                                </p>
                                <a href="#" className="btn btn-outline">
                                    Ler Caso Completo{" "}
                                    <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                            <div className="case-image">
                                <img
                                    src={MilhoImg}
                                    alt="Caso de Sucesso - Milho"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="tab-content" id="cafe">
                        <div className="case-study">
                            <div className="case-image">
                                <img
                                    src={CafeImg}
                                    alt="Caso de Sucesso - Café"
                                />
                            </div>
                            <div className="case-info">
                                <div className="case-tag">
                                    Fazenda Monte Verde - MG
                                </div>
                                <h3>Melhoria na Qualidade do Café</h3>
                                <p>
                                    "Utilizando o AgroSense, conseguimos
                                    monitorar com precisão as condições
                                    climáticas e do solo, o que resultou em uma
                                    melhoria significativa na qualidade dos
                                    grãos. Nosso café agora alcança preços
                                    premium no mercado."
                                </p>
                                <p className="case-author">
                                    <strong>Ana Oliveira</strong>, Proprietária
                                </p>
                                <a href="#" className="btn btn-outline">
                                    Ler Caso Completo{" "}
                                    <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="tab-content" id="cana">
                        <div className="case-study reverse">
                            <div className="case-info">
                                <div className="case-tag">
                                    Usina Santa Clara - SP
                                </div>
                                <h3>Otimização do Processo de Colheita</h3>
                                <p>
                                    "Com o AgroSense, otimizamos todo o processo
                                    de colheita da cana-de-açúcar. A plataforma
                                    nos ajudou a determinar o momento ideal para
                                    a colheita, resultando em um aumento de 20%
                                    no teor de açúcar e redução de custos
                                    operacionais."
                                </p>
                                <p className="case-author">
                                    <strong>Roberto Santos</strong>, Diretor de
                                    Operações
                                </p>
                                <a href="#" className="btn btn-outline">
                                    Ler Caso Completo{" "}
                                    <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                            <div className="case-image">
                                <img
                                    src={CanaImg}
                                    alt="Caso de Sucesso - Cana-de-açúcar"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import CTASection from "../../components/CTASection";
import SubHeader from "../../components/SubHeader";

export default function AboutUs() {
    return (
        <>
            <SubHeader
                title={"Sobre a AgroLinked"}
                description={
                    "Conheça nossa história, missão e como estamos transformando o agronegócio com tecnologia de ponta."
                }
            />

            {/* Nossa História */}
            <section className="our-story">
                <div className="container">
                    <div className="story-content">
                        <div className="story-text">
                            <h2>Nossa História</h2>
                            <p>
                                A AgroLinked nasceu em 2018 da visão de um grupo
                                de engenheiros agrônomos e especialistas em
                                tecnologia que acreditavam no potencial da
                                transformação digital para o agronegócio
                                brasileiro.
                            </p>
                            <p>
                                Começamos desenvolvendo soluções simples para
                                monitoramento de lavouras e, ao longo dos anos,
                                expandimos nossa plataforma para uma solução
                                completa que integra IoT, inteligência
                                artificial e análise de dados para otimizar
                                todos os aspectos da produção agrícola.
                            </p>
                            <p>
                                Hoje, a AgroLinked é reconhecida como uma das
                                principais empresas de tecnologia para o
                                agronegócio, com presença em todo o Brasil e
                                expansão para outros países da América Latina.
                            </p>
                        </div>
                        <div className="story-image">
                            <img
                                src="/img/Placa.png"
                                alt="História da AgroLinked"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Missão, Visão, Valores */}
            <section className="mission-vision">
                <div className="container">
                    <div className="section-header">
                        <h2>Missão, Visão e Valores</h2>
                        <p>
                            Conheça os princípios que norteiam nosso trabalho e
                            nossa visão para o futuro do agronegócio.
                        </p>
                    </div>

                    <div className="mvv-grid">
                        <div className="mvv-card">
                            <h3>Missão</h3>
                            <p>
                                Transformar o agronegócio através da tecnologia,
                                promovendo práticas mais eficientes,
                                sustentáveis e lucrativas para produtores de
                                todos os portes.
                            </p>
                        </div>

                        <div className="mvv-card">
                            <h3>Visão</h3>
                            <p>
                                Ser a principal plataforma tecnológica para o
                                agronegócio global, impulsionando a
                                transformação digital do setor e contribuindo
                                para a segurança alimentar mundial.
                            </p>
                        </div>

                        <div className="mvv-card">
                            <h3>Valores</h3>
                            <ul>
                                <li>Inovação constante</li>
                                <li>Compromisso com a sustentabilidade</li>
                                <li>Excelência técnica</li>
                                <li>Foco no cliente</li>
                                <li>Ética e transparência</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Números-Chave */}
            <section className="key-numbers">
                <div className="container">
                    <div className="section-header">
                        <h2>AgroLinked em Números</h2>
                        <p>
                            Conheça o impacto da nossa tecnologia no agronegócio
                            brasileiro e mundial.
                        </p>
                    </div>

                    <div className="numbers-grid">
                        <div className="number-item">
                            <div className="number-icon">
                                <i
                                    className="fas fa-users"
                                    aria-hidden="true"
                                ></i>
                            </div>
                            <div className="number-value">5.000+</div>
                            <p>Produtores Atendidos</p>
                        </div>

                        <div className="number-item">
                            <div className="number-icon">
                                <i
                                    className="fas fa-globe"
                                    aria-hidden="true"
                                ></i>
                            </div>
                            <div className="number-value">3M+</div>
                            <p>Hectares Monitorados</p>
                        </div>

                        <div className="number-item">
                            <div className="number-icon">
                                <i
                                    className="fas fa-award"
                                    aria-hidden="true"
                                ></i>
                            </div>
                            <div className="number-value">15+</div>
                            <p>Prêmios de Inovação</p>
                        </div>

                        <div className="number-item">
                            <div className="number-icon">
                                <i
                                    className="fas fa-clock"
                                    aria-hidden="true"
                                ></i>
                            </div>
                            <div className="number-value">5 anos</div>
                            <p>De Experiência</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Equipe */}
            <section className="team">
                <div className="container">
                    <div className="section-header">
                        <h2>Nossa Equipe</h2>
                        <p>
                            Conheça os profissionais apaixonados por tecnologia
                            e agronegócio que fazem a AgroLinked acontecer.
                        </p>
                    </div>

                    <div className="team-grid">
                        <div className="team-member">
                            <div className="member-photo">
                                <img src="/img/Marcos Silva.jpg" alt="CEO" />
                            </div>
                            <h3>Marcos Silva</h3>
                            <p>CEO & Co-fundador</p>
                        </div>

                        <div className="team-member">
                            <div className="member-photo">
                                <img src="/img/Carla Oliveira.jpg" alt="CTO" />
                            </div>
                            <h3>Carla Oliveira</h3>
                            <p>CTO & Co-fundadora</p>
                        </div>

                        <div className="team-member">
                            <div className="member-photo">
                                <img src="/img/Roberto Santos.jpg" alt="COO" />
                            </div>
                            <h3>Roberto Santos</h3>
                            <p>COO</p>
                        </div>

                        <div className="team-member">
                            <div className="member-photo">
                                <img
                                    src="/img/Ana Costa.jpg"
                                    alt="Head of Research"
                                />
                            </div>
                            <h3>Ana Costa</h3>
                            <p>Diretora de Pesquisa</p>
                        </div>
                    </div>

                    <div className="team-cta">
                        <a href="#" className="btn btn-outline">
                            Conheça toda a equipe
                        </a>
                    </div>
                </div>
            </section>

            {/* Parceiros */}
            <section className="partners">
                <div className="container">
                    <div className="section-header">
                        <h2>Nossos Parceiros</h2>
                        <p>
                            Trabalhamos com as principais instituições e
                            empresas do setor para oferecer as melhores
                            soluções.
                        </p>
                    </div>

                    <div className="partners-grid">
                        <div className="partner-logo">
                            <img src="/img/FarmFresh.png" alt="Parceiro 1" />
                        </div>
                        <div className="partner-logo">
                            <img src="/img/Agriculture.jpg" alt="Parceiro 2" />
                        </div>
                        <div className="partner-logo">
                            <img src="/img/Agrio.png" alt="Parceiro 3" />
                        </div>
                        <div className="partner-logo">
                            <img src="/img/GreenHause.png" alt="Parceiro 4" />
                        </div>
                        <div className="partner-logo">
                            <img src="/img/NatureCare.png" alt="Parceiro 5" />
                        </div>
                        <div className="partner-logo">
                            <img src="/img/Rooster.png" alt="Parceiro 6" />
                        </div>
                        <div className="partner-logo">
                            <img src="/img/Maizecorn.png" alt="Parceiro 7" />
                        </div>
                        <div className="partner-logo">
                            <img src="/img/Plantcom.png" alt="Parceiro 8" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <CTASection
                title={"Faça parte da revolução tecnológica no agronegócio"}
                description={
                    "Entre em contato conosco e descubra como podemos ajudar a transformar sua produção agrícola."
                }
            >
                <div className="cta-buttons">
                    <a href="contact" className="btn btn-light">
                        Fale Conosco
                    </a>
                    <a href="product" className="btn btn-outline-light">
                        Conheça Nosso Produto
                    </a>
                </div>
            </CTASection>
        </>
    );
}

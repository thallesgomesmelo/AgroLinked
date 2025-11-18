import React from "react";
import CTASection from "../../components/CTASection";
import logoPainel from "../../assets/logo.jpg";

export default function Start() {
    return (
        <>
            {/* HERO */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1>
                                Transformando o <span>Agronegócio</span> com
                                Tecnologia
                            </h1>
                            <p>
                                Soluções tecnológicas inovadoras para aumentar a
                                produtividade e sustentabilidade no campo.
                            </p>
                            <div className="hero-buttons">
                                {/* Dica: se usar react-router-dom, troque por <Link to="/product"> */}
                                <a href="product" className="btn btn-primary">
                                    Conheça Nosso Produto
                                </a>
                                <a href="talkus" className="btn btn-outline">
                                    Fale Conosco
                                </a>
                            <a
                                href="https://youtu.be/gjedqygKJZY"
                                className="btn btn-outline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                    Assista ao vídeo
                                </a>                                                     
                            </div>
                        </div>
                        <div className="hero-image">
                            <img
                                src={logoPainel}
                                alt="Tecnologia no Agronegócio"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="features">
                <div className="container">
                    <div className="section-header">
                        <h2>Tecnologia que Impulsiona o Agronegócio</h2>
                        <p>
                        Desenvolvemos soluções modernas e acessíveis para tornar sua produção agrícola mais eficiente e inteligente.
                        </p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i
                                    className="fas fa-leaf"
                                    aria-hidden="true"
                                ></i>
                            </div>
                            <h3>Agricultura Sustentável</h3>
                            <p>
                                Soluções que promovem práticas agrícolas
                                sustentáveis e reduzem o impacto ambiental.
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <i
                                    className="fas fa-chart-bar"
                                    aria-hidden="true"
                                ></i>
                            </div>
                            <h3>Análise de Dados</h3>
                            <p>
                                Insights baseados em dados para tomada de
                                decisões mais inteligentes e eficientes.
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <i
                                    className="fas fa-cloud"
                                    aria-hidden="true"
                                ></i>
                            </div>
                            <h3>Monitoramento Remoto</h3>
                            <p>
                                Acompanhe sua produção em tempo real de qualquer
                                lugar, com alertas e notificações.
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <i
                                    className="fas fa-bolt"
                                    aria-hidden="true"
                                ></i>
                            </div>
                            <h3>Automação Inteligente</h3>
                            <p>
                                Automatize processos e aumente a eficiência
                                operacional com nossas soluções inteligentes.
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <i
                                    className="fas fa-shield-alt"
                                    aria-hidden="true"
                                ></i>
                            </div>
                            <h3>Segurança de Dados</h3>
                            <p>
                                Proteção avançada para seus dados e informações
                                sensíveis com criptografia de ponta.
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <i
                                    className="fas fa-arrow-right"
                                    aria-hidden="true"
                                ></i>
                            </div>
                            <h3>Integração Completa</h3>
                            <p>
                                Integração perfeita com seus sistemas existentes
                                e outras ferramentas do agronegócio.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <CTASection
                title={"Pronto para revolucionar sua produção agrícola?"}
                description={
                    "A evolução do campo começa aqui. AgroLinked: tecnologia nova, feita por quem conhece o trabalho de verdade."
                }
            >
                <div className="cta-buttons">
                    <a href="talkus" className="btn btn-light">
                        Agendar Demonstração
                    </a>
                    <a href="product" className="btn btn-outline-light">
                        Saiba Mais
                    </a>                    
                </div>
            </CTASection>
        </>
    );
}

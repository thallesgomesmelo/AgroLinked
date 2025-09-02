import { Link } from "react-router-dom";
import TabProduct from "../../components/Tabs/sectionProduct";
import agroSense from "../../assets/AgroSense.png"
import "../../index.css";
import "../../mediaquery.css";

export default function Product() {
    return (
        <main>
            <section className="page-hero">
                <div className="container">
                    <div className="page-hero-content">
                        <h1>
                            AgroSense: Plataforma Inteligente para o Agronegócio
                        </h1>
                        <p>
                            Conheça nossa solução completa que integra IoT,
                            análise de dados e inteligência artificial para
                            otimizar sua produção agrícola.
                        </p>

                        <Link to="/demo" className="btn btn-primary">
                            Solicitar Demo
                        </Link>
                    </div>
                </div>
            </section>

            <section className="product-overview">
                <div className="container">
                    <div className="product-overview-content">
                        <div className="product-image">
                            <img
                                src={agroSense}
                                alt="Plataforma AgroSense"
                            />
                        </div>
                        <div className="product-info">
                            <h2>O que é o AgroSense?</h2>
                            <p>
                                O AgroSense é uma plataforma completa de gestão
                                agrícola que utiliza sensores IoT, satélites e
                                drones para coletar dados em tempo real da sua
                                lavoura. Nossa tecnologia processa essas
                                informações através de algoritmos avançados de
                                inteligência artificial para fornecer insights
                                precisos e recomendações personalizadas.
                            </p>
                            <ul className="check-list">
                                <li>
                                    Monitoramento em tempo real de condições
                                    climáticas, umidade do solo e saúde das
                                    plantas
                                </li>
                                <li>
                                    Previsões precisas de produtividade e
                                    detecção precoce de pragas e doenças
                                </li>
                                <li>
                                    Otimização do uso de água, fertilizantes e
                                    defensivos agrícolas
                                </li>
                                <li>
                                    Dashboards personalizáveis e relatórios
                                    detalhados para tomada de decisão
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="how-it-works">
                <div className="container">
                    <div className="section-header">
                        <h2>Como Funciona</h2>
                        <p>
                            Entenda o funcionamento da nossa plataforma e como
                            ela pode transformar sua produção agrícola.
                        </p>
                    </div>

                    <div className="steps-container">
                        <div className="step-card">
                            <div className="step-number">1</div>
                            <h3>Coleta de Dados</h3>
                            <p>
                                Sensores IoT instalados estrategicamente em sua
                                propriedade coletam dados em tempo real sobre
                                solo, clima, plantas e mais.
                            </p>
                        </div>

                        <div className="step-card">
                            <div className="step-number">2</div>
                            <h3>Processamento e Análise</h3>
                            <p>
                                Nossa plataforma processa os dados coletados
                                utilizando algoritmos avançados de IA para gerar
                                insights valiosos.
                            </p>
                        </div>

                        <div className="step-card">
                            <div className="step-number">3</div>
                            <h3>Recomendações Personalizadas</h3>
                            <p>
                                Receba recomendações específicas para sua
                                lavoura, otimizando recursos e maximizando a
                                produtividade.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="platform-features">
                <div className="container">
                    <div className="section-header">
                        <h2>Recursos da Plataforma</h2>
                        <p>
                            Explore os principais recursos do AgroSense e como
                            eles podem beneficiar seu negócio.
                        </p>
                    </div>

                    <div className="tabs">
                        <TabProduct />
                    </div>
                </div>
            </section>

            <section className="platforms">
                <div className="container">
                    <div className="section-header">
                        <h2>Disponível em Todas as Plataformas</h2>
                        <p>
                            Acesse o AgroSense de qualquer lugar, em qualquer
                            dispositivo, para um controle completo da sua
                            produção.
                        </p>
                    </div>

                    <div className="platforms-grid">
                        <div className="platform-card">
                            <div className="platform-icon">
                                <i className="fas fa-desktop"></i>
                            </div>
                            <h3>Versão Web</h3>
                            <p>
                                Acesse através de qualquer navegador, com todas
                                as funcionalidades disponíveis para uma
                                experiência completa.
                            </p>
                        </div>

                        <div className="platform-card">
                            <div className="platform-icon">
                                <i className="fas fa-mobile-alt"></i>
                            </div>
                            <h3>App Mobile</h3>
                            <p>
                                Aplicativo nativo para iOS e Android, com
                                funcionalidades offline e notificações em tempo
                                real.
                            </p>
                        </div>

                        <div className="platform-card">
                            <div className="platform-icon">
                                <i className="fas fa-tablet-alt"></i>
                            </div>
                            <h3>Tablet</h3>
                            <p>
                                Interface otimizada para tablets, ideal para uso
                                em campo com visualizações ampliadas e controles
                                adaptados.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta">
                <div className="container">
                    <h2>Pronto para transformar sua produção agrícola?</h2>
                    <p>
                        Agende uma demonstração personalizada e descubra como o
                        AgroSense pode otimizar sua operação.
                    </p>
                    <div className="cta-buttons">
                        <Link to="/demo" className="btn btn-light">
                            Solicitar Demonstração
                        </Link>
                        <a href="#" className="btn btn-outline-light">
                            Ver Planos e Preços
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}

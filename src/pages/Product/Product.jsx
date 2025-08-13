import Tabs from "../../components/Tabs"
import "../../index.css"
import "../../mediaquery.css"

export default function Product() {
    return (
        <main>
            <section class="page-hero">
                <div class="container">
                    <div class="page-hero-content">
                        <h1>AgroSense: Plataforma Inteligente para o Agronegócio</h1>
                        <p>
                            Conheça nossa solução completa que integra IoT, análise de dados e
                            inteligência artificial para otimizar sua produção agrícola.
                        </p>
                        <a href="#" class="btn btn-primary">Solicitar Demonstração</a>
                    </div>
                </div>
            </section>

            <section class="product-overview">
                <div class="container">
                    <div class="product-overview-content">
                        <div class="product-image">
                            <img src="src\assets\AgroSense.png" alt="Plataforma AgroSense" />
                        </div>
                        <div class="product-info">
                            <h2>O que é o AgroSense?</h2>
                            <p>
                                O AgroSense é uma plataforma completa de gestão agrícola que
                                utiliza sensores IoT, satélites e drones para coletar dados em
                                tempo real da sua lavoura. Nossa tecnologia processa essas
                                informações através de algoritmos avançados de inteligência
                                artificial para fornecer insights precisos e recomendações
                                personalizadas.
                            </p>
                            <ul class="check-list">
                                <li>
                                    Monitoramento em tempo real de condições climáticas, umidade
                                    do solo e saúde das plantas
                                </li>
                                <li>
                                    Previsões precisas de produtividade e detecção precoce de
                                    pragas e doenças
                                </li>
                                <li>
                                    Otimização do uso de água, fertilizantes e defensivos
                                    agrícolas
                                </li>
                                <li>
                                    Dashboards personalizáveis e relatórios detalhados para tomada
                                    de decisão
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section class="how-it-works">
                <div class="container">
                    <div class="section-header">
                        <h2>Como Funciona</h2>
                        <p>
                            Entenda o funcionamento da nossa plataforma e como ela pode
                            transformar sua produção agrícola.
                        </p>
                    </div>

                    <div class="steps-container">
                        <div class="step-card">
                            <div class="step-number">1</div>
                            <h3>Coleta de Dados</h3>
                            <p>
                                Sensores IoT instalados estrategicamente em sua propriedade
                                coletam dados em tempo real sobre solo, clima, plantas e mais.
                            </p>
                        </div>

                        <div class="step-card">
                            <div class="step-number">2</div>
                            <h3>Processamento e Análise</h3>
                            <p>
                                Nossa plataforma processa os dados coletados utilizando
                                algoritmos avançados de IA para gerar insights valiosos.
                            </p>
                        </div>

                        <div class="step-card">
                            <div class="step-number">3</div>
                            <h3>Recomendações Personalizadas</h3>
                            <p>
                                Receba recomendações específicas para sua lavoura, otimizando
                                recursos e maximizando a produtividade.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="platform-features">
                <div class="container">
                    <div class="section-header">
                        <h2>Recursos da Plataforma</h2>
                        <p>
                            Explore os principais recursos do AgroSense e como eles podem
                            beneficiar seu negócio.
                        </p>
                    </div>

                    <div class="tabs">
                        <Tabs />
                    </div>
                </div>
            </section>

            <section class="platforms">
                <div class="container">
                    <div class="section-header">
                        <h2>Disponível em Todas as Plataformas</h2>
                        <p>
                            Acesse o AgroSense de qualquer lugar, em qualquer dispositivo,
                            para um controle completo da sua produção.
                        </p>
                    </div>

                    <div class="platforms-grid">
                        <div class="platform-card">
                            <div class="platform-icon">
                                <i class="fas fa-desktop"></i>
                            </div>
                            <h3>Versão Web</h3>
                            <p>
                                Acesse através de qualquer navegador, com todas as
                                funcionalidades disponíveis para uma experiência completa.
                            </p>
                        </div>

                        <div class="platform-card">
                            <div class="platform-icon">
                                <i class="fas fa-mobile-alt"></i>
                            </div>
                            <h3>App Mobile</h3>
                            <p>
                                Aplicativo nativo para iOS e Android, com funcionalidades
                                offline e notificações em tempo real.
                            </p>
                        </div>

                        <div class="platform-card">
                            <div class="platform-icon">
                                <i class="fas fa-tablet-alt"></i>
                            </div>
                            <h3>Tablet</h3>
                            <p>
                                Interface otimizada para tablets, ideal para uso em campo com
                                visualizações ampliadas e controles adaptados.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="cta">
                <div class="container">
                    <h2>Pronto para transformar sua produção agrícola?</h2>
                    <p>
                        Agende uma demonstração personalizada e descubra como o AgroSense
                        pode otimizar sua operação.
                    </p>
                    <div class="cta-buttons">
                        <a href="#" class="btn btn-light">Solicitar Demonstração</a>
                        <a href="#" class="btn btn-outline-light">Ver Planos e Preços</a>
                    </div>
                </div>
            </section>
        </main>
    )
}
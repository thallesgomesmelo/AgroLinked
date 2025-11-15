import CTASection from "../../components/CTASection";
import SubHeader from "../../components/SubHeader";
import placa from "../../assets/Placa.png";
import ceo from "../../assets/Marcos Silva.jpg";
import cto from "../../assets/Carla Oliveira.jpg";
import coo from "../../assets/Roberto Santos.jpg";
import headResearch from "../../assets/Ana Costa.jpg";
import parceiro1 from "../../assets/FarmFresh.png";
import parceiro2 from "../../assets/Agriculture.jpg";
import parceiro3 from "../../assets/Agrio.png";
import parceiro4 from "../../assets/GreenHause.png";
import parceiro5 from "../../assets/NatureCare.png";
import parceiro6 from "../../assets/Rooster.png";
import parceiro7 from "../../assets/Maizecorn.png";
import parceiro8 from "../../assets/Plantcom.png";

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
                            <h2>Nossa Maneira de mudar o futuro</h2>
                            <p>
                                A AgroLinked começou a tomar forma em 2025, nas
                                salas da FIAP, quando um grupo de estudantes de
                                Engenharia de Software decidiu transformar
                                curiosidade em propósito. O que nasceu como um
                                projeto acadêmico logo evoluiu para uma visão
                                maior: construir soluções capazes de conectar
                                tecnologia, inteligência de dados e inovação ao
                                dia a dia do agronegócio brasileiro.
                            </p>
                            <p>
                                Ainda estamos escrevendo essa história. Cada
                                linha de código, cada protótipo testado e cada
                                ideia discutida representa um passo a mais rumo
                                ao futuro que queremos criar. A AgroLinked não é
                                apenas um sistema — é um movimento que está
                                crescendo, ganhando forma e encontrando seu
                                caminho.
                            </p>
                            <p>
                                Nosso objetivo é claro: desenvolver uma
                                plataforma que ajude produtores, técnicos e
                                empresas a tomarem decisões mais inteligentes,
                                sustentáveis e eficientes. Estamos construindo
                                isso juntos, com dedicação, aprendizado
                                constante e a vontade de fazer a diferença.
                            </p>
                            <h4>
                                Construindo hoje a tecnologia que vai
                                transformar o amanhã.
                            </h4>
                        </div>
                        <div className="story-image">
                            <img src={placa} alt="História da AgroLinked" />
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
                            <h3>Mário Vinícius</h3>
                            <p>Co-Fundador</p>
                        </div>

                        <div className="team-member">
                            <h3>Laura Ribeiro</h3>
                            <p>Co-Fundador</p>
                        </div>

                        <div className="team-member">
                            <h3>Thalles Melo</h3>
                            <p>Co-Fundador</p>
                        </div>

                        <div className="team-member">
                            <h3>João Vieira</h3>
                            <p>Co-Fundador</p>
                        </div>

                        <div className="team-member">
                            <h3>Nicholas Anft </h3>
                            <p>Co-Fundador</p>
                        </div>
                    </div>

                    <div className="team-cta">
                        <a href="#" className="btn btn-outline">
                            Conheça toda a equipe
                        </a>
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

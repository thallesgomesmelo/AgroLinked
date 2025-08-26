import { useState } from "react";

import "./TalkUs.css";

import imgMap from "../../assets/mapa.png";

import CTASection from "../../components/CTASection";
import SubHeader from "../../components/SubHeader";

export default function TalkUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const [errors, setErros] = useState({});

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const validateForm = () => {
        let newErrors = {};

        if (!formData.name) newErrors.name = "Nome é obrigatório.";

        if (!formData.email) {
            newErrors.email = "E-mail é obrigatório.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Digite um e-mail válido.";
        }

        if (formData.phone === "") {
            newErrors.phone = "Telefone é obrigatório.";
        } else if (
            !/^\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$/.test(
                formData.phone
            )
        ) {
            newErrors.phone = "Digite um telefone válido.";
        }

        return newErrors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErros(validationErrors);
            return;
        }

        setErros({});

        fetch("https://formsubmit.co/agroliked@gmail.com", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => {
                console.log("Resposta do servidor de email: \n", res);
            })
            .catch((error) => {
                console.log("Erro ao enviar formulário: \n", error);
            });
    };

    return (
        <>
            <SubHeader
                title={"Fale Conosco"}
                description={
                    "Estamos prontos para ajudar. Entre em contato conosco para saber mais sobre nossas soluções ou para agendar uma demonstração."
                }
            />

            {/* Contact Form and Info */}
            <section id="talk" class="contact-section">
                <div class="container">
                    <div class="contact-grid">
                        <div class="contact-form-container">
                            <h2>Entre em Contato</h2>
                            <p>
                                Preencha o formulário abaixo e nossa equipe
                                entrará em contato o mais breve possível.
                                Estamos ansiosos para conhecer seu projeto e
                                discutir como podemos ajudar.
                            </p>

                            <div class="contact-card">
                                <div id="form-success" class="form-success">
                                    <div class="success-icon">
                                        <i class="fas fa-check"></i>
                                    </div>
                                    <h3>Mensagem Enviada!</h3>
                                    <p>
                                        Obrigado por entrar em contato. Nossa
                                        equipe responderá em breve.
                                    </p>
                                </div>

                                <form
                                    id="contactForm"
                                    class="contact-form"
                                    onSubmit={handleSubmit}
                                >
                                    <div class="form-group">
                                        <label for="name">Nome Completo</label>
                                        <input
                                            type="text"
                                            id="input-name"
                                            name="name"
                                            placeholder="Seu nome completo"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                        {errors.name && (
                                            <span className="form-erro">
                                                {errors.name}
                                            </span>
                                        )}
                                    </div>

                                    <div class="form-group">
                                        <label for="email">E-mail</label>
                                        <input
                                            type="email"
                                            id="input-email"
                                            name="email"
                                            placeholder="seu.email@exemplo.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        {errors.email && (
                                            <span className="form-erro">
                                                {errors.email}
                                            </span>
                                        )}
                                    </div>

                                    <div class="form-group">
                                        <label for="phone">Telefone</label>
                                        <input
                                            type="tel"
                                            id="input-phone"
                                            name="phone"
                                            placeholder="(00) 00000-0000"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                        {errors.phone && (
                                            <span className="form-erro">
                                                {errors.phone}
                                            </span>
                                        )}
                                    </div>

                                    <div class="form-group">
                                        <label for="message">Mensagem</label>
                                        <textarea
                                            id="input-message"
                                            name="message"
                                            placeholder="Como podemos ajudar?"
                                            rows="5"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        class="btn btn-primary btn-block"
                                        id="submitBtn"
                                    >
                                        Enviar Mensagem
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div class="contact-info-container">
                            <h2>Informações de Contato</h2>
                            <p>
                                Você também pode entrar em contato conosco
                                diretamente através dos canais abaixo ou visitar
                                nosso escritório.
                            </p>

                            <div class="contact-info-list">
                                <div class="contact-info-item">
                                    <div class="contact-info-icon">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div class="contact-info-text">
                                        <h3>Endereço</h3>
                                        <p>
                                            Av. Tecnologia Verde, 1234
                                            <br />
                                            São Paulo, SP - 01234-567
                                            <br />
                                            Brasil
                                        </p>
                                    </div>
                                </div>

                                <div class="contact-info-item">
                                    <div class="contact-info-icon">
                                        <i class="fas fa-phone"></i>
                                    </div>
                                    <div class="contact-info-text">
                                        <h3>Telefone</h3>
                                        <p>
                                            +55 (11) 1234-5678
                                            <br />
                                            +55 (11) 9876-5432
                                        </p>
                                    </div>
                                </div>

                                <div class="contact-info-item">
                                    <div class="contact-info-icon">
                                        <i class="fas fa-envelope"></i>
                                    </div>
                                    <div class="contact-info-text">
                                        <h3>E-mail</h3>
                                        <p>
                                            contato@AgroLinked.com.br
                                            <br />
                                            suporte@AgroLinked.com.br
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h3>Redes Sociais</h3>
                            <div class="social-links-large">
                                <a href="#" class="social-link">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" class="social-link">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="#" class="social-link">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="#" class="social-link">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </div>

                            <div class="map-container">
                                <img src={imgMap} alt="Mapa do Escritório" />
                                <div class="map-overlay">
                                    <p>Mapa do Escritório</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section  */}
            <section class="faq-section">
                <div class="container">
                    <div class="section-header">
                        <h2>Perguntas Frequentes</h2>
                        <p>
                            Encontre respostas para as perguntas mais comuns
                            sobre nossos produtos e serviços.
                        </p>
                    </div>

                    <div class="faq-grid">
                        <div class="faq-card">
                            <h3>Como funciona a demonstração gratuita?</h3>
                            <p>
                                Nossa demonstração gratuita inclui uma
                                apresentação completa da plataforma e uma
                                análise inicial da sua propriedade. Um
                                especialista irá guiá-lo através das principais
                                funcionalidades e mostrar como elas podem
                                beneficiar sua operação.
                            </p>
                        </div>

                        <div class="faq-card">
                            <h3>
                                Quanto tempo leva para implementar o sistema?
                            </h3>
                            <p>
                                O tempo de implementação varia de acordo com o
                                tamanho da propriedade e as soluções escolhidas.
                                Em média, leva de 2 a 4 semanas para a
                                instalação completa dos sensores e configuração
                                do sistema.
                            </p>
                        </div>

                        <div class="faq-card">
                            <h3>Vocês oferecem suporte técnico?</h3>
                            <p>
                                Sim, oferecemos suporte técnico completo,
                                incluindo manutenção dos sensores, atualizações
                                de software e assistência 24/7 para questões
                                urgentes. Nossos planos incluem diferentes
                                níveis de suporte.
                            </p>
                        </div>

                        <div class="faq-card">
                            <h3>
                                As soluções funcionam em áreas sem internet?
                            </h3>
                            <p>
                                Sim, nossos sensores podem operar em áreas com
                                conectividade limitada. Eles armazenam dados
                                localmente e os sincronizam quando a conexão
                                está disponível. Também oferecemos soluções de
                                conectividade rural.
                            </p>
                        </div>
                    </div>

                    <div class="faq-cta">
                        <a href="#" class="btn btn-outline">
                            Ver todas as perguntas frequentes
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA Section  */}
            <CTASection
                title={"Pronto para transformar sua produção agrícola?"}
                description={
                    "Entre em contato hoje mesmo e descubra como nossas soluções podem ajudar a otimizar sua operação."
                }
            >
                <div class="cta-buttons">
                    <a href="#talk" class="btn btn-light">
                        Agendar Demonstração
                    </a>
                    <a href="product" class="btn btn-outline-light">
                        Conhecer Planos
                    </a>
                </div>
            </CTASection>
        </>
    );
}

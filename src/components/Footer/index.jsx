import '../../index.css'
import '../../mediaquery.css'

export default function Footer() {
    return (
        <>
            <footer class="footer">
                <div class="container">
                    <div class="footer-content">
                        <div class="footer-col">
                            <h3>AgroLinked</h3>
                            <p>
                                Transformando o agronegócio com soluções tecnológicas inovadoras e
                                sustentáveis.
                            </p>
                            <div class="social-links">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>

                        <div class="footer-col">
                            <h3>Links Rápidos</h3>
                            <ul>
                                <li><a href="index.html">Início</a></li>
                                <li><a href="produto.html">Produto</a></li>
                                <li><a href="beneficios.html">Benefícios</a></li>
                                <li><a href="sobre.html">Sobre Nós</a></li>
                                <li><a href="contato.html">Fale Conosco</a></li>
                            </ul>
                        </div>

                        <div class="footer-col">
                            <h3>Contato</h3>
                            <ul class="contact-info">
                                <li>
                                    <i class="fas fa-map-marker-alt"></i>
                                    <span
                                    >Av. Tecnologia Verde, 1234<br />São Paulo, SP -
                                        01234-567</span
                                    >
                                </li>
                                <li>
                                    <i class="fas fa-phone"></i>
                                    <span>(11) 1234-5678</span>
                                </li>
                                <li>
                                    <i class="fas fa-envelope"></i>
                                    <span>contato@AgroLinked.com.br</span>
                                </li>
                            </ul>
                        </div>

                        <div class="footer-col">
                            <h3>Newsletter</h3>
                            <p>
                                Inscreva-se para receber novidades e atualizações sobre nossas
                                soluções.
                            </p>
                            <form class="newsletter-form">
                                <input type="email" placeholder="Seu e-mail" required />
                                <button type="submit">Inscrever-se</button>
                            </form>
                        </div>
                    </div>

                    <div class="footer-bottom">
                        <p>
                            &copy; <span id="currentYear"></span> AgroLinked. Todos os direitos
                            reservados.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}
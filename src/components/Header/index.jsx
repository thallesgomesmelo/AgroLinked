import '../../index.css'
import '../../mediaquery.css'

export default function Header() {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link
                href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
                rel="stylesheet"
            />
            <header class="header">
                <div class="container">
                    <div class="header-content">
                        <a href="index.html" class="logo">
                            <img
                                src="src\assets\logoverde.jpg"
                                alt="AgroLinked Logo"
                                width="40"
                                height="40"
                            />
                            <span>AgroLinked</span>
                        </a>

                        <nav class="main-nav">
                            <ul>
                                <li><a href="index.html">Início</a></li>
                                <li><a href="produto.html" class="active">Produto</a></li>
                                <li><a href="beneficios.html">Benefícios</a></li>
                                <li><a href="sobre.html">Sobre Nós</a></li>
                                <li><a href="contato.html">Fale Conosco</a></li>
                            </ul>
                        </nav>

                        <div class="header-actions">
                            <a href="#" class="btn btn-primary btn-mobile">Solicitar Demo</a>
                            <button class="menu-toggle" id="menuToggle">
                                <i class="fas fa-bars"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
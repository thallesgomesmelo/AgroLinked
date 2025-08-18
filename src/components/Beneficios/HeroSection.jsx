import { Link } from "react-router-dom";

export default function HeroSection() {
    return (
        <section className="page-hero">
            <div className="container">
                <div className="page-hero-content">
                    <h1>Benefícios da Tecnologia AgroLinked</h1>
                    <p>
                        Descubra como nossas soluções tecnológicas podem
                        transformar sua produção agrícola, aumentando a
                        produtividade e reduzindo custos.
                    </p>
                    <Link to="/product" className="btn btn-primary">
                        Conheça Nosso Produto
                    </Link>
                </div>
            </div>
        </section>
    );
}

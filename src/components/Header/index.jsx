import React from "react";
import { Link } from "react-router-dom";
import logoverde from "../../assets/logoverde.jpg";
import "../../index.css";
import "../../mediaquery.css";

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <Link to="/" className="logo">
                        <img
                            src={logoverde}
                            alt="AgroLinked Logo"
                            width="40"
                            height="40"
                        />
                        <span>AgroLinked</span>
                    </Link>

                    <nav className="main-nav">
                        <ul>
                            <li>
                                <Link to="/">Início</Link>
                            </li>
                            <li>
                                <Link to="/product" className="active">
                                    Produto
                                </Link>
                            </li>
                            <li>
                                <Link to="/beneficios">Benefícios</Link>
                            </li>
                            <li>
                                <Link to="/sobre">Sobre Nós</Link>
                            </li>
                            <li>
                                <Link to="/contato">Fale Conosco</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="header-actions">
                        <Link to="/demo" className="btn btn-primary btn-mobile">
                            Solicitar Demo
                        </Link>
                        <button className="menu-toggle" id="menuToggle">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

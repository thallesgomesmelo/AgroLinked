import "../../index.css"
import { useState } from "react";

export default function Tab() {
    const [activeTab, setActiveTab] = useState("dashboard");

    return (
        <>
            <div className="tabs-nav">
                <button className={`tab-btn ${activeTab === "dashboard" ? "active" : ""}`} data-tab="dashboard" onClick={() => setActiveTab("dashboard")}>
                    Dashboard
                </button>
                <button className={`tab-btn ${activeTab === "monitoramento" ? "active" : ""}`} data-tab="monitoramento" onClick={() => setActiveTab("monitoramento")}>
                    Monitoramento
                </button>
                <button className={`tab-btn ${activeTab === "previsoes" ? "active" : ""}`} data-tab="previsoes" onClick={() => setActiveTab("previsoes")}>
                    Previsões
                </button>
                <button className={`tab-btn ${activeTab === "relatorios" ? "active" : ""}`} data-tab="relatorios" onClick={() => setActiveTab("relatorios")}>
                    Relatórios
                </button>
            </div>

            {activeTab === "dashboard" && (
                <div className="tab-content active" id="dashboard">
                    <div className="tab-content-inner">
                        <div className="tab-text">
                            <h3>Dashboard Intuitivo</h3>
                            <p>
                                Visualize todos os dados importantes da sua propriedade em
                                um único lugar. Nosso dashboard é personalizável e oferece
                                uma visão clara e objetiva do status da sua lavoura.
                            </p>
                            <ul className="arrow-list">
                                <li>Visão geral da propriedade</li>
                                <li>Indicadores de performance em tempo real</li>
                                <li>Alertas e notificações personalizáveis</li>
                                <li>Widgets personalizáveis para suas necessidades</li>
                            </ul>
                        </div>
                        <div className="tab-image">
                            <img src="src\assets\Dashboard.png" alt="Dashboard AgroSense" />
                        </div>
                    </div>
                </div>
            )}

            {activeTab === "monitoramento" && (
                <div className="tab-content active" id="monitoramento">
                    <div className="tab-content-inner reverse">
                        <div className="tab-image">
                            <img
                                src="src\assets\Monitoramento.png"
                                alt="Monitoramento AgroSense"
                            />
                        </div>
                        <div className="tab-text">
                            <h3>Monitoramento em Tempo Real</h3>
                            <p>
                                Acompanhe em tempo real as condições da sua lavoura, com
                                dados precisos sobre clima, solo, irrigação e muito mais.
                            </p>
                            <ul className="arrow-list">
                                <li>Sensores IoT de alta precisão</li>
                                <li>Imagens de satélite e drones</li>
                                <li>Detecção precoce de problemas</li>
                                <li>Mapas de calor e visualizações avançadas</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === "previsoes" && (
                <div className="tab-content active" id="previsoes">
                    <div className="tab-content-inner">
                        <div className="tab-text">
                            <h3>Previsões e Análises</h3>
                            <p>
                                Utilize o poder da inteligência artificial para prever
                                tendências, antecipar problemas e planejar sua produção com
                                mais eficiência.
                            </p>
                            <ul className="arrow-list">
                                <li>Previsão de produtividade</li>
                                <li>Análise de tendências climáticas</li>
                                <li>Detecção precoce de pragas e doenças</li>
                                <li>Recomendações de manejo baseadas em dados</li>
                            </ul>
                        </div>
                        <div className="tab-image">
                            <img src="src\assets\Previsões.png" alt="Previsões AgroSense" />
                        </div>
                    </div>
                </div>
            )}

            {activeTab === "relatorios" && (
                <div className="tab-content active" id="relatorios">
                    <div className="tab-content-inner reverse">
                        <div className="tab-image">
                            <img src="src\assets\Relatórios.png" alt="Relatórios AgroSense" />
                        </div>
                        <div className="tab-text">
                            <h3>Relatórios Detalhados</h3>
                            <p>
                                Gere relatórios completos e personalizados para análise de
                                desempenho, planejamento e tomada de decisões estratégicas.
                            </p>
                            <ul className="arrow-list">
                                <li>Relatórios personalizáveis</li>
                                <li>Exportação em múltiplos formatos</li>
                                <li>Comparativos históricos</li>
                                <li>Análise de ROI e indicadores financeiros</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
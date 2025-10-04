import "../../index.css";
import SojaImg from "../../assets/Soja.png";
import MilhoImg from "../../assets/Milho.png";
import CafeImg from "../../assets/Cafe.png";
import CanaImg from "../../assets/Cana-de-açúcar.png";
import { useState } from "react";
import TabButton from "./TabButton";
import CaseStudy from "./CaseStudy";

export default function TabBenefits() {
    const [activeTab, setActiveTab] = useState("soja");

    const tabs = [
        { id: "soja", label: "Soja" },
        { id: "milho", label: "Milho" },
        { id: "cafe", label: "Café" },
        { id: "cana-de-acucar", label: "Cana-de-açúcar" }
    ];

    const casesData = {
        soja: {
            image: SojaImg,
            imageAlt: "Caso de Sucesso - Soja",
            tag: "Fazenda Santa Luzia - MT",
            title: "Aumento de 35% na Produtividade da Soja",
            description: "Com o AgroSense, conseguimos identificar áreas de baixa produtividade e aplicar correções específicas. O resultado foi um aumento de 35% na produtividade e uma redução significativa no uso de defensivos.",
            author: "João Silva",
            role: "Proprietário"
        },
        milho: {
            image: MilhoImg,
            imageAlt: "Caso de Sucesso - Milho",
            tag: "Fazenda Boa Esperança - GO",
            title: "Economia de 40% no Uso de Água",
            description: "O sistema de irrigação inteligente do AgroSense nos permitiu reduzir o consumo de água em 40%, mantendo a mesma produtividade. Além disso, conseguimos antecipar problemas de pragas antes que causassem danos significativos.",
            author: "Carlos Mendes",
            role: "Gerente Agrícola"
        },
        cafe: {
            image: CafeImg,
            imageAlt: "Caso de Sucesso - Café",
            tag: "Fazenda Monte Verde - MG",
            title: "Melhoria na Qualidade do Café",
            description: "Utilizando o AgroSense, conseguimos monitorar com precisão as condições climáticas e do solo, o que resultou em uma melhoria significativa na qualidade dos grãos. Nosso café agora alcança preços premium no mercado.",
            author: "Ana Oliveira",
            role: "Proprietária"
        },
        "cana-de-acucar": {
            image: CanaImg,
            imageAlt: "Caso de Sucesso - Cana-de-açúcar",
            tag: "Usina Santa Clara - SP",
            title: "Otimização do Processo de Colheita",
            description: "Com o AgroSense, otimizamos todo o processo de colheita da cana-de-açúcar. A plataforma nos ajudou a determinar o momento ideal para a colheita, resultando em um aumento de 20% no teor de açúcar e redução de custos operacionais.",
            author: "Roberto Santos",
            role: "Diretor de Operações"
        }
    };

    return (
        <>
            <div className="tabs-nav">
                {tabs.map(tab => (
                    <TabButton
                        key={tab.id}
                        id={tab.id}
                        label={tab.label}
                        activeTab={activeTab}
                        onClick={setActiveTab}
                    />
                ))}
            </div>

            {casesData[activeTab] && (
                <CaseStudy
                    caseData={casesData[activeTab]}
                    reverse={activeTab === "milho" || activeTab === "cana-de-acucar"}
                />
            )}
        </>
    )
}
import TabBenefits from "../Tabs/sectionBenefits";

export default function CaseStudies() {
    return (
        <section className="case-studies">
            <div className="container">
                <div className="section-header">
                    <h2>Nivel De Eficacia</h2>
                    <p>
                        Confira o desempenho obtido em nossos testes, expresso
                        em porcentagens, e observe o nível de eficácia que nossa
                        solução está alcançando.
                    </p>
                </div>

                <div className="tabs case-tabs">
                    <TabBenefits />
                </div>
            </div>
        </section>
    );
}

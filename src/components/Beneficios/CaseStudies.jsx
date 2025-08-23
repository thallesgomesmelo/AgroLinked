import TabBenefits from "../Tabs/sectionBenefits";

export default function CaseStudies() {
    return (
        <section className="case-studies">
            <div className="container">
                <div className="section-header">
                    <h2>Casos de Sucesso</h2>
                    <p>
                        Conheça histórias reais de produtores que transformaram
                        suas operações com a tecnologia AgroLinked.
                    </p>
                </div>

                <div className="tabs case-tabs">
                    <TabBenefits />
                </div>
            </div>
        </section>
    );
}

export default function CaseStudy({ caseData, reverse = false }) {
    return (
        <div className="tab-content active">
            <div className={`case-study ${reverse ? "reverse" : ""}`}>
                <div className="case-image">
                    <img
                        src={caseData.image}
                        alt={caseData.imageAlt}
                    />
                </div>
                <div className="case-info">
                    <div className="case-tag">
                        {caseData.tag}
                    </div>
                    <h3>{caseData.title}</h3>
                    <p>{caseData.description}</p>
                    <p className="case-author">
                        <strong>{caseData.author}</strong>, {caseData.role}
                    </p>
                    <a href="#" className="btn btn-outline">
                        Ler Caso Completo{" "}
                        <i className="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}
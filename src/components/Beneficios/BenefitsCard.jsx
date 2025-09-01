export default function BenefitsCard({ iconClass, header, text }) {
    return (
        <div className="benefit-card">
            <div className="benefit-icon">
                <i className={iconClass}></i>
            </div>
            <h3>{header}</h3>
            <p>{text}</p>
        </div>
    );
}

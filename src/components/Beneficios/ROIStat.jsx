// Componente para exibir uma estatística de ROI
export default function ROIStat({ number, title, description }) {
    return (
        <div className="roi-stat">
            <div className="roi-stat-number">{number}</div>
            <div className="roi-stat-text">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

// Componente para exibir um card de sustentabilidade
export default function SustainabilityCard({ iconClass, title, description }) {
    return (
        <div className="sustainability-card">
            <i className={iconClass}></i>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

// Componente para o botão de calcular ROI
export default function ROICalcButton({ href = "#" }) {
    return (
        <a href={href} className="btn btn-primary">
            Calcular seu ROI
        </a>
    );
}

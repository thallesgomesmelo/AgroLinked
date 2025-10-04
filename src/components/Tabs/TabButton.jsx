export default function TabButton({ id, label, activeTab, onClick }) {
    return (
        <button
            className={`tab-btn ${activeTab === id ? "active" : ""}`}
            data-tab={id}
            onClick={() => onClick(id)}
        >
            {label}
        </button>
    );
}
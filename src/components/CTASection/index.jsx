export default function CTASection({ title, description, children }) {
  return (
    <section className="cta">
      <div className="container">
        <h2>{title}</h2>
        <p>{description}</p>
        {children && children}
      </div>
    </section>
  );
}

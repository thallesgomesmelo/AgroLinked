export default function SubHeader({ title, description, children }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero-content">
          <h1>{title}</h1>
          <p>{description}</p>
          {children && children}
        </div>
      </div>
    </section>
  );
}

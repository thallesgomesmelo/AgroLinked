export default function CTASection({ title, description, children }) {
  return (
    <section class="cta">
      <div class="container">
        <h2>{title}</h2>
        <p>{description}</p>
        {children && children}
      </div>
    </section>
  );
}

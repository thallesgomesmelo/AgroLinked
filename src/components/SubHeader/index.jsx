export default function SubHeader({ title, description, children }) {
  return (
    <section class="page-hero">
      <div class="container">
        <div class="page-hero-content">
          <h1>{title}</h1>
          <p>{description}</p>
          {children && children}
        </div>
      </div>
    </section>
  );
}

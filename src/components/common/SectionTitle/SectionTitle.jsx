import "./SectionTitle.css";

const SectionTitle = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
}) => {
  return (
    <div className={`section-title section-title-${align}`}>
      {eyebrow && (
        <span className="section-eyebrow">
          {eyebrow}
        </span>
      )}

      <h2>{title}</h2>

      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
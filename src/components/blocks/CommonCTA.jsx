import InlineEditor from "../InlineEditor";

export default function CommonCTA(props) {
  const {
    title,
    titleColor,
    subtitle,
    subtitleColor,
    buttonText,
    background,
    buttonBg,
    buttonTextColor,
    onUpdate,
  } = props;

  return (
    <section
      className="relative py-24 px-6 text-center"
      style={{ background }}
    >
      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,white,transparent_40%)] pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-6"
          style={{ color: titleColor }}
        >
          <InlineEditor
            value={title}
            onChange={(val) => onUpdate("title", val)}
          />
        </h2>

        <p
          className="text-lg md:text-xl mb-10"
          style={{ color: subtitleColor }}
        >
          <InlineEditor
            value={subtitle}
            onChange={(val) => onUpdate("subtitle", val)}
            as="textarea"
          />
        </p>

        {buttonText && (
          <button
            className="px-10 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl"
            style={{ backgroundColor: buttonBg, color: buttonTextColor }}
          >
            <InlineEditor
              value={buttonText}
              onChange={(val) => onUpdate("buttonText", val)}
            />
          </button>
        )}
      </div>
    </section>
  );
}

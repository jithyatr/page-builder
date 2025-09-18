import InlineEditor from "../InlineEditor";

export default function CommonBlock(props) {
  const { title, titleColor, subtitle, subtitleColor, buttonText, background, buttonBg, buttonTextColor, onUpdate } = props;
  return (
    <section className="py-20 px-8 text-center"
      style={{ backgroundColor: background }}
    >
      <h2 className="text-3xl font-bold mb-4" style={{ color: titleColor }}>
        <InlineEditor value={title} onChange={(val) => onUpdate("title", val)} />
      </h2>
      <p className="mb-6" style={{ color: subtitleColor }} >
        <InlineEditor
          value={subtitle}
          onChange={(val) => onUpdate("subtitle", val)}
        />
      </p>
      <button
        className="px-6 py-2 rounded-lg"
        style={{ backgroundColor: buttonBg, color: buttonTextColor }}
      >
        <InlineEditor
          value={buttonText}
          onChange={(val) => onUpdate("buttonText", val)}
        />
      </button>
    </section>
  );
}
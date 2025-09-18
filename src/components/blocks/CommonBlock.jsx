import InlineEditor from "../InlineEditor";

export default function CommonBlock(props) {
  const { title, titleColor, subtitle, subtitleColor, buttonText, background, buttonBg, buttonTextColor, onUpdate } = props;
  return (
    <section className="py-20 md:px-8 px-4 text-center"
      style={{ backgroundColor: background }}
    >
      <h1 className="md:text-6xl text-4xl font-bold mb-4" style={{ color: titleColor }}>
        <InlineEditor value={title} onChange={(val) => onUpdate("title", val)} />
      </h1>
      <p className="text-lg mb-6"  style={{ color: subtitleColor }} >
        <InlineEditor
          value={subtitle}
          onChange={(val) => onUpdate("subtitle", val)}
        />
      </p>
      <button
        className="px-10 py-4 rounded-lg"
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
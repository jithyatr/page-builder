import InlineEditor from "../InlineEditor";

export default function Testimonial(props) {
  const {
    title,
    titleColor,
    subtitle,
    subtitleColor,
    buttonText,
    buttonBg,
    buttonTextColor,
    background,
    onUpdate,
    items,
  } = props;

  const updateItem = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    onUpdate("items", newItems);
  };

  return (
    <section className="py-20 px-6 md:px-16" style={{ background }}>
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold" style={{ color: titleColor }}>
          <InlineEditor value={title} onChange={(val) => onUpdate("title", val)} />
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: subtitleColor }}>
          <InlineEditor
            value={subtitle}
            onChange={(val) => onUpdate("subtitle", val)}
            as="textarea"
          />
        </p>
      </div>

      {/* Testimonials */}
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {items?.map((item, i) => (
          <div
            key={item.id || i}
            className="p-6 rounded-2xl shadow-lg bg-white hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-1" style={{ color: item.titleColor }}>
              <InlineEditor value={item.title} onChange={(val) => updateItem(i, "title", val)} />
            </h3>
            <p className="text-sm font-medium text-gray-500 mb-2">
              <InlineEditor value={item.role} onChange={(val) => updateItem(i, "role", val)} />
            </p>
            <p className="text-gray-700">
              <InlineEditor
                value={item.feedback}
                onChange={(val) => updateItem(i, "feedback", val)}
                as="textarea"
              />
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <button
          className="px-6 py-3 rounded-xl font-semibold shadow-lg transition hover:opacity-90"
          style={{ background: buttonBg, color: buttonTextColor }}
        >
          <InlineEditor value={buttonText} onChange={(val) => onUpdate("buttonText", val)} />
        </button>
      </div>
    </section>
  );
}

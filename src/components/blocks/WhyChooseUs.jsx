import InlineEditor from "../InlineEditor";

export default function WhyChooseUs(props) {
  const { title, titleColor, background, items = [], onUpdate } = props;

  return (
    <section
      className="py-20 px-6 md:px-16"
      style={{ background }}
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2
          className="text-4xl md:text-5xl font-bold"
          style={{ color: titleColor }}
        >
          <InlineEditor
            value={title}
            onChange={(val) => onUpdate("title", val)}
          />
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <div
            key={item.id || index}
            className="p-8 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition"
          >
            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: item.titleColor }}
            >
              <InlineEditor
                value={item.title}
                onChange={(val) => {
                  const updatedItems = [...items];
                  updatedItems[index].title = val;
                  onUpdate("items", updatedItems);
                }}
              />
            </h3>
            <p
              className="text-gray-700 leading-relaxed"
              style={{ color: item.descriptionColor }}
            >
              <InlineEditor
                value={item.description}
                onChange={(val) => {
                  const updatedItems = [...items];
                  updatedItems[index].description = val;
                  onUpdate("items", updatedItems);
                }}
                as="textarea"
              />
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

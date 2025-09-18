import InlineEditor from "../InlineEditor";

export default function FeaturesBlock(props) {
  const { title, items, titleColor, background, onUpdate } = props;
  return (
    <section
      className="py-16 px-8 bg-white text-center"
      style={{ backgroundColor: background}}
    >
      <h2 className="text-3xl font-bold mb-10" style={{ color: titleColor }}>
        <InlineEditor
          value={title}
          onChange={(val) => {
            onUpdate("title", val);
          }}
        />
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <div key={i} className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2" style={{ color: item.titleColor }}>
              <InlineEditor
                value={item.title}
                onChange={(val) => {
                  const newItems = [...items];
                  newItems[i].title = val;
                  onUpdate("items", newItems);
                }}
              />
            </h3>
            <p style={{ color: item.descriptionColor }}> 
              <InlineEditor
                value={item.description}
                onChange={(val) => {
                  const newItems = [...items];
                  newItems[i].description = val;
                  onUpdate("items", newItems);
                }}
                className="block"
              />
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

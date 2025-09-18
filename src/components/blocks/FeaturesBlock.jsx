import InlineEditor from "../InlineEditor";

export default function FeaturesBlock(props) {
  const { title, items, titleColor, background, onUpdate } = props;
  return (
    <section
      className="py-20 md:px-8 px-4 bg-white text-center"
      style={{ backgroundColor: background}}
    >
      <h1 className="md:text-6xl text-4xl font-bold mb-4" style={{ color: titleColor }}>
        <InlineEditor
          value={title}
          onChange={(val) => {
            onUpdate("title", val);
          }}
        />
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {items?.map((item, i) => (
          <div key={i} className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-2" style={{ color: item.titleColor }}>
              <InlineEditor
                value={item.title}
                onChange={(val) => {
                  const newItems = [...items];
                  newItems[i].title = val;
                  onUpdate("items", newItems);
                }}
              />
            </h2>
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

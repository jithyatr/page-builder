import ColorChanger from "./ColorChanger";

const SidebarEditor = ({ block, onUpdate }) => {
    if (!block) return null;

    const fieldConfig = {
        background: { label: "Background Color", defaultVal: "#ffffff" },
        titleColor: { label: "Title Color", defaultVal: "#ffffff" },
        subtitleColor: { label: "Subtitle Color", defaultVal: "#ffffff" },
        headingColor: { label: "Heading Color", defaultVal: "#ffffff" },
        buttonTextColor: { label: "Button Text Color", defaultVal: "#ffffff" },
        textColor: { label: "Text Color", defaultVal: "#ffffff" },
        buttonBg: { label: "Button Color", defaultVal: "#ffffff" },
    };

    const availableFields = Object.keys(fieldConfig).filter(
        (key) => key in block.props
    );

    return (
        <div className="fixed top-0 right-0 h-full w-64 bg-white border-l shadow-lg p-4 overflow-y-auto z-50">
            <h2 className="text-lg font-semibold mb-4">Edit Block</h2>

            {/* Render only fields that exist in block.props */}
            {availableFields.map((key) => {
                const { label, defaultVal } = fieldConfig[key];
                return (
                    <ColorChanger
                        key={key}
                        label={label}
                        color={block.props[key] || defaultVal}
                        onChange={(value) => onUpdate(block.id, key, value)}
                    />
                );
            })}

            {/* Special case: items */}
            {block.props?.items?.length > 0 && (
                <div className="border-t-2">
                    <h4 className="my-4 font-bold">Items</h4>
                    {block.props.items.map((item) => {
                        const itemFieldConfig = {
                            titleColor: { label: "Title Color", defaultVal: "#000000" },
                            descriptionColor: { label: "Description Color", defaultVal: "#555555" },
                        };

                        // Show only the fields this item actually has
                        const availableItemFields = Object.keys(itemFieldConfig).filter(
                            (key) => key in item
                        );

                        return (
                            <div key={item.id} className="mb-4 border-b pb-2">
                                <p className="font-medium">{item.title || "Item"}</p>
                                {availableItemFields.map((key) => {
                                    const { label, defaultVal } = itemFieldConfig[key];
                                    return (
                                        <ColorChanger
                                            key={key}
                                            label={label}
                                            color={item[key] || defaultVal}
                                            onChange={(value) => onUpdate(block.id, key, value, item.id)}
                                        />
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default SidebarEditor;

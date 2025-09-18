import CommonBlock from "./blocks/CommonBlock";
import FeaturesBlock from "./blocks/FeaturesBlock";
import Footer from "./blocks/Footer";
import HeroBlock from "./blocks/HeroBlock";
import SliderBlock from "./blocks/SliderBlock";
import BlockWrapper from "./BlockWrapper";

const BLOCK_MAP = {
    hero: HeroBlock,
    features: FeaturesBlock,
    common: CommonBlock,
    slider: SliderBlock,
    footer: Footer,
};

export default function BlockRenderer({ block, onAdd, onDuplicate, onDelete, onUpdate, isSelected, onSelect }) {
    const Component = BLOCK_MAP[block.type];
    if (!Component) return null;
    return (
        <BlockWrapper
            blockId={block.id}
            isSelected={isSelected}
            onClick={onSelect}
            onAdd={(afterId, type) => onAdd(afterId, type)}
            onDuplicate={() => onDuplicate(block.id)}
            onDelete={() => onDelete(block.id)}
        >
            <Component {...block.props} onUpdate={(field, value) => onUpdate(block.id, field, value)} />
        </BlockWrapper>
    );
}
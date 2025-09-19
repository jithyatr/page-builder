import AboutUsBlock from "./blocks/AboutUsBlock";
import CommonBlock from "./blocks/CommonBlock";
import CommonCTA from "./blocks/CommonCTA";
import FeaturesBlock from "./blocks/FeaturesBlock";
import Footer from "./blocks/Footer";
import HeroBlock from "./blocks/HeroBlock";
import HeroBlockClassic from "./blocks/HeroBlockClassic";
import SliderBlock from "./blocks/SliderBlock";
import Testimonial from "./blocks/Testimonial";
import WhyChooseUs from "./blocks/WhyChooseUs";
import BlockWrapper from "./BlockWrapper";

const BLOCK_MAP = {
    hero: HeroBlock,
    features: FeaturesBlock,
    common: CommonBlock,
    slider: SliderBlock,
    footer: Footer,
    heroclassic: HeroBlockClassic,
    commoncta: CommonCTA,
    aboutus: AboutUsBlock,
    testimonial: Testimonial,
    whychooseus: WhyChooseUs,

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
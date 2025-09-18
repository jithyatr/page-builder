import InlineEditor from "../InlineEditor";

export default function FooterBlock(props) {
  const { text, background, textColor, onUpdate } = props;
  return (
    <footer
      className="py-20 text-center"
      style={{ backgroundColor: background }}
    >
      <p className="text-xl mb-8"
        style={{ color: textColor }}
      >
        <InlineEditor value={text} onChange={(val) => onUpdate("text", val)} />
      </p>
    </footer>
  );
}

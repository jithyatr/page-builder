import InlineEditor from "../InlineEditor";

export default function FooterBlock(props) {
  const { text, background, textColor, onUpdate } = props;
  return (
    <footer
      className="py-6 text-center"
      style={{ backgroundColor: background }}
    >
      <p style={{ color: textColor }}
      >
        <InlineEditor value={text} onChange={(val) => onUpdate("text", val)} />
      </p>
    </footer>
  );
}

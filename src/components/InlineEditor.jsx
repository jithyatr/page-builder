export default function InlineEditor({ value, onChange, className = "" }) {
  return (
    <span
      className={`${className} cursor-pointer outline-none`}
      contentEditable
      suppressContentEditableWarning={true}
      onBlur={(e) => onChange(e.target.innerText)}
    >
      {value}
    </span>
  );
}

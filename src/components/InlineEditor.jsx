import { useState, useRef } from "react";

export default function InlineEditor({ value, onChange, className = "" }) {
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);
  const placeholder = "Edit here...";
  return (
    <div className={`relative inline-block w-full`} style={{ minHeight: "1.2em" }}>
      {/* Placeholder */}
      {!value && !focused && (
        <span
          className="absolute left-0 top-0 text-gray-400 pointer-events-none select-none"
          style={{ whiteSpace: "pre-wrap" }}
        >
          {placeholder}
        </span>
      )}

      <span
        ref={ref}
        className={`${className} cursor-text outline-none block`}
        contentEditable
        suppressContentEditableWarning={true}
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          setFocused(false);
          onChange(e.target.innerText);
        }}
        style={{ whiteSpace: "pre-wrap", minHeight: "1.2em" }}
      >
        {value || "\u00A0"}
      </span>
    </div>
  );
}

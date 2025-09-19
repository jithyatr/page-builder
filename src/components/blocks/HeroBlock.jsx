import useImage from "../../hooks/useImage";
import InlineEditor from "../InlineEditor";

export default function HeroBlock(props) {
  const { title, titleColor, subtitle, subtitleColor, buttonText, background, buttonBg, buttonTextColor, onUpdate, image } = props;
  console.log(image,"jjjjjh");
  
  const { handleFileChange, handleImageClick, fileInputRef } = useImage({ onUpdate, image })
  return (
    <section
      className={`py-20 md:px-8 px-4 text-left grid lg:grid-cols-2 md:gap-8 gap-4`}
      style={{ backgroundColor: background }}
    >
      <div className="col-span-1">
        <img
          src={image}
          alt="Banner image"
          className="w-full max-w-3xl object-cover cursor-pointer"
          onClick={handleImageClick}
        />
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
      <div className="col-span-1">
        <h1
          className="md:text-7xl text-6xl font-bold mb-4"
          style={{ color: titleColor }}
        >
          <InlineEditor value={title} onChange={(val) => onUpdate("title", val)} />
        </h1>
        <p className="text-lg mb-6" style={{ color: subtitleColor }}>
          <InlineEditor value={subtitle} onChange={(val) => onUpdate("subtitle", val)} as="textarea" />
        </p>
        <button
          className="px-10 py-4 rounded-lg"
          style={{ backgroundColor: buttonBg, color: buttonTextColor }}
        >
          <InlineEditor value={buttonText} onChange={(val) => onUpdate("buttonText", val)} />
        </button>
      </div>
    </section>
  );
}

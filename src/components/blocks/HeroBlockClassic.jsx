import React from 'react'
import InlineEditor from '../InlineEditor';
import useImage from '../../hooks/useImage';

const HeroBlockClassic = (props) => {
    const { title, titleColor, subtitle, subtitleColor, buttonText, background, buttonBg, buttonTextColor, onUpdate, image } = props;
    const { handleFileChange, handleImageClick, fileInputRef } = useImage({ onUpdate, image })
    return (
        <section
            className="relative w-full py-24 px-6 flex items-center justify-center text-center"
            style={{ background }}
        >
            {/* Background Image */}
            <img
                src={image}
                alt="Hero Background"
                className="absolute inset-0 w-full h-full object-cover opacity-30 cursor-pointer"
                onClick={handleImageClick}
            />
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-white"></div>

            {/* Content */}
            <div className="relative z-10 max-w-3xl bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl p-10">
                <h1
                    className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
                    style={{ color: titleColor }}
                >
                    <InlineEditor
                        value={title}
                        onChange={(val) => onUpdate("title", val)}
                    />
                </h1>

                <p
                    className="text-lg md:text-xl mb-8"
                    style={{ color: subtitleColor }}
                >
                    <InlineEditor
                        value={subtitle}
                        onChange={(val) => onUpdate("subtitle", val)}
                        as="textarea"
                    />
                </p>

                <button
                    className="px-10 py-4 text-lg font-semibold rounded-full shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-2xl"
                    style={{ backgroundColor: buttonBg, color: buttonTextColor }}
                >
                    <InlineEditor
                        value={buttonText}
                        onChange={(val) => onUpdate("buttonText", val)}
                    />
                </button>
            </div>
        </section>
    );
}
export default HeroBlockClassic
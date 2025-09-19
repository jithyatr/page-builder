import useImage from "../../hooks/useImage";
import InlineEditor from "../InlineEditor";

export default function AboutUsBlock(props) {
    const {
        title,
        titleColor,
        subtitle,
        subtitleColor,
        background,
        image,
        onUpdate,
    } = props;
    const { handleFileChange, handleImageClick, fileInputRef } = useImage({ onUpdate, image })


    return (
        <section
            className="relative py-20 md:py-28 px-6 md:px-16"
            style={{ background }}
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side - Image */}
                <div className="relative">
                    <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
                        <img
                            src={image}
                            alt="About Us"
                            className="w-full h-full object-cover cursor-pointer"
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

                    {/* Decorative gradient blob */}
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
                </div>

                {/* Right Side - Content */}
                <div className="space-y-8 text-left">
                    <h2
                        className="text-4xl md:text-5xl font-bold tracking-tight leading-tight"
                        style={{ color: titleColor }}
                    >
                        <InlineEditor
                            value={title}
                            onChange={(val) => onUpdate("title", val)}
                        />
                    </h2>

                    <p
                        className="text-lg md:text-xl leading-relaxed backdrop-blur-lg bg-white/20 rounded-2xl p-6 shadow-lg"
                        style={{ color: subtitleColor }}
                    >
                        <InlineEditor
                            value={subtitle}
                            onChange={(val) => onUpdate("subtitle", val)}
                        // as="textarea"
                        />
                    </p>

                    {/* Optional CTA Button */}
                    {/* <button
                        className="px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg hover:opacity-90 transition"
                    >
                        Learn More
                    </button> */}
                </div>
            </div>
        </section>
    );
}

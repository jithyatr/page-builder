import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useSliderBlock from "../../hooks/useSliderBlock";

const SliderBlock = (props) => {
    const { title, titleColor, background, images, autoplay, interval, onUpdate, subtitle, subtitleColor} = props;
    const { handleRemove, handleReplace } = useSliderBlock({ onUpdate, images });

    return (
        <section
            className={`${background} py-20 md:px-8 px-4`}
            style={{ backgroundColor: background }}
        >
            {title && (
                <h1
                    className={`text-center md:text-6xl text-4xl font-bold mb-6`}
                    style={{ color: titleColor }}
                >
                    {title}
                </h1>
            )}
              {subtitle && (
                <p
                    className="text-lg mb-6" 
                    style={{ color: subtitleColor }}
                >
                    {subtitle}
                </p>
            )}

            <div className="max-w-4xl w-dvw mx-auto md:px-8 px-4" onClick={(e) => e.stopPropagation()}>
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={30}
                    slidesPerView={2}
                    autoplay={autoplay ? { delay: interval || 3000, disableOnInteraction: false } : false}
                    pagination={{ clickable: true }}
                    navigation
                >
                    {images?.map((img) => (
                        <SwiperSlide key={img.id}>
                            <div className="relative group">
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-64 object-cover rounded-xl shadow-md"
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3 transition">
                                    <label className="bg-white px-3 py-1 rounded cursor-pointer">
                                        Replace
                                        <input
                                            type="file"
                                            accept="image/*"
                                            hidden
                                            onChange={(e) => handleReplace(img.id, e.target.files[0])}
                                        />
                                    </label>
                                    <button
                                        className="bg-red-500 text-white px-3 py-1 rounded"
                                        onClick={() => handleRemove(img.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default SliderBlock;

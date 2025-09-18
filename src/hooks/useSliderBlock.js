import { useState } from "react";

const useSliderBlock = ({ onUpdate, images }) => {
    // Handle Remove
    const handleRemove = (id) => {
        const updated = images.filter((img) => img.id !== id);
        onUpdate("images", updated);
    };

    // Handle Replace
    const handleReplace = (id, file) => {
        if (!file) return;
        const newSrc = URL.createObjectURL(file);
        const updated = images.map((img) =>
            img.id === id ? { ...img, src: newSrc, alt: file.name } : img
        );
        onUpdate("images", updated);
    };

    return {
        handleRemove,
        handleReplace,
    };
};

export default useSliderBlock;

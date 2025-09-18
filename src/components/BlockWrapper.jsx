import { useState } from "react";
import pageData from "../pageData";

export default function BlockWrapper({ children, blockId, isSelected, onClick, onAdd, onDuplicate, onDelete }) {
    const [showTemplateOptions, setShowTemplateOptions] = useState(false);

    return (
        <div
            onClick={onClick}
            className={`relative ${isSelected ? "border-2 border-pink-500" : ""
                }`}
        >
            {children}
            {isSelected && (
                <>
                    <div className="absolute right-2 bottom-2 flex gap-2">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowTemplateOptions((prev) => !prev);
                            }}
                            className="bg-pink-500 text-white px-2 py-1 rounded text-sm"
                        >
                            +
                        </button>

                        {showTemplateOptions && (
                            <div className="absolute bottom-10 right-0 bg-white border shadow-md rounded p-2 z-10 w-2xs">
                                {[...new Set(pageData.blocks.map((b) => b.type))].map((type) => (
                                    <button
                                        key={type}
                                        className="block w-full text-left px-2 py-1 hover:bg-gray-100"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onAdd(blockId, type);
                                            setShowTemplateOptions(false);
                                        }}

                                    >
                                        {type.charAt(0).toUpperCase() + type.slice(1)} Block
                                    </button>
                                ))}
                            </div>
                        )}

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onDuplicate();
                            }}
                            className="bg-yellow-500 text-white px-2 py-1 rounded text-sm"
                        >
                            ⧉
                        </button>
                    </div>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete();
                        }}
                        className="absolute left-2 bottom-2 bg-red-500 text-white px-2 py-1 rounded text-sm"
                    >
                        🗑
                    </button>
                </>
            )}
        </div>
    );
}

import { useState } from "react";
export default function BlockWrapper({ children, blockId, isSelected, onClick, onAdd, onDuplicate, onDelete }) {

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
                                // setShowTemplateOptions((prev) => !prev);
                                onAdd(blockId);
                            }}
                            className="bg-pink-500 text-white px-2 py-1 rounded text-sm"
                        >
                            +
                        </button>

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

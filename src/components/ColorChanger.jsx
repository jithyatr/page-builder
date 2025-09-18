import React from 'react'

const ColorChanger = ({ label, color, onChange }) => {
    return (
        <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">{label}</label>
            <div className="flex items-center gap-2">
                <span className="flex-1 text-gray-600">
                    {"Please select color"}
                </span>
                <input
                    type="color"
                    value={color}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-10 h-10 cursor-pointer"
                />
            </div>
        </div>
    )
}

export default ColorChanger
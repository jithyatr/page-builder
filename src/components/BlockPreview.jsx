import React from 'react'
import blockSchemas from '../blockSchemas';

const BlockPreview = ({ onAdd }) => {
  return (
    <aside className="fixed right-0 top-0 h-full w-72 bg-white shadow-lg border-l overflow-y-auto">
      <h2 className="p-4 font-bold text-lg border-b">Choose a Template</h2>
      <div className="p-4 space-y-6">
        {blockSchemas.blocks.map((block) => (
          <div key={block?.type}>
            <h3 className="text-sm font-semibold mb-2 capitalize">{block?.title}</h3>
            <div className="grid grid-cols-1 gap-4">
              <div
                onClick={() => onAdd(block)}
                className="cursor-pointer border rounded hover:shadow-md"
              >
                <img src={block?.preview} alt={block?.type} className="w-full" />
                <p className="text-center py-2">{block?.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
export default BlockPreview;
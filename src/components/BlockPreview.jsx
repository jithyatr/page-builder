import React from 'react'
import { blockSchemas } from '../blockSchemas';

const BlockPreview = ({ onAdd }) => {
      return (
    <aside className="fixed right-0 top-0 h-full w-72 bg-white shadow-lg border-l overflow-y-auto">
      <h2 className="p-4 font-bold text-lg border-b">Choose a Template</h2>
      <div className="p-4 space-y-6">
        {Object.entries(blockSchemas).map(([type, templates]) => (
          <div key={type}>
            <h3 className="text-sm font-semibold mb-2 capitalize">{type}</h3>
            <div className="grid grid-cols-1 gap-4">
              {templates.map((tpl) => (
                <div
                  key={tpl.id}
                  onClick={() => onAdd(type, tpl.props)}
                  className="cursor-pointer border rounded hover:shadow-md"
                >
                  <img src={tpl.image} alt={tpl.label} className="w-full" />
                  <p className="text-center py-2">{tpl.label}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

//     const previews = [
//         { type: "hero", label: "Hero", preview: "/images/hero.png" },
//         { type: "features", label: "Features", preview: "/images/features.png" },
//         { type: "common", label: "Common", preview: "/images/common.png" },
//         { type: "slides", label: "Slides", preview: "/images/slider.png" },
//     ];

//     return (
//         <aside className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg border-l overflow-y-auto">
//             <h2 className="p-4 font-bold text-lg border-b">Choose a Block</h2>
//             <div className="p-4 space-y-4">
//                 {previews.map((p) => (
//                     <div
//                         key={p.type}
//                         onClick={() => onAdd(p.type)}
//                         className="cursor-pointer border rounded hover:shadow-md"
//                     >
//                         <img src={p.preview} alt={p.label} className="w-full" />
//                         <p className="text-center py-2">{p.label}</p>
//                     </div>
//                 ))}
//             </div>
//         </aside>
//     );
// }

export default BlockPreview
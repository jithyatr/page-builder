import React from 'react'
import BlockRenderer from './BlockRender';
import useUpdate from '../hooks/useUpdate';
import SidebarEditor from './SidebarEditor';

const BlockRenders = () => {
    const { updateBlock, selectedBlockId, setSelectedBlockId, addBlock, deleteBlock, duplicateBlock, page } = useUpdate();
    const selectedBlock = page.blocks.find((b) => b.id === selectedBlockId);


    return (
        <div className="font-sans flex">
            <div className={`flex-1 transition-all duration-300 ${selectedBlock ? "mr-64" : ""}`}>
                {page.blocks.map((block) => (
                    <BlockRenderer
                        key={block.id}
                        block={block}
                        isSelected={selectedBlockId === block.id}
                        onSelect={() => setSelectedBlockId(block.id)}
                        onUpdate={updateBlock}
                        onAdd={addBlock}
                        onDuplicate={duplicateBlock}
                        onDelete={deleteBlock}
                    />
                ))}
            </div>

            {selectedBlock && (
                <SidebarEditor block={selectedBlock} onUpdate={updateBlock} />
            )}
        </div>
    );
};

export default BlockRenders
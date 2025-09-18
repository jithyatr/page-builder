import React, { useState } from 'react'
import BlockRenderer from './BlockRender';
import useUpdate from '../hooks/useUpdate';
import SidebarEditor from './SidebarEditor';
import BlockPreview from './BlockPreview';

const BlockRenders = () => {
    const { updateBlock, selectedBlockId, setSelectedBlockId, addBlock, deleteBlock, duplicateBlock, page } = useUpdate();
    const selectedBlock = page.blocks.find((b) => b.id === selectedBlockId);
    const [sidebarMode, setSidebarMode] = useState("edit");


    return (
        <div className="font-sans flex">
            <div className={`flex-1 transition-all duration-300 ${selectedBlock ? "mr-64" : ""}`}>
                {page.blocks.map((block) => (
                    <BlockRenderer
                        key={block.id}
                        block={block}
                        isSelected={selectedBlockId === block.id}
                        onSelect={() => {
                            setSelectedBlockId(block.id);
                            setSidebarMode("edit");
                        }}
                        onUpdate={updateBlock}
                        onAdd={(blockId) => {
                            setSidebarMode("add");
                            setSelectedBlockId(blockId);
                        }}
                        onDuplicate={duplicateBlock}
                        onDelete={deleteBlock}
                    />
                ))}
            </div>

            {selectedBlock && (
                <>
                    {sidebarMode === "edit" ? (
                        <SidebarEditor block={selectedBlock} onUpdate={updateBlock} />
                    ) : (
                        <BlockPreview
                            onAdd={(type) => {
                                addBlock(selectedBlockId, type);
                                setSidebarMode("edit");
                            }}
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default BlockRenders
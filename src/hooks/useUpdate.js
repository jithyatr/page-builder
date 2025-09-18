import React, { useCallback, useState } from 'react'
import pageData from '../pageData';
import { debounce } from '../utils/debounce';

const useUpdate = () => {
    const saved = JSON.parse(localStorage.getItem("pageData"));
    const [page, setPage] = useState(saved || pageData);
    const [selectedBlockId, setSelectedBlockId] = useState(null);

    const saveToLocalStorage = useCallback(
        debounce((data) => {
            localStorage.setItem("pageData", JSON.stringify(data));
        }, 500),
        []
    );
    const updateBlock = (blockId, field, value, itemId = null) => {
        const newBlocks = page.blocks.map((b) => {
            if (b?.id !== blockId) return b;
            // If updating an item inside items
            if (itemId && b.props.items) {
                console.log(itemId)
                const newItems = b.props.items.map((item) =>
                    item.id === itemId ? { ...item, [field]: value } : item
                );
                return { ...b, props: { ...b.props, items: newItems } };
            }

            // Otherwise, update top-level block property
            return { ...b, props: { ...b.props, [field]: value } };
        });

        const updatedPage = { ...page, blocks: newBlocks };
        setPage(updatedPage);
        saveToLocalStorage(updatedPage);
    };


    // const addBlock = (afterId, type = "common") => {
    //     const idx = page.blocks.findIndex((b) => b.id === afterId);

    //     const templateBlock = pageData.blocks.find((b) => b.type === type);
    //     if (!templateBlock) return;

    //     const newBlock = {
    //         ...templateBlock,
    //         id: Date.now().toString(),
    //     };

    //     const newBlocks = [...page.blocks];
    //     newBlocks.splice(idx + 1, 0, newBlock);

    //     const updatedPage = { ...page, blocks: newBlocks };
    //     setPage(updatedPage);
    //     saveToLocalStorage(updatedPage);
    // };
    const addBlock = (afterId, type = "common", props = {}) => {
        const idx = page.blocks.findIndex((b) => b.id === afterId);

        // build new block from chosen template
        const newBlock = {
            id: Date.now().toString(), // unique id
            type,
            props,
        };

        // insert after the clicked block
        const newBlocks = [...page.blocks];
        newBlocks.splice(idx + 1, 0, newBlock);

        const updatedPage = { ...page, blocks: newBlocks };
        setPage(updatedPage);
        saveToLocalStorage(updatedPage);
    };



    const duplicateBlock = (id) => {
        const block = page.blocks.find((b) => b.id === id);
        if (!block) return;

        const copy = { ...block, id: Date.now().toString() };
        const idx = page.blocks.findIndex((b) => b.id === id);

        const newBlocks = [...page.blocks];
        newBlocks.splice(idx + 1, 0, copy);

        const updatedPage = { ...page, blocks: newBlocks };
        setPage(updatedPage);
        saveToLocalStorage(updatedPage);
    };

    const deleteBlock = (id) => {
        const newBlocks = page.blocks.filter((b) => b.id !== id);
        const updatedPage = { ...page, blocks: newBlocks };

        setPage(updatedPage);
        saveToLocalStorage(updatedPage);

        if (selectedBlockId === id) setSelectedBlockId(null);
    };


    return {
        updateBlock,
        addBlock,
        duplicateBlock,
        deleteBlock,
        selectedBlockId,
        setSelectedBlockId,
        page,
    }
}

export default useUpdate
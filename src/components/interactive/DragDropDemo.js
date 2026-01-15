import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const initialItems = [
    { id: '1', content: 'Drag me!' },
    { id: '2', content: 'Or me!' },
    { id: '3', content: 'Or even me!' },
];

export default function DragDropDemo() {
    const [items, setItems] = useState(initialItems);

    const onDragEnd = (result) => {
        if (!result.destination) return;
        const newItems = Array.from(items);
        const [removed] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, removed);
        setItems(newItems);
    };

    return (
        <div style={{ margin: '2rem auto', maxWidth: 400, padding: '2rem', background: 'var(--glass-bg)', borderRadius: '1rem', boxShadow: 'var(--shadow-md)' }}>
            <h2>Drag & Drop Demo</h2>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {items.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={{
                                                userSelect: 'none',
                                                padding: 16,
                                                margin: '0 0 8px 0',
                                                minHeight: '50px',
                                                background: snapshot.isDragging ? 'var(--interactive-pink)' : 'var(--interactive-blue)',
                                                color: '#fff',
                                                borderRadius: '0.5rem',
                                                boxShadow: 'var(--shadow-sm)',
                                                ...provided.draggableProps.style,
                                            }}
                                        >
                                            {item.content}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}

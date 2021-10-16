import React from 'react';
import ReactFlow from 'react-flow-renderer';
import './SequenceDiagram.css';
import OffsetEdge from './OffsetEdge'

function Root(props) {
    const edgeTypes = {
        offsetedge: OffsetEdge,
    };

    return (
        <ReactFlow 
            edgeTypes={edgeTypes}
            elements={props.elements} 
            />
    );
}

export default Root;

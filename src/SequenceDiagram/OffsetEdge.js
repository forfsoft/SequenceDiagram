import React from 'react';
import { getBezierPath, getEdgeCenter, getMarkerEnd } from 'react-flow-renderer';
import './SequenceDiagram.css';

function OffsetEdge({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    style = {},
    data,
    arrowHeadType,
    markerEndId,
}) {
    if (undefined !== data) {
        if (undefined !== data.offsetX) {
            sourceX = sourceX + data.offsetX;
            targetX = targetX + data.offsetX;
        }
        if (undefined !== data.offsetY) {
            sourceY = sourceY + data.offsetY;
            targetY = targetY + data.offsetY;
        }
    }

    const edgePath = getBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    });//type: 'straight',
    const markerEnd = getMarkerEnd(arrowHeadType, markerEndId);
    const [edgeCenterX, edgeCenterY] = getEdgeCenter({
        sourceX,
        sourceY,
        targetX,
        targetY,
    });

    let translateX = edgeCenterX;
    let translateY = edgeCenterY;
    if (undefined !== data) {
        if (undefined !== data.textOffsetX) {
            translateX = edgeCenterX + data.textOffsetX;
        }
        if (undefined !== data.textOffsetY) {
            translateY = edgeCenterY + data.textOffsetY;
        }
    }

    const translateText = "translate(" + translateX + "," + translateY + ")"

    return (
        <>
            <path
                id={id}
                style={style}
                className="react-flow__edge-path"
                d={edgePath}
                markerEnd={markerEnd}
            />
            <text textAnchor="middle"
                alignmentBaseline="middle"
                transform={translateText}>
                {(undefined !== data) ? data.label : undefined}
            </text>
        </>
    );
}

export default OffsetEdge;
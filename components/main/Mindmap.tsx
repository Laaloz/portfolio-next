"use client"; // Ensure this is a client component

import React, { useEffect, useState } from "react";
import "@xyflow/react/dist/style.css";
import {
    ReactFlow,
    useNodesState,
    useEdgesState,
    Background,
    Edge,
    Node,
    MiniMap,
    Position,
    Controls,
} from "@xyflow/react";
import { hierarchy, edgeData, HierarchyNode } from "../sub/MindmapData"; // Adjust the path as necessary
import { usePathname } from "next/navigation";

// Interface for coordinates
interface Coordinates {
    x: number;
    y: number;
}

// Recursive function to generate nodes with calculated positions
const calculatePositions = (
    node: HierarchyNode,
    x: number = 0,
    y: number = 0,
    level: number = 0,
    parentGap: number = 600,
    isMirrored: boolean = false,
    language: "fi" | "en" = "en" // Accepts 'fi' or 'en'
): Node[] => {
    const levelSpacing = 283; // Horizontal distance between levels
    const specialOffset = -500; // Increase this for a more significant move
    let verticalGap = 0; // Define a vertical gap between nodes

    const levelColors = [
        "rgba(248, 180, 0, 0.4)", // Light transparent amber
        "rgba(33, 150, 243, 0.3)", // Light transparent blue
        "rgba(76, 175, 80, 0.3)", // Light transparent green
        "rgba(233, 30, 99, 0.3)", // Light transparent pink
        "rgba(156, 39, 176, 0.3)", // Light transparent purple
    ];

    // Choose the color based on the current level, default to gray if out of bounds
    const nodeColor = levelColors[level] || "rgba(96, 125, 139, 0.3)";

    if (level === 1) verticalGap = 150;
    if (level === 2) verticalGap = 15;
    if (level === 3) verticalGap = 20;
    if (level === 4) verticalGap = 30;

    // Adjust x position for special nodes
    if (node.id === "front-end" || node.id === "development-process") {
        x += specialOffset;
        isMirrored = true;
    }

    if (node.id === "front-end") y += levelSpacing;
    if (node.id === "development-process") y -= levelSpacing;
    if (node.id === "back-end") (x -= 65), (y -= 17);
    if (node.id === "tools-technologies") (x -= 65), (y += 17);

    const position: Coordinates = { x, y };

    // Construct the current node with the selected language
    const currentNode: Node = {
        id: node.id,
        data: {
            label: node.labels[language], // Use the selected language label
        },
        width: 160,
        style: { borderColor: nodeColor, color: "#fff", padding: "8px" },
        position,
        sourcePosition: isMirrored ? Position.Left : Position.Right,
        targetPosition: isMirrored ? Position.Right : Position.Left,
        ariaLabel: `Node labeled ${node.labels[language]}`, // Use the selected language label
        draggable: false,
    };

    let nodes: Node[] = [currentNode];

    if (node.children) {
        const childCount = node.children.length;
        const childGap = parentGap * 0.5; // Gap between children
        const totalHeight =
            (childCount - 1) * childGap + verticalGap * (childCount - 1);
        let startY = y - totalHeight / 2;
        let childX = x + levelSpacing;

        if (node.id === "main") {
            currentNode.sourcePosition = undefined;
            currentNode.targetPosition = undefined;
        }

        if (node.id === "front-end") startY -= totalHeight / 2;
        if (node.id === "development-process") startY += totalHeight / 2;
        if (node.id === "back-end") startY -= totalHeight / 2;
        if (node.id === "tools-technologies") startY += totalHeight / 2;

        node.children.forEach((child, index) => {
            const childY = startY + index * (childGap + verticalGap);

            const childNodes = calculatePositions(
                child,
                childX,
                childY,
                level + 1,
                childGap,
                isMirrored,
                language // Pass the language down to children
            );

            if (isMirrored) {
                childNodes.forEach((node) => {
                    node.position.x += specialOffset;
                    node.sourcePosition = Position.Left;
                    node.targetPosition = Position.Right;
                });
            }

            nodes = nodes.concat(childNodes);
        });
    }

    return nodes;
};

// Create initial edges
const initialEdges: Edge[] = edgeData.map((edge) => ({
    id: `e-${edge.source}-${edge.target}`,
    source: edge.source,
    target: edge.target,
    type: edge.type,
    focusable: false,
    animated: true,
}));

const Mindmap: React.FC = () => {
    const pathname = usePathname(); // Get the current pathname
    const isEnglish = pathname.includes("/en"); // Check if the pathname includes '/en'
    const initialLanguage: "fi" | "en" = isEnglish ? "en" : "fi";
    const [nodes, , onNodesChange] = useNodesState(
        calculatePositions(hierarchy, 0, 300, 0, 600, false, initialLanguage)
    );
    const [edges, , onEdgesChange] = useEdgesState(initialEdges);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div
            className="mt-20 z-[20] md:mt-60 opacity-90 relative"
            style={{
                width: "100%",
                height: "800px",
                overflow: "hidden",
            }}
        >
            <a href="#skip-mindmap" className="sr-only skip-link">
                Skip (mindmap)
            </a>

            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                attributionPosition="bottom-left"
                preventScrolling={false}
                zoomOnScroll={false}
                zoomOnDoubleClick={false}
                colorMode="dark"
                fitViewOptions={{
                    minZoom: 1.5,
                }}
                fitView
                panOnDrag={!isMobile}
            >
                <Background />

                <Controls showInteractive={false} />
                <MiniMap pannable />
            </ReactFlow>

            <div id="skip-mindmap" className="skip-link-id"></div>
        </div>
    );
};

export default Mindmap;

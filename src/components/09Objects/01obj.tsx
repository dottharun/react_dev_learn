import { PointerEvent, useState } from "react";

export default function MovingDot() {
  // docs recommends treating objects immutable
  // for simple state changes
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onPointerMove={handleMove}
      style={{
        position: "relative",
        width: "100px",
        height: "100px",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}

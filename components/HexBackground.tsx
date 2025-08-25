import React from "react";

type Props = {
  /** длина стороны шестиугольника в px */
  size?: number;           // по умолчанию 16
  /** толщина обводки px */
  stroke?: number;         // по умолчанию 1
  /** цвет линий (hex/rgba) */
  color?: string;          // по умолчанию rgba(255,136,0,.18) — Ergo orange с альфой
  /** цвет заливки ячеек или "none" */
  fill?: string;           // по умолчанию "none"
  /** общая прозрачность слоя (0..1) */
  opacity?: number;        // по умолчанию 1
  className?: string;      // позиционирование/размер контейнера
};

export default function HexBackground({
  size = 16,
  stroke = 1,
  color = "rgba(255,136,0,.18)",
  fill = "none",
  opacity = 1,
  className = "absolute inset-0",
}: Props) {
  const s = size;                         // сторона
  const h = Math.sqrt(3) * s;             // высота плоско-верхнего гекса
  const tileW = 3 * s;                    // ширина тайла, чтобы получился 1.5s шаг
  const tileH = h;                        // высота тайла

  // points правильного гекса (flat-top) с центром (cx,cy)
  const hex = (cx: number, cy: number) =>
    [
      [cx + s, cy],
      [cx + s / 2, cy + h / 2],
      [cx - s / 2, cy + h / 2],
      [cx - s, cy],
      [cx - s / 2, cy - h / 2],
      [cx + s / 2, cy - h / 2],
    ]
      .map(([x, y]) => `${(x as number).toFixed(2)},${(y as number).toFixed(2)}`)
      .join(" ");

  // единичный тайл содержит ДВА гекса в ряд (расстояние между центрами = 1.5 * s)
  const svg = `
<svg xmlns='http://www.w3.org/2000/svg' width='${tileW}' height='${tileH}' viewBox='0 0 ${tileW} ${tileH}'>
  <g fill='${fill}' stroke='${color}' stroke-width='${stroke}' opacity='${opacity}' stroke-linejoin='round' shape-rendering='geometricPrecision'>
    <polygon points='${hex(s, h / 2)}'/>
    <polygon points='${hex(2.5 * s, h / 2)}'/>
  </g>
</svg>`.trim();

  const dataUri = `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`;

  return (
    <div
      aria-hidden
      className={className}
      style={{
        backgroundImage: dataUri,
        backgroundRepeat: "repeat",
        backgroundSize: `${tileW}px ${tileH}px`,
        pointerEvents: "none",
      }}
    />
  );
} 
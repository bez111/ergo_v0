"use client"

import React from 'react'

export function HexagonPattern() {
  return (
    <>
      <div className="hexagon-pattern fixed inset-0 pointer-events-none" />
      <style jsx>{`
        .hexagon-pattern {
          background-color: transparent;
          background-image: 
            linear-gradient(30deg, transparent 40%, rgba(255, 136, 0, 0.03) 40%, rgba(255, 136, 0, 0.03) 60%, transparent 60%),
            linear-gradient(90deg, transparent 40%, rgba(255, 136, 0, 0.02) 40%, rgba(255, 136, 0, 0.02) 60%, transparent 60%),
            linear-gradient(150deg, transparent 40%, rgba(255, 136, 0, 0.03) 40%, rgba(255, 136, 0, 0.03) 60%, transparent 60%);
          background-size: 60px 104px;
          background-position: 0 0, 0 0, 0 0;
          opacity: 0.5;
          animation: hexFloat 20s ease-in-out infinite;
          mix-blend-mode: screen;
        }
        
        .hexagon-pattern::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse at center,
            transparent 0%,
            rgba(0, 0, 0, 0.4) 100%
          );
        }
        
        .hexagon-pattern::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            repeating-linear-gradient(
              60deg,
              transparent,
              transparent 35px,
              rgba(255, 136, 0, 0.01) 35px,
              rgba(255, 136, 0, 0.01) 70px
            ),
            repeating-linear-gradient(
              -60deg,
              transparent,
              transparent 35px,
              rgba(255, 136, 0, 0.01) 35px,
              rgba(255, 136, 0, 0.01) 70px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 60px,
              rgba(255, 136, 0, 0.01) 60px,
              rgba(255, 136, 0, 0.01) 120px
            );
          animation: hexPulse 15s ease-in-out infinite;
        }
        
        @keyframes hexFloat {
          0%, 100% {
            transform: translateY(0) scale(1);
            filter: brightness(1);
          }
          25% {
            transform: translateY(-5px) scale(1.01);
            filter: brightness(1.1);
          }
          50% {
            transform: translateY(3px) scale(0.99);
            filter: brightness(0.95);
          }
          75% {
            transform: translateY(-3px) scale(1.005);
            filter: brightness(1.05);
          }
        }
        
        @keyframes hexPulse {
          0%, 100% {
            opacity: 0.3;
            transform: rotate(0deg);
          }
          50% {
            opacity: 0.5;
            transform: rotate(1deg);
          }
        }
      `}</style>
    </>
  )
} 
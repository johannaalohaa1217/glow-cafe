import { useEffect, useState } from "react";
import "./LoadingScreen.css";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 900);
    const removeTimer = setTimeout(() => setVisible(false), 1400);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`loading-screen ${fading ? "fade-out" : ""}`}>
      <div className="loading-mark">
        <svg viewBox="0 0 64 64" width="46" height="46" fill="none" aria-hidden="true">
          <path
            d="M14 26h30v14a15 15 0 0 1-15 15 15 15 0 0 1-15-15V26z"
            stroke="currentColor"
            strokeWidth="2.2"
          />
          <path
            d="M44 29h4a7 7 0 0 1 0 14h-4"
            stroke="currentColor"
            strokeWidth="2.2"
          />
          <path className="steam steam-1" d="M22 20c-2-3 2-4 0-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path className="steam steam-2" d="M30 20c-2-3 2-4 0-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span>Glow Café</span>
      </div>
    </div>
  );
}

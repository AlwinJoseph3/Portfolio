import { useEffect, useState } from "react";

export const useKonamiCode = () => {
  const [triggered, setTriggered] = useState(false);
  const konamiCode = ["a", "l", "w", "i", "n"];

  useEffect(() => {
    let cursor = 0;

    const onKeyDown = (e: KeyboardEvent) => {
      // Reset if the key is wrong
      if (e.key !== konamiCode[cursor]) {
        cursor = 0;
        return;
      }

      // If correct, advance
      cursor++;

      // If finished, trigger!
      if (cursor === konamiCode.length) {
        setTriggered(true);
        cursor = 0;
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return { triggered, setTriggered };
};

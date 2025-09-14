import { useState, useEffect } from 'react';

interface WindowDimensions {
  viewportWidth: number | undefined;
  viewportHeight: number | undefined;
}

function getWindowDimensions(): WindowDimensions {
  if (typeof window === 'undefined') {
    return { viewportWidth: undefined, viewportHeight: undefined };
  }
  const { innerWidth: viewportWidth, innerHeight: viewportHeight } = window;
  return { viewportWidth, viewportHeight };
}

export default function useWindowDimensions(): WindowDimensions {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array ensures the effect runs only once on mount and cleans up on unmount

  return windowDimensions;
}
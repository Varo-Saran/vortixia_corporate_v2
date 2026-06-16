"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-[50px] h-[24px]"></div>;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <label className="relative inline-flex items-center cursor-pointer w-[50px] h-[20px] group">
      <input 
        type="checkbox" 
        className="sr-only peer" 
        checked={isDark}
        onChange={() => setTheme(isDark ? "light" : "dark")}
        aria-label="Toggle dark mode"
      />
      {/* Slider Track */}
      <div className="
        w-full h-full 
        border-2 border-[#111112] dark:border-[#F9F9FB] 
        bg-[#F9F9FB] dark:bg-[#0B0B0C] 
        peer-checked:bg-accent-volt dark:peer-checked:bg-accent-volt
        shadow-[4px_4px_0px_0px_#111112] dark:shadow-[4px_4px_0px_0px_#F9F9FB] 
        transition-colors duration-300
      "></div>
      
      {/* Slider Knob */}
      <div className="
        absolute left-[-2px] bottom-[2px]
        w-[20px] h-[20px] 
        border-2 border-[#111112] dark:border-[#F9F9FB] 
        bg-[#F9F9FB] dark:bg-[#0B0B0C]
        shadow-[2px_2px_0px_0px_#111112] dark:shadow-[2px_2px_0px_0px_#F9F9FB] 
        transition-transform duration-300
        peer-checked:translate-x-[30px]
      "></div>
    </label>
  );
}

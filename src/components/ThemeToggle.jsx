import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Sun } from "lucide-react";

export const ThemeToggle = () => {
  useEffect(() => {
    // Ensure light theme is always used
    localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <div
      className={cn(
        "p-2 rounded-full transition-colors duration-300 border-2 border-accent cursor-default",
        "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
      )}
      aria-label="Light theme enabled"
    >
      <Sun size={20} className="text-accent" />
    </div>
  );
};

import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-secondary/20 relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} Designed & Developed by Ruvishan Maleesha.
      </p>
        <a
          href="#hero"
          className="p-2 rounded-full bg-accent/20 hover:bg-accent/30 text-accent transition-colors"
        >
          <ArrowUp size={20} color="hsl(var(--accent))" />
        </a>
    </footer>
  );
};

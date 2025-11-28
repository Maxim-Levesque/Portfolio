import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2 text-sm">
            Built with Lovable, React, TypeScript & Tailwind CSS
          </p>
          <p className="text-xs mt-2">
            © {new Date().getFullYear()} Maxim Lévesque. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

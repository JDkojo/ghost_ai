"use client";

import { useState } from "react";
import { PanelLeftOpen, PanelLeftClose } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ProjectSidebar } from "./project-sidebar";

export function EditorNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <nav className="h-14 bg-card border-b border-border flex items-center px-4 z-50">
        {/* Left section */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          >
            {isSidebarOpen ? (
              <PanelLeftClose className="h-5 w-5" />
            ) : (
              <PanelLeftOpen className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Center section */}
        <div className="flex-1 flex items-center justify-center">
          {/* Empty for now */}
        </div>

        {/* Right section */}
        <div className="flex items-center gap-2">
          <UserButton />
        </div>
      </nav>

      <ProjectSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </>
  );
}

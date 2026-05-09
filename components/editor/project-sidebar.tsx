"use client";

import { X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside className="fixed top-0 left-0 bottom-0 w-80 bg-card border-r border-border z-50 flex flex-col animate-in slide-in-from-left duration-300">
        {/* Header */}
        <div className="h-14 flex items-center justify-between px-4 border-b border-border">
          <h2 className="text-lg font-semibold">Projects</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="my-projects" className="flex-1 flex flex-col">
          <TabsList className="w-full rounded-none border-b border-border bg-transparent p-0">
            <TabsTrigger
              value="my-projects"
              className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              My Projects
            </TabsTrigger>
            <TabsTrigger
              value="shared"
              className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              Shared
            </TabsTrigger>
          </TabsList>

          <ScrollArea className="flex-1">
            <TabsContent value="my-projects" className="p-4 m-0">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <p className="text-muted-foreground text-sm">
                  No projects yet
                </p>
                <p className="text-muted-foreground text-xs mt-1">
                  Create your first project to get started
                </p>
              </div>
            </TabsContent>

            <TabsContent value="shared" className="p-4 m-0">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <p className="text-muted-foreground text-sm">
                  No shared projects
                </p>
                <p className="text-muted-foreground text-xs mt-1">
                  Projects shared with you will appear here
                </p>
              </div>
            </TabsContent>
          </ScrollArea>
        </Tabs>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          <Button className="w-full" size="lg">
            <Plus className="h-5 w-5 mr-2" />
            New Project
          </Button>
        </div>
      </aside>
    </>
  );
}

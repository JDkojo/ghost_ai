import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tabs } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className={cn("flex items-center gap-2")}>
        <Sparkles className="w-6 h-6" />
        <div>ghost AI</div>
      </div>
    </div>
  );
}

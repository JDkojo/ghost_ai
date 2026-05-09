import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex items-center gap-2">
        <Sparkles className="w-6 h-6" />
        <div>ghost AI</div>
      </div>
    </div>
  );
}

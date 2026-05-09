import { EditorNavbar } from "@/components/editor/editor-navbar";

export default function EditorPage() {
  return (
    <div className="h-screen flex flex-col">
      <EditorNavbar />
      <main className="flex-1 flex items-center justify-center">
        <p className="text-muted-foreground">Editor workspace</p>
      </main>
    </div>
  );
}

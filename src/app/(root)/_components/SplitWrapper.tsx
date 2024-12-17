"use client";
import dynamic from "next/dynamic";
import EditorPanel from "./EditorPanel";
import OutputPanel from "./OutputPanel";

const Split = dynamic(() => import("react-split"), { ssr: false });

export default function SplitWrapper() {
  return (
    <Split
      className="flex w-full"
      sizes={[50, 50]}
      minSize={[100, 100]}
      gutterSize={6}
      direction="horizontal"
    >
      <div className="pr-2">
        <EditorPanel />
      </div>
      <div className="pl-2">
        <OutputPanel />
      </div>
    </Split>
  );
}

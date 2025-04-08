import React from "react";
import { ScrollArea, ScrollBar } from "@/shared/ui/scroll-area.tsx";

export interface LayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export function Layout({ children, header, footer }: LayoutProps) {
  return (
    <div className="flex flex-col h-screen bg-gray-300 w-screen overflow-hidden ">
      {header}
      <ScrollArea className="h-[calc(100vh-152px)] ">
        <main className="w-screen flex-1 justify-center items-center">
          {children}
        </main>
        {footer}
        <ScrollBar />
      </ScrollArea>
    </div>
  );
}

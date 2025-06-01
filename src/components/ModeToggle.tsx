"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex items-center bg-gray-300 rounded-full p-1">
      {theme === "dark" ? (
        <Button
          variant="ghost"
          size="icon"
          className={`h-4 w-4 rounded-full cursor-pointer bg-white`}
          onClick={() => setTheme("light")}
        >
          {" "}
          Light
        </Button>
      ) : (
        <Button
          variant="ghost"
          size="icon"
          className={`h-4 w-4 rounded-full cursor-pointer bg-gray-700`}
          onClick={() => setTheme("dark")}
        >
          Dark
        </Button>
      )}
    </div>
  );
}

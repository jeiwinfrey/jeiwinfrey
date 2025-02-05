"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Link from "next/link";

export function TimelineDemo() {
  const data = [
    {
      title: "2023-Present",
      content: (
        <div className="max-w-lg">
          <p className="text-neutral-800 dark:text-neutral-200 text-base font-semibold tracking-tight mb-4">
            Computer Science Program at Mariano Marcos State University
          </p>
          <div className="mb-8">
            <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-4">
              Embarking on my computer science journey has opened up a whole new world of possibilities. Here, I've discovered my true calling in web development, diving deep into:
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                🚀 Mastering modern web technologies and frameworks
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                💻 Creating responsive and dynamic web applications
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                📚 Expanding my knowledge in software architecture and design patterns
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2021-2023",
      content: (
        <div className="max-w-lg">
          <p className="text-neutral-800 dark:text-neutral-200 text-base font-semibold tracking-tight mb-4">
            Senior High School (STEM) at Ilocos Norte National High School
          </p>
          <div className="mb-8">
            <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-4">
              My passion for mathematics flourished during these transformative years. The STEM program challenged me with:
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                📐 Advanced calculus and mathematical modeling
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                🧮 Complex problem-solving in physics and engineering
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                🎯 Analytical thinking and mathematical reasoning
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2016-2021",
      content: (
        <div className="max-w-lg">
          <p className="text-neutral-800 dark:text-neutral-200 text-base font-semibold tracking-tight mb-4">
            Junior High School at Special Science Class - Ilocos Norte National High School
          </p>
          <div className="mb-8">
            <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-4">
              This was where my love for numbers first ignited. The Special Science Class program provided unique opportunities:
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                📊 Discovering the beauty of statistics and data analysis
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                🌐 First encounter with HTML, sparking my interest in web development
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
                🏆 Excellence in mathematics and scientific reasoning
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full flex justify-center">
      <div className="w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
}

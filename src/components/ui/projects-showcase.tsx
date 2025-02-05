'use client';

import { AnimatedTabs } from "@/components/ui/animated-tabs";

const projectTabs = [
  {
    id: "resugenius",
    label: "ResuGenius",
    content: (
      <div className="grid grid-cols-2 gap-8 w-full h-full">
        <div className="flex items-center justify-center w-full h-60 rounded-lg bg-neutral-100 dark:bg-neutral-800">
          <span className="text-6xl font-bold text-neutral-800 dark:text-neutral-200">RG</span>
        </div>
        <div className="flex flex-col gap-y-4">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mt-0 !m-0">
            ResuGenius
          </h2>
          <h3 className="text-lg text-neutral-600 dark:text-neutral-400 mt-0 !m-0">
            AI SaaS Resume Builder
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-0">
            An AI-powered SaaS platform that helps users create professional resumes with ease. 
            Built with modern web technologies and advanced AI capabilities.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "clientlytic",
    label: "ClientLytic",
    content: (
      <div className="grid grid-cols-2 gap-8 w-full h-full">
        <div className="flex items-center justify-center w-full h-60 rounded-lg bg-neutral-100 dark:bg-neutral-800">
          <span className="text-6xl font-bold text-neutral-800 dark:text-neutral-200">CL</span>
        </div>
        <div className="flex flex-col gap-y-4">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mt-0 !m-0">
            ClientLytic
          </h2>
          <h3 className="text-lg text-neutral-600 dark:text-neutral-400 mt-0 !m-0">
            Client Analytics SaaS
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-0">
            A comprehensive analytics platform for businesses to track and analyze client behavior and engagement. 
            Features real-time data visualization and insights.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "hallyuline",
    label: "HallyuLine",
    content: (
      <div className="grid grid-cols-2 gap-8 w-full h-full">
        <div className="flex items-center justify-center w-full h-60 rounded-lg bg-neutral-100 dark:bg-neutral-800">
          <span className="text-6xl font-bold text-neutral-800 dark:text-neutral-200">HL</span>
        </div>
        <div className="flex flex-col gap-y-4">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mt-0 !m-0">
            HallyuLine
          </h2>
          <h3 className="text-lg text-neutral-600 dark:text-neutral-400 mt-0 !m-0">
            AI K-pop Chat App
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-0">
            An innovative AI application that enables fans to have interactive conversations with their favorite K-pop idols. 
            Powered by advanced language models and character AI.
          </p>
        </div>
      </div>
    ),
  },
];

export function ProjectsShowcase() {
  return (
    <div id="projects" className="w-full py-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-neutral-800 dark:text-neutral-200">
        Featured Projects
      </h2>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AnimatedTabs 
          tabs={projectTabs}
          className="w-full"
        />
      </div>
    </div>
  );
}

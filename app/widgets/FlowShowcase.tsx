import type { ReactElement } from "react";
import { LuWorkflow } from "react-icons/lu";
import { TbSettingsAutomation } from "react-icons/tb";
import { IoMdTime } from "react-icons/io";
import { RiFileExcel2Line } from "react-icons/ri";

import type { VideoShowcaseFlowStep } from "@/lib/i18n";

const ICONS: Record<VideoShowcaseFlowStep["icon"], ReactElement> = {
  intake: (
    <RiFileExcel2Line className="h-6 w-6" />
  ),
  workflow: (
    <LuWorkflow className="h-6 w-6" />
  ),
  automation: (
    <TbSettingsAutomation className="h-6 w-6" />
  ),
  time: (
    <IoMdTime className="h-6 w-6" />
  ),
};

type ClassValue = string | false | null | undefined;

function classNames(...classes: ClassValue[]) {
  return classes.filter(Boolean).join(" ");
}

export type FlowShowcaseProps = {
  steps: VideoShowcaseFlowStep[];
  className?: string;
};

export function FlowShowcase({ steps, className }: FlowShowcaseProps) {
  return (
    <div
      className={classNames(
        "relative isolate flex flex-col gap-6 rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm sm:flex-row sm:items-center sm:gap-0",
        className
      )}
    >
      {steps.map((step, index) => (
        <div
          key={step.title}
          className={classNames(
            "relative flex-1 px-4 text-center sm:px-6",
            index !== steps.length - 1 && "sm:border-r sm:border-dashed sm:border-zinc-200"
          )}
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            {ICONS[step.icon]}
          </div>
          <div className="mt-4 text-sm font-semibold text-zinc-900">{step.title}</div>
          <p className="mt-2 text-sm text-zinc-600">{step.caption}</p>
          {index !== steps.length - 1 && (
            <div className="absolute inset-y-0 right-0 hidden sm:flex sm:w-6 sm:items-center sm:justify-center">
              <span className="text-xl text-zinc-300">→</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

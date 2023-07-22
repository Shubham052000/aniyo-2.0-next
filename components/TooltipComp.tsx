"use client";

import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export default function TooltipComp() {
  const [lang, setLang] = useState("jp");

  const welcomeText = lang === "en" ? "Welcome" : "いらっしゃいます";
  const tooltipContent =
    lang === "en" ? 'welcome: "irasshaimase"' : 'irasshaimase: "welcome"';

  return (
    <TooltipProvider delayDuration={150}>
      <Tooltip>
        <TooltipTrigger
          className="underline underline-offset-8"
          onClick={() => {
            setLang((prevLang) => {
              return prevLang === "en" ? "jp" : "en";
            });
          }}
        >
          {welcomeText}
        </TooltipTrigger>
        <TooltipContent>{tooltipContent}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

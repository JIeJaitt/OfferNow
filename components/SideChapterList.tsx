"use client";

import { ElogChapter } from "@/types/elog";
import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Icons } from "./Icons";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface SidebarProps {
  chapters: ElogChapter[];
}

function SidebarItem({ chapter }: { chapter: ElogChapter }) {
  const router = useRouter();
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(path.includes(chapter.nav_path));
  // 判断是否为可导航项目
  const isNavigable =
    !chapter.is_nav && (!chapter.children || chapter.children.length === 0);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full space-y-2"
    >
      <CollapsibleTrigger
        className={cn(
          `relative flex items-center 
            justify-between
            py-1
            px-3 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-600 w-full text-start
            shadow-sm
            rounded-sm
            break-all
            truncate
            `,
          `${path == chapter.url ? "bg-blue-200 dark:bg-blue-700" : ""}`,
          `${chapter.level === 4 ? "text-base" : ""}`,
          `${chapter.level === 3 ? "text-sm" : ""}`,
          `${chapter.level === 1 ? "text-lg font-semibold" : ""},`,
          `${chapter.level === 2 ? "text-md font-semibold" : ""},`
        )}
      >
        {isNavigable ? (
          <Link href={chapter.url} passHref>
            <text>{chapter.title}</text>
          </Link>
        ) : (
          <div onClick={() => setIsOpen(!isOpen)} className="flex-grow">
            <text>{chapter.title}</text>
          </div>
        )}
        {chapter.children && chapter.children.length > 0 && (
          <Icons.cheverDown
            className={`h-4 w-4 ${!isOpen ? "rotate-180" : ""}`}
          />
        )}
      </CollapsibleTrigger>

      {chapter.children && (
        <CollapsibleContent className="ml-2 space-y-1">
          {chapter.children.map((child) => (
            <SidebarItem key={child.urlname} chapter={child} />
          ))}
        </CollapsibleContent>
      )}
    </Collapsible>
  );
}

function SidebarChapter({ chapters }: { chapters: ElogChapter[] }) {
  return (
    <div className="space-y-2 overflow-x-hidden">
      {chapters.map((chapter) => (
        <SidebarItem key={chapter.urlname} chapter={chapter} />
      ))}
    </div>
  );
}

export default SidebarChapter;

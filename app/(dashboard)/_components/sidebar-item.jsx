'use client'
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "../../../@/lib/utils";

export const SidebarItem = ({
  icon: LucideIcon,
  label,
  href,
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/students" && href === "/students") ||
    pathname === href ||
    pathname?.startsWith(`${href}/students`);

  const onClick = () => {
    router.push(href);
  }

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
        isActive && "text-purple-700 bg-purple-200/20 hover:bg-purple-200/20 hover:text-purple-700"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <LucideIcon
          size={22}
          className={cn(
            "text-slate-500",
            isActive && "text-purple-700"
          )}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-purple-700 h-full transition-all",
          isActive && "opacity-100"
        )}
      />
    </button>
  );
}


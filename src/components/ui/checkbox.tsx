"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"; // Wait, I don't have this.
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

// Implementing a custom checkbox since radix-ui/react-checkbox is not installed
// and installing it might not be allowed/easy in this environment.

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  onCheckedChange?: (checked: boolean) => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, checked, onCheckedChange, ...props }, ref) => {
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onCheckedChange?.(e.target.checked);
    }

    return (
      <label className="flex items-center gap-3 cursor-pointer group select-none">
        <div className="relative flex items-center">
          <input
            type="checkbox"
            className="peer sr-only"
            ref={ref}
            checked={checked}
            onChange={handleChange}
            {...props}
          />
          <div
            className={cn(
              "w-5 h-5 border border-autobuy-neutral-4 rounded-[4px] bg-white transition-all peer-checked:bg-autobuy-primary2.5 peer-checked:border-autobuy-primary2.5 flex items-center justify-center",
              className
            )}
          >
            <Icon
              icon="mdi:check"
              className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
            />
          </div>
        </div>
        {label && (
          <span className="text-sm text-autobuy-neutral-2 group-hover:text-autobuy-neutral-1 transition-colors">
            {label}
          </span>
        )}
      </label>
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox };

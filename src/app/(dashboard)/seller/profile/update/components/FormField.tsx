"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  value?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  onChange?: (value: string) => void;
}

export function FormField({
  label,
  name,
  type = "text",
  value,
  placeholder,
  className,
  required = false,
  onChange,
}: FormFieldProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <Label
        htmlFor={name}
        className="text-sm font-normal  text-autobuy-neutral-2 mb-2"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        className="p-3 border border-gray-300 text-base rounded-[12px] focus:outline-none h-auto"
        required={required}
      />
    </div>
  );
}

"use client";

import React, { forwardRef, useState } from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils"; // You might need to create this utility

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  helperText?: string;
  startIcon?: string;
  endIcon?: string;
  variant?: "default" | "filled" | "outlined";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  onValueChange?: (value: string) => void;
  showPasswordToggle?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      label,
      error,
      helperText,
      startIcon,
      endIcon,
      variant = "default",
      size = "md",
      isLoading = false,
      onValueChange,
      showPasswordToggle = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    // Handle password type with toggle
    const inputType = type === "password" && showPassword ? "text" : type;

    // Handle change events
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      onValueChange?.(value);
      props.onChange?.(e);
    };

    // Size variants
    const sizeClasses = {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-3 text-base",
      lg: "px-5 py-4 text-lg",
    };

    // Icon size variants
    const iconSizeClasses = {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
    };

    // Base input classes
    const baseClasses = cn(
      "w-full rounded-lg !border border-5 transition-all duration-200 outline-none",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "placeholder-muted-foreground",
      sizeClasses[size],
      className
    );

    // Variant classes
    const variantClasses = {
      default: cn(
        "border-input bg-background text-foreground",
        "focus:ring-2 focus:ring-ring focus:border-transparent",
        error && "border-destructive focus:ring-destructive/20",
        isFocused && !error && "border-ring"
      ),
      filled: cn(
        "border-transparent bg-muted text-foreground",
        "focus:bg-background focus:border-ring",
        error && "bg-destructive/10 border-destructive",
        isFocused && !error && "bg-background"
      ),
      outlined: cn(
        "border-2 border-input bg-transparent text-foreground",
        "focus:border-ring",
        error && "border-destructive",
        isFocused && !error && "border-ring"
      ),
    };

    // Icon classes
    const iconClasses = cn(
      "text-muted-foreground transition-colors",
      iconSizeClasses[size],
      isFocused && !error && "text-ring",
      error && "text-destructive"
    );

    // Get appropriate icons for different input types
    const getStartIcon = () => {
      if (startIcon) return startIcon;

      switch (type) {
        case "email":
          return "mage:email";
        case "password":
          return "heroicons:lock-closed";
        case "search":
          return "heroicons:magnifying-glass";
        case "tel":
          return "heroicons:phone";
        case "url":
          return "heroicons:link";
        default:
          return null;
      }
    };

    const getEndIcon = () => {
      if (type === "password" && showPasswordToggle) {
        return showPassword ? "heroicons:eye-slash" : "heroicons:eye";
      }
      return endIcon;
    };

    const startIconName = getStartIcon();
    const endIconName = getEndIcon();
    const hasStartIcon = !!startIconName;
    const hasEndIcon = !!endIconName || isLoading;

    // Calculate padding for icons
    const paddingClasses = cn(
      hasStartIcon &&
        (size === "sm" ? "pl-9" : size === "md" ? "pl-11" : "pl-13"),
      hasEndIcon && (size === "sm" ? "pr-9" : size === "md" ? "pr-11" : "pr-13")
    );

    return (
      <div className="w-full">
        {label && (
          <label
            className={cn(
              "block text-sm font-medium mb-2 transition-colors",
              error ? "text-destructive" : "text-foreground"
            )}
          >
            {label}
            {props.required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}

        <div className="relative">
          {/* Start Icon */}
          {hasStartIcon && (
            <div
              className={cn(
                "absolute left-0 top-0 h-full flex items-center justify-center",
                size === "sm" ? "w-9" : size === "md" ? "w-11" : "w-13"
              )}
            >
              <Icon icon={startIconName} className={iconClasses} />
            </div>
          )}

          {/* Input Field */}
          <input
            type={inputType}
            className={cn(baseClasses, variantClasses[variant], paddingClasses)}
            ref={ref}
            disabled={disabled || isLoading}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={handleChange}
            {...props}
          />

          {/* End Icon / Loading / Password Toggle */}
          {(hasEndIcon || isLoading) && (
            <div
              className={cn(
                "absolute right-0 top-0 h-full flex items-center justify-center",
                size === "sm" ? "w-9" : size === "md" ? "w-11" : "w-13"
              )}
            >
              {isLoading ? (
                <Icon
                  icon="heroicons:arrow-path"
                  className={cn(iconClasses, "animate-spin")}
                />
              ) : type === "password" && showPasswordToggle ? (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="p-1 rounded hover:bg-muted transition-colors"
                  tabIndex={-1}
                >
                  <Icon icon={endIconName!} className={iconClasses} />
                </button>
              ) : endIconName ? (
                <Icon icon={endIconName} className={iconClasses} />
              ) : null}
            </div>
          )}
        </div>

        {/* Helper Text or Error */}
        {(helperText || error) && (
          <p
            className={cn(
              "mt-2 text-xs transition-colors",
              error ? "text-destructive" : "text-muted-foreground"
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

// Specific input components for common use cases
export const EmailInput = forwardRef<
  HTMLInputElement,
  Omit<InputProps, "type">
>((props, ref) => <Input {...props} type="email" ref={ref} />);
EmailInput.displayName = "EmailInput";

export const PasswordInput = forwardRef<
  HTMLInputElement,
  Omit<InputProps, "type" | "showPasswordToggle">
>((props, ref) => (
  <Input {...props} type="password" showPasswordToggle ref={ref} />
));
PasswordInput.displayName = "PasswordInput";

export const SearchInput = forwardRef<
  HTMLInputElement,
  Omit<InputProps, "type">
>((props, ref) => <Input {...props} type="search" ref={ref} />);
SearchInput.displayName = "SearchInput";

export const NumberInput = forwardRef<
  HTMLInputElement,
  Omit<InputProps, "type">
>((props, ref) => <Input {...props} type="number" ref={ref} />);
NumberInput.displayName = "NumberInput";

export const TelInput = forwardRef<HTMLInputElement, Omit<InputProps, "type">>(
  (props, ref) => <Input {...props} type="tel" ref={ref} />
);
TelInput.displayName = "TelInput";

export const UrlInput = forwardRef<HTMLInputElement, Omit<InputProps, "type">>(
  (props, ref) => <Input {...props} type="url" ref={ref} />
);
UrlInput.displayName = "UrlInput";

// Also export as default
export default Input;

// Example usage components
export const InputExamples = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    search: "",
    text: "",
  });

  return (
    <div className="space-y-6 p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8">
        Input Library Examples
      </h2>

      {/* Basic Text Input */}
      <Input
        label="Full Name"
        placeholder="Enter your full name"
        onValueChange={(value) =>
          setValues((prev) => ({ ...prev, text: value }))
        }
        helperText="Enter your first and last name"
      />

      {/* Email Input */}
      <EmailInput
        label="Email Address"
        placeholder="you@example.com"
        onValueChange={(value) =>
          setValues((prev) => ({ ...prev, email: value }))
        }
        required
      />

      {/* Password Input */}
      <PasswordInput
        label="Password"
        placeholder="Create a strong password"
        onValueChange={(value) =>
          setValues((prev) => ({ ...prev, password: value }))
        }
        helperText="Must be at least 8 characters"
      />

      {/* Search Input */}
      <SearchInput
        label="Search"
        placeholder="Search for anything..."
        onValueChange={(value) =>
          setValues((prev) => ({ ...prev, search: value }))
        }
        variant="filled"
      />

      {/* Different Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Variants</h3>

        <Input placeholder="Default variant" variant="default" />

        <Input placeholder="Filled variant" variant="filled" />

        <Input placeholder="Outlined variant" variant="outlined" />
      </div>

      {/* Different Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Sizes</h3>

        <Input placeholder="Small size" size="sm" startIcon="heroicons:user" />

        <Input
          placeholder="Medium size (default)"
          size="md"
          startIcon="heroicons:user"
        />

        <Input placeholder="Large size" size="lg" startIcon="heroicons:user" />
      </div>

      {/* Error State */}
      <Input
        label="Email with Error"
        placeholder="invalid-email"
        error="Please enter a valid email address"
        startIcon="heroicons:at-symbol"
      />

      {/* Loading State */}
      <Input
        label="Loading Input"
        placeholder="Processing..."
        isLoading
        disabled
      />

      {/* Custom Icons */}
      <Input
        label="Custom Icons"
        placeholder="Enter amount"
        startIcon="heroicons:currency-dollar"
        endIcon="heroicons:calculator"
      />

      {/* Current Values Display */}
      <div className="mt-8 p-4 bg-muted rounded-lg">
        <h4 className="font-semibold mb-2">Current Values:</h4>
        <pre className="text-sm">{JSON.stringify(values, null, 2)}</pre>
      </div>
    </div>
  );
};

"use client";

import React, { forwardRef } from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

export interface ActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "destructive"
    | "success"
    | "warning";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  isLoading?: boolean;
  loadingText?: string;
  startIcon?: string;
  endIcon?: string;
  fullWidth?: boolean;
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  customWidth?: string;
  customHeight?: string;
  customPadding?: string;
  customBg?: string;
  customBorder?: string;
  customText?: string;
  customHover?: string;
  onClick?: () => void;
}

const ActionButton = forwardRef<HTMLButtonElement, ActionButtonProps>(
  (
    {
      children,
      className,
      variant = "default",
      size = "md",
      isLoading = false,
      loadingText = "Loading...",
      startIcon,
      endIcon,
      fullWidth = false,
      rounded = "md",
      customWidth,
      customHeight,
      customPadding,
      customBg,
      customBorder,
      customText,
      customHover,
      disabled,
      onClick,
      type = "button",
      ...props
    },
    ref
  ) => {
    // Size variants
    const sizeClasses = {
      xs: "px-2 py-1 text-xs gap-1",
      sm: "px-3 py-2 text-sm gap-2",
      md: "px-4 py-2.5 text-base gap-2",
      lg: "px-6 py-3 text-lg gap-3",
      xl: "px-8 py-4 text-xl gap-3",
    };

    // Icon size variants
    const iconSizeClasses = {
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
      xl: "w-7 h-7",
    };

    // Rounded variants
    const roundedClasses = {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    };

    // Variant styles
    const variantClasses = {
      default:
        "bg-autobuy-neutral-3 text-white hover:bg-autobuy-neutral-2 border-autobuy-neutral-3",
      primary:
        "bg-autobuy-blue-2 text-white hover:bg-autobuy-blue-1 border-autobuy-blue-2",
      secondary:
        "bg-autobuy-blue-5 text-autobuy-blue-1 hover:bg-autobuy-blue-4 border-autobuy-blue-5",
      outline:
        "bg-transparent text-autobuy-blue-2 border-autobuy-blue-2 hover:bg-autobuy-blue-6",
      ghost:
        "bg-transparent text-autobuy-blue-2 border-transparent hover:bg-autobuy-blue-6",
      destructive:
        "bg-autobuy-red-1 text-white hover:bg-autobuy-red-2 border-autobuy-red-1",
      success:
        "bg-autobuy-green-1 text-white hover:bg-autobuy-green-2 border-autobuy-green-1",
      warning:
        "bg-autobuy-yellow-1 text-autobuy-neutral-1 hover:bg-autobuy-yellow-2 border-autobuy-yellow-1",
    };

    // Base button classes
    const baseClasses = cn(
      "inline-flex items-center justify-center font-medium transition-all duration-200",
      "focus:outline-none focus:ring-2 focus:ring-autobuy-blue-3 focus:ring-offset-2",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
      "border border-solid h-[52px]",
      sizeClasses[size],
      roundedClasses[rounded],
      fullWidth && "w-full",
      !customBg &&
        !customBorder &&
        !customText &&
        !customHover &&
        variantClasses[variant]
    );

    // Custom styling
    const customStyles = {
      width: customWidth,
      height: customHeight,
      padding: customPadding,
      backgroundColor: customBg,
      borderColor: customBorder,
      color: customText,
    };

    // Handle click
    const handleClick = () => {
      if (!isLoading && !disabled && onClick) {
        onClick();
      }
    };

    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          baseClasses,
          customHover && `hover:${customHover}`,
          className
        )}
        style={customStyles}
        disabled={disabled || isLoading}
        onClick={handleClick}
        {...props}
      >
        {/* Start Icon */}
        {startIcon && !isLoading && (
          <Icon icon={startIcon} className={iconSizeClasses[size]} />
        )}

        {/* Loading Icon */}
        {isLoading && (
          <Icon
            icon="heroicons:arrow-path"
            className={cn(iconSizeClasses[size], "animate-spin")}
          />
        )}

        {/* Button Text */}
        <span>{isLoading ? loadingText : children}</span>

        {/* End Icon */}
        {endIcon && !isLoading && (
          <Icon icon={endIcon} className={iconSizeClasses[size]} />
        )}
      </button>
    );
  }
);

ActionButton.displayName = "ActionButton";

export default ActionButton;

// Pre-configured button variants for common use cases
export const PrimaryButton = forwardRef<
  HTMLButtonElement,
  Omit<ActionButtonProps, "variant">
>((props, ref) => <ActionButton {...props} variant="primary" ref={ref} />);
PrimaryButton.displayName = "PrimaryButton";

export const SecondaryButton = forwardRef<
  HTMLButtonElement,
  Omit<ActionButtonProps, "variant">
>((props, ref) => <ActionButton {...props} variant="secondary" ref={ref} />);
SecondaryButton.displayName = "SecondaryButton";

export const OutlineButton = forwardRef<
  HTMLButtonElement,
  Omit<ActionButtonProps, "variant">
>((props, ref) => <ActionButton {...props} variant="outline" ref={ref} />);
OutlineButton.displayName = "OutlineButton";

export const GhostButton = forwardRef<
  HTMLButtonElement,
  Omit<ActionButtonProps, "variant">
>((props, ref) => <ActionButton {...props} variant="ghost" ref={ref} />);
GhostButton.displayName = "GhostButton";

export const DestructiveButton = forwardRef<
  HTMLButtonElement,
  Omit<ActionButtonProps, "variant">
>((props, ref) => <ActionButton {...props} variant="destructive" ref={ref} />);
DestructiveButton.displayName = "DestructiveButton";

export const SuccessButton = forwardRef<
  HTMLButtonElement,
  Omit<ActionButtonProps, "variant">
>((props, ref) => <ActionButton {...props} variant="success" ref={ref} />);
SuccessButton.displayName = "SuccessButton";

export const WarningButton = forwardRef<
  HTMLButtonElement,
  Omit<ActionButtonProps, "variant">
>((props, ref) => <ActionButton {...props} variant="warning" ref={ref} />);
WarningButton.displayName = "WarningButton";

// Example usage component
export const ActionButtonExamples = () => {
  const [loading, setLoading] = React.useState<string | null>(null);

  const handleClick = (buttonName: string) => {
    setLoading(buttonName);
    setTimeout(() => setLoading(null), 2000);
  };

  return (
    <div className="space-y-8 p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">
        ActionButton Library
      </h2>

      {/* Variants */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Button Variants</h3>
        <div className="flex flex-wrap gap-4">
          <ActionButton
            variant="default"
            onClick={() => handleClick("default")}
          >
            Default
          </ActionButton>
          <PrimaryButton onClick={() => handleClick("primary")}>
            Primary
          </PrimaryButton>
          <SecondaryButton onClick={() => handleClick("secondary")}>
            Secondary
          </SecondaryButton>
          <OutlineButton onClick={() => handleClick("outline")}>
            Outline
          </OutlineButton>
          <GhostButton onClick={() => handleClick("ghost")}>Ghost</GhostButton>
          <DestructiveButton onClick={() => handleClick("destructive")}>
            Destructive
          </DestructiveButton>
          <SuccessButton onClick={() => handleClick("success")}>
            Success
          </SuccessButton>
          <WarningButton onClick={() => handleClick("warning")}>
            Warning
          </WarningButton>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Button Sizes</h3>
        <div className="flex items-center gap-4">
          <ActionButton size="xs" variant="primary">
            Extra Small
          </ActionButton>
          <ActionButton size="sm" variant="primary">
            Small
          </ActionButton>
          <ActionButton size="md" variant="primary">
            Medium
          </ActionButton>
          <ActionButton size="lg" variant="primary">
            Large
          </ActionButton>
          <ActionButton size="xl" variant="primary">
            Extra Large
          </ActionButton>
        </div>
      </section>

      {/* With Icons */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Buttons with Icons</h3>
        <div className="flex flex-wrap gap-4">
          <ActionButton
            variant="primary"
            startIcon="heroicons:plus"
            onClick={() => handleClick("add")}
          >
            Add Item
          </ActionButton>
          <ActionButton
            variant="outline"
            endIcon="heroicons:arrow-right"
            onClick={() => handleClick("next")}
          >
            Next Step
          </ActionButton>
          <ActionButton
            variant="destructive"
            startIcon="heroicons:trash"
            onClick={() => handleClick("delete")}
          >
            Delete
          </ActionButton>
        </div>
      </section>

      {/* Loading States */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Loading States</h3>
        <div className="flex flex-wrap gap-4">
          <ActionButton
            variant="primary"
            isLoading={loading === "submit"}
            loadingText="Submitting..."
            onClick={() => handleClick("submit")}
          >
            Submit Form
          </ActionButton>
          <ActionButton
            variant="outline"
            isLoading={loading === "save"}
            loadingText="Saving..."
            onClick={() => handleClick("save")}
          >
            Save Changes
          </ActionButton>
        </div>
      </section>

      {/* Custom Styling */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Custom Styling</h3>
        <div className="flex flex-wrap gap-4">
          <ActionButton
            customBg="#ff6b6b"
            customText="#ffffff"
            customBorder="#ff5252"
            customWidth="200px"
            customHeight="50px"
            rounded="full"
            onClick={() => handleClick("custom1")}
          >
            Custom Red
          </ActionButton>
          <ActionButton
            customBg="linear-gradient(45deg, #667eea 0%, #764ba2 100%)"
            customText="#ffffff"
            customBorder="transparent"
            customPadding="12px 24px"
            rounded="lg"
            onClick={() => handleClick("custom2")}
          >
            Gradient Button
          </ActionButton>
        </div>
      </section>

      {/* Full Width */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Full Width Button</h3>
        <ActionButton
          variant="primary"
          fullWidth
          size="lg"
          onClick={() => handleClick("fullwidth")}
        >
          Full Width Button
        </ActionButton>
      </section>

      {/* Disabled State */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Disabled State</h3>
        <div className="flex gap-4">
          <ActionButton variant="primary" disabled>
            Disabled Button
          </ActionButton>
          <ActionButton
            variant="outline"
            disabled
            startIcon="heroicons:lock-closed"
          >
            Locked Action
          </ActionButton>
        </div>
      </section>
    </div>
  );
};

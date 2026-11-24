/**
 * Configuration for profile completion modal
 * Centralized settings to easily manage the modal behavior
 */

export const profileCompletionConfig = {
  // Modal behavior settings
  modal: {
    // Minimum completion percentage to hide the modal
    hideThreshold: 90,

    // Show modal for completion percentage below this threshold
    showThreshold: 80,

    // Delay before showing modal after page load (in milliseconds)
    showDelay: 2000,

    // Duration for which modal stays dismissed (in milliseconds)
    dismissDuration: 24 * 60 * 60 * 1000, // 24 hours

    // Maximum number of times modal can be shown per day
    maxShowsPerDay: 3,

    // Auto-dismiss modal after this time (0 to disable, in milliseconds)
    autoDismissAfter: 0,
  },

  // API settings
  api: {
    // Enable/disable API calls (useful for development)
    enabled: false, // Set to true when API is ready

    // Polling interval for checking profile completion (0 to disable)
    pollingInterval: 0,

    // Enable refetch on window focus
    refetchOnFocus: false,

    // Enable refetch on network reconnect
    refetchOnReconnect: true,

    // Cache time for profile completion data (in milliseconds)
    cacheTime: 5 * 60 * 1000, // 5 minutes
  },

  // Profile completion calculation
  completion: {
    // Required fields and their weights
    requiredFields: [
      { key: "firstName", label: "First name", weight: 1, required: true },
      { key: "lastName", label: "Last name", weight: 1, required: true },
      { key: "email", label: "Email address", weight: 1, required: true },
      {
        key: "phoneNumber",
        label: "Phone number",
        weight: 1.5,
        required: true,
      },
      { key: "state", label: "State/Province", weight: 1, required: true },
      { key: "city", label: "City", weight: 1, required: true },
      { key: "address", label: "Street address", weight: 1, required: true },
      { key: "bankDetails", label: "Bank details", weight: 2, required: true },
      {
        key: "verification",
        label: "Account verification",
        weight: 2,
        required: false,
      },
      {
        key: "profileImage",
        label: "Profile photo",
        weight: 0.5,
        required: false,
      },
    ],

    // Minimum percentage to consider profile "complete"
    completeThreshold: 90,
  },

  // Routes
  routes: {
    // Default profile update page
    profileUpdate: "/seller/profile/update",

    // Alternative routes based on user role
    sellerProfile: "/seller/profile/update",
    buyerProfile: "/buyer/profile/update",

    // Admin override (if user is admin, don't show modal)
    adminBypass: true,
  },

  // Local storage keys
  storage: {
    dismissKey: "profileCompletionDismissed",
    showCountKey: "profileCompletionShowCount",
    lastShownKey: "profileCompletionLastShown",
  },

  // Development settings
  development: {
    // Show console logs for debugging
    enableLogs: process.env.NODE_ENV === "development",

    // Mock data when API is disabled
    mockData: {
      isComplete: false,
      completionPercentage: 80,
      missingFields: ["Phone number", "Bank details", "Account verification"],
      shouldShowModal: true,
    },

    // Force show modal (useful for testing)
    forceShow: false,

    // Skip all conditions and always show modal
    alwaysShow: false,
  },
};

// Helper function to get route based on user role
export const getProfileRoute = (
  userRole: "seller" | "buyer" | "admin" = "seller"
): string => {
  switch (userRole) {
    case "buyer":
      return profileCompletionConfig.routes.buyerProfile;
    case "seller":
      return profileCompletionConfig.routes.sellerProfile;
    case "admin":
      return profileCompletionConfig.routes.profileUpdate;
    default:
      return profileCompletionConfig.routes.profileUpdate;
  }
};

// Helper function to check if user should see modal
export const shouldShowModal = (
  profileData: any,
  userRole?: string,
  isRecentlyDismissed?: boolean
): boolean => {
  const config = profileCompletionConfig;

  // Admin bypass
  if (userRole === "admin" && config.routes.adminBypass) {
    return false;
  }

  // Development overrides
  if (config.development.alwaysShow || config.development.forceShow) {
    return true;
  }

  // Check if recently dismissed
  if (isRecentlyDismissed) {
    return false;
  }

  // Check completion thresholds
  if (!profileData) {
    return true;
  }

  return (
    !profileData.isComplete &&
    profileData.completionPercentage < config.modal.showThreshold &&
    profileData.shouldShowModal
  );
};

// Export type definitions for TypeScript
export type ProfileCompletionConfig = typeof profileCompletionConfig;
export type RequiredField =
  (typeof profileCompletionConfig.completion.requiredFields)[0];

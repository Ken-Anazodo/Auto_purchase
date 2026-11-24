# Profile Completion Modal Integration

This document explains the profile completion modal implementation and how to integrate it with your API.

## 🎯 Overview

The profile completion modal is designed to encourage users to complete their profiles by displaying a beautiful, non-intrusive notification. The implementation is ready for API integration and includes comprehensive configuration options.

## 📁 Files Created/Modified

### New Components

- `src/components/ProfileCompletionModal.tsx` - The main modal component
- `src/hooks/useProfileCompletion.ts` - Hook for managing modal state and API integration
- `src/services/features/profileApi.ts` - RTK Query API service for profile completion
- `src/config/profileCompletion.ts` - Centralized configuration

### Modified Files

- `src/app/(dashboard)/layout.tsx` - Integrated the modal into dashboard layout
- `src/services/store/store.ts` - Added profile API to Redux store
- `src/services/features/slices/userSlice.ts` - Enhanced user slice with typing

## 🚀 Features

### Modal Features

- ✅ Beautiful gradient design with progress bar
- ✅ Configurable completion percentage display
- ✅ Lists missing profile fields
- ✅ Responsive design for mobile and desktop
- ✅ Smooth animations and transitions
- ✅ Click to navigate to profile update page
- ✅ Dismissible with "Maybe later" option

### Technical Features

- ✅ RTK Query integration for efficient API calls
- ✅ Configurable show/hide logic
- ✅ Local storage for dismissal tracking
- ✅ Daily show limit to avoid spam
- ✅ Role-based routing (seller/buyer/admin)
- ✅ TypeScript support with proper typing
- ✅ Development-friendly configuration
- ✅ Error handling and loading states

## 🔧 Configuration

Edit `src/config/profileCompletion.ts` to customize the behavior:

```typescript
export const profileCompletionConfig = {
  modal: {
    hideThreshold: 90, // Hide modal when completion >= 90%
    showThreshold: 80, // Show modal when completion < 80%
    showDelay: 2000, // Delay before showing (ms)
    dismissDuration: 24 * 60 * 60 * 1000, // 24 hours
    maxShowsPerDay: 3, // Maximum shows per day
  },
  api: {
    enabled: false, // Set to true when API is ready
    pollingInterval: 0, // Polling interval (0 = disabled)
  },
  // ... more configuration options
};
```

## 🔌 API Integration

### Step 1: Enable API Calls

In `src/config/profileCompletion.ts`:

```typescript
api: {
  enabled: true,  // Enable API calls
}
```

### Step 2: Update API Base URL

In `src/services/features/profileApi.ts`:

```typescript
baseQuery: fetchBaseQuery({
  baseUrl: "https://your-api-domain.com/api/profile", // Your API base URL
});
```

### Step 3: Implement Backend Endpoints

#### GET `/api/profile/completion/{userId}`

Returns profile completion status:

```json
{
  "isComplete": false,
  "completionPercentage": 75,
  "missingFields": ["Phone number", "Bank details"],
  "shouldShowModal": true,
  "lastUpdated": "2025-12-14T10:00:00Z"
}
```

#### GET `/api/profile/{userId}`

Returns full user profile:

```json
{
  "id": "user-123",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phoneNumber": "+1234567890",
  "state": "California",
  "city": "Los Angeles",
  "address": "123 Main St",
  "bankDetails": {
    "bankName": "Bank of America",
    "accountName": "John Doe",
    "accountNumber": "****1234"
  },
  "verification": {
    "status": "verified",
    "documentsSubmitted": true
  }
}
```

#### POST `/api/profile/completion/{userId}/dismiss`

Dismisses the modal for a specified time:

```json
{
  "dismissedUntil": "2025-12-15T10:00:00Z"
}
```

### Step 4: Update Authentication Integration

In `src/app/(dashboard)/layout.tsx`, replace the mock data:

```typescript
// Replace this:
const userId = "mock-user-id";
const userRole = "seller";

// With this:
const { user } = useSelector((state: RootState) => state.user);
const userId = user?.id;
const userRole = user?.role || "seller";
```

## 🎨 Customization

### Modal Styling

Edit `src/components/ProfileCompletionModal.tsx` to customize the appearance:

- Change gradient colors
- Modify typography
- Adjust spacing and layout
- Update icons

### Profile Routes

Configure different routes for different user roles in `src/config/profileCompletion.ts`:

```typescript
routes: {
  sellerProfile: '/seller/profile/update',
  buyerProfile: '/buyer/profile/update',
  adminProfile: '/admin/profile/update',
}
```

### Required Fields

Customize which fields are required for profile completion:

```typescript
completion: {
  requiredFields: [
    { key: "firstName", label: "First name", weight: 1, required: true },
    { key: "lastName", label: "Last name", weight: 1, required: true },
    // Add or modify fields as needed
  ];
}
```

## 🧪 Testing

### Test with Mock Data

Keep `skipApiCall: true` in the dashboard layout to test with mock data.

### Force Show Modal

In `src/config/profileCompletion.ts`:

```typescript
development: {
  forceShow: true,     // Always show modal for testing
  alwaysShow: true,    // Bypass all conditions
}
```

### Test API Integration

1. Set `api.enabled: true` in configuration
2. Set `skipApiCall: false` in dashboard layout
3. Ensure backend endpoints are available

## 🔄 Usage in Components

### Using the Hook

```typescript
import { useProfileCompletion } from "@/hooks/useProfileCompletion";

const MyComponent = () => {
  const {
    profileData,
    isModalOpen,
    isLoading,
    closeModal,
    refreshProfileCompletion,
  } = useProfileCompletion({
    userId: "user-123",
    userRole: "seller",
  });

  // Your component logic
};
```

### Using the API Directly

```typescript
import { useGetProfileCompletionQuery } from "@/services/features/profileApi";

const MyComponent = () => {
  const { data, isLoading, error } = useGetProfileCompletionQuery("user-123");

  // Your component logic
};
```

## 🐛 Troubleshooting

### Modal Not Showing

1. Check if `profileData.shouldShowModal` is true
2. Verify user hasn't dismissed it recently
3. Check daily show limit hasn't been exceeded
4. Ensure completion percentage is below threshold

### API Errors

1. Check network connectivity
2. Verify API endpoints are correct
3. Check authentication headers
4. Review browser console for errors

### Performance Issues

1. Disable polling if not needed (`pollingInterval: 0`)
2. Adjust cache time in API configuration
3. Use lazy queries for manual fetching

## 📝 Future Enhancements

- [ ] Add animation presets
- [ ] Implement toast notifications
- [ ] Add profile completion progress tracking
- [ ] Create admin dashboard for monitoring
- [ ] Add A/B testing capabilities
- [ ] Implement user engagement analytics

## 🤝 Contributing

When making changes:

1. Update this README if adding new features
2. Follow the existing TypeScript patterns
3. Add appropriate error handling
4. Test with both mock and real API data
5. Consider performance implications

## 📞 Support

For questions about the implementation:

1. Check the configuration options in `src/config/profileCompletion.ts`
2. Review the hook documentation in `src/hooks/useProfileCompletion.ts`
3. Check the API service in `src/services/features/profileApi.ts`

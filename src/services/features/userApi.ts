/* eslint-disable @typescript-eslint/no-explicit-any */
import baseApi from "../store/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    authLogin: builder.mutation({
      query: (payLoad) => ({
        url: `/user/login`,
        method: "POST",
        body: payLoad,
      }),
    }),

    authSignUp: builder.mutation({
      query: (payLoad) => ({
        url: `/user/signup`,
        method: "POST",
        body: payLoad,
      }),
    }),

    resendOTP: builder.mutation({
      query: (payLoad) => ({
        url: `/user/resend-otp`,
        method: "POST",
        body: payLoad,
      }),
    }),

    verifyOTP: builder.mutation({
      query: (payLoad) => ({
        url: `/user/verify-otp`,
        method: "POST",
        body: payLoad,
      }),
    }),

    forgotPassword: builder.mutation({
      query: (payLoad) => ({
        url: `/user/forgot-password`,
        method: "POST",
        body: payLoad,
      }),
    }),

    resetPassword: builder.mutation({
      query: (payLoad) => ({
        url: `/user/update/password`,
        method: "POST",
        body: payLoad,
      }),
    }),
    updateProfile: builder.mutation({
      query: (payload:{userId:string, data:any}) => ({
        url: `/user/update/${payload.userId}`,
        method: "PUT",
        body: payload.data,
      }),
    }),

    // getSavedSearch: builder.query({
    //   query: () => "/user/saved_searches",
    //   providesTags: ["SavedSearches"] as const
    // }),

    // deleteSavedSearch: builder.mutation({
    //   query: (id) => ({
    //     url: `/user/saved_search/remove_search?searchId=${id}`,
    //     method: "DELETE"
    //   }),
    //   invalidatesTags: ["SavedSearches"] as const
    // })
  }),
});

export const {
  useAuthLoginMutation,
  useAuthSignUpMutation,
  useResendOTPMutation,
  useVerifyOTPMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation
} = userApi;

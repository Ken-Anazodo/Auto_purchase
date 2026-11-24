/* eslint-disable @typescript-eslint/no-explicit-any */
import baseApi from "../store/baseApi";

export const adminUserApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (params?: { userType?: string; search?: string; page?: number; limit?: number }) => {
        const queryParams = new URLSearchParams();
        if (params?.userType) queryParams.append("userType", params.userType);
        if (params?.search) queryParams.append("search", params.search);
        if (params?.page) queryParams.append("page", params.page.toString());
        if (params?.limit) queryParams.append("limit", params.limit.toString());
        return `/admin/users${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;
      },
    }),

    getUserById: builder.query({
      query: (params: {
        userId: string;
        userType?: string;
        search?: string;
      }) => {
        const queryParams = new URLSearchParams();
        if (params.userType) queryParams.append("userType", params.userType);
        if (params.search) queryParams.append("search", params.search);
        return `/user/${params.userId}${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;
      },
    }),

    getAllBookings: builder.query({
      query: (params?: { userType?: string; search?: string; page?: number; limit?: number }) => {
        const queryParams = new URLSearchParams();
        if (params?.userType) queryParams.append("userType", params.userType);
        if (params?.search) queryParams.append("search", params.search);
        if (params?.page) queryParams.append("page", params.page.toString());
        if (params?.limit) queryParams.append("limit", params.limit.toString());
        return `/admin/bookings${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;
      },
    }),

    createUser: builder.mutation({
      query: (payload: {
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
        state: string;
        city: string;
        address: string;
        userType: string;
        password: string;
        confirmPassword: string;
      }) => ({
        url: `/admin/create/user`,
        method: "POST",
        body: payload,
      }),
    }),

    createBooking: builder.mutation({
      query: (params: {
        userId: string;
        data: {
          noOfCars: string;
          schedule: string;
          availableTime: string;
        };
      }) => ({
        url: `/user/bookings/${params.userId}/inspection`,
        method: "POST",
        body: params.data,
      }),

    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useGetAllBookingsQuery,
  useCreateUserMutation,
  useCreateBookingMutation,
} = adminUserApi;

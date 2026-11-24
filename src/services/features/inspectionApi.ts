import baseApi from "../store/baseApi";

export const inspectionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    bookInspection: builder.mutation({
      query: (payLoad) => ({
        url: `/user/login`,
        method: "POST",
        body: payLoad,
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

export const { useBookInspectionMutation } = inspectionApi;

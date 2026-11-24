import { createApi, fetchBaseQuery, BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import { showSessionExpiredModal } from "./../features/slices/appSlice";
import { clearUserInfo } from "./../features/slices/userSlice";
import { RootState } from "./store";
import { Mutex } from "async-mutex";

const baseUrl = process.env.NEXT_PUBLIC_AUTOBUY_URL;
const mutex = new Mutex(); // To prevent multiple simultaneous token refreshes or modal dispatches if needed

const baseQuery = fetchBaseQuery({
  baseUrl,
  credentials: "include",
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");

    const token = Cookies.get("autobuy_session_client");

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock();
  
  let result = await baseQuery(args, api, extraOptions);

  const isUnauthorized = 
    result.error && (
      result.error.status === 401 ||
      (result.error.data as any)?.error === "TokenExpiredError" ||
      (result.error.data as any)?.message === "jwt expired"
    );

  if (isUnauthorized) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        // Here we intercept the 401 Unauthorized globally
        Cookies.remove("autobuy_session_client");
        api.dispatch(clearUserInfo());
        api.dispatch(showSessionExpiredModal());
      } finally {
        release();
      }
    } else {
        await mutex.waitForUnlock();
        result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["SavedSearches", "Favorites"], 

  endpoints: () => ({})
});

export default baseApi;

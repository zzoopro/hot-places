import { SET_LOADING } from "../../utils/constants"

export const setLoading = (isLoading: boolean) => {
   return {
      type: SET_LOADING,
      payload: {
         isLoading,
      }
   }
}


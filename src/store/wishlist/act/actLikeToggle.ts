import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosErrorHandler } from "@utils";
import type { RootState } from "@store/index";

const actLikeToggle = createAsyncThunk(
  "wishlist/actLikeToggle",
  async (id: number, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { auth } = getState() as RootState;

    try {
      const isRecordExist = await axios.get(
        `/api/wishlist?userId=${auth.user?.id}&productId=${id}`
      );

      if (isRecordExist.data.length > 0) {
        const wishlistItemId = isRecordExist.data[0].id;
        await axios.delete(`/api/wishlist/${wishlistItemId}`);
        return { type: "remove", id };
      } else {
        await axios.post("/api/wishlist", {
          userId: auth.user?.id,
          productId: id,
        });
        return { type: "add", id };
      }
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actLikeToggle;

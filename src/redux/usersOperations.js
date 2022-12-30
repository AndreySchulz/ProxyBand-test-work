import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsersApi, postIdApi } from 'utils/fetchApi';

export const getUsers = createAsyncThunk(
  'users/get',
  async (_, { rejectWithValue }) => {
    try {
      const users = await fetchUsersApi();
      return users;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getPost = createAsyncThunk(
  'users/getPost',
  async (_, { rejectWithValue }) => {
    try {
      const post = await postIdApi();
      return post;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

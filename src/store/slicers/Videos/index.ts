import { createSlice } from '@reduxjs/toolkit';

export type Video = { link: string };

const infosInLocalStorage = localStorage.getItem(
  '@MinhaPlaylist:videos'
) as string;
const videos = JSON.parse(infosInLocalStorage)?.videos ?? [];

export const slice = createSlice({
  name: 'video',
  initialState: {
    currentVideo: Number(null),
    videos,
  },
  reducers: {
    appendVideo(state, { payload }) {
      const append: any = {
        currentVideo: 0,
        videos: [...state.videos, payload],
      };
      localStorage.setItem('@MinhaPlaylist:videos', JSON.stringify(append));
      return append;
    },
    changeCurrentVideo(state, { payload }) {
      return { ...state, currentVideo: payload };
    },
    nextVideo(state) {
      return { ...state, currentVideo: state.currentVideo + 1 };
    },
    backVideo(state) {
      return { ...state, currentVideo: state.currentVideo - 1 };
    },
  },
});

export const { appendVideo, changeCurrentVideo, backVideo, nextVideo } =
  slice.actions;

export default slice.reducer;

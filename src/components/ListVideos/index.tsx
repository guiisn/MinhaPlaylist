import { Box, Skeleton } from '@mantine/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentVideo, Video } from '../../store/slicers/Videos';

const ListVideos: React.FC = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state: any) => state.video.videos) as Video[];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '.3rem',
        overflowY: 'auto',
        height: '100vh',
      }}
    >
      {videos?.length > 0 ? (
        videos?.map((video: Video, index: number) => (
          <button
            style={{
              height: '2rem',
              color: '#1C7ED6',
              backgroundColor: 'transparent',
              border: '1px solid #1C7ED6',
              fontWeight: 700,
              borderRadius: '8px',
              cursor: 'pointer',
            }}
            key={index}
            onClick={() => dispatch(changeCurrentVideo(index))}
          >{`Vídeo ${index + 1}`}</button>
        ))
      ) : (
        <Skeleton
          animate
          sx={{
            width: '100%',
            height: '95%',
            '::after': {
              backgroundColor: '#6b6b6b',
            },
            '::before': {
              backgroundColor: '#333232',
            },
          }}
        />
      )}
    </Box>
  );
};

export default ListVideos;

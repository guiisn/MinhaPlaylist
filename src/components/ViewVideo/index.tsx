import { Box, Skeleton } from '@mantine/core';
import React from 'react';
import { useSelector } from 'react-redux';

const ViewVideo: React.FC = () => {
  const { currentVideo, videos } = useSelector((state: any) => state.video);

  return (
    <>
      {videos[currentVideo]?.link ? (
        <iframe
          width="100%"
          height="99.5%"
          src={`${videos[currentVideo]?.link}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ) : (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Skeleton
            animate
            sx={{
              width: '95%',
              height: '95%',
              '::after': {
                backgroundColor: '#6b6b6b',
              },
              '::before': {
                backgroundColor: '#333232',
              },
            }}
          />
        </Box>
      )}
    </>
  );
};

export default ViewVideo;

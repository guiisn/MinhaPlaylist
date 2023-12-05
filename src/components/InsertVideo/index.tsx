import React, { useState } from 'react';
import { Video } from '../../store/slicers/Videos';
import { useDispatch } from 'react-redux';
import { appendVideo, backVideo, nextVideo } from '../../store/slicers/Videos';
import {
  Box,
  Title,
  Space,
  TextInput,
  Button,
  SimpleGrid,
} from '@mantine/core';
import ListVideos from '../ListVideos';
import { useSelector } from 'react-redux';

const InsertVideo: React.FC = () => {
  const { videos } = useSelector((state: any) => state.video);
  const [video, setVideo] = useState<Video>({
    link: '',
  });
  const dispatch = useDispatch();

  const submit = () => {
    if (video.link.trim().length > 0) {
      dispatch(appendVideo(video));
    }
  };

  return (
    <Box
      sx={{
        width: '15%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        padding: '0rem 4rem',
      }}
    >
      <Box
        sx={{
          margin: '2rem 0 1rem 0',
          display: 'flex',
          flexDirection: 'column',
          gap: '.5rem',
        }}
      >
        <Title color="white">Adicione os vídeos</Title>
        <Space h="lg" />
        <TextInput
          type="text"
          placeholder="URL de incorporação do vídeo"
          description='Para obter a URL de incorporação você deve selecionar o vídeo, buscar a opção "Compartilhar", clicar na opção "Incorporar" e selecionar o conteúdo dentro do atributo "src="'
          onChange={(e) => setVideo({ ...video, link: e.target.value })}
        />

        <Button onClick={submit}>Inserir video</Button>
        <SimpleGrid cols={2}>
          <Button
            onClick={() => dispatch(backVideo())}
            disabled={videos?.length <= 1}
          >
            Vídeo anterior
          </Button>
          <Button
            onClick={() => dispatch(nextVideo())}
            disabled={videos?.length <= 1}
          >
            Próximo vídeo
          </Button>
        </SimpleGrid>
      </Box>

      <ListVideos />
    </Box>
  );
};

export default InsertVideo;

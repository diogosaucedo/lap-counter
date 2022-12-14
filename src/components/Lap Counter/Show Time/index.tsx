import React from 'react';
import Stack from '../../Layout/Stack';
import Text from '../../Typography/Text';
import ShowTimeType from './type';

const ShowTime = ({ time }: ShowTimeType) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const minutesStr = minutes < 10 ? '0' + minutes : minutes;
  const secondsStr = seconds < 10 ? '0' + seconds : seconds;
  return (
    <Stack flexDirection="column" alignItems="center">
      <Text>{`${minutesStr}:${secondsStr}`}</Text>
      <Text>average time per lap</Text>
    </Stack>
  );
};

export default ShowTime;

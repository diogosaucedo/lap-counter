import React from 'react';
import { black } from '../../../configs/colors';
import Stack from '../../Layout/Stack';
import Text from '../../Typography/Text';
import ShowTimeType from './type';

const ShowTime = ({ time }: ShowTimeType) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const minutesStr = minutes < 10 ? '0' + minutes : minutes;
  const secondsStr = seconds < 10 ? '0' + seconds : seconds;

  // Styles
  const textProps = {
    color: black,
    fontWeight: 500,
    fontSize: '1.4rem',
  };
  return (
    <Stack flexDirection="column" alignItems="center">
      <Text {...textProps}>{`${minutesStr}:${secondsStr}`}</Text>
      <Text {...textProps}>average time per lap</Text>
    </Stack>
  );
};

export default ShowTime;

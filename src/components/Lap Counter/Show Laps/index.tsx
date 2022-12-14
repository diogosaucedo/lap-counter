import React from 'react';
import { black } from '../../../configs/colors';
import Stack from '../../Layout/Stack';
import Text from '../../Typography/Text';
import ShowLapType from './type';

const ShowLaps = ({ laps }: ShowLapType) => {
  // Styles
  const textProps = {
    color: black,
    fontWeight: 500,
    fontSize: '1.6rem',
  };
  return (
    <Stack flexDirection="column" alignItems="center" padding="1.6rem">
      <Text {...textProps}>{laps}</Text>
      <Text {...textProps}>Laps</Text>
    </Stack>
  );
};

export default ShowLaps;

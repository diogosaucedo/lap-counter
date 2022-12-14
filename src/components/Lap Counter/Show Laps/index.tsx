import React from 'react';
import Stack from '../../Layout/Stack';
import Text from '../../Typography/Text';
import ShowLapType from './type';

const ShowLaps = ({ laps }: ShowLapType) => {
  return (
    <Stack flexDirection="column" alignItems="center">
      <Text>{laps}</Text>
      <Text>Laps</Text>
    </Stack>
  );
};

export default ShowLaps;

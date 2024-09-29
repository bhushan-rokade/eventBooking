import React from 'react';
import {View} from 'react-native';
import {Svg, Path} from 'react-native-svg';

const LightningIcon = ({size = 24, color = '#000000'}) => {
  return (
    <View style={{width: size, height: size}}>
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default LightningIcon;

import React from 'react';
import {View} from 'react-native';
import {Svg, Path} from 'react-native-svg';

const HeartIcon = ({size = 24, color = '#000000'}) => {
  return (
    <View style={{width: size, height: size}}>
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
          fill={color}
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default HeartIcon;

import React from 'react';
import {View} from 'react-native';
import {Svg, Path, Circle} from 'react-native-svg';

const ImageIcon = ({size = 24, color = '#000000'}) => {
  return (
    <View style={{width: size, height: size}}>
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Circle cx="8.5" cy="8.5" r="1.5" fill={color} />
        <Path
          d="M21 15L16 10L5 21"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default ImageIcon;

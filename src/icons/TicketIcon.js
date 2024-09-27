import React from 'react';
import {View} from 'react-native';
import {Svg, Path} from 'react-native-svg';

const TicketIcon = ({size = 24, color = '#000000'}) => {
  return (
    <View style={{width: size, height: size}}>
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V8C20.8954 8 20 8.89543 20 10C20 11.1046 20.8954 12 22 12V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V12C3.10457 12 4 11.1046 4 10C4 8.89543 3.10457 8 2 8V6Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15 4V20"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="2 2"
        />
      </Svg>
    </View>
  );
};

export default TicketIcon;

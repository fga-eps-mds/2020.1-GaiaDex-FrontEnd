import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import { gray } from '../../../theme/colorPalette';

const Svg = styled(Icon)`
  width: 24px;
  height: 24px;
`;

export function CircleLoginButton({ className }) {
  return (
    <TouchableOpacity style={{ display: 'inline-block' }}>
      <Svg viewBox="0 0 62 62" className={className}>
        <circle cx="31" cy="31" r="31" fill={gray.abbey()} />
        <path
          d="M41.8993 30.8932L34.6993 24.1321C34.5118 23.956 34.2081 23.956 34.0206 24.1321C33.8331 24.3081 33.8331 24.5934 34.0206 24.7694L40.4012 30.7611H19.48C19.2147 30.7611 19 30.9627 19 31.2119C19 31.461 19.2147 31.6626 19.48 31.6626H40.4012L34.0206 37.6543C33.8331 37.8304 33.8331 38.1156 34.0206 38.2917C34.1143 38.3797 34.2372 38.4237 34.36 38.4237C34.4828 38.4237 34.6056 38.3797 34.6994 38.2917L41.8994 31.5305C42.0868 31.3545 42.0868 31.0693 41.8993 30.8932Z"
          fill={gray.iron()}
        />
      </Svg>
    </TouchableOpacity>
  );
}

CircleLoginButton.propTypes = {
  className: PropTypes.string.isRequired,
};

export const BigBigCircleLoginButton = styled(CircleLoginButton)`
  height: 20vw;
  width: auto;
`;

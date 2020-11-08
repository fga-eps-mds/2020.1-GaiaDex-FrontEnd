import React from 'react'
import starUrl, { ReactComponent as Star } from './../../assets/Search.svg';
function SvgComponent(props) {
  return <div>
  <img src={starUrl} alt="star" />
  <Star />
  </div>;
}

export default SvgComponent;
import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Title = memo(({ text }) => (
  <h1 className='main'>{text}</h1>
));

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;

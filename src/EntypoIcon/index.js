import React, {Component} from 'react';
import PropTypes from 'prop-types';

class EntypoIcon extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hovered: false
    };
  }

  render() {
    const {
      children,
      style,
      viewBox,
      valign,
      propClass,
      ...other
    } = this.props;

    const defaultStyles = {
      display: 'inline-block',
      height: '1em',
      width: '1em',
      fill: 'currentColor',
      userSelect: 'none'
    };

    let verticalAlignment = (valign === false) ? {} : (valign === true) ? { verticalAlign: 'middle'} : { verticalAlign: valign};

    const mergedStyles = (typeof style === 'undefined' || typeof style === 'object') ?
      Object.assign(
        defaultStyles,
        verticalAlignment,
        style
      ) : {};

    let mergedClasses = this.props.className ? propClass+' '+this.props.className : propClass;

    return (
      <svg
        {...other}
        className={mergedClasses}
        style={mergedStyles}
        viewBox={viewBox}
      >
        {children}
      </svg>
    );
  }
}

EntypoIcon.defaultProps = {
  viewBox: '0 0 20 20',
  preserveAspectRatio: 'xMidYMid meet',
  valign: 'text-top'
};

EntypoIcon.propTypes = {
  children: PropTypes.node,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool
  ]),
  viewBox: PropTypes.string,
  valign: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  propClass: PropTypes.string
};

export default EntypoIcon;

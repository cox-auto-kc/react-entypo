import React, {Component, PropTypes} from 'react';

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
      propClass,
      ...other
    } = this.props;

    const mergedStyles = Object.assign({
      display: 'inline-block',
      height: '1em',
      width: '1em',
      userSelect: 'none'
    }, style);

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
  preserveAspectRatio: 'xMidYMid meet'
};

EntypoIcon.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  viewBox: PropTypes.string,
  propClass: PropTypes.string
};

export default EntypoIcon;

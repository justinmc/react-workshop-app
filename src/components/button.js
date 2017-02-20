import React from 'react';

function Button(props) {
  return (
    <button
      className="button"
      disabled={props.disabled}
    >
      {props.label}
    </button>
  );
}

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  label: React.PropTypes.string.isRequired,
  disabled: React.PropTypes.bool,
};

export default Button;

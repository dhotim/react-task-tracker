import PropTypes from "prop-types";

function Button({ color, title, onClick }) {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

Button.defaultProps = {
  color: "blue",
};

Button.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;

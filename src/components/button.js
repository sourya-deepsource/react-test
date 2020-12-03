import PropTypes from 'prop-types';

const Button = ({ type }) => {

  /*
   * JSX line disabled for ESLint due to questionable rule implementation
   */

  return (
    <button
      type="foo"
      className="button"
    >
      Test
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
}

Button.defaultProps = {
  type: 'button',
}

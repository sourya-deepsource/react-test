const Button = ({ type }) => {

  /*
   * JSX line disabled for ESLint due to questionable rule implementation
   */

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      type={type}
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

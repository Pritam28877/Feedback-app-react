import PropTypes from "prop-types";

const Header = ({ text }) => {
  return (
    <>
      <h1>{text}</h1>
    </>
  );
};

Header.defaultProps = {
  text: "Feedback UI",
};
Header.propTypes = {
  text: PropTypes.string,
};

export default Header;

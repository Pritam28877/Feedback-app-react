import PropTypes form "
const Buton = ({ children, version, type, isDisable }) => {
  return (
    <button type={type} disabled={isDisable} className={`btn btn-${version}`}>
      {children}
    </button>
  );
};
Buton.prototype = {
    children : PropTypes.node.isRe
}
export default Buton;

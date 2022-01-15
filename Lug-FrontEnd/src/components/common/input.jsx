import "../css components/input.css";
const Input = ({ required, name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      {required && <span className="text-danger">*</span>}
      <label className="text-white display-6" htmlFor={name}>
        {label}
      </label>
      <input
        {...rest}
        name={name}
        id={name}
        className="form-control myInput display-6"
      />
      {error && <span className="text-danger">{error} </span>}
    </div>
  );
};

export default Input;

const TextInput = ({ id, label, onChange }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" onChange={onChange} />
    </div>
  );
};

export default TextInput;

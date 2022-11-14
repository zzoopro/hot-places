interface InputProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  onChange: (event: any) => void;
  value: string;
}

const Input = ({
  id,
  label,
  type,
  placeholder,
  onChange,
  value,
}: InputProps) => {
  return (
    <div className="flex flex-col space-y-1 w-full mt-3">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="border"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;

type Option = {
  value: number | string;
  label: any;
};

type Props = {
  label?: any;
  onChange?: (e: any) => void;
  options: Option[];
};

const Select = ({ label, onChange = () => {}, options }: Props) => {
  return (
    <>
      {label && <label htmlFor={label}>{label}</label>}
      <select
        id={label}
        onChange={(e) => {
          onChange(e);
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;

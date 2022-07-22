import Input from "../Input/Input";

export default function InputButton({ label, type, placeholder, width, children }) {
  return (
    <div className="flex items-end">
      <Input label={label} type={type} placeholder={placeholder} margin_right={20} margin_bottom={30} width={width}>
        {children}
      </Input>
    </div>
  );
}

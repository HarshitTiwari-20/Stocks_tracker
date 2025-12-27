import { cn } from "@/lib/utils"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { UseFormRegister, FieldError, RegisterOptions } from "react-hook-form"

interface FormInputProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  register: UseFormRegister<HTMLInputElement>;
  error?: FieldError;
  validation?: RegisterOptions;
  disabled?: boolean;
  value?: string;
}

const InputField = ({
  name,

  label,
  placeholder,
  type = 'text',
  register,
  error,
  validation,
  disabled,
  value
}: FormInputProps ) => {
  return(
    <div className=" space-y-2">
      <Label htmlFor={name} className="form-label">
        {label}
      </Label>
      <Input
        type={type}

        id={name}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        {...register(name, validation)}
        className={cn('form-input', {
          'opacity-50 cursor-not-allowed': disabled
        })}
      />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  )
}

export default InputField
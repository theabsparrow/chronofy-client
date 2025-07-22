import { useEffect, useState } from "react";
import type {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
  UseFormTrigger,
} from "react-hook-form";

interface ITextAreaProps<T extends FieldValues> {
  label: string;
  name: Path<T>; // correct type for field name
  placeholder: string;
  register: UseFormRegister<T>;
  error?: FieldError;
  required: boolean;
  validateWatch: string;
  trigger?: UseFormTrigger<T>;
  rows?: number;
}

const InputTextArea = <T extends FieldValues>({
  label,
  name,
  placeholder,
  register,
  error,
  required,
  validateWatch,
  trigger,
  rows = 4,
}: ITextAreaProps<T>) => {
  const [charCount, setCharCount] = useState(0);
  const maxLength = 500;
  const minLength = 10;

  useEffect(() => {
    setCharCount(validateWatch?.length || 0);
    if (trigger && name) {
      trigger(name);
    }
  }, [validateWatch, trigger, name]);

  return (
    <div className="w-full space-y-2">
      <label className={`block text-lg font-semibold text-gray-700 `}>
        {label}
        <span>(Optional)</span>
      </label>
      <div className="relative">
        <textarea
          rows={rows}
          {...register(name, {
            ...(required && {
              required: `${name} is required`,
              minLength: {
                value: minLength,
                message: `Minimum ${minLength} characters required`,
              },
              maxLength: {
                value: maxLength,
                message: `Maximum ${maxLength} characters allowed`,
              },
              validate: {
                noLeadingSpace: (value) =>
                  /^[^\s].*$/.test(value) ||
                  "First character cannot be a space",
              },
            }),
          })}
          placeholder={placeholder || `Enter your ${label.toLowerCase()}`}
          className={`bg-[#99a1af80]  w-full px-4 py-2 rounded-xl text-gray-950  border transition-all duration-300 outline-none    border-gray-600  placeholder:text-gray-600 dark:placeholder:text-gray-400 ${
            error
              ? "focus:border-red-400 focus:ring-1 focus:ring-red-500"
              : "focus:border-green-700 focus:ring-1 focus:ring-green-800"
          }  `}
        />
      </div>
      <div className="flex items-center justify-end">
        {charCount}/{maxLength} character
      </div>
    </div>
  );
};

export default InputTextArea;

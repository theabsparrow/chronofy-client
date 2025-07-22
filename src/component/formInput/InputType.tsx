import { useEffect } from "react";
import type {
  FieldError,
  FieldValues,
  UseFormRegister,
  UseFormTrigger,
} from "react-hook-form";
import type { Path } from "react-hook-form";

interface TInputTypeProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  placeholder: string;
  register: UseFormRegister<T>;
  required?: boolean;
  error?: FieldError;
  type: string;
  trigger?: UseFormTrigger<T>;
}
const InputType = <T extends FieldValues>({
  label,
  name,
  placeholder,
  register,
  required,
  error,
  type,
  trigger,
}: TInputTypeProps<T>) => {
  useEffect(() => {
    if (trigger && name) {
      trigger(name);
    }
  }, [trigger, name]);

  return (
    <div className="w-full space-y-2">
      <label className="block text-lg font-semibold text-gray-700 ">
        {label}
        <span className="text-red-500 dark:text-red-400">*</span>
      </label>
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          {...register(name, {
            ...(required && {
              required: `${label} is required`,

              minLength: {
                value: 1,
                message: "Name can't be less than 2 characters",
              },
              maxLength: {
                value: 50,
                message: "Name can't be more than 50 characters",
              },
            }),
          })}
          className={`bg-[#99a1af80]  w-full px-4 py-2 rounded-xl border transition-all duration-300 outline-none text-gray-950 border-gray-600 ${
            error
              ? "focus:border-red-400 focus:ring-1 focus:ring-red-500"
              : "focus:border-green-700 focus:ring-1 focus:ring-green-800"
          }`}
        />
      </div>
    </div>
  );
};

export default InputType;

import {
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  FormEvent,
  ReactNode,
  KeyboardEvent,
} from "react";
import { toast } from "sonner";

interface SelectOption {
  value: string;
  label: string;
}

type DesignationValue =
  | "developer"
  | "designer"
  | "manager"
  | "executive"
  | "student"
  | "other";

type ReasonValue =
  | "general"
  | "support"
  | "partnership"
  | "careers"
  | "press"
  | "other";

interface ContactFormData {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  designation: DesignationValue | "";
  reason: ReasonValue | "";
  message: string;
}

type StringFormField = Extract<
  keyof ContactFormData,
  | "firstName"
  | "middleName"
  | "lastName"
  | "email"
  | "phone"
  | "company"
  | "message"
>;
type SelectFormField = Extract<keyof ContactFormData, "designation" | "reason">;

interface LabelProps {
  children: ReactNode;
  required?: boolean;
  htmlFor?: string;
}

function Label({ children, required = false, htmlFor }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 block text-sm font-thin text-gray-200"
    >
      {children}
      {required && <span className="ml-0.5 text-red-500">*</span>}
    </label>
  );
}

interface InputProps {
  id?: string;
  placeholder?: string;
  type?: "text" | "email" | "tel" | "password" | "number";
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
}

function Input({
  id,
  placeholder,
  type = "text",
  value,
  onChange,
  className = "",
  required,
}: InputProps) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`w-full rounded-md border border-[#0f1112] bg-[#010305] px-3 py-2.5 text-sm text-gray-100 transition-colors placeholder:text-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none ${className}`}
    />
  );
}

interface TextareaProps {
  id?: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}

function Textarea({
  id,
  placeholder,
  value,
  onChange,
  required,
}: TextareaProps) {
  return (
    <textarea
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      rows={5}
      className="min-h-[120px] w-full resize-y rounded-md border border-[#0f1112] bg-[#010305] px-3 py-2.5 text-sm text-gray-100 transition-colors placeholder:text-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
    />
  );
}

interface CustomSelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

function CustomSelect({
  options,
  value,
  onChange,
  placeholder = "Select an option",
}: CustomSelectProps) {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  function handleKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "Escape") setOpen(false);
  }

  const selected = options.find((o) => o.value === value) ?? null;

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        className="flex w-full items-center justify-between rounded-md border border-[#0f1112] bg-[#010305] px-3 py-2.5 text-left text-sm transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
      >
        <span className={selected ? "text-gray-100" : "text-gray-500"}>
          {selected ? selected.label : placeholder}
        </span>
        <svg
          className={`h-4 max-w-4 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 left-0 z-9999 mt-1 overflow-hidden rounded-md border border-[#2a2d35] bg-[#1a1d24] shadow-xl"
        >
          {options.map((opt) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={value === opt.value}
            >
              <button
                type="button"
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                className={`w-full px-3 py-2.5 text-left text-sm transition-colors hover:bg-[#252830] ${
                  value === opt.value
                    ? "bg-[#1e2230] text-blue-400"
                    : "text-gray-200"
                }`}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const REASON_OPTIONS: SelectOption[] = [
  { value: "general", label: "General Inquiry" },
  { value: "support", label: "Technical Support" },
  { value: "partnership", label: "Partnership" },
  { value: "careers", label: "Careers" },
  { value: "press", label: "Press & Media" },
  { value: "other", label: "Other" },
];

const DESIGNATION_OPTIONS: SelectOption[] = [
  { value: "developer", label: "Developer" },
  { value: "designer", label: "Designer" },
  { value: "manager", label: "Manager" },
  { value: "executive", label: "Executive" },
  { value: "student", label: "Student" },
  { value: "other", label: "Other" },
];

const INITIAL_FORM: ContactFormData = {
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  designation: "",
  reason: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleInput(field: StringFormField) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };
  }

  function handleSelect(field: SelectFormField) {
    return (value: string) => {
      setForm((prev) => ({ ...prev, [field]: value }));
    };
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!form.designation || !form.reason) {
      toast.error("Please complete all required fields", {
        description:
          "Fill in every field marked with * and choose designation and reason.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        //const data = await res.json().catch(() => ({}));
        //throw new Error(data?.error || "Failed to send message");
        toast.error("Couldn’t send message", {
          description: "Please try again.",
        });
      }

      toast.success("Message sent", {
        description: "We’ll get back to you soon.",
      });
      setForm(INITIAL_FORM);
    } catch (err) {
      toast.error("Couldn’t send message", {
        description: err instanceof Error ? err.message : "Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-background flex items-center justify-center p-6 pb-0">
      <div className="w-full max-w-7xl rounded-2xl border border-[#1e2128] bg-[#03070a] p-8 font-thin shadow-2xl md:p-12">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="mb-3 text-4xl font-thin tracking-tight text-white md:text-5xl">
            Get in <span className="text-blue-400">Touch</span>
          </h1>
          <p className="text-sm text-gray-400 md:text-base">
            Connect To GaiaSpace, join us or ask us anything you desire
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Name row */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div>
              <Label htmlFor="firstName" required>
                First Name
              </Label>
              <Input
                id="firstName"
                placeholder="Jane"
                value={form.firstName}
                onChange={handleInput("firstName")}
                required
              />
            </div>
            <div>
              <Label htmlFor="middleName">Middle Name</Label>
              <Input
                id="middleName"
                placeholder="William"
                value={form.middleName}
                onChange={handleInput("middleName")}
              />
            </div>
            <div>
              <Label htmlFor="lastName" required>
                Last Name
              </Label>
              <Input
                id="lastName"
                placeholder="Doe"
                value={form.lastName}
                onChange={handleInput("lastName")}
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email" required>
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Name@mail.com"
              value={form.email}
              onChange={handleInput("email")}
              required
            />
          </div>

          {/* Phone */}
          <div>
            <Label htmlFor="phone" required>
              Number
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Phone number"
              value={form.phone}
              onChange={handleInput("phone")}
              required
            />
          </div>

          {/* Company */}
          <div>
            <Label htmlFor="company" required>
              Company Name
            </Label>
            <Input
              id="company"
              placeholder="GaiaSpace Inc."
              value={form.company}
              onChange={handleInput("company")}
              required
            />
          </div>

          {/* Designation + Reason */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <Label required>Designation</Label>
              <CustomSelect
                options={DESIGNATION_OPTIONS}
                value={form.designation}
                onChange={handleSelect("designation")}
                placeholder="Select a designation"
              />
            </div>
            <div>
              <Label required>Reason</Label>
              <CustomSelect
                options={REASON_OPTIONS}
                value={form.reason}
                onChange={handleSelect("reason")}
                placeholder="Select a reason"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <Label htmlFor="message" required>
              Write to us
            </Label>
            <Textarea
              id="message"
              placeholder="Leave Us A Message"
              value={form.message}
              onChange={handleInput("message")}
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-md bg-[#0580c8] py-2.5 text-sm font-semibold tracking-wide text-white transition-colors duration-200 hover:bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0d0f14] focus:outline-none active:bg-blue-700"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

"use client";

import { CTA } from "@/src/components/CTA";
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
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

type PositionValue =
  | "⁠Electric Propulsion"
  | "⁠Liquid Propulsion"
  | "⁠Satellite Structures "
  | "⁠Orbital Mechanics and Control "
  | "⁠Satellite Communication "
  | "⁠Founder Office / General"
  | "other";

interface ApplicantInfo {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  designation: DesignationValue | "";
  position: PositionValue | "";
}

interface ReferenceInfo {
  firstName: string;
  middleName: string;
  lastName: string;
  institutionalEmail: string;
  designation: DesignationValue | "";
  position: PositionValue | "";
}

interface ApplyFormData {
  applicant: ApplicantInfo;
  resumeFile: File | null;
  hasReference: boolean;
  reference: ReferenceInfo;
  message: string;
  allowProcessing: boolean;
}

type ApplicantStringField = Extract<
  keyof ApplicantInfo,
  "firstName" | "middleName" | "lastName" | "email" | "phone" | "company"
>;
type ApplicantSelectField = Extract<
  keyof ApplicantInfo,
  "designation" | "position"
>;
type ReferenceStringField = Extract<
  keyof ReferenceInfo,
  "firstName" | "middleName" | "lastName" | "institutionalEmail"
>;
type ReferenceSelectField = Extract<
  keyof ReferenceInfo,
  "designation" | "position"
>;

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
          className="absolute right-0 left-0 z-50 mt-1 overflow-hidden rounded-md border border-[#2a2d35] bg-[#1a1d24] shadow-xl"
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

const DESIGNATION_OPTIONS: SelectOption[] = [
  { value: "developer", label: "Developer" },
  { value: "designer", label: "Designer" },
  { value: "manager", label: "Manager" },
  { value: "executive", label: "Executive" },
  { value: "student", label: "Student" },
  { value: "other", label: "Other" },
];

const POSITION_OPTIONS: SelectOption[] = [
  { value: "electric propulsion", label: "⁠Electric Propulsion" },
  { value: "backend", label: "⁠Liquid Propulsion" },
  { value: "fullstack", label: "⁠Satellite Structures" },
  { value: "design", label: "Orbital Mechanics and Control" },
  { value: "product", label: "Satellite Communication" },
  { value: "data", label: "⁠Founder Office / General" },
  { value: "other", label: "Other" },
];

const INITIAL_APPLICANT: ApplicantInfo = {
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  designation: "",
  position: "",
};

const INITIAL_REFERENCE: ReferenceInfo = {
  firstName: "",
  middleName: "",
  lastName: "",
  institutionalEmail: "",
  designation: "",
  position: "",
};

const INITIAL_FORM: ApplyFormData = {
  applicant: INITIAL_APPLICANT,
  resumeFile: null,
  hasReference: false,
  reference: INITIAL_REFERENCE,
  message: "",
  allowProcessing: false,
};

export default function Form() {
  const [form, setForm] = useState<ApplyFormData>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeFileName, setResumeFileName] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleApplicantInput(field: ApplicantStringField) {
    return (e: ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({
        ...prev,
        applicant: { ...prev.applicant, [field]: e.target.value },
      }));
    };
  }

  function handleApplicantSelect(field: ApplicantSelectField) {
    return (value: string) => {
      setForm((prev) => ({
        ...prev,
        applicant: { ...prev.applicant, [field]: value },
      }));
    };
  }

  function handleReferenceInput(field: ReferenceStringField) {
    return (e: ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({
        ...prev,
        reference: { ...prev.reference, [field]: e.target.value },
      }));
    };
  }

  function handleReferenceSelect(field: ReferenceSelectField) {
    return (value: string) => {
      setForm((prev) => ({
        ...prev,
        reference: { ...prev.reference, [field]: value },
      }));
    };
  }

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    if (file) {
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!validTypes.includes(file.type)) {
        toast.error("Invalid file type", {
          description: "Please upload a PDF or DOC file.",
        });
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        toast.error("File too large", {
          description: "Resume must be under 10MB.",
        });
        return;
      }
      setForm((prev) => ({ ...prev, resumeFile: file }));
      setResumeFileName(file.name);
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { applicant, resumeFile, hasReference, reference } = form;

    if (!applicant.designation || !applicant.position) {
      toast.error("Please complete all required fields", {
        description:
          "Fill in every field marked with * and choose designation and position.",
      });
      return;
    }

    if (!resumeFile) {
      toast.error("Resume required", {
        description: "Please upload your resume.",
      });
      return;
    }

    if (!form.allowProcessing) {
      toast.error("Consent required", {
        description: "You must allow us to process your personal information.",
      });
      return;
    }

    if (hasReference && (!reference.designation || !reference.position)) {
      toast.error("Please complete reference fields", {
        description: "Fill in all required reference fields.",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = new FormData();
      payload.append("applicant", JSON.stringify(form.applicant));
      payload.append("reference", JSON.stringify(form.reference));
      payload.append("hasReference", String(form.hasReference));
      payload.append("message", form.message);
      payload.append("allowProcessing", String(form.allowProcessing));
      payload.append("resume", resumeFile); // resumeFile already validated

      const res = await fetch("/api/form", {
        method: "POST",
        body: payload,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Failed to send application");
      }
      toast.success("Application sent", {
        description: "We'll be in touch soon.",
      });
      setForm(INITIAL_FORM);
      setResumeFileName("");
    } catch (err) {
      toast.error("Couldn't send application", {
        description: err instanceof Error ? err.message : "Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleSaveForLater() {
    toast.success("Application saved", {
      description: "You can return to complete it later.",
    });
  }

  return (
    <div className="bg-background">
      <Navbar />
      <div className="bg-background flex flex-col items-center justify-center p-6 pt-[80px] pb-0 md:pt-[100px] lg:pt-[140px]">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="mb-3 text-4xl font-thin tracking-tight text-white md:text-5xl">
            Join Us
          </h1>
          <p className="text-sm text-gray-400 md:text-base">
            <span className="text-primary">Lead</span> the way in sustainable{" "}
            <span className="text-primary">space engineering</span>
          </p>
          <p className="text-sm text-gray-400 md:text-base">
            We are looking for
            <span className="text-primary"> YOU</span>
          </p>
        </div>

        <div className="w-full max-w-7xl rounded-2xl border border-[#1e2128] bg-[#03070a] p-8 font-thin shadow-2xl md:p-12">
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {/* Name row */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div>
                <Label htmlFor="firstName" required>
                  First Name
                </Label>
                <Input
                  id="firstName"
                  placeholder="Jhon"
                  value={form.applicant.firstName}
                  onChange={handleApplicantInput("firstName")}
                  required
                />
              </div>
              <div>
                <Label htmlFor="middleName">Middle Name</Label>
                <Input
                  id="middleName"
                  placeholder="William"
                  value={form.applicant.middleName}
                  onChange={handleApplicantInput("middleName")}
                />
              </div>
              <div>
                <Label htmlFor="lastName" required>
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  value={form.applicant.lastName}
                  onChange={handleApplicantInput("lastName")}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" required>
                Enter your Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="jhondoe@example.com"
                value={form.applicant.email}
                onChange={handleApplicantInput("email")}
                required
              />
            </div>

            {/* Phone */}
            <div>
              <Label htmlFor="phone" required>
                Contact Number
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter Your Contact"
                value={form.applicant.phone}
                onChange={handleApplicantInput("phone")}
                required
              />
            </div>

            {/* Company */}
            <div>
              <Label htmlFor="company" required>
                Company / Organization Name
              </Label>
              <Input
                id="company"
                placeholder="Enter Your Company / Organization Name"
                value={form.applicant.company}
                onChange={handleApplicantInput("company")}
                required
              />
            </div>

            {/* Designation + Position */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <Label required>Enter Designation</Label>
                <CustomSelect
                  options={DESIGNATION_OPTIONS}
                  value={form.applicant.designation}
                  onChange={handleApplicantSelect("designation")}
                  placeholder="Select Designation"
                />
              </div>
              <div>
                <Label required>Applying for the Position</Label>
                <CustomSelect
                  options={POSITION_OPTIONS}
                  value={form.applicant.position}
                  onChange={handleApplicantSelect("position")}
                  placeholder="Select a role"
                />
              </div>
            </div>

            {/* Resume Upload */}
            <div>
              <Label htmlFor="resume" required>
                Resume
              </Label>
              <div className="flex items-center gap-2 rounded-md border border-[#0f1112] bg-[#010305] px-3 py-2.5">
                <span className="flex-1 truncate text-sm text-gray-500">
                  {resumeFileName ||
                    "Upload your resume (pdf and doc only upto 10mb)"}
                </span>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="rounded bg-[#1e2128] px-4 py-1 text-sm text-gray-200 transition-colors hover:bg-[#2a2d35]"
                >
                  Upload
                </button>
              </div>
              <input
                ref={fileInputRef}
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>

            {/* Reference Toggle */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-thin text-gray-400">
                Do you want to mention any Reference / Recommendation ?
              </span>
              <div className="flex items-center gap-4">
                <label className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-300">
                  <input
                    type="radio"
                    name="hasReference"
                    checked={form.hasReference === true}
                    onChange={() =>
                      setForm((prev) => ({ ...prev, hasReference: true }))
                    }
                    className="accent-blue-500"
                  />
                  Yes
                </label>
                <label className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-300">
                  <input
                    type="radio"
                    name="hasReference"
                    checked={form.hasReference === false}
                    onChange={() =>
                      setForm((prev) => ({
                        ...prev,
                        hasReference: false,
                        reference: INITIAL_REFERENCE,
                      }))
                    }
                    className="accent-blue-500"
                  />
                  No
                </label>
              </div>
            </div>

            {/* Reference Section — only shown when Yes */}
            {form.hasReference && (
              <div className="space-y-6 rounded-xl border border-[#1e2128] bg-[#060b0f] p-6">
                {/* Reference Name */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div>
                    <Label htmlFor="refFirstName" required>
                      First Name
                    </Label>
                    <Input
                      id="refFirstName"
                      placeholder="Jhon"
                      value={form.reference.firstName}
                      onChange={handleReferenceInput("firstName")}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="refMiddleName">Middle Name</Label>
                    <Input
                      id="refMiddleName"
                      placeholder="William"
                      value={form.reference.middleName}
                      onChange={handleReferenceInput("middleName")}
                    />
                  </div>
                  <div>
                    <Label htmlFor="refLastName" required>
                      Last Name
                    </Label>
                    <Input
                      id="refLastName"
                      placeholder="Doe"
                      value={form.reference.lastName}
                      onChange={handleReferenceInput("lastName")}
                      required
                    />
                  </div>
                </div>

                {/* Institutional Email */}
                <div>
                  <Label htmlFor="refEmail" required>
                    Institutional Email Id
                  </Label>
                  <Input
                    id="refEmail"
                    type="email"
                    placeholder="Enter Institutional Email Id"
                    value={form.reference.institutionalEmail}
                    onChange={handleReferenceInput("institutionalEmail")}
                    required
                  />
                </div>

                {/* Reference Designation + Position */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <Label required>Enter Designation</Label>
                    <CustomSelect
                      options={DESIGNATION_OPTIONS}
                      value={form.reference.designation}
                      onChange={handleReferenceSelect("designation")}
                      placeholder="Select Designation"
                    />
                  </div>
                  <div>
                    <Label required>Applying for the Position</Label>
                    <CustomSelect
                      options={POSITION_OPTIONS}
                      value={form.reference.position}
                      onChange={handleReferenceSelect("position")}
                      placeholder="Select a role"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Message */}
            <div>
              <Label htmlFor="message">Leave Us a Message</Label>
              <Textarea
                id="message"
                placeholder="You kindly share your interest in the position along with any relevant details that would support a comprehensive evaluation of your profile."
                value={form.message}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, message: e.target.value }))
                }
              />
            </div>

            {/* Privacy */}
            <div className="space-y-2">
              <p className="text-sm font-thin text-gray-400">
                You can view our privacy notice for more information.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-thin text-gray-400">
                  Allow us to process your personal information.
                  <span className="ml-0.5 text-red-500">*</span>
                </span>
                <div className="flex items-center gap-4">
                  <label className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-300">
                    <input
                      type="radio"
                      name="allowProcessing"
                      checked={form.allowProcessing === true}
                      onChange={() =>
                        setForm((prev) => ({ ...prev, allowProcessing: true }))
                      }
                      className="accent-blue-500"
                    />
                    Yes
                  </label>
                  <label className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-300">
                    <input
                      type="radio"
                      name="allowProcessing"
                      checked={form.allowProcessing === false}
                      onChange={() =>
                        setForm((prev) => ({ ...prev, allowProcessing: false }))
                      }
                      className="accent-blue-500"
                    />
                    No
                  </label>
                </div>
              </div>

              <button
                type="button"
                onClick={handleSaveForLater}
                className="text-sm font-thin text-gray-400 underline-offset-2 hover:text-gray-200 hover:underline"
              >
                Not ready to submit the application yet? Save application for
                later
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-md bg-[#0580c8] py-3 text-sm font-semibold tracking-widest text-white transition-colors duration-200 hover:bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0d0f14] focus:outline-none active:bg-blue-700 disabled:opacity-60"
            >
              {isSubmitting ? "SENDING..." : "SEND"}
            </button>
          </form>
        </div>
      </div>
      <CTA />
      <Footer />
    </div>
  );
}


"use client";

import { useState } from "react";
import {
  CalendarDays,
  Users,
  BedDouble,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

import { BUSINESS } from "@/lib/constants";
import { openWhatsApp } from "@/lib/whatsapp";

const today = new Date();

const todayString = [
  today.getFullYear(),
  String(today.getMonth() + 1).padStart(2, "0"),
  String(today.getDate()).padStart(2, "0"),
].join("-");

export default function BookingForm({ compact = false }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    type: "AC dormitory bed",
    quantity: "1",
    requests: "",
  });

  const [errors, setErrors] = useState({});
  const [notice, setNotice] = useState("");

  const update = (key, value) => {
    setForm((old) => ({ ...old, [key]: value }));
    setErrors((old) => ({ ...old, [key]: "" }));
    setNotice("");
  };

  const validate = () => {
    const e = {};

    if (!form.name.trim()) {
      e.name = "Please enter your full name.";
    }

    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\D/g, "").slice(-10))) {
      e.phone = "Enter a valid 10-digit Indian mobile number.";
    }

    if (!form.checkIn) {
      e.checkIn = "Choose your check-in date.";
    } else if (form.checkIn < todayString) {
      e.checkIn = "Check-in cannot be in the past.";
    }

    if (!form.checkOut) {
      e.checkOut = "Choose your check-out date.";
    } else if (
      form.checkIn &&
      form.checkOut <= form.checkIn
    ) {
      e.checkOut = "Check-out must be after check-in.";
    }

    if (!form.guests || Number(form.guests) < 1) {
      e.guests = "Select at least one guest.";
    }

    return e;
  };

  const submit = (event) => {
    event.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    const message = [
      `Hello ${BUSINESS.name}, I would like to enquire about a booking.`,
      "",
      `Name: ${form.name.trim()}`,
      `Mobile: ${form.phone}`,
      `Check-in: ${form.checkIn}`,
      `Check-out: ${form.checkOut}`,
      `Guests: ${form.guests}`,
      `Accommodation: ${form.type}`,
      `Number of beds: ${form.quantity}`,
      `Special requests: ${form.requests.trim() || "None"}`,
      "",
      "Please confirm availability, final pricing, and booking terms.",
    ].join("\n");

    const result = openWhatsApp(message);

    if (result.ok) {
      setNotice(
        "Your enquiry is ready in WhatsApp. Please press Send there to contact the dormitory. This does not confirm a reservation."
      );
    } else {
      setNotice(result.message);
    }
  };

  // Consistent field layout and icon alignment
  const field = (key, label, type = "text", extra = {}) => (
    <label className="block min-w-0" key={key}>
      <span className="field-label">{label}</span>

      <input
        className={`field-input w-full ${
          errors[key] ? "field-error" : ""
        }`}
        type={type}
        value={form[key]}
        onChange={(event) => update(key, event.target.value)}
        min={extra.min}
        max={extra.max}
        placeholder={extra.placeholder || ""}
        required={extra.required}
        autoComplete={extra.autoComplete}
      />

      {errors[key] && (
        <span className="mt-1 block text-xs text-red-700">
          {errors[key]}
        </span>
      )}
    </label>
  );

  // Reusable icon-aligned input wrapper
  const iconField = ({
    icon: Icon,
    label,
    children,
    error,
  }) => (
    <label className="block min-w-0">
      <span className="field-label">{label}</span>

      <span
        className={`relative flex min-h-[48px] w-full items-center border bg-white transition-colors focus-within:border-[#C5A46D] ${
          error ? "border-red-500" : "border-black/15"
        }`}
      >
        <Icon
          size={17}
          strokeWidth={1.7}
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-stone-500"
        />

        {children}
      </span>

      {error && (
        <span className="mt-1 block text-xs text-red-700">{error}</span>
      )}
    </label>
  );

  const iconControlClass =
    "h-[46px] w-full min-w-0 appearance-none bg-transparent pl-10 pr-3 text-sm text-ink outline-none";

  return (
    <form onSubmit={submit} className="space-y-5" noValidate>
      <div
        className={`grid gap-x-4 gap-y-4 ${
          compact ? "sm:grid-cols-2" : "sm:grid-cols-2"
        }`}
      >
        {field("name", "Full name", "text", {
          placeholder: "Your full name",
          required: true,
          autoComplete: "name",
        })}

        {field("phone", "Mobile number", "tel", {
          placeholder: "10-digit mobile number",
          required: true,
          autoComplete: "tel-national",
        })}

        {/* Check-in date */}
        {iconField({
          icon: CalendarDays,
          label: "Check-in",
          error: errors.checkIn,
          children: (
            <input
              className={iconControlClass}
              type="date"
              min={todayString}
              value={form.checkIn}
              onChange={(event) => update("checkIn", event.target.value)}
              required
              aria-label="Check-in date"
            />
          ),
        })}

        {/* Check-out date */}
        {iconField({
          icon: CalendarDays,
          label: "Check-out",
          error: errors.checkOut,
          children: (
            <input
              className={iconControlClass}
              type="date"
              min={form.checkIn || todayString}
              value={form.checkOut}
              onChange={(event) => update("checkOut", event.target.value)}
              required
              aria-label="Check-out date"
            />
          ),
        })}

        {/* Number of guests */}
        {iconField({
          icon: Users,
          label: "Number of guests",
          error: errors.guests,
          children: (
            <select
              className={iconControlClass}
              value={form.guests}
              onChange={(event) => update("guests", event.target.value)}
              aria-label="Number of guests"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
                <option key={number} value={number}>
                  {number} {number === 1 ? "guest" : "guests"}
                </option>
              ))}
            </select>
          ),
        })}

        {/* Only one accommodation option */}
        {iconField({
          icon: BedDouble,
          label: "Accommodation type",
          children: (
            <select
              className={iconControlClass}
              value={form.type}
              onChange={(event) => update("type", event.target.value)}
              aria-label="Accommodation type"
            >
              <option value="AC dormitory bed">AC Dormitory Bed</option>
            </select>
          ),
        })}

        {/* Number of beds */}
        <label className="block min-w-0">
          <span className="field-label">Number of beds</span>

          <select
            className="field-input w-full"
            value={form.quantity}
            onChange={(event) => update("quantity", event.target.value)}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
              <option key={number} value={number}>
                {number} {number === 1 ? "bed" : "beds"}
              </option>
            ))}
          </select>
        </label>

        {/* Special requests */}
        <label className="block min-w-0 sm:col-span-2">
          <span className="field-label">
            Special requests{" "}
            <span className="font-normal normal-case tracking-normal text-stone-400">
              (optional)
            </span>
          </span>

          <textarea
            className="field-input min-h-24 w-full resize-y"
            value={form.requests}
            onChange={(event) => update("requests", event.target.value)}
            placeholder="Arrival time or other requests"
          />
        </label>
      </div>

      {/* WhatsApp submit button */}
      <button
        type="submit"
        className="button button-gold flex w-full items-center justify-center gap-2"
      >
        <MessageCircle size={18} strokeWidth={1.8} />
        Continue to WhatsApp
      </button>

      {/* Submission feedback */}
      {notice && (
        <div
          role="status"
          className="flex items-start gap-3 border border-gold/50 bg-[#FBF6E9] p-4 text-sm leading-6 text-ink"
        >
          <CheckCircle2
            size={19}
            className="mt-1 shrink-0 text-[#8A6A32]"
          />
          <span>{notice}</span>
        </div>
      )}

      <p className="text-xs leading-5 text-stone-500">
        Your enquiry opens in WhatsApp with a prefilled message. A booking
        is confirmed only after the property confirms availability and terms.
      </p>
    </form>
  );
}

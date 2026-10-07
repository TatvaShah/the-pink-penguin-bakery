"use client";

import { useMemo, useState } from "react";
import { bakery } from "@/lib/site";

type Intent = "cake" | "weekly" | "class";

const cakeSizes = [
  "4 inch, a small celebration or smash cake",
  "6 inch, an intimate gathering",
  "9 inch, around 10 to 15 guests",
  "10 inch",
  "12 inch, a larger celebration",
  "Not sure yet, please help me choose",
];

const occasions = ["Birthday", "Shower", "Anniversary", "Just because", "Something else"];

const weeklyItems = [
  "Plain challah",
  "Sesame challah",
  "Raisin challah",
  "Cinnamon babka",
  "Chocolate babka",
  "Babka balls",
  "Cookies",
  "Chocolate dipped biscotti",
  "A bundle",
];

const classTypes = ["Birthday", "Bridal shower", "Girls' night", "Something else"];

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.left = "-9999px";
      document.body.appendChild(area);
      area.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(area);
      return ok;
    } catch {
      return false;
    }
  }
}

export function Inquiry() {
  const [intent, setIntent] = useState<Intent>("cake");
  const [size, setSize] = useState(cakeSizes[1]);
  const [occasion, setOccasion] = useState(occasions[0]);
  const [weekly, setWeekly] = useState(weeklyItems[0]);
  const [classType, setClassType] = useState(classTypes[0]);
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [toast, setToast] = useState<string | null>(null);

  const message = useMemo(() => {
    const lines: string[] = [];
    const who = name.trim();
    lines.push(who ? `Hi Pink Penguin Bakery! My name is ${who}.` : "Hi Pink Penguin Bakery!");
    lines.push("");
    if (intent === "cake") {
      lines.push("I would love to order a custom cake.");
      lines.push(`Occasion: ${occasion}`);
      lines.push(`Size: ${size}`);
    } else if (intent === "weekly") {
      lines.push("I would love to place a weekly bake order.");
      lines.push(`I am hoping for: ${weekly}`);
    } else {
      lines.push("I would love to book a private cake decorating class.");
      lines.push(`The gathering: ${classType}`);
      lines.push("I know you come to the group and bring the cakes, buttercream, tools, and sprinkles.");
    }
    if (date.trim()) lines.push(`Date in mind: ${date.trim()}`);
    if (note.trim()) lines.push(`A little more: ${note.trim()}`);
    lines.push("");
    lines.push("Could you let me know availability? Thank you!");
    return lines.join("\n");
  }, [classType, date, intent, name, note, occasion, size, weekly]);

  async function send() {
    const copied = await copyText(message);
    setToast(copied ? "Message copied, just paste it in the DM" : "Select the message and copy it, then paste it in the DM");
    window.setTimeout(() => setToast(null), 8000);
    window.setTimeout(() => {
      window.open(bakery.dm, "_blank", "noopener,noreferrer");
    }, 2500);
  }

  return (
    <section id="inquire" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid gap-8 rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-pink/15 sm:p-8 lg:grid-cols-2">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-berry">Order or class inquiry</p>
          <h2 className="display mt-2 text-4xl font-semibold tracking-tight">Write the DM before you send it.</h2>
          <p className="mt-3 text-cocoa">
            Tell me what you are dreaming of. The note fills in as you go, then you can paste it into a DM.
          </p>

          <fieldset className="mt-6">
            <legend className="text-sm font-extrabold">What are you after?</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {(
                [
                  ["cake", "Custom cake"],
                  ["weekly", "Weekly bake"],
                  ["class", "Decorating class"],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setIntent(value)}
                  className={`rounded-full px-4 py-2 text-sm font-extrabold ${intent === value ? "bg-berry text-white" : "bg-blush text-berry"}`}
                  aria-pressed={intent === value}
                >
                  {label}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="mt-4 grid gap-4">
            {intent === "cake" ? (
              <>
                <label className="grid gap-1 text-sm font-bold">
                  Occasion
                  <select value={occasion} onChange={(event) => setOccasion(event.target.value)} className="rounded-2xl border border-pink/20 bg-cream px-3 py-3 font-semibold">
                    {occasions.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-1 text-sm font-bold">
                  Size
                  <select value={size} onChange={(event) => setSize(event.target.value)} className="rounded-2xl border border-pink/20 bg-cream px-3 py-3 font-semibold">
                    {cakeSizes.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>
              </>
            ) : null}
            {intent === "weekly" ? (
              <label className="grid gap-1 text-sm font-bold">
                Bake
                <select value={weekly} onChange={(event) => setWeekly(event.target.value)} className="rounded-2xl border border-pink/20 bg-cream px-3 py-3 font-semibold">
                  {weeklyItems.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
            ) : null}
            {intent === "class" ? (
              <label className="grid gap-1 text-sm font-bold">
                Gathering
                <select value={classType} onChange={(event) => setClassType(event.target.value)} className="rounded-2xl border border-pink/20 bg-cream px-3 py-3 font-semibold">
                  {classTypes.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
            ) : null}
            <label className="grid gap-1 text-sm font-bold">
              Your name
              <input value={name} onChange={(event) => setName(event.target.value)} className="rounded-2xl border border-pink/20 bg-cream px-3 py-3 font-semibold" autoComplete="name" />
            </label>
            <label className="grid gap-1 text-sm font-bold">
              Date in mind
              <input value={date} onChange={(event) => setDate(event.target.value)} className="rounded-2xl border border-pink/20 bg-cream px-3 py-3 font-semibold" placeholder="A Friday, a birthday, a weekend" />
            </label>
            <label className="grid gap-1 text-sm font-bold">
              Anything else
              <textarea value={note} onChange={(event) => setNote(event.target.value)} rows={3} className="rounded-2xl border border-pink/20 bg-cream px-3 py-3 font-semibold" />
            </label>
          </div>
        </div>

        <div className="flex flex-col rounded-3xl bg-cream p-5">
          <p className="text-sm font-extrabold text-berry">Your starter message</p>
          <pre className="mt-3 flex-1 whitespace-pre-wrap rounded-2xl bg-white p-4 font-sans text-sm leading-relaxed text-ink ring-1 ring-pink/10">{message}</pre>
          <button type="button" onClick={send} className="mt-4 rounded-full bg-berry px-5 py-3 font-extrabold text-white hover:bg-pink">
            Copy message and open Instagram
          </button>
          <p className="mt-3 text-sm text-cocoa">
            Prefer email?{" "}
            <a className="font-extrabold text-berry" href={`mailto:${bakery.email}`}>
              {bakery.email}
            </a>
          </p>
        </div>
      </div>
      {toast ? (
        <div role="status" className="fixed bottom-4 left-1/2 z-50 w-[min(92vw,28rem)] -translate-x-1/2 rounded-full bg-ink px-4 py-3 text-center text-sm font-bold text-white shadow-lg">
          {toast}
        </div>
      ) : null}
    </section>
  );
}

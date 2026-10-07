import { bakery } from "@/lib/site";

const steps = [
  {
    title: "Message Sunday to Wednesday",
    body: "Weekly orders are accepted Sunday to Wednesday and close every Wednesday. Custom cakes can be discussed anytime.",
  },
  {
    title: "DM or email",
    body: `Send me a DM at ${bakery.instagramHandle}, or email ${bakery.email}. The note below can start the message for you.`,
  },
  {
    title: "Pickup in Thornhill",
    body: "Regular pickup is Friday or Saturday in Thornhill. Other days are available by request, and custom orders get a pickup day that works.",
  },
  {
    title: "Fresh, not leftover",
    body: "I bake everything to order, so it is fresh when you pick it up. I will send the exact spot once your order is confirmed.",
  },
];

export function OrderPath() {
  return (
    <section id="order" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-berry">How to order</p>
        <h2 className="display mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">From the kitchen, not a storefront.</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-2">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-3xl bg-cream p-5 ring-1 ring-pink/15">
              <span className="display text-3xl font-semibold text-pink">{index + 1}</span>
              <h3 className="mt-2 text-xl font-extrabold">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-cocoa">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

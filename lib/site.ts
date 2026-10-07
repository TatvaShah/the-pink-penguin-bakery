export function getSiteUrl() {
  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (production) return `https://${production}`;
  const preview = process.env.VERCEL_URL;
  if (preview) return `https://${preview}`;
  return "http://localhost:3000";
}

export const bakery = {
  name: "The Pink Penguin Bakery",
  instagram: "https://www.instagram.com/thepinkpenguinbakery/",
  instagramHandle: "@thepinkpenguinbakery",
  dm: "https://ig.me/m/thepinkpenguinbakery",
  facebook: "https://www.facebook.com/thepinkpenguinbakery/",
  threads: "https://www.threads.com/@thepinkpenguinbakery",
  email: "pinkpenguinbakery@gmail.com",
  area: "Thornhill, Ontario",
};

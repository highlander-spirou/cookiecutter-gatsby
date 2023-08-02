/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx,md,mdx}`,
    `./src/components/**/*.{js,jsx,ts,tsx,md,mdx}`,
    `./src/templates/**/*.{js,jsx,ts,tsx,md,mdx}`,
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

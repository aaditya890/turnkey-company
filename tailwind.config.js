/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'brand-sienna': '#D4894E',   // Raw Sienna. :contentReference[oaicite:19]{index=19}
        'brand-navy': '#314054'      // Dark navy blue. :contentReference[oaicite:20]{index=20}
      },
    }
  },
  plugins: [],
}

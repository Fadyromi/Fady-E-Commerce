/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js,tsx,ts}",
     'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
  ],
 
}


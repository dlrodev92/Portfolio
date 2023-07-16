/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
        fontFamily: {
          Jost:['Jost'],
        },
      gridTemplateColumns: {
        'appLayout': '0.6fr 1.4fr 1fr 1fr 1fr 0.6fr',
        'appLayoutMobile': '1fr 1fr 1fr 1fr 1fr 1fr',
      },
      gridTemplateRows:{
        'appLayout': '0.5fr 1.5fr 1fr 1fr 1.5fr 0.5fr',
        'appLayoutMobile': '1fr 1fr 1fr 1fr 1fr 1fr',
      },
      colors: {
        blueBackground: '#21C4E1',
        icon: 'E6E6E6',
        html: '#E8662E',
        js: '#EFD81D',
        tailwind: '#38BDF8',
        react: '#61DAFB',
        node: '#6CA55F',
        express: '#EEEEEE',
        ts: '#2F74C0',
        sql: '#31648C'


      },
      boxShadow:{
        'inner': "-8px -1px 38px 15px rgba(0,0,0,0.13)",
        'outer': "13px 13px 42px 15px rgba(0,0,0,0.52)",
        'navbar': '8px -1px 95px 15px rgba(0,0,0,0.21)',
        'david': '0px 10px 33px 0px rgba(85,86,91,0.5)'
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar-hide')
],
}


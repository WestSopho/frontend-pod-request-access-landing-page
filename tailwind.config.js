/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
            '#54E6AF': '#54E6AF', 
            "#2C344B": '#2C344B', 
            "#121725": '#121725', 
            "#121725": "#121725",
            "#5A668A": "#5A668A", 
            "#C2CBE5": "#C2CBE5"
        }, 
        fontFamily: {
            'chivo': ['Chivo', 'sans-serif']
        },
        backgroundImage: {
          'mobile': "url(../assets/mobile/image-host.jpg)",
          'tablet': "url(../assets/tablet/image-host.jpg)",
          'desktop': "url(../assets/desktop/image-host.jpg)"
        }
      }
    },
    plugins: [],
  }
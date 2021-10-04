module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    rotate: {
      360: "360deg",
    },
    extend: {
      backgroundImage: (theme) => ({
        "dev-loper": "url('../public/dev.png')",
        "port-folio":
          "url('https://images.unsplash.com/photo-1567374783966-0991fdee91a7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTF8fHBvcnRmb2xpb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60')",
        "haikei-img": "url('../public/haikeybg.png')",
        "blue-sky": "url('../public/blue.jpg')",
        "ciel-sky": "url('../public/ciel.jpg')",
        "etincelle-sky": "url('../public/etincelle.jpg')",
        "lune-sky": "url('../public/lune.jpg')",
        "space-sky": "url('../public/space.jpg')",
        "stars-sky": "url('../public/stars.jpg')",
        "blob-scene": "url('../public/blob-scene.png')",
        "weather": "url('../public/snow.png')",

        
      }),
      fontFamily: {
        'lato': ['"lato", "sans-serif"'],
        'pacifico': ['"pacifico", "cursive"']
      }
    },
  },
  variants: {
    extend: {
      outline: ['hover', 'active'],
    },
  },
  plugins: [],
};

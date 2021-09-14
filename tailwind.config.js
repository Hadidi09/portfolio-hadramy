module.exports = {
  purge: [],
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
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

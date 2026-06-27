module.exports = {
  content: [
    './routines.app.min.js',
    './routines.offline.html',
  ],
  theme: {
    extend: {
      colors: {
        retro: {
          bg: '#f0e6d2',
          paper: '#fffbf0',
          ink: '#2c2c2c',
          red: '#c0392b',
          blue: '#2980b9',
          green: '#27ae60',
          board: '#2d3436',
          wood: '#8e44ad',
          line: '#bdc3c7',
        },
      },
      boxShadow: {
        hard: '4px 4px 0px 0px rgba(0,0,0,1)',
        'hard-sm': '2px 2px 0px 0px rgba(0,0,0,1)',
        'inner-hard': 'inset 2px 2px 0px 0px rgba(0,0,0,0.1)',
      },
      fontFamily: {
        serif: ['"Noto Serif TC"', '"Songti TC"', 'serif'],
        mono: ['"Courier New"', 'monospace'],
        sans: ['"Noto Sans TC"', '"Microsoft JhengHei"', 'sans-serif'],
      },
    },
  },
};

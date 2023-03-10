/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.css', './dist/**/*.html'],
  theme: {
    extend: {
      colors: {
        bg: '#F4F3E7',
        accent: '#AC6719',
        kgray: '#36332F',
        kpink: '#E80151',
        kgold: '#F6D8B6',
        kyellow: '#EE932B',
      },
      fontSize: {
        k10: '10px',
        k12: '12px',
        k20: '20px',
        k24: '24px',
        k26: '26px',
        k28: '28px',
        k32: '32px',
        k36: '36px',
        k48: '48px',
        k64: '64px',
      },
      fontFamily: {
        bs: ['Bad Script', 'cursive'],
        at: ['Athelas', 'cursive'],
        ap: ['Apple Chancery', 'cursive'],
      },
      backgroundImage: {
        kbg: 'url("../img/bg.png")',
        rleaf: 'url("../img/leaf-r.png")',
        lleaf: 'url("../img/leaf-l.png")',
        arrowbl: 'url("../img/arrow-bl.svg")',
        arrowbr: 'url("../img/arrow-br.svg")',
        arrowlt: 'url("../img/arrow-lt.svg")',
        arrowlb: 'url("../img/arrow-lb.svg")',
        sladekbg: 'url("../img/sladek-bg.svg")',
        lezakbg: 'url("../img/lezak-bg.svg")',
        advantbg: 'url("../img/advant-bg.svg")',
        barrel: 'url("../img/barrel.svg")',
        ear: 'url("../img/ear.svg")',
        hop: 'url("../img/hop.svg")',
        banner: 'url("../img/banner.svg")',
        wheat: 'url("../img/wheat.png")',
        beer: 'url("../img/beer.png")',
        close: 'url("../img/close.svg")',
      },
    },
  },
  plugins: [],
}

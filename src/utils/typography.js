import Typography from "typography"
import oceanBeachTheme from 'typography-theme-ocean-beach'

oceanBeachTheme.headerFontFamily = ['Poppins']
oceanBeachTheme.bodyFontFamily = ['Inconsolata']
oceanBeachTheme.headerColor = '#06425a'
oceanBeachTheme.bodyColor = '#0f5b7a'
oceanBeachTheme.googleFonts = [
  {
    name: 'Poppins',
    styles: [
      '700',
    ],
  },
  {
    name: 'Inconsolata',
    styles: [
      '400',
      '400i',
      '700',
      '700i',
    ],
  },
]
oceanBeachTheme.overrideThemeStyles = ({ rhythm }, options, styles) => {
  // const linkColor = "#f26a3d"
  const linkColor = "#EF6461"
  const blockQuoteColor = "#E4B363"
  return {
    a: {
      color: linkColor,
      textDecoration: "none",
      textShadow:
        ".03em 0 #fff,-.03em 0 #fff,0 .03em #fff,0 -.03em #fff,.06em 0 #fff,-.06em 0 #fff,.09em 0 #fff,-.09em 0 #fff,.12em 0 #fff,-.12em 0 #fff,.15em 0 #fff,-.15em 0 #fff", // eslint-disable-line
      backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ${linkColor} 1px, ${linkColor} 2px, rgba(0, 0, 0, 0) 2px)`, // eslint-disable-line
    },
    blockquote: {
      borderLeft: `${rhythm(6 / 16)} solid ${blockQuoteColor}`,
    },

  }
}

const typography = new Typography(oceanBeachTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale

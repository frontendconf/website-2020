// WIP, currently unused since the complete exisyting styles were copied for now

export const colors = {
  primary: '#00fff8',
  secondary: '#ffda7e',
  offblack: '#08031e',
  bombay: '#b3b3bc',
  windsor: '#300888',
  'dark-blue': '#09001f',
}

export const transition = {
  time: '250ms',
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
}

export const breakpoints = {
  sm: 400,
  rg: 500,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1500,
}

export const mq = (breakpoint = 'sm') =>
  `min-width: ${breakpoints[breakpoint] / 16}em`

export const gradient = () =>
  `background-image: linear-gradient(to right, rgba(255, 255, 255, 0.7), ${colors.primary});`

export const textGradient = () => `
  ${gradient()};
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`

// @nest *::-ms-backdrop, & {
//   color: #fff;
//   background: none;
// }

import { mq, colors } from '../lib/styles'

export default ({ children }) => (
  <main>
    {children}

    <style jsx global>{`
      @font-face {
        font-family: Code-Pro-LC;
        src: url('/static/fonts/38F325_1_unhinted_0.woff2') format('woff2'),
          url('/static/fonts/38F325_1_unhinted_0.woff') format('woff'),
          url('/static/fonts/38F325_1_unhinted_0.ttf') format('truetype');
        font-display: swap;
      }
      @font-face {
        font-family: Code-Pro-LC;
        font-weight: bold;
        src: url('/static/fonts/38F325_0_unhinted_0.woff2') format('woff2'),
          url('/static/fonts/38F325_0_unhinted_0.woff') format('woff'),
          url('/static/fonts/38F325_0_unhinted_0.ttf') format('truetype');
        font-display: swap;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        padding: 0;
        font-family: Code-Pro-LC, Helvetica, Arial, sans-serif;
        background-color: ${colors.offblack};
        color: white;
        overflow-x: hidden;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      h1 {
        font-size: 28px;
        font-weight: normal;
        margin: 0 0 35px;

        @media (${mq('md')}) {
          font-size: 42px;
        }
      }

      h2 {
        font-size: 22px;
        font-weight: bold;
        margin: 0 0 18px 0;

        @media (${mq('md')}) {
          font-size: 26px;
        }
      }

      h3 {
        font-size: 26px;
        margin: 0 0 18px 0;
      }

      p {
        font-size: 15px;
        line-height: 1.44;
        letter-spacing: -0.1px;
        margin: 0 0 1em;

        @media (${mq('md')}) {
          font-size: 18px;
          letter-spacing: -0.2px;
        }
      }
    `}</style>
  </main>
)

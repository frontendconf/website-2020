export default ({ children }) => (
  <div>
    {children}

    <style jsx global>{`
      .jobs,
      .news-summary,
      .venue-teaser,
      .sponsors,
      .hotels,
      .restaurants {
        margin-top: 80px;
        margin-bottom: 80px;
      }
      @media (min-width: 500px) {
        .jobs,
        .news-summary,
        .venue-teaser,
        .sponsors,
        .hotels,
        .restaurants {
          margin-top: 120px;
          margin-bottom: 120px;
        }
      }
      @media (min-width: 992px) {
        .jobs,
        .news-summary,
        .venue-teaser,
        .sponsors,
        .hotels,
        .restaurants {
          margin-top: 150px;
          margin-bottom: 150px;
        }
      }
      @media (min-width: 1200px) {
        .jobs,
        .news-summary,
        .venue-teaser,
        .sponsors,
        .hotels,
        .restaurants {
          margin-top: 200px;
          margin-bottom: 200px;
        }
      }
      @media (min-width: 1500px) {
        .jobs,
        .news-summary,
        .venue-teaser,
        .sponsors,
        .hotels,
        .restaurants {
          margin-top: 220px;
          margin-bottom: 240px;
        }
      }
      .social-menu__list,
      .socials__list {
        padding: 0;
        margin: 0;
        list-style-type: none;
      }
      .newsletter__label {
        position: absolute;
        left: -10000px;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
      }
      .markdown-wrapper--list h2,
      .jobs__title,
      .news-summary__title,
      .speakers-list__title,
      .venue-teaser__title,
      .sponsors__title,
      .hotels__title,
      .restaurants__title {
        background-image: linear-gradient(
          to right,
          rgba(255, 255, 255, 0.7),
          #00fff8
        );
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        display: inline-block;
        font-size: 28px;
        margin: 0 0 1em;
        font-weight: normal;
      }
      .markdown-wrapper--list h2 *::-ms-backdrop,
      .jobs__title *::-ms-backdrop,
      .news-summary__title *::-ms-backdrop,
      .speakers-list__title *::-ms-backdrop,
      .venue-teaser__title *::-ms-backdrop,
      .sponsors__title *::-ms-backdrop,
      .hotels__title *::-ms-backdrop,
      .restaurants__title *::-ms-backdrop,
      .markdown-wrapper--list h2,
      .jobs__title,
      .news-summary__title,
      .speakers-list__title,
      .venue-teaser__title,
      .sponsors__title,
      .hotels__title,
      .restaurants__title {
        color: #fff;
        background: none;
      }
      @media (min-width: 500px) {
        .markdown-wrapper--list h2,
        .jobs__title,
        .news-summary__title,
        .speakers-list__title,
        .venue-teaser__title,
        .sponsors__title,
        .hotels__title,
        .restaurants__title {
          font-size: 33px;
        }
      }
      @media (min-width: 992px) {
        .markdown-wrapper--list h2,
        .jobs__title,
        .news-summary__title,
        .speakers-list__title,
        .venue-teaser__title,
        .sponsors__title,
        .hotels__title,
        .restaurants__title {
          font-size: 38px;
        }
      }
      @media (min-width: 1200px) {
        .markdown-wrapper--list h2,
        .jobs__title,
        .news-summary__title,
        .speakers-list__title,
        .venue-teaser__title,
        .sponsors__title,
        .hotels__title,
        .restaurants__title {
          font-size: 46px;
        }
      }
      .jobs__col,
      .news-list__col,
      .news-summary__col {
        padding-bottom: 20px;
      }
      .jobs__link,
      .news-summary__link {
        position: relative;
        display: block;
        background: #1e1631;
        min-height: 120px;
        padding: 18px 18px;
        text-decoration: none;
        width: 100%;
      }
      .jobs__link::after,
      .news-summary__link::after {
        content: '';
        position: absolute;
        top: 2px;
        right: -3px;
        bottom: 2px;
        left: 5px;
        transform: rotate(-2deg);
        background-color: #00fff8;
        z-index: -1;
        transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
          transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      .jobs__link:hover::after,
      .news-summary__link:hover::after,
      .jobs__link:focus::after,
      .news-summary__link:focus::after {
        background-color: #ffda7e;
        transform: rotate(-4deg);
      }
      .jobs__link-title,
      .news-summary__link-title {
        background-image: linear-gradient(
          to right,
          rgba(255, 255, 255, 0.7),
          #00fff8
        );
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        display: inline-block;
        font-size: 20px;
        line-height: 1.1;
        margin-bottom: 9px;
      }
      .jobs__link-title *::-ms-backdrop,
      .news-summary__link-title *::-ms-backdrop,
      .jobs__link-title,
      .news-summary__link-title {
        color: #fff;
        background: none;
      }
      .jobs__link-company,
      .news-summary__link-date {
        font-size: 13px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #9b9ba3;
        text-transform: uppercase;
        display: block;
      }
      .speaker__image,
      .venue-teaser__image,
      .hotels__image,
      .restaurants__image {
        display: block;
        max-width: 100%;
        transform: rotate(-5deg);
      }
      .speaker__image-wrapper,
      .venue-teaser__image-wrapper,
      .hotels__image-wrapper,
      .restaurants__image-wrapper {
        background-image: linear-gradient(
          to right,
          rgba(255, 255, 255, 0.7),
          #00fff8
        );
        background-blend-mode: color;
      }
      .speaker__image,
      .venue-teaser__image,
      .hotels__image,
      .restaurants__image {
        filter: grayscale(100%);
        opacity: 0.9;
        transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1),
          transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
          filter 150ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      .speaker__link:hover .speaker__image,
      .speaker__link:focus .speaker__image,
      .venue-teaser__link:hover .venue-teaser__image,
      .venue-teaser__link:focus .venue-teaser__image,
      .hotels__link:hover .hotels__image,
      .hotels__link:focus .hotels__image,
      .restaurants__link:hover .restaurants__image,
      .restaurants__link:focus .restaurants__image {
        transform: rotate(0);
        filter: grayscale(0);
        opacity: 1;
      }
      @font-face {
        font-family: 'Code-Pro-LC';
        font-weight: 400;
        src: url('/static/fonts/38F325_1_unhinted_0.woff2') format('woff2'),
          url('/static/fonts/38F325_1_unhinted_0.woff') format('woff'),
          url('/static/fonts/38F325_1_unhinted_0.ttf') format('truetype');
        font-display: swap;
      }
      @font-face {
        font-family: 'Code-Pro-LC';
        font-weight: 700;
        src: url('/static/fonts/38F325_0_unhinted_0.woff2') format('woff2'),
          url('/static/fonts/38F325_0_unhinted_0.woff') format('woff'),
          url('/static/fonts/38F325_0_unhinted_0.ttf') format('truetype');
        font-display: swap;
      }
      * {
        box-sizing: border-box;
      }
      body {
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;
        font-family: 'Code-Pro-LC', Helvetica, Arial, sans-serif;
        background-color: #08031e;
        color: #fff;
        font-weight: 400;
        overflow-x: hidden;
      }
      h1,
      .content-title__title {
        font-size: 28px;
        font-weight: 400;
        margin: 0 0 35px;
      }
      @media (min-width: 768px) {
        h1,
        .content-title__title {
          font-size: 42px;
        }
      }
      h2 {
        font-size: 22px;
        font-weight: 700;
        margin: 0 0 18px 0;
      }
      @media (min-width: 768px) {
        h2 {
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
      }
      @media (min-width: 768px) {
        p {
          font-size: 18px;
          letter-spacing: -0.2px;
        }
      }
      .content__wrapper--white .markdown-wrapper h2 {
        color: #08031e;
      }
      .markdown-wrapper h3 {
        margin-top: 40px;
      }
      .markdown-wrapper a {
        color: #300888;
        text-decoration: none;
      }
      .markdown-wrapper a:hover {
        color: #280770;
        text-decoration: underline;
      }
      .markdown-wrapper img,
      .markdown-wrapper .video {
        margin: 50px 0;
      }
      .markdown-wrapper img {
        display: inline-block;
        max-width: 100%;
      }
      .markdown-wrapper ul {
        padding: 0;
        margin: 34px 0;
        list-style: none;
      }
      .markdown-wrapper li {
        position: relative;
        padding-left: 37px;
      }
      .markdown-wrapper li::before {
        content: '\\2022';
        position: absolute;
        left: 13px;
      }
      .markdown-wrapper li,
      .markdown-wrapper th,
      .markdown-wrapper td {
        font-size: 18px;
        margin-bottom: 1em;
      }
      .markdown-wrapper th,
      .markdown-wrapper td {
        margin-bottom: 0;
        padding-right: 1em;
        padding-bottom: 1em;
      }
      .markdown-wrapper > *:first-child,
      .markdown-wrapper > div > *:first-child {
        margin-top: 0 !important;
      }
      .markdown-wrapper--list h2 {
        margin-top: 70px;
      }
      @media (min-width: 768px) {
        .markdown-wrapper .board ul {
          display: flex;
          flex-wrap: wrap;
        }
        .markdown-wrapper .board li {
          flex: 0 0 50%;
        }
      }
      @media (min-width: 1200px) {
        .markdown-wrapper .board li {
          flex: 0 0 33.3333%;
        }
      }
      .container {
        max-width: 1680px;
        padding-right: 16px;
        padding-left: 16px;
        margin: 0 auto;
      }
      @media (min-width: 400px) {
        .container {
          padding-right: 32px;
          padding-left: 32px;
        }
      }
      @media (min-width: 768px) {
        .container {
          padding-right: 64px;
          padding-left: 64px;
        }
        .container--wide {
          padding-right: 32px;
          padding-left: 32px;
        }
      }
      @media (min-width: 1200px) {
        .container {
          padding-right: 120px;
          padding-left: 120px;
        }
        .container--wide {
          padding-right: 40px;
          padding-left: 40px;
        }
      }
      @media (min-width: 1500px) {
        .container {
          padding-right: 200px;
          padding-left: 200px;
        }
        .container--wide {
          padding-right: 56px;
          padding-left: 56px;
        }
      }
      .row {
        display: flex;
        flex-wrap: wrap;
      }
      @media (min-width: 0) {
        .row {
          margin-right: -5px;
          margin-left: -5px;
        }
      }
      @media (min-width: 500px) {
        .row {
          margin-right: -10px;
          margin-left: -10px;
        }
      }
      @media (min-width: 0) {
        .row--horizontal-gutters .col {
          padding-bottom: 10px;
        }
      }
      @media (min-width: 500px) {
        .row--horizontal-gutters .col {
          padding-bottom: 20px;
        }
      }
      .col {
        display: block;
        position: relative;
        min-height: 1px;
      }
      @media (min-width: 0) {
        .col {
          padding-right: 5px;
          padding-left: 5px;
        }
      }
      @media (min-width: 500px) {
        .col {
          padding-right: 10px;
          padding-left: 10px;
        }
      }
      .offset-xs-0 {
        margin-left: 0%;
      }
      .offset-right-xs-0 {
        margin-right: 0%;
      }
      .xs-1 {
        flex: 0 0 8.33333%;
        width: 8.33333%;
        max-width: 8.33333%;
      }
      .offset-xs-1 {
        margin-left: 8.33333%;
      }
      .offset-right-xs-1 {
        margin-right: 8.33333%;
      }
      .xs-2 {
        flex: 0 0 16.66667%;
        width: 16.66667%;
        max-width: 16.66667%;
      }
      .offset-xs-2 {
        margin-left: 16.66667%;
      }
      .offset-right-xs-2 {
        margin-right: 16.66667%;
      }
      .xs-3 {
        flex: 0 0 25%;
        width: 25%;
        max-width: 25%;
      }
      .offset-xs-3 {
        margin-left: 25%;
      }
      .offset-right-xs-3 {
        margin-right: 25%;
      }
      .xs-4 {
        flex: 0 0 33.33333%;
        width: 33.33333%;
        max-width: 33.33333%;
      }
      .offset-xs-4 {
        margin-left: 33.33333%;
      }
      .offset-right-xs-4 {
        margin-right: 33.33333%;
      }
      .xs-5 {
        flex: 0 0 41.66667%;
        width: 41.66667%;
        max-width: 41.66667%;
      }
      .offset-xs-5 {
        margin-left: 41.66667%;
      }
      .offset-right-xs-5 {
        margin-right: 41.66667%;
      }
      .xs-6 {
        flex: 0 0 50%;
        width: 50%;
        max-width: 50%;
      }
      .offset-xs-6 {
        margin-left: 50%;
      }
      .offset-right-xs-6 {
        margin-right: 50%;
      }
      .xs-7 {
        flex: 0 0 58.33333%;
        width: 58.33333%;
        max-width: 58.33333%;
      }
      .offset-xs-7 {
        margin-left: 58.33333%;
      }
      .offset-right-xs-7 {
        margin-right: 58.33333%;
      }
      .xs-8 {
        flex: 0 0 66.66667%;
        width: 66.66667%;
        max-width: 66.66667%;
      }
      .offset-xs-8 {
        margin-left: 66.66667%;
      }
      .offset-right-xs-8 {
        margin-right: 66.66667%;
      }
      .xs-9 {
        flex: 0 0 75%;
        width: 75%;
        max-width: 75%;
      }
      .offset-xs-9 {
        margin-left: 75%;
      }
      .offset-right-xs-9 {
        margin-right: 75%;
      }
      .xs-10 {
        flex: 0 0 83.33333%;
        width: 83.33333%;
        max-width: 83.33333%;
      }
      .offset-xs-10 {
        margin-left: 83.33333%;
      }
      .offset-right-xs-10 {
        margin-right: 83.33333%;
      }
      .xs-11 {
        flex: 0 0 91.66667%;
        width: 91.66667%;
        max-width: 91.66667%;
      }
      .offset-xs-11 {
        margin-left: 91.66667%;
      }
      .offset-right-xs-11 {
        margin-right: 91.66667%;
      }
      .xs-12 {
        flex: 0 0 100%;
        width: 100%;
        max-width: 100%;
      }
      .offset-xs-12 {
        margin-left: 100%;
      }
      .offset-right-xs-12 {
        margin-right: 100%;
      }
      @media (min-width: 400px) {
        .offset-sm-0 {
          margin-left: 0%;
        }
        .offset-right-sm-0 {
          margin-right: 0%;
        }
        .sm-1 {
          flex: 0 0 8.33333%;
          width: 8.33333%;
          max-width: 8.33333%;
        }
        .offset-sm-1 {
          margin-left: 8.33333%;
        }
        .offset-right-sm-1 {
          margin-right: 8.33333%;
        }
        .sm-2 {
          flex: 0 0 16.66667%;
          width: 16.66667%;
          max-width: 16.66667%;
        }
        .offset-sm-2 {
          margin-left: 16.66667%;
        }
        .offset-right-sm-2 {
          margin-right: 16.66667%;
        }
        .sm-3 {
          flex: 0 0 25%;
          width: 25%;
          max-width: 25%;
        }
        .offset-sm-3 {
          margin-left: 25%;
        }
        .offset-right-sm-3 {
          margin-right: 25%;
        }
        .sm-4 {
          flex: 0 0 33.33333%;
          width: 33.33333%;
          max-width: 33.33333%;
        }
        .offset-sm-4 {
          margin-left: 33.33333%;
        }
        .offset-right-sm-4 {
          margin-right: 33.33333%;
        }
        .sm-5 {
          flex: 0 0 41.66667%;
          width: 41.66667%;
          max-width: 41.66667%;
        }
        .offset-sm-5 {
          margin-left: 41.66667%;
        }
        .offset-right-sm-5 {
          margin-right: 41.66667%;
        }
        .sm-6 {
          flex: 0 0 50%;
          width: 50%;
          max-width: 50%;
        }
        .offset-sm-6 {
          margin-left: 50%;
        }
        .offset-right-sm-6 {
          margin-right: 50%;
        }
        .sm-7 {
          flex: 0 0 58.33333%;
          width: 58.33333%;
          max-width: 58.33333%;
        }
        .offset-sm-7 {
          margin-left: 58.33333%;
        }
        .offset-right-sm-7 {
          margin-right: 58.33333%;
        }
        .sm-8 {
          flex: 0 0 66.66667%;
          width: 66.66667%;
          max-width: 66.66667%;
        }
        .offset-sm-8 {
          margin-left: 66.66667%;
        }
        .offset-right-sm-8 {
          margin-right: 66.66667%;
        }
        .sm-9 {
          flex: 0 0 75%;
          width: 75%;
          max-width: 75%;
        }
        .offset-sm-9 {
          margin-left: 75%;
        }
        .offset-right-sm-9 {
          margin-right: 75%;
        }
        .sm-10 {
          flex: 0 0 83.33333%;
          width: 83.33333%;
          max-width: 83.33333%;
        }
        .offset-sm-10 {
          margin-left: 83.33333%;
        }
        .offset-right-sm-10 {
          margin-right: 83.33333%;
        }
        .sm-11 {
          flex: 0 0 91.66667%;
          width: 91.66667%;
          max-width: 91.66667%;
        }
        .offset-sm-11 {
          margin-left: 91.66667%;
        }
        .offset-right-sm-11 {
          margin-right: 91.66667%;
        }
        .sm-12 {
          flex: 0 0 100%;
          width: 100%;
          max-width: 100%;
        }
        .offset-sm-12 {
          margin-left: 100%;
        }
        .offset-right-sm-12 {
          margin-right: 100%;
        }
      }
      @media (min-width: 500px) {
        .offset-rg-0 {
          margin-left: 0%;
        }
        .offset-right-rg-0 {
          margin-right: 0%;
        }
        .rg-1 {
          flex: 0 0 8.33333%;
          width: 8.33333%;
          max-width: 8.33333%;
        }
        .offset-rg-1 {
          margin-left: 8.33333%;
        }
        .offset-right-rg-1 {
          margin-right: 8.33333%;
        }
        .rg-2 {
          flex: 0 0 16.66667%;
          width: 16.66667%;
          max-width: 16.66667%;
        }
        .offset-rg-2 {
          margin-left: 16.66667%;
        }
        .offset-right-rg-2 {
          margin-right: 16.66667%;
        }
        .rg-3 {
          flex: 0 0 25%;
          width: 25%;
          max-width: 25%;
        }
        .offset-rg-3 {
          margin-left: 25%;
        }
        .offset-right-rg-3 {
          margin-right: 25%;
        }
        .rg-4 {
          flex: 0 0 33.33333%;
          width: 33.33333%;
          max-width: 33.33333%;
        }
        .offset-rg-4 {
          margin-left: 33.33333%;
        }
        .offset-right-rg-4 {
          margin-right: 33.33333%;
        }
        .rg-5 {
          flex: 0 0 41.66667%;
          width: 41.66667%;
          max-width: 41.66667%;
        }
        .offset-rg-5 {
          margin-left: 41.66667%;
        }
        .offset-right-rg-5 {
          margin-right: 41.66667%;
        }
        .rg-6 {
          flex: 0 0 50%;
          width: 50%;
          max-width: 50%;
        }
        .offset-rg-6 {
          margin-left: 50%;
        }
        .offset-right-rg-6 {
          margin-right: 50%;
        }
        .rg-7 {
          flex: 0 0 58.33333%;
          width: 58.33333%;
          max-width: 58.33333%;
        }
        .offset-rg-7 {
          margin-left: 58.33333%;
        }
        .offset-right-rg-7 {
          margin-right: 58.33333%;
        }
        .rg-8 {
          flex: 0 0 66.66667%;
          width: 66.66667%;
          max-width: 66.66667%;
        }
        .offset-rg-8 {
          margin-left: 66.66667%;
        }
        .offset-right-rg-8 {
          margin-right: 66.66667%;
        }
        .rg-9 {
          flex: 0 0 75%;
          width: 75%;
          max-width: 75%;
        }
        .offset-rg-9 {
          margin-left: 75%;
        }
        .offset-right-rg-9 {
          margin-right: 75%;
        }
        .rg-10 {
          flex: 0 0 83.33333%;
          width: 83.33333%;
          max-width: 83.33333%;
        }
        .offset-rg-10 {
          margin-left: 83.33333%;
        }
        .offset-right-rg-10 {
          margin-right: 83.33333%;
        }
        .rg-11 {
          flex: 0 0 91.66667%;
          width: 91.66667%;
          max-width: 91.66667%;
        }
        .offset-rg-11 {
          margin-left: 91.66667%;
        }
        .offset-right-rg-11 {
          margin-right: 91.66667%;
        }
        .rg-12 {
          flex: 0 0 100%;
          width: 100%;
          max-width: 100%;
        }
        .offset-rg-12 {
          margin-left: 100%;
        }
        .offset-right-rg-12 {
          margin-right: 100%;
        }
      }
      @media (min-width: 768px) {
        .offset-md-0 {
          margin-left: 0%;
        }
        .offset-right-md-0 {
          margin-right: 0%;
        }
        .md-1 {
          flex: 0 0 8.33333%;
          width: 8.33333%;
          max-width: 8.33333%;
        }
        .offset-md-1 {
          margin-left: 8.33333%;
        }
        .offset-right-md-1 {
          margin-right: 8.33333%;
        }
        .md-2 {
          flex: 0 0 16.66667%;
          width: 16.66667%;
          max-width: 16.66667%;
        }
        .offset-md-2 {
          margin-left: 16.66667%;
        }
        .offset-right-md-2 {
          margin-right: 16.66667%;
        }
        .md-3 {
          flex: 0 0 25%;
          width: 25%;
          max-width: 25%;
        }
        .offset-md-3 {
          margin-left: 25%;
        }
        .offset-right-md-3 {
          margin-right: 25%;
        }
        .md-4 {
          flex: 0 0 33.33333%;
          width: 33.33333%;
          max-width: 33.33333%;
        }
        .offset-md-4 {
          margin-left: 33.33333%;
        }
        .offset-right-md-4 {
          margin-right: 33.33333%;
        }
        .md-5 {
          flex: 0 0 41.66667%;
          width: 41.66667%;
          max-width: 41.66667%;
        }
        .offset-md-5 {
          margin-left: 41.66667%;
        }
        .offset-right-md-5 {
          margin-right: 41.66667%;
        }
        .md-6 {
          flex: 0 0 50%;
          width: 50%;
          max-width: 50%;
        }
        .offset-md-6 {
          margin-left: 50%;
        }
        .offset-right-md-6 {
          margin-right: 50%;
        }
        .md-7 {
          flex: 0 0 58.33333%;
          width: 58.33333%;
          max-width: 58.33333%;
        }
        .offset-md-7 {
          margin-left: 58.33333%;
        }
        .offset-right-md-7 {
          margin-right: 58.33333%;
        }
        .md-8 {
          flex: 0 0 66.66667%;
          width: 66.66667%;
          max-width: 66.66667%;
        }
        .offset-md-8 {
          margin-left: 66.66667%;
        }
        .offset-right-md-8 {
          margin-right: 66.66667%;
        }
        .md-9 {
          flex: 0 0 75%;
          width: 75%;
          max-width: 75%;
        }
        .offset-md-9 {
          margin-left: 75%;
        }
        .offset-right-md-9 {
          margin-right: 75%;
        }
        .md-10 {
          flex: 0 0 83.33333%;
          width: 83.33333%;
          max-width: 83.33333%;
        }
        .offset-md-10 {
          margin-left: 83.33333%;
        }
        .offset-right-md-10 {
          margin-right: 83.33333%;
        }
        .md-11 {
          flex: 0 0 91.66667%;
          width: 91.66667%;
          max-width: 91.66667%;
        }
        .offset-md-11 {
          margin-left: 91.66667%;
        }
        .offset-right-md-11 {
          margin-right: 91.66667%;
        }
        .md-12 {
          flex: 0 0 100%;
          width: 100%;
          max-width: 100%;
        }
        .offset-md-12 {
          margin-left: 100%;
        }
        .offset-right-md-12 {
          margin-right: 100%;
        }
      }
      @media (min-width: 992px) {
        .offset-lg-0 {
          margin-left: 0%;
        }
        .offset-right-lg-0 {
          margin-right: 0%;
        }
        .lg-1 {
          flex: 0 0 8.33333%;
          width: 8.33333%;
          max-width: 8.33333%;
        }
        .offset-lg-1 {
          margin-left: 8.33333%;
        }
        .offset-right-lg-1 {
          margin-right: 8.33333%;
        }
        .lg-2 {
          flex: 0 0 16.66667%;
          width: 16.66667%;
          max-width: 16.66667%;
        }
        .offset-lg-2 {
          margin-left: 16.66667%;
        }
        .offset-right-lg-2 {
          margin-right: 16.66667%;
        }
        .lg-3 {
          flex: 0 0 25%;
          width: 25%;
          max-width: 25%;
        }
        .offset-lg-3 {
          margin-left: 25%;
        }
        .offset-right-lg-3 {
          margin-right: 25%;
        }
        .lg-4 {
          flex: 0 0 33.33333%;
          width: 33.33333%;
          max-width: 33.33333%;
        }
        .offset-lg-4 {
          margin-left: 33.33333%;
        }
        .offset-right-lg-4 {
          margin-right: 33.33333%;
        }
        .lg-5 {
          flex: 0 0 41.66667%;
          width: 41.66667%;
          max-width: 41.66667%;
        }
        .offset-lg-5 {
          margin-left: 41.66667%;
        }
        .offset-right-lg-5 {
          margin-right: 41.66667%;
        }
        .lg-6 {
          flex: 0 0 50%;
          width: 50%;
          max-width: 50%;
        }
        .offset-lg-6 {
          margin-left: 50%;
        }
        .offset-right-lg-6 {
          margin-right: 50%;
        }
        .lg-7 {
          flex: 0 0 58.33333%;
          width: 58.33333%;
          max-width: 58.33333%;
        }
        .offset-lg-7 {
          margin-left: 58.33333%;
        }
        .offset-right-lg-7 {
          margin-right: 58.33333%;
        }
        .lg-8 {
          flex: 0 0 66.66667%;
          width: 66.66667%;
          max-width: 66.66667%;
        }
        .offset-lg-8 {
          margin-left: 66.66667%;
        }
        .offset-right-lg-8 {
          margin-right: 66.66667%;
        }
        .lg-9 {
          flex: 0 0 75%;
          width: 75%;
          max-width: 75%;
        }
        .offset-lg-9 {
          margin-left: 75%;
        }
        .offset-right-lg-9 {
          margin-right: 75%;
        }
        .lg-10 {
          flex: 0 0 83.33333%;
          width: 83.33333%;
          max-width: 83.33333%;
        }
        .offset-lg-10 {
          margin-left: 83.33333%;
        }
        .offset-right-lg-10 {
          margin-right: 83.33333%;
        }
        .lg-11 {
          flex: 0 0 91.66667%;
          width: 91.66667%;
          max-width: 91.66667%;
        }
        .offset-lg-11 {
          margin-left: 91.66667%;
        }
        .offset-right-lg-11 {
          margin-right: 91.66667%;
        }
        .lg-12 {
          flex: 0 0 100%;
          width: 100%;
          max-width: 100%;
        }
        .offset-lg-12 {
          margin-left: 100%;
        }
        .offset-right-lg-12 {
          margin-right: 100%;
        }
      }
      @media (min-width: 1200px) {
        .offset-xl-0 {
          margin-left: 0%;
        }
        .offset-right-xl-0 {
          margin-right: 0%;
        }
        .xl-1 {
          flex: 0 0 8.33333%;
          width: 8.33333%;
          max-width: 8.33333%;
        }
        .offset-xl-1 {
          margin-left: 8.33333%;
        }
        .offset-right-xl-1 {
          margin-right: 8.33333%;
        }
        .xl-2 {
          flex: 0 0 16.66667%;
          width: 16.66667%;
          max-width: 16.66667%;
        }
        .offset-xl-2 {
          margin-left: 16.66667%;
        }
        .offset-right-xl-2 {
          margin-right: 16.66667%;
        }
        .xl-3 {
          flex: 0 0 25%;
          width: 25%;
          max-width: 25%;
        }
        .offset-xl-3 {
          margin-left: 25%;
        }
        .offset-right-xl-3 {
          margin-right: 25%;
        }
        .xl-4 {
          flex: 0 0 33.33333%;
          width: 33.33333%;
          max-width: 33.33333%;
        }
        .offset-xl-4 {
          margin-left: 33.33333%;
        }
        .offset-right-xl-4 {
          margin-right: 33.33333%;
        }
        .xl-5 {
          flex: 0 0 41.66667%;
          width: 41.66667%;
          max-width: 41.66667%;
        }
        .offset-xl-5 {
          margin-left: 41.66667%;
        }
        .offset-right-xl-5 {
          margin-right: 41.66667%;
        }
        .xl-6 {
          flex: 0 0 50%;
          width: 50%;
          max-width: 50%;
        }
        .offset-xl-6 {
          margin-left: 50%;
        }
        .offset-right-xl-6 {
          margin-right: 50%;
        }
        .xl-7 {
          flex: 0 0 58.33333%;
          width: 58.33333%;
          max-width: 58.33333%;
        }
        .offset-xl-7 {
          margin-left: 58.33333%;
        }
        .offset-right-xl-7 {
          margin-right: 58.33333%;
        }
        .xl-8 {
          flex: 0 0 66.66667%;
          width: 66.66667%;
          max-width: 66.66667%;
        }
        .offset-xl-8 {
          margin-left: 66.66667%;
        }
        .offset-right-xl-8 {
          margin-right: 66.66667%;
        }
        .xl-9 {
          flex: 0 0 75%;
          width: 75%;
          max-width: 75%;
        }
        .offset-xl-9 {
          margin-left: 75%;
        }
        .offset-right-xl-9 {
          margin-right: 75%;
        }
        .xl-10 {
          flex: 0 0 83.33333%;
          width: 83.33333%;
          max-width: 83.33333%;
        }
        .offset-xl-10 {
          margin-left: 83.33333%;
        }
        .offset-right-xl-10 {
          margin-right: 83.33333%;
        }
        .xl-11 {
          flex: 0 0 91.66667%;
          width: 91.66667%;
          max-width: 91.66667%;
        }
        .offset-xl-11 {
          margin-left: 91.66667%;
        }
        .offset-right-xl-11 {
          margin-right: 91.66667%;
        }
        .xl-12 {
          flex: 0 0 100%;
          width: 100%;
          max-width: 100%;
        }
        .offset-xl-12 {
          margin-left: 100%;
        }
        .offset-right-xl-12 {
          margin-right: 100%;
        }
      }
      @media (min-width: 1500px) {
        .offset-xxl-0 {
          margin-left: 0%;
        }
        .offset-right-xxl-0 {
          margin-right: 0%;
        }
        .xxl-1 {
          flex: 0 0 8.33333%;
          width: 8.33333%;
          max-width: 8.33333%;
        }
        .offset-xxl-1 {
          margin-left: 8.33333%;
        }
        .offset-right-xxl-1 {
          margin-right: 8.33333%;
        }
        .xxl-2 {
          flex: 0 0 16.66667%;
          width: 16.66667%;
          max-width: 16.66667%;
        }
        .offset-xxl-2 {
          margin-left: 16.66667%;
        }
        .offset-right-xxl-2 {
          margin-right: 16.66667%;
        }
        .xxl-3 {
          flex: 0 0 25%;
          width: 25%;
          max-width: 25%;
        }
        .offset-xxl-3 {
          margin-left: 25%;
        }
        .offset-right-xxl-3 {
          margin-right: 25%;
        }
        .xxl-4 {
          flex: 0 0 33.33333%;
          width: 33.33333%;
          max-width: 33.33333%;
        }
        .offset-xxl-4 {
          margin-left: 33.33333%;
        }
        .offset-right-xxl-4 {
          margin-right: 33.33333%;
        }
        .xxl-5 {
          flex: 0 0 41.66667%;
          width: 41.66667%;
          max-width: 41.66667%;
        }
        .offset-xxl-5 {
          margin-left: 41.66667%;
        }
        .offset-right-xxl-5 {
          margin-right: 41.66667%;
        }
        .xxl-6 {
          flex: 0 0 50%;
          width: 50%;
          max-width: 50%;
        }
        .offset-xxl-6 {
          margin-left: 50%;
        }
        .offset-right-xxl-6 {
          margin-right: 50%;
        }
        .xxl-7 {
          flex: 0 0 58.33333%;
          width: 58.33333%;
          max-width: 58.33333%;
        }
        .offset-xxl-7 {
          margin-left: 58.33333%;
        }
        .offset-right-xxl-7 {
          margin-right: 58.33333%;
        }
        .xxl-8 {
          flex: 0 0 66.66667%;
          width: 66.66667%;
          max-width: 66.66667%;
        }
        .offset-xxl-8 {
          margin-left: 66.66667%;
        }
        .offset-right-xxl-8 {
          margin-right: 66.66667%;
        }
        .xxl-9 {
          flex: 0 0 75%;
          width: 75%;
          max-width: 75%;
        }
        .offset-xxl-9 {
          margin-left: 75%;
        }
        .offset-right-xxl-9 {
          margin-right: 75%;
        }
        .xxl-10 {
          flex: 0 0 83.33333%;
          width: 83.33333%;
          max-width: 83.33333%;
        }
        .offset-xxl-10 {
          margin-left: 83.33333%;
        }
        .offset-right-xxl-10 {
          margin-right: 83.33333%;
        }
        .xxl-11 {
          flex: 0 0 91.66667%;
          width: 91.66667%;
          max-width: 91.66667%;
        }
        .offset-xxl-11 {
          margin-left: 91.66667%;
        }
        .offset-right-xxl-11 {
          margin-right: 91.66667%;
        }
        .xxl-12 {
          flex: 0 0 100%;
          width: 100%;
          max-width: 100%;
        }
        .offset-xxl-12 {
          margin-left: 100%;
        }
        .offset-right-xxl-12 {
          margin-right: 100%;
        }
      }
      .image {
        display: block;
        width: 100%;
        padding-top: 134.4827586207%;
        overflow: hidden;
        position: relative;
        z-index: 1;
      }
      .image__loader {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
      }
      .image__image {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 2;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: opacity 200ms cubic-bezier(0, 0, 0.2, 1);
      }
      .image__image.is-loaded {
        opacity: 1;
      }
      .content__wrapper {
        position: relative;
      }
      .content__wrapper--white {
        padding-bottom: 80px;
        background-color: white;
        color: #08031e;
      }
      .content__wrapper--dark {
        position: relative;
        background-color: #09001f;
      }
      .content__inner-wrapper {
        padding-top: 70px;
      }
      .content__inner-wrapper > *:first-child {
        margin-top: 0;
      }
      .content__inner-wrapper > *:last-child {
        margin-bottom: 0;
      }
      @media (min-width: 500px) {
        .content__wrapper--white {
          padding-bottom: 120px;
        }
        .content__inner-wrapper {
          padding-top: 110px;
        }
      }
      @media (min-width: 768px) {
        .content__wrapper--white {
          padding-bottom: 150px;
        }
        .content__floating-row {
          display: block;
        }
        .content__floating-row::after {
          content: '';
          clear: both;
          display: table;
        }
        .content__left {
          float: left;
        }
        .content__right {
          float: right;
        }
      }
      @media (min-width: 992px) {
        .content__white-wrapper {
          padding-bottom: 200px;
        }
      }
      .content::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        z-index: 1;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.5s 0.2s ease;
      }
      .content--loading::before {
        opacity: 1;
      }
      .content-title {
        margin: 0 0 35px;
      }
      .content-title__title {
        margin: 0;
      }
      .content-title__subtitle {
        margin: 5px 0 0;
        font-size: 15px;
        font-weight: 400;
        color: #b3b3bc;
      }
      @media (min-width: 768px) {
        .content-title {
          margin: 0 0 55px;
        }
        .content-title__subtitle {
          margin-top: 10px;
          font-size: 18px;
        }
      }
      @keyframes moveIn {
        0% {
          transform: translateX(100px);
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          transform: translateX(0px);
        }
      }
      @keyframes moveInReverse {
        0% {
          transform: translateX(-100px);
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          transform: translateX(0px);
        }
      }
      @keyframes moveOut {
        0% {
          transform: translateX(0);
          opacity: 1;
        }
        50% {
          opacity: 0.15;
        }
        100% {
          transform: translateX(-100px);
          opacity: 0;
        }
      }
      @keyframes moveOutReverse {
        0% {
          transform: translateX(0);
          opacity: 1;
        }
        50% {
          opacity: 0.15;
        }
        100% {
          transform: translateX(100px);
          opacity: 0;
        }
      }
      .hero {
        height: auto;
        padding: 90px 0 0;
        max-width: 100vw;
        overflow: hidden;
      }
      .hero__container {
        height: 100%;
      }
      .hero__row {
        height: 100%;
      }
      .hero__col {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
      }
      .hero__inner {
        display: block;
        padding-top: 30px;
        padding-bottom: 60px;
      }
      .hero__title-wrapper {
        position: relative;
      }
      .hero__title {
        background-image: linear-gradient(
          to right,
          rgba(255, 255, 255, 0.7),
          #00fff8
        );
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        font-weight: normal;
        letter-spacing: -0.05em;
        margin: 0 0 40px;
        animation: moveIn 250ms;
        font-size: 2.1875rem;
        line-height: 1.1;
      }
      .hero__title *::-ms-backdrop,
      .hero__title {
        color: #fff;
        background: none;
      }
      @media screen and (min-width: 320px) {
        .hero__title {
          font-size: calc(2.1875rem + 0.625 * ((100vw - 20rem) / 5));
        }
      }
      @media screen and (min-width: 400px) {
        .hero__title {
          font-size: calc(2.8125rem + 0.9375 * ((100vw - 25rem) / 6.25));
        }
      }
      @media screen and (min-width: 500px) {
        .hero__title {
          font-size: calc(3.75rem + 1.5625 * ((100vw - 31.25rem) / 16.75));
        }
      }
      @media screen and (min-width: 768px) {
        .hero__title {
          font-size: calc(5.3125rem + 0.625 * ((100vw - 48rem) / 14));
        }
      }
      @media screen and (min-width: 992px) {
        .hero__title {
          font-size: calc(5.9375rem + 1.5625 * ((100vw - 62rem) / 13));
        }
      }
      @media screen and (min-width: 1200px) {
        .hero__title {
          font-size: calc(7.5rem + 0.5 * ((100vw - 75rem) / 18.75));
        }
      }
      @media (min-width: 1500px) {
        .hero__title {
          font-size: 8rem;
        }
      }
      @media (min-width: 400px) {
        .hero__title {
          line-height: 1;
        }
      }
      .hero__title--in-reverse {
        animation: moveInReverse 250ms;
      }
      .hero__title--out {
        position: absolute;
        left: 0;
        top: 0;
        animation: moveOut 500ms;
      }
      .hero__title--out-reverse {
        animation: moveOutReverse 500ms;
      }
      .hero__lead {
        opacity: 0.6;
        font-size: 18px;
        line-height: 1.67;
      }
      .hero__ctas-wrapper {
        padding-bottom: 30px;
      }
      .hero__cta {
        background-image: linear-gradient(
          to right,
          rgba(255, 255, 255, 0.7),
          #00fff8
        );
        position: relative;
        display: block;
        font-size: 13px;
        text-align: center;
        color: #09001f;
        padding: 13px 15px 11px;
        border-radius: 100px;
        text-transform: uppercase;
        line-height: 1.1;
        border: 0 none;
        text-decoration: none;
        cursor: pointer;
        font-size: 13px;
        padding: 13px 15px 11px;
        display: inline-block;
        margin-bottom: 10px;
      }
      .hero__cta::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: #ffda7e;
        border-radius: 100px;
        z-index: -1;
        transform: rotate(0deg);
        opacity: 0;
        transform-origin: right top;
        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
          opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      .hero__cta:hover::before {
        transform: rotate(-2deg);
        opacity: 1;
      }
      @media (min-width: 768px) {
        .hero__cta {
          font-size: 15px;
          padding: 23px 30px 21px;
        }
      }
      .hero__cta:not(:last-child) {
        margin-right: 15px;
      }
      @media (min-width: 500px) {
        .hero {
          height: auto;
          padding: 130px 0 0;
        }
        .hero__ctas-wrapper {
          padding-bottom: 55px;
        }
      }
      @media (min-width: 768px) {
        .hero {
          padding: 150px 0 0;
          height: calc(100vh - 300px);
          min-height: 770px;
        }
        .hero__lead {
          font-size: 24px;
        }
        .hero__inner {
          padding-top: 70px;
        }
        .hero__title {
          margin: 0 0 76px;
        }
        .hero__ctas-wrapper {
          padding-bottom: 80px;
        }
        .hero__cta:not(:last-child) {
          margin-right: 25px;
        }
      }
      @media (min-width: 992px) {
        .hero {
          min-height: 1000px;
        }
        .hero__inner {
          padding-top: 110px;
        }
        .hero__title {
          margin: 0 0 76px;
        }
      }
      .hero--content {
        padding: 0;
        height: 88px;
        min-height: inherit;
      }
      .hero--content .hero__inner {
        display: none;
      }
      @media (min-width: 768px) {
        .hero--content {
          height: 128px;
        }
      }
      @media (min-width: 992px) {
        .hero--content {
          height: 150px;
        }
      }
      .content::before,
      .hero-bg {
        background: url('/static/images/bg_mobile.jpg') no-repeat top
          center/cover;
      }
      @media (min-width: 768px) {
        .content::before,
        .hero-bg {
          background: url('/static/images/bg_desktop.jpg') no-repeat top
            center/cover;
        }
      }
      .hero-bg {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 0;
      }
      .hero-bg__overlay {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #08031e;
        opacity: 0;
      }
      .hero-bg__image {
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        object-fit: cover;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }
      .hero-bg--content {
        position: absolute;
        padding: 0;
        height: 88px;
      }
      @media (min-width: 768px) {
        .hero-bg--content {
          height: 128px;
        }
      }
      @media (min-width: 992px) {
        .hero-bg--content {
          height: 150px;
        }
      }
      aside {
        padding: 1.5em;
        font-size: 14px;
        color: white;
        background-color: red;
      }
      .menu__list {
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
      }
      .menu__list-item {
        list-style: none;
        flex: 0 0 50%;
      }
      .menu__link {
        display: block;
        font-size: 12px;
        letter-spacing: 0.9px;
        text-align: center;
        color: #b3b3bc;
        text-transform: uppercase;
        text-decoration: none;
      }
      .menu--main .menu__link,
      .menu--social .menu__link {
        display: block;
        font-size: 14px;
        line-height: 1.1;
        letter-spacing: 1px;
        color: #b3b3bc;
        text-transform: uppercase;
        text-decoration: none;
        padding: 6px 0;
        text-align: left;
        transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      .menu--main .menu__link:hover,
      .menu--main .menu__link:focus,
      .menu--social .menu__link:hover,
      .menu--social .menu__link:focus {
        color: white;
      }
      .newsletter h3 {
        background-image: linear-gradient(
          to right,
          rgba(255, 255, 255, 0.7),
          #00fff8
        );
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        font-size: 20px;
        font-weight: normal;
        margin: 0 0 20px;
      }
      .newsletter h3 *::-ms-backdrop,
      .newsletter h3 {
        color: #fff;
        background: none;
      }
      .newsletter__form {
        position: relative;
      }
      .newsletter__input {
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 25px;
        height: 46px;
        padding: 0 90px 0 22px;
        border: 0;
        width: 100%;
        font-size: 16px;
        color: rgba(255, 255, 255, 0.5);
      }
      .newsletter__submit {
        background-image: linear-gradient(
          to right,
          rgba(255, 255, 255, 0.7),
          #00fff8
        );
        position: relative;
        display: block;
        font-size: 13px;
        text-align: center;
        color: #09001f;
        padding: 13px 15px 11px;
        border-radius: 100px;
        text-transform: uppercase;
        line-height: 1.1;
        border: 0 none;
        text-decoration: none;
        cursor: pointer;
        position: absolute;
        top: 4px;
        right: 4px;
        padding-left: 25px;
        padding-right: 25px;
      }
      .newsletter__submit::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: #ffda7e;
        border-radius: 100px;
        z-index: -1;
        transform: rotate(0deg);
        opacity: 0;
        transform-origin: right top;
        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
          opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      .newsletter__submit:hover::before {
        transform: rotate(-2deg);
        opacity: 1;
      }
      .social-menu {
        margin-top: 35px;
      }
      .social-menu__list-item {
        display: inline-flex;
        margin-right: 10px;
      }
      .footer {
        position: relative;
        padding: 35px 0;
        background-color: #1e1732;
        z-index: 2;
      }
      .footer__newsletter,
      .footer__ctas,
      .footer__menus {
        margin: 0 0 50px;
      }
      @media (min-width: 768px) {
        .footer {
          padding: 54px 0 50px;
        }
        .footer__ctas-col {
          order: 1;
        }
        .footer__menus-col {
          order: 2;
        }
        .footer__newsletter-col {
          order: 3;
        }
      }
      .ctas__link {
        background-image: linear-gradient(
          to right,
          rgba(255, 255, 255, 0.7),
          #00fff8
        );
        position: relative;
        display: block;
        font-size: 13px;
        text-align: center;
        color: #09001f;
        padding: 13px 15px 11px;
        border-radius: 100px;
        text-transform: uppercase;
        line-height: 1.1;
        border: 0 none;
        text-decoration: none;
        cursor: pointer;
      }
      .ctas__link::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: #ffda7e;
        border-radius: 100px;
        z-index: -1;
        transform: rotate(0deg);
        opacity: 0;
        transform-origin: right top;
        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
          opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      .ctas__link:hover::before {
        transform: rotate(-2deg);
        opacity: 1;
      }
      @media (min-width: 768px) {
        .ctas__link {
          margin-bottom: 10px;
        }
      }
      .copyright {
        display: flex;
        justify-content: space-between;
      }
      .copyright__text {
        font-size: 12px;
        letter-spacing: 0.9px;
        text-align: center;
        color: #b3b3bc;
        opacity: 0.5;
        margin: 0;
        text-transform: uppercase;
        line-height: 1.1;
      }
      @media (min-width: 768px) {
        .copyright {
          justify-content: center;
        }
        .copyright__text {
          margin-right: 40px;
        }
      }
      .header {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        padding: 18px 0;
        z-index: 2;
      }
      .header__col {
        position: static;
      }
      .header__inner {
        display: flex;
        align-items: center;
      }
      .header__flex-spacer {
        flex: 1 1 auto;
      }
      @media (min-width: 768px) {
        .header {
          padding: 32px 0;
        }
      }
      @media (min-width: 992px) {
        .header {
          padding: 44px 0;
        }
      }
      @media (max-width: 991.98px) {
        .no-js .header {
          position: relative;
        }
        .no-js .header__inner {
          flex-wrap: wrap;
        }
        .no-js .header .nav {
          position: static;
          transform: none;
          background: transparent;
          width: 100%;
          padding: 0;
          margin: 40px 0;
        }
        .no-js .header .burger {
          display: none;
        }
      }
      .home-link {
        display: flex;
        flex: 0 0 auto;
        text-decoration: none;
        position: relative;
        z-index: 2;
      }
      .home-link__image {
        height: 45px;
        width: 45px;
      }
      .home-link__text-wrap {
        padding-left: 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .home-link__slogan {
        background-image: linear-gradient(
          to right,
          rgba(255, 255, 255, 0.7),
          #00fff8
        );
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        text-transform: uppercase;
        font-size: 16px;
        line-height: 1;
        width: 105px;
        position: relative;
        top: 2px;
      }
      .home-link__slogan *::-ms-backdrop,
      .home-link__slogan {
        color: #fff;
        background: none;
      }
      .home-link__date {
        display: none;
        font-size: 12px;
        line-height: 1.2;
        letter-spacing: 0.5px;
        color: #fff;
        opacity: 0.8;
      }
      @media (min-width: 768px) {
        .home-link__image {
          height: 63px;
          width: 63px;
        }
        .home-link__text-wrap {
          padding: 7px 0 0 23px;
          justify-content: inherit;
        }
        .home-link__slogan {
          font-size: 20px;
          margin-bottom: 4px;
          width: auto;
          top: 0;
        }
        .home-link__date {
          display: block;
        }
      }
      .nav {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        z-index: 1;
        background-color: rgba(8, 3, 30, 0.95);
        padding: 124px 45px 62px 73px;
        transform: translateY(-100%);
        transition: transform 0.3s ease;
      }
      .nav.is-open {
        transform: translateY(0);
      }
      .nav__list {
        padding: 0;
        margin: 0;
      }
      .nav__list-item {
        display: block;
        list-style: none;
      }
      .nav__link {
        display: block;
        text-decoration: none;
        font-size: 20px;
        line-height: 2;
        color: #b3b3bc;
        text-transform: uppercase;
        transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      .nav__link:hover,
      .nav__link:focus,
      .nav__link.is-active {
        color: white;
      }
      @media (min-width: 400px) {
        .nav {
          padding-left: 89px;
        }
      }
      @media (min-width: 768px) {
        .nav {
          padding-top: 150px;
          padding-bottom: 80px;
          padding-left: 118px;
        }
      }
      @media (min-width: 992px) {
        .nav {
          position: static;
          flex: 0 0 auto;
          margin-right: 20px;
          padding: 0;
          background-color: transparent;
          transform: none;
        }
        .nav__list-item {
          display: inline-block;
          margin-right: 16px;
        }
        .nav__list-item:last-child {
          margin-right: 0;
        }
        .nav__link {
          font-size: 14px;
          line-height: 1;
          letter-spacing: 1px;
        }
      }
      @media (min-width: 1200px) {
        .nav {
          margin-right: 40px;
        }
        .nav__list-item {
          margin-right: 24px;
        }
      }
      .special-link {
        position: relative;
        z-index: 2;
        top: -1px;
        display: block;
        text-decoration: none;
        font-size: 13px;
        line-height: 1;
        text-align: center;
        color: #09001f;
        padding: 14px 20px 11px;
        border-radius: 100px;
        text-transform: uppercase;
      }
      .special-link__text {
        position: relative;
        z-index: 3;
      }
      .special-link::before,
      .special-link::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: 100px;
      }
      .special-link::before {
        background-color: #ffda7e;
        z-index: 2;
      }
      .special-link::after {
        background: #00fff8;
        z-index: 1;
        transform: rotate(0deg);
        opacity: 0;
        transform-origin: right top;
        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
          opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      .special-link:hover::after {
        transform: rotate(-2deg);
        opacity: 1;
      }
      @media (min-width: 1200px) {
        .special-link {
          padding: 14px 37px 11px;
        }
      }
      .burger {
        position: relative;
        z-index: 2;
        background-color: transparent;
        border-radius: 0;
        border: 0;
        color: white;
        padding: 0;
        margin-left: 16px;
      }
      @media (min-width: 500px) {
        .burger {
          margin-left: 30px;
        }
      }
      @media (min-width: 992px) {
        .burger {
          display: none;
        }
      }
      .jobs--detailed.jobs--detailed {
        margin-bottom: 50px;
      }
      @media (min-width: 992px) {
        .jobs--detailed.jobs--detailed {
          margin-bottom: 100px;
        }
      }
      .jobs__source {
        font-size: 13px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #9b9ba3;
        text-transform: uppercase;
        text-align: right;
        margin: 15px 0 0;
        width: 100%;
      }
      @media (min-width: 500px) {
        .jobs__source {
          margin-top: 20px;
        }
      }
      .jobs__source-link {
        flex: 1;
        display: inline-block;
        vertical-align: middle;
        margin-left: 16px;
        opacity: 0.4;
        transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      .jobs__source-link svg {
        fill: #fff;
        height: 24px;
      }
      .jobs__source-link:hover,
      .jobs__source-link:focus {
        opacity: 1;
      }
      .news-list {
        margin-top: 100px;
        margin-bottom: 100px;
      }
      .news-list__row + .news-list__row {
        margin-top: 70px;
      }
      .news-list__body {
        font-size: 18px;
        line-height: 1.44;
        letter-spacing: -0.2px;
      }
      .news-list__title {
        text-decoration: none;
        font-size: 26px;
        font-weight: bold;
        color: #300888;
      }
      .news-list__more {
        color: #300888;
        text-decoration: none;
        padding-left: 15px;
      }
      .news-list__more:hover {
        color: #280770;
        text-decoration: underline;
      }
      .news-list__meta {
        margin-top: 25px;
      }
      .news-list__date {
        font-size: 13px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #9b9ba3;
        text-transform: uppercase;
        margin-right: 25px;
      }
      .news-list__tags {
        font-size: 13px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #9b9ba3;
        text-transform: uppercase;
        display: inline-flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        color: #300888;
        max-width: 100%;
      }
      .news-list__tag-item {
        margin-right: 10px;
      }
      .speaker {
        display: block;
      }
      .speaker__link {
        display: block;
        text-decoration: none;
      }
      .speaker__image-wrapper {
        margin-bottom: 25px;
      }
      .speaker__name {
        background-image: linear-gradient(
          to right,
          rgba(255, 255, 255, 0.7),
          #00fff8
        );
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        font-size: 18px;
        line-height: 1;
        margin: 0 0 5px;
      }
      .speaker__name *::-ms-backdrop,
      .speaker__name {
        color: #fff;
        background: none;
      }
      .speaker__description {
        font-size: 11px;
        color: #b3b3bc;
        text-transform: uppercase;
        margin: 0;
      }
      @media (min-width: 500px) {
        .speaker__image-wrapper {
          margin-bottom: 50px;
        }
        .speaker__name {
          font-size: 28px;
          margin: 0 0 15px;
        }
        .speaker__description {
          font-size: 13px;
        }
      }
      .speakers-list {
        margin: 50px 0;
      }
      .speakers-list__col {
        display: flex;
        justify-content: center;
        margin-bottom: 45px;
      }
      .speakers-list__col:nth-child(2n + 1) .speakers-list__speaker {
        margin-right: 10px;
      }
      .speakers-list__col:nth-child(2n) .speakers-list__speaker {
        margin-left: 10px;
      }
      .speakers-list__title--hosts {
        margin-top: 50px;
      }
      .speakers-list__speaker {
        flex: 0 1 240px;
      }
      .speakers-list__link {
        background-image: linear-gradient(
          to right,
          rgba(255, 255, 255, 0.7),
          #00fff8
        );
        position: relative;
        display: block;
        font-size: 13px;
        text-align: center;
        color: #09001f;
        padding: 13px 15px 11px;
        border-radius: 100px;
        text-transform: uppercase;
        line-height: 1.1;
        border: 0 none;
        text-decoration: none;
        cursor: pointer;
        font-size: 13px;
        padding: 13px 15px 11px;
        display: inline-block;
        margin-top: 40px;
      }
      .speakers-list__link::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: #ffda7e;
        border-radius: 100px;
        z-index: -1;
        transform: rotate(0deg);
        opacity: 0;
        transform-origin: right top;
        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
          opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      .speakers-list__link:hover::before {
        transform: rotate(-2deg);
        opacity: 1;
      }
      @media (min-width: 768px) {
        .speakers-list__link {
          font-size: 15px;
          padding: 23px 30px 21px;
        }
      }
      @media (min-width: 400px) {
        .speakers-list__speaker {
          flex: 0 1 240px;
        }
        .speakers-list__col:nth-child(2n + 1) .speakers-list__speaker {
          margin-right: 15px;
        }
        .speakers-list__col:nth-child(2n) .speakers-list__speaker {
          margin-left: 15px;
        }
      }
      @media (min-width: 500px) {
        .speakers-list__speaker {
          flex: 0 1 240px;
        }
        .speakers-list__col:nth-child(2n + 1) .speakers-list__speaker {
          margin-right: 20px;
        }
        .speakers-list__col:nth-child(2n) .speakers-list__speaker {
          margin-left: 20px;
        }
      }
      @media (min-width: 768px) {
        .speakers-list__col {
          margin-bottom: 40px;
        }
        .speakers-list__col:nth-child(3n + 1) {
          margin-top: 70px;
        }
        .speakers-list__col:nth-child(3n + 2) {
          margin-top: 150px;
        }
        .speakers-list__col:nth-child(3n) {
          margin-top: 0;
        }
        .speakers-list__col:nth-child(2n + 1) .speakers-list__speaker {
          margin-right: 0;
        }
        .speakers-list__col:nth-child(2n) .speakers-list__speaker {
          margin-left: 0;
        }
        .speakers-list__title--hosts {
          margin-top: 100px;
        }
        .speakers-list__speaker {
          max-width: calc(100% - 40px);
          flex: 0 1 290px;
        }
      }
      .venue-teaser__map {
        position: relative;
        width: 100%;
        padding-top: 56%;
        margin-top: 70px;
      }
      .venue-teaser__map iframe {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
      .venue-teaser__link {
        display: block;
        text-decoration: none;
        font-size: 15px;
        line-height: 1.27;
        color: #b3b3bc;
        transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      .venue-teaser__link:hover,
      .venue-teaser__link:focus {
        color: #fff;
      }
      .venue-teaser__image-wrapper {
        margin-bottom: 25px;
      }
      .venue-teaser__image {
        padding-top: 100%;
      }
      .venue-teaser--is-venue .venue-teaser__title {
        color: #08031e;
      }
      .backlink {
        padding: 25px 0 30px;
      }
      .backlink__link {
        display: inline-flex;
        color: #08031e;
        text-decoration: none;
        align-items: center;
      }
      .backlink__link:hover .backlink__icon,
      .backlink__link:focus .backlink__icon {
        transform: translateX(-4px);
      }
      .backlink__icon-wrapper {
        display: flex;
        height: 45px;
        width: 45px;
        border-radius: 100px;
        margin-right: 14px;
        background-color: #08031e;
        align-items: center;
        justify-content: center;
      }
      .backlink__icon {
        flex: 0 0 auto;
        color: #fff;
        transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      .backlink__icon svg,
      .backlink__icon {
        height: 14px;
        width: 10px;
      }
      .backlink__text-wrapper {
        font-size: 16px;
        line-height: 1.44;
        letter-spacing: -0.1px;
      }
      @media (min-width: 768px) {
        .backlink {
          padding: 45px 0 50px;
        }
        .backlink__icon-wrapper {
          height: 63px;
          width: 63px;
          margin-right: 22px;
        }
        .backlink__text-wrapper {
          font-size: 18px;
          letter-spacing: -0.2px;
        }
      }
      @media (min-width: 992px) {
        .backlink {
          padding: 65px 0 70px;
        }
      }
      .socials__list {
        display: flex;
      }
      .socials__list-item:not(:last-child) {
        margin-right: 18px;
      }
      .socials__link {
        display: block;
        color: #08031e;
        transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      .socials__link svg {
        display: block;
        height: 34px;
        width: 34px;
      }
      .socials__link:hover,
      .socials__link:focus {
        opacity: 0.5;
      }
      @media (max-width: 767.98px) {
        .socials--mobile-vertical .socials__list {
          display: block;
        }
        .socials--mobile-vertical .socials__list-item:not(:last-child) {
          margin-bottom: 10px;
        }
      }
      .sponsor--logo {
        display: flex;
        background-color: rgba(255, 255, 255, 0.05);
        padding: 10px;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        border-top: 0;
        padding: 10%;
      }
      .sponsor--logo .sponsor__svg {
        fill: #fff;
        opacity: 0.8;
        transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      .sponsor--logo:hover .sponsor__svg,
      .sponsor--logo:focus .sponsor__svg {
        opacity: 1;
      }
      .sponsor:not(.sponsor--logo) {
        background: #fff;
        color: #08031e;
        border-top: 1px solid #9b9ba3;
        padding-top: 72px;
        padding-bottom: 56px;
      }
      .sponsor:not(.sponsor--logo) .sponsor__logo {
        max-width: 80%;
      }
      .sponsor:not(.sponsor--logo) .sponsor__img {
        display: block;
        width: 100%;
        height: auto;
      }
      .sponsor:not(.sponsor--logo) .sponsor__svg {
        fill: #08031e;
      }
      @media (max-width: 767.98px) {
        .sponsor:not(.sponsor--logo) {
          padding-top: 30px;
          padding-bottom: 30px;
        }
        .sponsor:not(.sponsor--logo) .sponsor__logo {
          margin-bottom: 40px;
        }
      }
      .sponsor__logo {
        display: flex;
        flex-direction: column;
      }
      .sponsor__svg {
        display: inline-flex;
        flex-direction: column;
      }
      .sponsor__svg svg {
        width: 100%;
      }
      .sponsor__img {
        max-width: 100%;
      }
      .sponsor__title {
        font-size: 26px;
        font-weight: bold;
        margin-bottom: 20px;
        margin-top: 0;
      }
      .sponsor__links {
        margin-top: 33px;
      }
      .sponsor-category {
        margin: 0 0 35px;
        flex: 1;
      }
      @media (min-width: 768px) {
        .sponsor-category {
          margin: 0 0 90px;
        }
      }
      .sponsor-category h3 {
        background-image: linear-gradient(
          to right,
          rgba(255, 255, 255, 0.7),
          #00fff8
        );
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        font-weight: 400;
        margin: 0 0 30px;
        font-size: 22px;
        text-transform: uppercase;
      }
      .sponsor-category h3 *::-ms-backdrop,
      .sponsor-category h3 {
        color: #fff;
        background: none;
      }
      @media (min-width: 500px) {
        .sponsor-category h3 {
          font-size: 28px;
        }
      }
      .sponsor-category--detail h3 {
        color: #08031e;
      }
      .sponsor-category__item {
        display: flex;
      }
      .sponsors--detail {
        margin-top: 25px;
      }
      .hotels__title {
        color: #08031e;
      }
      .hotels__list {
        margin: 50px 0 0;
      }
      .hotels__link {
        display: block;
        text-decoration: none;
        font-size: 15px;
        line-height: 1.27;
        color: #300888;
        transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);
        margin: 0 0 50px;
      }
      .hotels__link:hover,
      .hotels__link:focus {
        color: #280770;
      }
      .hotels__image-wrapper {
        margin-bottom: 25px;
      }
      .hotels__image {
        padding-top: 75%;
      }
      .hotels__name {
        font-size: 26px;
        margin: 0 0 15px;
      }
      .hotels__description {
        color: #08031e;
      }
      .restaurants__title {
        color: #08031e;
      }
      .restaurants__list {
        margin: 50px 0 0;
      }
      .restaurants__link {
        display: block;
        text-decoration: none;
        font-size: 15px;
        line-height: 1.27;
        color: #300888;
        transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);
        margin: 0 0 50px;
      }
      .restaurants__link:hover,
      .restaurants__link:focus {
        color: #280770;
      }
      .restaurants__image-wrapper {
        margin-bottom: 25px;
      }
      .restaurants__image {
        padding-top: 75%;
      }
      .restaurants__name {
        font-size: 26px;
        margin: 0 0 15px;
      }
      .restaurants__description {
        color: #08031e;
      }
      .video {
        height: 0;
        padding-bottom: 56.25%;
        position: relative;
      }
      .video iframe {
        width: 100%;
        height: 100%;
        position: absolute;
      }
      .board {
        display: block !important;
      }
      @media (max-width: 991.98px) {
        .board td {
          display: block;
          padding: 0;
        }
        .board td:last-child {
          margin-bottom: 1.4em;
        }
      }
      @media (min-width: 768px) {
        .board td {
          padding-right: 1.4em;
        }
      }
      #iubenda-cs-banner {
        bottom: 0px !important;
        left: 0px !important;
        position: fixed !important;
        width: 100% !important;
        z-index: 99999998 !important;
        background-color: black;
      }
      .iubenda-cs-content {
        display: block;
        margin: 0 auto;
        padding: 20px;
        width: auto;
        font-family: Helvetica, Arial, FreeSans, sans-serif;
        font-size: 14px;
        background: #000;
        color: #fff;
      }
      .iubenda-cs-rationale {
        max-width: 900px;
        position: relative;
        margin: 0 auto;
      }
      .iubenda-banner-content > p {
        font-family: Helvetica, Arial, FreeSans, sans-serif;
        line-height: 1.5;
      }
      .iubenda-cs-close-btn {
        margin: 0;
        color: #fff;
        text-decoration: none;
        font-size: 14px;
        position: absolute;
        top: 0;
        right: 0;
        border: none;
      }
      .iubenda-cs-cookie-policy-lnk {
        text-decoration: underline;
        color: #fff;
        font-size: 14px;
        font-weight: 900;
      }
      .iubenda-cs-rationale {
        max-width: none;
      }
      .iubenda-banner-content {
        margin-right: 2rem;
      }
      .iubenda-banner-content p {
        margin: 0;
      }
      .iubenda-banner-content p:first-child {
        font-weight: bold;
      }
      .iubenda-cs-cookie-policy-lnk {
        font-size: 1em;
      }
      .iubenda-cs-close-btn {
        line-height: 1;
      }
      @media (min-width: 768px) {
        .workshops.workshops {
          margin-top: -200px;
        }
      }
      .workshops__item {
        display: block;
        flex: 1;
        text-decoration: none;
        color: inherit;
        margin-bottom: 100px;
      }
      .workshops__item-image {
        padding-top: 56.54952%;
        margin-bottom: 40px;
      }
      .workshops__item-title {
        margin-bottom: 5px;
        color: #300888;
      }
      .workshops__item-details {
        font-size: 13px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #9b9ba3;
        text-transform: uppercase;
      }
      .workshop__teacher-name {
        font-weight: normal;
        margin-bottom: 10px;
      }
      .workshop__teacher-description {
        font-size: 13px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #9b9ba3;
        text-transform: uppercase;
        margin-bottom: 20px;
      }
      .talks {
        margin-bottom: 35px;
      }
      .content__wrapper--schedule {
        position: relative;
      }
      .content__wrapper--schedule::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        width: 100%;
        height: 82px;
        background: #1e1732;
      }
      .content__wrapper--schedule .content__inner-wrapper {
        padding-top: 0;
      }
      .schedule__tablist {
        background: #1e1732;
        display: flex;
        margin: 0 -21px 30px;
      }
      .schedule__tablist-item {
        font-size: 19px;
        background: none;
        border: none;
        color: #9b9ba3;
        -webkit-appearance: none;
        -moz-appearance: none;
        padding: 30px 10px;
        text-align: center;
        flex: 1;
        cursor: pointer;
      }
      .schedule__tablist-item[aria-selected='true'] {
        background: #09001f;
        color: #00fff8;
      }
      .schedule__legend {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        font-size: 13px;
      }
      .schedule__legend-item::before {
        content: '';
        display: inline-block;
        width: 18px;
        height: 18px;
        border-radius: 100%;
        margin-right: 10px;
        position: relative;
        top: 4px;
      }
      .schedule__legend-item--Folium::before {
        background: #00fff8;
      }
      .schedule__legend-item--Papiersaal::before {
        background: #ffda7e;
      }
      .schedule__legend-item + .schedule__legend-item {
        margin-left: 33px;
      }
      .schedule__tabpanels {
        margin-top: 40px;
      }
      .schedule__day + .schedule__day {
        margin-top: 80px;
      }
      .schedule__slots {
        border-collapse: collapse;
      }
      .schedule__slot {
        display: flex;
        flex-wrap: wrap;
      }
      .schedule__slot + .schedule__slot {
        border-top: 1px solid #2e2740;
      }
      .schedule__slot-time {
        color: #9b9ba3;
        font-weight: normal;
        font-size: 16px;
        padding: 20px 23px 20px 0;
        vertical-align: top;
        width: 70px;
      }
      .schedule__slot-talk {
        vertical-align: top;
        width: 50%;
        color: #9b9ba3;
        font-size: 14px;
        flex: 1;
      }
      .schedule__slot-talk + .schedule__slot-talk {
        flex-basis: 100%;
        padding-left: 70px;
      }
      .schedule__slot-talk + .schedule__slot-talk .schedule__item {
        padding-top: 0;
      }
      .schedule__item {
        display: flex;
        align-items: flex-start;
        color: inherit;
        text-decoration: none;
        padding: 20px 0;
      }
      .schedule__item-photo {
        width: 60px;
        height: 60px;
        padding: 0;
        flex-shrink: 0;
        margin-right: 14px;
      }
      .schedule__item-title {
        display: block;
        font-size: 16px;
        color: #fff;
      }
      .schedule__item-title--talk {
        font-weight: 700;
        margin-bottom: 3px;
      }
      .schedule__item-title--custom {
        font-weight: 700;
        text-decoration: none;
      }
      .schedule__item-title--Folium {
        color: #00fff8;
      }
      .schedule__item-title--Papiersaal {
        color: #ffda7e;
      }
      .schedule__item-talk {
        display: block;
      }
      .schedule__item-talk--talk {
        color: #9b9ba3;
      }
      .schedule__item-room {
        color: #9b9ba3;
        font-size: 13px;
        margin-left: auto;
      }
      .schedule__item-room--Folium,
      .schedule__item-room--Papiersaal {
        display: none;
      }
      @media (min-width: 400px) {
        .schedule__tablist {
          margin-left: -37px;
          margin-right: -37px;
        }
      }
      @media (min-width: 768px) {
        .schedule__tablist {
          margin-left: -69px;
          margin-right: -69px;
        }
      }
      @media (min-width: 992px) {
        .content__wrapper--schedule::before {
          height: 108px;
        }
        .schedule__tabs {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
        }
        .schedule__tablist {
          margin: 0;
        }
        .schedule__tablist-item {
          font-size: 24px;
          padding: 40px;
          white-space: nowrap;
        }
        .schedule__legend {
          font-size: 16px;
          text-align: right;
          justify-content: flex-end;
          margin-left: auto;
        }
        .schedule__legend-item::before {
          content: '';
          display: inline-block;
          width: 24px;
          height: 24px;
          margin-right: 14px;
          top: 6px;
        }
        .schedule__legend-item + .schedule__legend-item {
          margin-left: 40px;
        }
        .schedule__tabpanels {
          margin-top: 50px;
          width: 100%;
        }
        .schedule__slot {
          display: table-row;
        }
        .schedule__slot-time {
          padding: 40px 110px 40px 0;
          font-size: 18px;
          width: auto;
        }
        .schedule__slot-talk {
          padding-right: 55px;
        }
        .schedule__slot-talk + .schedule__slot-talk {
          padding-left: 55px;
          padding-right: 0;
        }
        .schedule__slot-talk + .schedule__slot-talk .schedule__item {
          padding-top: 40px;
        }
        .schedule__slot-talk:first-of-type:last-of-type {
          padding-right: 0;
        }
        .schedule__item {
          padding: 40px 0;
          align-items: center;
        }
        .schedule__item-photo {
          margin-right: 18px;
        }
        .schedule__item-title {
          font-size: 24px;
        }
        .schedule__item-title--talk {
          font-size: 28px;
        }
        .schedule__item-talk {
          font-size: 16px;
        }
        .schedule__item-room {
          font-size: 18px;
        }
      }
      .form fieldset {
        border: 0;
        margin: 0 0 3em 0;
        padding: 0;
      }
      .form fieldset[disabled] {
        opacity: 0.5;
        cursor: wait;
      }
      .form legend {
        padding: 0;
        font-size: 22px;
        font-weight: 700;
        margin: 0 0 18px 0;
      }
      .form dl {
        margin-top: 2em;
      }
      .form dd {
        margin-left: 0;
        margin-bottom: 2em;
      }
      .form label {
        font-weight: 700;
        display: block;
        margin-bottom: 0.5em;
      }
      .form input[type='text'],
      .form input[type='email'],
      .form textarea,
      .form select {
        display: block;
        border: 1px solid rgba(30, 23, 50, 0.5);
        padding: 1em;
        width: 100%;
        font: inherit;
      }
      .form select {
        height: 3em;
      }
      .form textarea {
        height: 10em;
      }
      .form__message {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 2em;
      }
      .form__message--error {
        color: #c30;
      }
      .form__message--error a {
        color: inherit;
      }
      .form__field-description {
        margin-top: 1em;
      }
      .form button {
        background-image: linear-gradient(
          to right,
          rgba(255, 255, 255, 0.7),
          #00fff8
        );
        position: relative;
        display: block;
        font-size: 13px;
        text-align: center;
        color: #09001f;
        padding: 13px 15px 11px;
        border-radius: 100px;
        text-transform: uppercase;
        line-height: 1.1;
        border: 0 none;
        text-decoration: none;
        cursor: pointer;
        font-size: 13px;
        padding: 13px 15px 11px;
        display: inline-block;
      }
      .form button::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: #ffda7e;
        border-radius: 100px;
        z-index: -1;
        transform: rotate(0deg);
        opacity: 0;
        transform-origin: right top;
        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
          opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      .form button:hover::before {
        transform: rotate(-2deg);
        opacity: 1;
      }
      @media (min-width: 768px) {
        .form button {
          font-size: 15px;
          padding: 23px 30px 21px;
        }
      }
      .call-for-speakers {
        margin-top: 2em;
      }
      .no-js .js-only {
        display: none;
      }
      .no-js-only {
        display: none;
      }
      .no-js .no-js-only {
        display: block;
      }
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translate3d(0, 70px, 0);
        }
        to {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }
      .fadeInUp {
        animation-name: fadeInUp;
      }
      .animated {
        animation-duration: 1s;
        animation-fill-mode: both;
        display: flex;
        flex: 0 0 100%;
      }
      .no-js .animated {
        opacity: 1 !important;
      }
      .animated.infinite {
        animation-iteration-count: infinite;
      }
      @media (print), (prefers-reduced-motion) {
        .animated {
          animation: unset !important;
          transition: none !important;
        }
      }
      .visuallyhidden {
        position: absolute;
        left: -10000px;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
      }
    `}</style>
  </div>
)

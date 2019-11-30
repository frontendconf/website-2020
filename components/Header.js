import { useState } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import ErrorMessage from './ErrorMessage'
import { renderRichText } from '../lib/contentful'
import { mqs, colors, transition, textGradient } from '../lib/styles'

export const HEADER_QUERY = gql`
  query header {
    configNewCollection {
      items {
        logoTitle
        logoText {
          json
        }
        menuCollection(limit: 20) {
          items {
            ... on Page {
              title
              slug
              sys {
                id
              }
            }
          }
        }
        menuCtaCollection(limit: 10) {
          items {
            ... on Page {
              title
              slug
              sys {
                id
              }
            }
          }
        }
      }
    }
  }
`

const Header = ({ router: { query } }) => {
  const { loading, error, data } = useQuery(HEADER_QUERY)

  if (error) return <ErrorMessage message="Error loading header" />
  if (loading) return <div>Loading</div>

  const {
    configNewCollection: {
      items: [
        {
          logoTitle,
          logoText: { json: logoText },
          menuCollection: { items: menuItems },
          menuCtaCollection: { items: menuCtaItems },
        },
      ],
    },
  } = data

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = (options = {}) => {
    const newState = options.keepOpen
      ? true
      : options.keepClosed
      ? false
      : !isMobileMenuOpen

    setIsMobileMenuOpen(newState)
  }

  return (
    <header className="header">
      <div>
        <div>
          <div className={'header__col xs-12'}>
            <div className="header__inner">
              <Link href="/" as="/">
                <a className={`logo ${!query.slug ? 'is-active' : ''}`}>
                  <img src="/static/logo.svg" />
                  <div>
                    <span className="title">{logoTitle}</span>
                    <span className="text">{renderRichText(logoText)}</span>
                  </div>
                </a>
              </Link>
              <div className="header__flex-spacer" />
              <nav
                className={`nav ${isMobileMenuOpen ? 'is-open' : ''}`}
                onFocus={() => toggleMobileMenu({ keepOpen: true })}
                onBlur={() => toggleMobileMenu({ keepClosed: true })}
              >
                <ul>
                  {menuItems.map(item => (
                    <li key={item.sys.id}>
                      <Link
                        href={{
                          pathname: '/',
                          query: { slug: item.slug },
                        }}
                        as={`/${item.slug}`}
                      >
                        <a
                          className={
                            query.slug === item.slug ? 'is-active' : ''
                          }
                        >
                          {item.title}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              {menuCtaItems.map(item => (
                <Link
                  href={{
                    pathname: '/',
                    query: { slug: item.slug },
                  }}
                  as={`/${item.slug}`}
                  key={item.sys.id}
                >
                  <a className="cta">
                    <span>{item.title}</span>
                  </a>
                </Link>
              ))}
              <button
                onClick={() => toggleMobileMenu()}
                className="burger"
                tabIndex="-1"
              >
                <svg
                  className="burger__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                >
                  <path
                    fill="currentColor"
                    d="M1.217 2.613c-.331 0-.623-.147-.86-.383-.239-.235-.342-.585-.356-.923C-.011.983.147.61.357.384A1.21 1.21 0 0 1 1.217 0h.025c.201-.002.404 0 .607 0H16.783c.329 0 .623.148.86.383.239.235.342.585.356.923.012.324-.146.696-.356.923a1.21 1.21 0 0 1-.86.383h-.025c-.201.002-.404 0-.607 0H1.217zm0 5.692c-.331 0-.623-.148-.86-.383C.118 7.687.015 7.337.001 7c-.012-.324.146-.696.356-.923a1.21 1.21 0 0 1 .86-.383h.02c.466-.007.932 0 1.398 0H12.73c.33 0 .623.148.86.383.24.235.342.585.357.923.012.324-.146.697-.357.923a1.21 1.21 0 0 1-.86.383h-.02c-.466.007-.932 0-1.398 0H1.217zm0 5.693c-.331 0-.623-.148-.86-.383-.239-.235-.342-.585-.356-.923-.012-.324.146-.697.356-.923a1.21 1.21 0 0 1 .86-.383h.012c.303-.004.605 0 .91 0h6.536c.329 0 .623.148.86.383.239.235.342.585.356.923.012.324-.146.697-.356.923a1.21 1.21 0 0 1-.86.383h-.012c-.303.004-.605 0-.91 0H1.218z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        ${mqs()};

        .header {
          background: ${colors['dark-blue']};
          /* position: absolute; */
          top: 0;
          right: 0;
          left: 0;
          padding: 18px 0;
          z-index: 2;

          @media (--md) {
            padding: 32px 0;
          }

          @media (--lg) {
            padding: 44px 0;
          }
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

        .logo {
          display: flex;
          flex: 0 0 auto;
          text-decoration: none;
          position: relative;
          z-index: 2;

          & img {
            height: 45px;
            width: 45px;
          }

          & div {
            padding-left: 12px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          & .title {
            ${textGradient()}
            text-transform: uppercase;
            font-size: 16px;
            line-height: 1;
            width: 105px;
            position: relative;
            top: 2px;
          }

          & .text {
            display: none;
            font-size: 12px;
            line-height: 1.2;
            letter-spacing: 0.5px;
            color: white;
            opacity: 0.8;
          }

          @media (--md) {
            & img {
              height: 63px;
              width: 63px;
            }

            & div {
              padding: 7px 0 0 23px;
              justify-content: inherit;
            }

            & .title {
              font-size: 20px;
              margin-bottom: 4px;
              width: auto;
              top: 0;
            }

            & .text {
              display: block;
            }
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

          &.is-open {
            transform: translateY(0);
          }

          & ul {
            padding: 0;
            margin: 0;
          }

          & li {
            display: block;
            list-style: none;
          }

          & a {
            display: block;
            text-decoration: none;
            font-size: 20px;
            line-height: 2;
            color: ${colors.bombay};
            text-transform: uppercase;
            transition: color ${transition.time} ${transition.easing};
          }

          & a:hover,
          & a:focus,
          & a.is-active {
            color: white;
          }

          @media (--sm) {
            padding-left: 89px;
          }

          @media (--md) {
            padding-top: 150px;
            padding-bottom: 80px;
            padding-left: 118px;
          }

          @media (--lg) {
            position: static;
            flex: 0 0 auto;
            margin-right: 20px;
            padding: 0;
            background-color: transparent;
            transform: none;

            & li {
              display: inline-block;
              margin-right: 16px;

              &:last-child {
                margin-right: 0;
              }
            }

            & a {
              font-size: 14px;
              line-height: 1;
              letter-spacing: 1px;
            }
          }

          @media (--xl) {
            margin-right: 40px;

            & li {
              margin-right: 24px;
            }
          }
        }

        .cta {
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

          & span {
            position: relative;
            z-index: 3;
          }

          &::before,
          &::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            border-radius: 100px;
          }

          &::before {
            background-color: ${colors.secondary};
            z-index: 2;
          }

          &::after {
            background: ${colors.primary};
            z-index: 1;
            transform: rotate(0deg);
            opacity: 0;
            transform-origin: right top;
            transition: transform ${transition.time} ${transition.easing},
              opacity ${transition.time} ${transition.easing};
          }

          &:hover::after {
            transform: rotate(-2deg);
            opacity: 1;
          }

          @media (--xl) {
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

          @media (--rg) {
            margin-left: 30px;
          }

          @media (--lg) {
            display: none;
          }
        }
      `}</style>
    </header>
  )
}

export default withRouter(Header)

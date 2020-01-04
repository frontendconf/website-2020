import { useState } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import ErrorMessage from './ErrorMessage'
import { renderRichText } from '../lib/contentful'

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
      <div className="container container--wide">
        <div className="row">
          <div className="col header__col xs-12">
            <div className="header__inner">
              <Link href="/" as="/">
                <a className={`home-link ${!query.slug ? 'is-active' : ''}`}>
                  <img className="home-link__image" src="/static/logo.svg" />
                  <div className="home-link__text-wrap">
                    <span className="home-link__slogan">{logoTitle}</span>
                    <span className="home-link__date">
                      {renderRichText(logoText)}
                    </span>
                  </div>
                </a>
              </Link>
              <div className="header__flex-spacer" />
              <nav
                className={`nav ${isMobileMenuOpen ? 'is-open' : ''}`}
                onFocus={() => toggleMobileMenu({ keepOpen: true })}
                onBlur={() => toggleMobileMenu({ keepClosed: true })}
              >
                <ul className="nav__list">
                  {menuItems.map(item => (
                    <li className="nav__list-item" key={item.sys.id}>
                      <Link
                        href={{
                          pathname: '/',
                          query: { slug: item.slug },
                        }}
                        as={`/${item.slug}`}
                      >
                        <a
                          className={`nav__link ${
                            query.slug === item.slug ? 'is-active' : ''
                          }`}
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
                  <a className="special-link">
                    <span className="special-link__text">{item.title}</span>
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
      <style jsx>{``}</style>
    </header>
  )
}

export default withRouter(Header)

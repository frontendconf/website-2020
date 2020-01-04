import Link from 'next/link'
import { withRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import ErrorMessage from './ErrorMessage'
import config from '../config'

export const FOOTER_QUERY = gql`
  query footer {
    configNewCollection {
      items {
        footerNewsletterTitle
        footerNewsletterField
        footerNewsletterButton
        footerCopyright
        footerSocialMediaCollection(limit: 10) {
          items {
            title
            link
            iconCharacter
          }
        }
        footerCtaCollection(limit: 10) {
          items {
            title
            slug
            sys {
              id
            }
          }
        }
        footerMenuCollection(limit: 20) {
          items {
            title
            slug
            sys {
              id
            }
          }
        }
        footerMenuMetaCollection(limit: 10) {
          items {
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
`

function FooterMenu(props) {
  return (
    <div className={`menu menu--${props.id}`}>
      <ul className="menu__list">
        {props.items.map((item, i) => {
          const id = item.sys ? item.sys.id : i

          return item.slug ? (
            <li className="menu__list-item" key={id}>
              <Link
                href={{ pathname: '/', query: { slug: item.slug } }}
                as={`/${item.slug}`}
              >
                <a className="menu__link">{item.title}</a>
              </Link>
            </li>
          ) : (
            <li key={id}>
              <a href={item.link}>
                {item.logo ? (
                  <img src={item.logo.url} alt={item.title} />
                ) : (
                  item.title
                )}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const Footer = () => {
  const { loading, error, data } = useQuery(FOOTER_QUERY)

  if (error) return <ErrorMessage message="Error loading footer" />
  if (loading) return <div>Loading</div>

  const {
    configNewCollection: {
      items: [
        {
          footerNewsletterTitle: newsletterTitle,
          footerNewsletterField: newsletterField,
          footerNewsletterButton: newsletterButton,
          footerCopyright: copyright,
          footerSocialMediaCollection: { items: socialMediaItems },
          footerCtaCollection: { items: ctaItems },
          footerMenuCollection: { items: menuItems },
          footerMenuMetaCollection: { items: menuMetaItems },
        },
      ],
    },
  } = data

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col xs-12">
            <div className="row">
              <div className="col footer__newsletter-col xs-12 md-5 lg-3">
                <div className="footer__newsletter">
                  <div className="newsletter">
                    <h3>{newsletterTitle}</h3>
                    <form
                      className="newsletter__form"
                      action={config.newsletter}
                      method="POST"
                      target="_blank"
                    >
                      <label>
                        <span className="newsletter__label">
                          {newsletterField}
                        </span>
                        <input
                          className="newsletter__input"
                          name="EMAIL"
                          type="email"
                          placeholder={newsletterField}
                        />
                      </label>
                      <button type="submit" className="newsletter__submit">
                        {newsletterButton}
                      </button>
                    </form>
                  </div>
                  {/* <SocialIcons id="social" items={socialMediaItems} /> */}
                </div>
              </div>
              <div className="col footer__ctas-col xs-12 md-12 lg-2">
                <div className="footer__ctas ctas">
                  <div className="row">
                    {ctaItems.map(item => (
                      <div className="col xs-6 md-4 lg-12" key={item.slug}>
                        <Link
                          href={{
                            pathname: '/',
                            query: { slug: item.slug },
                          }}
                          as={`/${item.slug}`}
                        >
                          <a className="ctas__link">{item.title}</a>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col footer__menus-col xs-12 md-7 lg-6 offset-lg-1">
                <div className="footer__menus">
                  <FooterMenu id="main" items={menuItems} />
                </div>
              </div>
            </div>

            <div className="copyright">
              <p className="copyright__text">{copyright}</p>

              <FooterMenu id="meta" items={menuMetaItems} />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </footer>
  )
}

export default withRouter(Footer)

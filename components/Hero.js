import Link from 'next/link'

const Hero = props => (
  <div className={props.template ? `hero hero--${props.template}` : 'hero'}>
    <div className="container hero__container">
      <div className="row hero__container">
        <div className="col hero__col xs-12 md-11 lg-10 xxl-9">
          <div className="hero__inner">
            <div className="hero__title-wrapper">
              <h1 className="hero__title">{props.title}</h1>
            </div>
            {props.subTitle ? (
              <h2 className="hero__subtitle">{props.subTitle}</h2>
            ) : null}
            {props.lead ? <p className="hero__lead">{props.lead}</p> : null}
          </div>

          {props.ctas && (
            <div className="hero__ctas-wrapper">
              <div className="hero__ctas">
                {props.ctas.map((cta, i) => {
                  return (
                    <Link
                      href={{ pathname: '/', query: { slug: cta.slug } }}
                      as={`/${cta.slug}`}
                      key={i}
                    >
                      <a className="hero__cta">{cta.ctaText}</a>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
)

export default Hero

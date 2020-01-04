import { withRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import ErrorMessage from './ErrorMessage'
import Hero from './Hero'

export const CONTENT_QUERY = gql`
  query($slug: String!) {
    collection: pageCollection(where: { slug: $slug }) {
      items {
        title
        lead
        body
      }
    }
  }
`

const Content = ({ router: { query } }) => {
  const { loading, error, data } = useQuery(CONTENT_QUERY, {
    variables: { slug: query.slug || '/' },
  })

  if (error) return <ErrorMessage message="Error loading content" />
  if (loading) return <div>Loading</div>

  const {
    collection: {
      items: [page],
    },
  } = data

  console.log(page)

  return (
    <main className="content">
      <Hero title={page.title} lead={page.lead} />
      <div className="content__wrapper content__wrapper--venue content__wrapper--white">
        <div className="container">
          <div className="row">
            <div className="col xs-12">
              <div className="content__inner-wrapper">
                <div className="row">
                  <div className="col xs-12 ">
                    <div className="markdown-wrapper markdown-wrapper--list">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: page.body,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </main>
  )
}

export default withRouter(Content)

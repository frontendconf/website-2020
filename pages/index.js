import App from '../components/App'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { withApollo } from '../lib/apollo'

const IndexPage = props => (
  <App>
    <Header />
    <Footer />
  </App>
)

export default withApollo(IndexPage)

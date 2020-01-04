import App from '../components/App'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import { withApollo } from '../lib/apollo'

const Page = () => (
  <App>
    <Header />
    <Content />
    <Footer />
  </App>
)

export default withApollo(Page)

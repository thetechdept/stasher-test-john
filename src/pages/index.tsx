import Layout from "../app/layout"
import Headline from "@/patterns/Headline"
import SearchForm from "@/patterns/SearchForm"

const Home = () => {
  return (
    <Layout>
      <Headline />
      <SearchForm />
    </Layout>
  )
}

export default Home
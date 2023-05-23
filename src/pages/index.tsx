import Box from "@/components/wrapper/Box"
import Layout from "../app/layout"
import Headline from "@/patterns/Headline"
import SearchForm from "@/patterns/SearchForm"
import Typography from "@/components/wrapper/Typography"
import theme from "@/theming/default"

const Home = () => {
  return (
    <Layout>
      <Headline />
      <Box maxWidth={600} margin={'0 auto'} p={4} textAlign="center">
        <Typography variant="h4" mb={2} color={theme.palette.grey[800]}>
          <mark>Stash.</mark>
          {' '}
          Your luggage now
        </Typography>
        <SearchForm />
      </Box>
    </Layout>
  )
}

export default Home
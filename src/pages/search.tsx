import Map from "@/patterns/StashpointsMap"
import Layout from "../app/layout"
import StashpointsDrawer from "@/patterns/StashpointsDrawer"

const Search = () => {
  return (
    <Layout>
      <StashpointsDrawer />
      <Map />
    </Layout>
  )
}

export default Search
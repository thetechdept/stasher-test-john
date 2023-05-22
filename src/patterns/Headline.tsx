import Box from "@/components/wrapper/Box"
import Typography from "@/components/wrapper/Typography"
import theme from "@/theming/default"

const Headline = () => {
  return (
    <Box minHeight={200} display="flex" alignItems="center" flexDirection="row" bgcolor={theme.palette.grey[100]}>
      <Box maxWidth={900} m={'0 auto'} textAlign={"center"} p={5}>
        <section>
          <Typography variant="h1" mb={6} color={theme.palette.grey[800]}>
            <mark>Luggage Storage.</mark>
            {' '}
            In trusted hotels and shops near you
          </Typography>
          <Typography variant="h4">3,000+ Stashpoints in more than 600 cities worldwide</Typography>
        </section>
      </Box>
    </Box>
  )
}

export default Headline
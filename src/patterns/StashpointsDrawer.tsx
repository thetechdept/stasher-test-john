import Drawer from "@mui/material/Drawer"
import Box from "@/components/wrapper/Box"
import theme from "@/theming/default"
import Typography from "@/components/wrapper/Typography"
import StashpointCard from "./StashpointCard"
import { useSelector } from "react-redux"
import { RootState } from "@/store"

const StashpointDrawer = () => {
  const {
    stashpoints
  } = useSelector((state: RootState) => state)

  if (stashpoints) {
    return(
      <Drawer
        open
        anchor="right"
        variant="permanent"
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 360, height: 'calc(100vh - 120px)', marginTop: 15},
        }}
      >
        <Box height={20} color={theme.palette.common.white} bgcolor={theme.palette.primary.light} p={2}>
          <Typography variant="h5">Stashpoints({stashpoints.items.length})</Typography>
        </Box>
        <Box sx={{overflow: 'auto', padding: 1}}>
        {
          stashpoints.items.map((i) => (<StashpointCard key={i.id} stashpoint={i} />))
        }
        </Box>
      </Drawer>
    )
  }
  return null
}

export default StashpointDrawer
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import router from 'next/router'
import _orderBy from 'lodash/orderBy'

import theme from "@/theming/default"

import Drawer from "@mui/material/Drawer"
import Box from "@/components/wrapper/Box"
import Typography from "@/components/wrapper/Typography"
import IconButton from "@/components/wrapper/IconButton"
import { ArrowBack, FilterList } from "@mui/icons-material"
import StashpointCard from "./StashpointCard"
import Filters from './Filters'

import { setDropOffDate, setDropOffTime, setPickUpDate, setPickUpTime, setPlace } from '@/apis/search/search-slice'
import { RootState } from "@/store"

/* =====================================================
Title: <StashpointDrawer />
Description: Pattern for displaying the list of stashpoints in a drawer
Usage:

```tsx
<StashpointDrawer />
```

===================================================== */

const StashpointDrawer = () => {
  const {
    stashpoints, search,
  } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()
  const [showFilters, setShowFilter] = useState(false)

  const onBack = () => {
    dispatch(setPlace({address: '', latitude: 0, longitude: 0}))
    dispatch(setDropOffDate(null))
    dispatch(setDropOffTime(null))
    dispatch(setPickUpDate(null))
    dispatch(setPickUpTime(null))
    router.push('/')
  }

  if (stashpoints) {
    const sortedItems = _orderBy(stashpoints.items, ['bagDay', 'rating', 'capacity'], ['asc', 'desc', 'desc'])
    return(
      <Drawer
        open
        anchor="right"
        variant="permanent"
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 400, height: 'calc(100vh - 120px)', marginTop: 15},
        }}
      >
        <Box
          height={32}
          color={theme.palette.common.white}
          bgcolor={theme.palette.primary.main} p={2}
          display="flex"
          alignItems="center"
          flexDirection="row"
        >
          <Box display="flex" alignItems="center" flexDirection="row" flex={1}>
            <IconButton sx={{ marginRight: 1}} onClick={onBack}>
              <ArrowBack />
            </IconButton>
            <Box>
              <Typography variant="h5">Stashpoints({stashpoints.items.length})</Typography>
              <Typography variant="caption">{search.selectedPlace.address || '---'}</Typography>
            </Box>
          </Box>
          <IconButton
            onClick={() => setShowFilter(!showFilters)}
          >
            <FilterList />
          </IconButton>
        </Box>
        {showFilters && <Filters expanded={showFilters}/>}
        <Box sx={{overflow: 'auto', padding: 1}}>
        {
          sortedItems.map((i) => (<StashpointCard key={i.id} stashpoint={i} />))
        }
        </Box>
      </Drawer>
    )
  }
  return null
}

export default StashpointDrawer
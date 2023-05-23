import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Chip from "@mui/material/Chip"
import Rating from "@mui/material/Rating"
import { IStashpoint } from "@/types"
import Typography from "@/components/wrapper/Typography"
import Box from "@/components/wrapper/Box"
import { Luggage, Place, PlaceOutlined } from "@mui/icons-material"
import theme from "@/theming/default"

/* =====================================================
Title: <Stashpoint />
Description: Pattern for displaying the stashpoint card
Usage:

```tsx
<Stashpoint stashpoint={stashpoint item} />
```

===================================================== */

interface IStashpointCardProps {
  stashpoint: IStashpoint
}

const StashpointCard = (props: IStashpointCardProps) => {
  const { stashpoint } = props
  return (
    <Card sx={{ marginBottom: 1 }} key={stashpoint.id}>
      <Box sx={{ display: 'flex', flexDirection: 'row'}}>
        <Box p={1}>
          <CardMedia
            sx={{ height: 100, width: 100, borderRadius: 1 }}
            image={stashpoint.photos[0]}
            title={stashpoint.name}
          />
        </Box>
        <CardContent >
          <Typography variant="body1" >{stashpoint.name}</Typography>
          <Box
            display="flex"
            flexDirection="row"
            py={0.5}
          >
            <PlaceOutlined sx={{color: theme.palette.grey[400]}}/>
            <Typography variant="caption" color="text.secondary">
              {stashpoint.address}
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            flexDirection="row"
            py={0.5}
          >
            <Luggage sx={{color: theme.palette.grey[400]}} />
            <Typography variant="caption" color="text.secondary"><b>{stashpoint.capacity}</b> available storage</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: "center", marginTop: 1}}>
            <Chip sx={{marginX: 0.5, borderRadius: '4px'}} size="small" label={stashpoint.type.toLocaleUpperCase()} color="primary" variant="outlined" />
            <Chip
              sx={{marginX: 0.5, borderRadius: '4px'}}
              size="small"
              label={stashpoint.open_late ? 'OPEN LATE' : stashpoint.open_twentyfour_seven ? '24/7' : 'UNAVAILABLE'}
              color={stashpoint.open_late ? 'success' : stashpoint.open_twentyfour_seven ? 'success' : 'error'}
              variant={stashpoint.open_late ? 'filled' : stashpoint.open_twentyfour_seven ? 'filled' : 'outlined'}
            />
          </Box>
        </CardContent>
      </Box>
      <CardActions sx={{borderTop: '1px solid #eee'}}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: "center", width: '100%'}}>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: "center", flex: 1}}>
            <Typography variant="body1" fontWeight={500}>
              {stashpoint.pricing_structure.ccy_symbol}{stashpoint.bagday_price}
            </Typography>
            <Typography variant="caption">&nbsp;bag/day</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: 'flex-end'}}>
            <Typography variant="body2">{stashpoint.rating}</Typography>
            <Rating size="small" value={stashpoint.rating} max={5} precision={0.5} readOnly/>
            <Typography variant="body2">({stashpoint.rating_count})</Typography>
          </Box>
        </Box>
      </CardActions>
    </Card>
  )
}

export default StashpointCard
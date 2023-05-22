import router from 'next/router'
import _isEmpty from 'lodash/isEmpty'
import { SearchBox } from "@/components/custom/PlaceAutoComplete";
import Grid from "@mui/material/Grid";
import Button from "@/components/wrapper/Button";
import TextField from "@/components/wrapper/TextField";
import Box from "@/components/wrapper/Box";
import Typography from "@/components/wrapper/Typography";
import theme from "@/theming/default";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setPlace, setBagCount, setDropOffDate, setDropOffTime, setPickUpDate, setPickUpTime } from "@/apis/search/search-slice";
import { useGetStashpointsMutation } from "@/apis/stashpoints/stashpoints-service";
import dayjs from 'dayjs';


export default function SearchForm() {
  const dispatch = useDispatch()
  const [fetchStashpoints] = useGetStashpointsMutation()
  const {
    selectedPlace, dropOffDate, dropOffTime, pickUpDate, pickUpTime, bagCount
  } = useSelector((state: RootState) => state.search)

  const handleSubmit = () => {
    const params = {
      capacity: bagCount,
      lat: selectedPlace.latitude,
      lng: selectedPlace.longitude,
      dropoff: dayjs(`${dayjs(dropOffDate).format('YYYY-MM-DD')}T${dayjs(dropOffTime).format('HH:mm')}`).toISOString(),
      pickup: dayjs(`${dayjs(pickUpDate).format('YYYY-MM-DD')}T${dayjs(pickUpTime).format('HH:mm')}`).toISOString(),
    }
    fetchStashpoints(params)
    router.push('/search')
  }

  return (
    <Box maxWidth={600} margin={'0 auto'} p={4}>
      <Grid container spacing={1.5} mb={6}>
        <Grid item xs={12} textAlign="center">
          <Typography variant="h4" mb={2} color={theme.palette.grey[800]}>
            <mark>Stash.</mark>
            {' '}
            Your luggage now
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <SearchBox
            onSelectAddress={(address, latitude, longitude) => dispatch(setPlace({ address: address, latitude: latitude, longitude: longitude }))}
            defaultValue=""
          />
        </Grid>
        <Grid item xs={6}>
          <DatePicker
            label="Drop Off Date"
            value={dropOffDate}
            onChange={(newValue) => dispatch(setDropOffDate(dayjs(newValue).toISOString()))}
            format='MMM DD YYYY'
          />
        </Grid>
        <Grid item xs={6}>
          <TimePicker
            minutesStep={60}
            label="Drop Off Time"
            value={dropOffTime}
            onChange={(newValue) => dispatch(setDropOffTime(dayjs(newValue).toISOString()))}
            format='hh:mm'
            ampm={false}
          />
        </Grid>
        <Grid item xs={6}>
          <DatePicker
            label="Pick Up Date"
            value={pickUpDate}
            onChange={(newValue) => dispatch(setPickUpDate(dayjs(newValue).toISOString()))}
            format='MMM DD YYYY'
          />
        </Grid>
        <Grid item xs={6}>
          <TimePicker
            label="Pick Up Time"
            value={pickUpTime}
            onChange={(newValue) => dispatch(setPickUpTime(dayjs(newValue).toISOString()))}
            format='hh:mm'
            ampm={false}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            InputProps={{ inputProps: {min: 1}}}
            type="number"
            label="Bags"
            value={bagCount}
            onChange={(e) => dispatch(setBagCount(e.target.value))}/>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            size="large"
            onClick={handleSubmit}
            disabled={_isEmpty(selectedPlace.address) || !dropOffDate || !dropOffTime || !pickUpDate || !pickUpTime} 
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
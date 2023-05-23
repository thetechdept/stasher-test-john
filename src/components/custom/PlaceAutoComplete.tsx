import { ChangeEvent } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { useGoogleMapsScript, Libraries } from "use-google-maps-script";
import AutoComplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

interface ISearchBoxProps {
  onSelectAddress: (
    address: string,
    latitude: number | null,
    longitude: number | null
  ) => void;
  defaultValue: string;
}

const libraries: Libraries = ["places"];

export function SearchBox({ onSelectAddress, defaultValue }: ISearchBoxProps) {
  const { isLoaded, loadError } = useGoogleMapsScript({
    googleMapsApiKey: "AIzaSyAVD73BLEtqODTIqADFBi_gPcQ3gkfrfX8",
    libraries,
  });

  if (!isLoaded) return null;
  if (loadError) return <div>Error loading</div>;

  return (
    <ReadySearchBox
      onSelectAddress={onSelectAddress}
      defaultValue={defaultValue}
    />
  );
}

function ReadySearchBox({ onSelectAddress, defaultValue }: ISearchBoxProps) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({ debounce: 300, defaultValue });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    setValue(value)
    if (e.target.toString() === "") {
      onSelectAddress("", null, null);
    }
  };

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const address = e.target.value
    setValue(address, false);
    clearSuggestions();

    const retrieveAddress = async (address: string) => {
      try {
        const results = await getGeocode({ address });
        const { lat, lng } = getLatLng(results[0]);

        onSelectAddress(address, lat, lng);
      } catch (error) {
        
      }
    }

    retrieveAddress(address)
  };

  console.log(data)
  return (
    <AutoComplete
      id="search"
      placeholder={defaultValue}
      onSelect={handleSelect}
      options={data.map(({ place_id, description }) => ({label: description, value: place_id}))}
      renderInput={(params) => <TextField {...params} label="Enter location" onChange={handleChange} />}
    />
  )
}
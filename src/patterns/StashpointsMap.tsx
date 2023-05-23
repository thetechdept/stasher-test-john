import { GoogleMap, Marker } from "@react-google-maps/api";
import { Libraries, useGoogleMapsScript } from "use-google-maps-script";

import { useSelector } from "react-redux";
import { RootState } from "@/store";

/* =====================================================
Title: <StashpointMap />
Description: Pattern for displaying Google map with mapped markers of stashpoints list
Usage:

```tsx
<StashpointMap />
```

===================================================== */

const libraries: Libraries = ["places"]

const Map = () => {
  const {
    stashpoints, search
  } = useSelector((state: RootState) => state)

  const { isLoaded, loadError } = useGoogleMapsScript({
    googleMapsApiKey: "<enter-api-key>",
    libraries,
  });

  if (stashpoints && isLoaded) {
    return (
      <GoogleMap
        zoom={12}
        center={{ lat: search.selectedPlace.latitude, lng: search.selectedPlace.longitude }}
        mapContainerClassName="map-container"
      >
        {
          stashpoints.items.map((stashpoint) => {
            return (<Marker key={stashpoint.id} position={{ lat: stashpoint.latitude, lng: stashpoint.longitude }} />)
          })
        }
      </GoogleMap>
    );
  }

  return null
}

export default Map
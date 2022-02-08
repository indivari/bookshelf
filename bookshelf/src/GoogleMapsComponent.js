import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "66vw",
  height: "85vh",
};

const center = {
  lat: -25.363,
  lng: 131.044,
};

function GoogleMapsComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAM0EpxhBTHgfutHud-t7rHWimU09T95ek">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(GoogleMapsComponent);

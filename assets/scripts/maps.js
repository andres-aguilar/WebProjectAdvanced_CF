function initMap() {
  let map = new google.maps.Map(document.querySelector("#mapa"), {
    zoom: 16,
    center: {
      lat: 19.074996,
      lng: -98.206573
    }
  });
}

initMap();

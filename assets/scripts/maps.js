function initMap() {
  const coords = {
    lat: 19.074996,
    lng: -98.206573
  };

  // Inicializado el mapa con las opciones basicas
  let map = new google.maps.Map(document.querySelector("#mapa"), {
    center: coords,
    zoom: 16,
  });

  // Ventana de informacion
  /*let infowindow = new google.maps.InfoWindow({
    content: "CAPU - Como llegar a la terminal de puebla";
  });*/

  // Creando un marcador
  let marker = new google.maps.Marker({
    position: coords,
    map,
    title: 'Como llegar'
  });
  /*
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });*/

}

initMap();

let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const map = new Map(document.getElementById("l-map"), {
    center: { lat: 35.658700497842986, lng: 139.74547262447973 },
    zoom: 18,
    mapId: "be3ff99c14341a29",
  });
  const marker = new AdvancedMarkerElement({
    map,
    position: { lat: 35.658700497842986, lng: 139.74547262447973 },
  });
}

initMap();
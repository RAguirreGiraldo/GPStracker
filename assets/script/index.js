'use strict';
 
mapboxgl.accessToken = 'pk.eyJ1Ijoicm9iZXJ0b2FndWlycmUxOTc1IiwiYSI6ImNsYmdycXN1MjBpeWQzdnBkbDFka3pscnYifQ.nUFHQUdp9wIInZZGhJfYjQ';

const options = {
    enableHighAccuracy: true
}

let elementSupport = document.getElementById('support');

function error() {
    elementSupport.innerHTML = "Your location could not be obtained";
}
 
function findMe(posicion) {
   let elementLatitude = document.getElementById('latitude');
   let elementLongitude = document.getElementById('longitude');

   let latitude = posicion.coords.latitude;
   let longitude = posicion.coords.longitude;
 
   elementLatitude.innerHTML = "Your Latitude: " + latitude;
   elementLongitude.innerHTML = "Your Longitude: " + longitude;
 
   let map = new mapboxgl.Map({
       container: 'map',
       style: 'mapbox://styles/mapbox/streets-v12',
       center: [longitude, latitude], // starting position
       zoom: 12
   });
      
   new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map); //pointer In map
}
 
// Verifying that my browser supports geolocation.

if (navigator.geolocation) {
    elementSupport.innerHTML = "Your Browser Supports Geolocation";
    navigator.geolocation.getCurrentPosition(findMe ,error ,options);
} else {
    elementSupport.innerHTML = "Your Browser Does Not Support Geolocation";
}

 
 
 
 
 
 
 
 
 
 
 
 
 

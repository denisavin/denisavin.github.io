var Radius = Math.sqrt(Math.pow(49.9713864 - 49.974199, 2) +  Math.pow(36.2583595 - 36.258379,2));//0.002812667596782849
console.log("Radius=====" + Radius);
function initMap() {
       var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 14
        });

        var infoWindow = new google.maps.InfoWindow({map: map});
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            console.log("Your position was setting");
          setInterval(function(){
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            //  console.log(position.coords.latitude + " " + position.coords.longitude);
            infoWindow.setPosition(pos);

            infoWindow.setContent('<div><img src="images/sq.png" alt=""></div>');

          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });}, 500);
        }

        var markers = [];
        for(var i = 0; i < arrPlaces.length; i++){
            markers[i] = new google.maps.Marker({
            position: {lat: arrPlaces[i].lat, lng: arrPlaces[i].lang},
            draggable: true,
            animation: google.maps.Animation.DROP,
            map: map
        });
        }

        console.log("Markers were seting");


      };

      function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }

        console.log(marker.lat + " " + marker.lng);

      }

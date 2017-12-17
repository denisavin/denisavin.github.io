//var Radius = Math.sqrt(Math.pow(49.9713864 - 49.974199, 2) +  Math.pow(36.2583595 - 36.258379,2));//0.002812667596782849
var Radius = 0.0105224457;
var positionLat, positionLng;
function initMap() {
       var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 14
        });

        var infoWindow = new google.maps.InfoWindow({map: map});
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          setInterval(function(){
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            positionLat = position.coords.latitude;
            positionLng = position.coords.longitude;

           for(var i = 0; i < arrPlaces.length; i++){
            console.log(positionLat + " " + positionLng);
            var RadiusTmp =  Math.sqrt(Math.pow(arrPlaces[i].lat - positionLat, 2) +  Math.pow(arrPlaces[i].lang - positionLng,2));
            if(RadiusTmp > Radius){
                    markers[i].setMap(null);
               }
        }




            infoWindow.setPosition(pos);

            infoWindow.setContent('You are here!');

          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });}, 500);
        }
    console.log("+++++++++++++++++++" + positionLat);

        var markers = [];
        console.log("Markers are set");
        for(var i = 0; i < arrPlaces.length; i++){
            markers[i] = new google.maps.Marker({
            position: {lat: arrPlaces[i].lat, lng: arrPlaces[i].lang},
            draggable: true,
            id: (i).toString(),
            animation: google.maps.Animation.DROP,
            map: map
        });
        }


        for(var i = 0; i < arrPlaces.length; i++){
            markers[i].addListener('click', function() {
                  var u = this.id;
                  var infoWindowMarker = new google.maps.InfoWindow({map: map});
                  infoWindowMarker.setPosition({lat: arrPlaces[u].lat, lng: arrPlaces[u].lang});
                  infoWindowMarker.setContent('<div class="containerInfo">' + '<p class="pInfo">' + arrPlaces[u].name + '</p>' + '<p class="pInfo">'  + 'тип: ' + arrPlaces[u].type + '</p>'+ "</div>");

            });
        }






      };

      function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }

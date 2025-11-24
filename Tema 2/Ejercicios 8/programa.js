/*
//Mostrar Posicion y error si hay

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(mostrarUbicacion, mostrarError);
    } else {
        console.log("Tu navegador no soporta la geolocalización");
    }

    function mostrarUbicacion(posicion) {
        const coordenadas = posicion.coords;
        console.log(`Latitud: ${coordenadas.latitude}`);
        console.log(`Longitud: ${coordenadas.longitude}`);
    }

    function mostrarError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                console.error("El usuario denegó el permiso de geolocalización.");
                break;
            case error.POSITION_UNAVAILABLE:
                console.error("La información de la ubicación no está disponible.");
                break;
            case error.TIMEOUT:
                console.error("La solicitud de ubicación expiró.");
                break;
            default:
                console.error("Ocurrió un error desconocido.");
        }
    }

//Insertar coordenadas en body
if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(obtenerUbicacion);
    } else {
        console.log("Tu navegador no soporta la geolocalización");
    }

    function obtenerUbicacion(posicion) {
        const coordenadas = posicion.coords;
        const lat = coordenadas.latitude;
        const lon = coordenadas.longitude;

        const p = document.createElement("p");
        p.textContent = `Latitud: ${lat}, Longitud: ${lon}`;

        document.body.appendChild(p);
    }
*/

/* 
navigator.geolocation.watchPosition(
    pos => {
        console.log("Latitud:", pos.coords.latitude)
        console.log("Longitud:", pos.coords.longitude)
        console.log("Precisión:", pos.coords.accuracy)
    },
    err => {
        console.log("Error:", err.message)
    }
)
*/

/* 
navigator.geolocation.getCurrentPosition(pos => {
    console.log("Precisión:", pos.coords.accuracy + "m")
})
*/

/* 
function distancia(lat1, lon1, lat2, lon2) {
    R = 6371e3
    rad = Math.PI / 180
    dLat = (lat2 - lat1) * rad
    dLon = (lon2 - lon1) * rad
    a = Math.sin(dLat/2)**2 +
        Math.cos(lat1*rad) * Math.cos(lat2*rad) *
        Math.sin(dLon/2)**2
    c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    return R * c
}

latA = 40.4168
lngA = -3.7038
latB = 41.3874
lngB = 2.1686
console.log(distancia(latA, lngA, latB, lngB))
*/

/* 
ruta = []

navigator.geolocation.watchPosition(pos => {
    punto = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
        tiempo: pos.timestamp
    }
    ruta.push(punto)
    console.log(punto)
})
*/

/* 
total = 0
anterior = null

navigator.geolocation.watchPosition(pos => {
    actual = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
    }

    if (anterior) {
        total += distancia(anterior.lat, anterior.lng, actual.lat, actual.lng)
    }

    anterior = actual

    console.log("Distancia total:", Math.round(total))
})
*/

/* 
centro = { lat: 40.4168, lng: -3.7038 }
radio = 500

navigator.geolocation.watchPosition(pos => {
    lat = pos.coords.latitude
    lng = pos.coords.longitude
    d = distancia(lat, lng, centro.lat, centro.lng)
    if (d < radio) {
        console.log("Dentro del área")
    } else {
        console.log("Fuera del área")
    }
})
*/

/* 
inicio = Date.now()
totalDist = 0
anterior = null
puntos = []

navigator.geolocation.watchPosition(pos => {
    actual = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
    }

    if (anterior) {
        totalDist += distancia(anterior.lat, anterior.lng, actual.lat, actual.lng)
    }

    anterior = actual
    puntos.push(actual)

    tiempo = Math.floor((Date.now() - inicio) / 1000)

    console.log("Tiempo:", tiempo)
    console.log("Distancia:", Math.round(totalDist))
    console.log("Puntos:", puntos.length)
})
*/



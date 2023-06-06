const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-34.58750297485268&lon=-58.42055598879378&appid=225e459fda634bdc716ff2cb3217cd6f'

let datosClima = {}

axios.get(url)
    .then(function(respuesta){ 
        console.log(respuesta)
        datosClima = {...respuesta.data}
        
        const tempActual = convertKelvinToCelcius(datosClima.main.temp)
        const tempMin = convertKelvinToCelcius(datosClima.main.temp_min)
        const tempMax = convertKelvinToCelcius(datosClima.main.temp_max)
        const sensacionTermica = convertKelvinToCelcius(datosClima.main.feels_like)
        
        document.getElementById('temp-actual').innerHTML = tempActual
        document.getElementById('temp-min').innerHTML = tempMin
        document.getElementById('temp-max').innerHTML = tempMax
        document.getElementById('sensacion').innerHTML = sensacionTermica
        
    }) // si todo sale bien se ejecuta esto
    .catch(function(error) {console.log(error)}) // si algo falla se ejecuta esto
    
    console.log(datosClima)

function convertKelvinToCelcius(tempInKelvin) {
    const KELVIN_FACTOR_CONVERTER = 273.16
    const CANTIDAD_DECIMALES = 2
    return (tempInKelvin - KELVIN_FACTOR_CONVERTER).toFixed(CANTIDAD_DECIMALES)
}


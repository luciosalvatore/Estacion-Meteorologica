import {activarSpinner, convertKelvinToCelcius, desactivarSpinner} from './funciones.js'
import { apikey, apiUrl } from './variables.js'

export const obtenerClima = () => {
    
    activarSpinner()
    navigator.geolocation.getCurrentPosition((posicion) => {
    if(posicion) { // si existe osea es distinto de undefined
        axios.get(`${apiUrl}lat=${posicion.latitud}&lon=${posicion.longitud}&appid=${apikey}`)
        .then(respuesta => {
            console.log('respuesta', respuesta.data);
            const datosClima = {...respuesta.data}
        
            const tempActual = convertKelvinToCelcius(datosClima.main.temp)
            const tempMin = convertKelvinToCelcius(datosClima.main.temp_min)
            const tempMax = convertKelvinToCelcius(datosClima.main.temp_max)
            const sensacionTermica = convertKelvinToCelcius(datosClima.main.feels_like)
            
            document.getElementById('temp-actual').innerHTML = tempActual
            document.getElementById('temp-min').innerHTML = tempMin
            document.getElementById('temp-max').innerHTML = tempMax
            document.getElementById('sensacion').innerHTML = sensacionTermica
        })
    }else {
        console.log('no se obtuvo la posicion');
    }  
    desactivarSpinner() 
})
}

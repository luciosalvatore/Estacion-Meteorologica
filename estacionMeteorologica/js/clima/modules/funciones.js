export function convertKelvinToCelcius(tempInKelvin) {
    const KELVIN_FACTOR_CONVERTER = 273.16
    const CANTIDAD_DECIMALES = 2
    return (tempInKelvin - KELVIN_FACTOR_CONVERTER).toFixed(CANTIDAD_DECIMALES)
}

export function activarSpinner() {
    document.getElementById('spinner').style.display = 'block'
    document.getElementById('main').style.display = 'none'
}

export function desactivarSpinner() {
    document.getElementById('spinner').style.display = 'none'
    document.getElementById('main').style.display = 'block'
}
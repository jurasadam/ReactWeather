var React = require('react')

var WeatherMessage = ({temp, city}) => {
  return (
    <div>
      <h3 className='text-center'>It is {temp}C in {city}</h3>
    </div>
  )
}

module.exports = WeatherMessage

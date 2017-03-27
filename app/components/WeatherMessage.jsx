var React = require('react')

var WeatherMessage = ({temp, city}) => {

  return (
    <div>
      <h4>It is {temp} in {city}</h4>
    </div>
  )
}

module.exports = WeatherMessage

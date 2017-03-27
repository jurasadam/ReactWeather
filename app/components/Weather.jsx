var React = require('react')
var WeatherForm = require('WeatherForm')
var WeatherMessage = require('WeatherMessage')
var openWeatherMap = require('openWeatherMap')

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (city) {
    var that = this

    this.setState({isLoading: true})

    openWeatherMap.getTemp(city).then(function (temp) {
      that.setState({
        city: city,
        temp: temp,
        isLoading: false
      })
    }, function (errorMessage) {
      that.setState({
        isLoading: false
      })
      alert(errorMessage.message)
    })
  },
  render: function () {
    var {isLoading, city, temp} = this.state

    function renderMessage () {
      if (isLoading) {
        return <h3>Fetching weather ...</h3>
      } else if (temp && city) {
        return <WeatherMessage temp={temp} city={city} />
      }
    }

    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch} city={city} />
        {renderMessage()}
      </div>
    )
  }
})

module.exports = Weather
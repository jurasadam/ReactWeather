var React = require('react')
var {Link} = require('react-router')

var Examples = (props) => {
  return (
    <div>
      <h1 className='text-center page-title'>Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Zurich'>Zürich, CH</Link>
        </li>
        <li>
          <Link to='/?location=Cluj-Napoca'>Cluj-Napoca</Link>
        </li>
        <li>
          <Link to='/?location=Berlin'>Berlin</Link>
        </li>
      </ol>
    </div>
  )
}

module.exports = Examples

import React from 'react'
import QuotesContainer from './QuotesContainer'

const App = (props) => {
  return (
    <div className="container pt-5">
      <div className="text-center">
        <h1 className="font-weight-bold">Quotes App</h1>
      </div>
      <QuotesContainer />
    </div>
  )
}

export default App
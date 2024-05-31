import React from 'react'
import { EmployeeProvider } from './context&Reducer/EmployeeContext'
import Details from './context&Reducer/Details'


const App7 = () => {
  return (
    <>
    <EmployeeProvider>
        <Details/>
    </EmployeeProvider>
    </>
  )
}

export default App7
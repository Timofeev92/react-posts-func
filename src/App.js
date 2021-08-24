import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter, Navbar } from './components/index'
import { AuthContext } from './context'

const App = () => {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading,
    }}>
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <AppRouter />
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App

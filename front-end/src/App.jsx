import MainPage from './pages/PageGuest/MainPage/MainPage'

import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

// eslint-disable-next-line react/prop-types
const LazyLoadComponent = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
    root: null,
    rootMargin: '0px',
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  return (
    <div
      ref={ref}
      style={{
        minHeight: '200px',
        display: 'block',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 1s ease-in-out',
      }}
    >
      {isVisible && children}
    </div>
  )
}

const App = () => {
  return (
    <div>
      <LazyLoadComponent>
        <MainPage />
      </LazyLoadComponent>
    </div>
  )
}

export default App

import { Suspense, lazy, useState, useEffect, useCallback } from 'react'
import JudeEnterWindow from './_basic/other/JudeEnterWindow'
import './_basic/css/global.css'
import './index.css'
const Routes = lazy(() => import('./app/module/pages/Routes'));
function App() {
  JudeEnterWindow();
  const [show, set] = useState(false);
  const onScrollBottom = useCallback(() => {
    if (window.scrollY > (window.innerHeight / 2)) {
      set(true)
    } else {
      set(false)
    }
  })
  useEffect(() => {
    window.addEventListener('scroll', onScrollBottom);
    return (() => { window.removeEventListener('scroll', onScrollBottom) })
  }, [])
  return (
    <div
      style={{
        backgroundColor: '#fff',
      }}>
      <Suspense fallback={"等等"} >
        <Routes show={show} />
      </Suspense>
    </div>
  )
}

export default App

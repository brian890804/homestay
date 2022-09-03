import { Suspense, lazy } from 'react'
import JudeEnterWindow from './_basic/other/JudeEnterWindow'
import './_basic/css/global.css'
import './index.css'
const MainPage = lazy(() => import('./app/module/pages/MainPage'));
function App() {
  JudeEnterWindow();
  return (
    <div
      className='g-center'
      style={{
        maxWidth: '100vw',
      }}>
      <Suspense fallback={"等等"} >
        <MainPage />
      </Suspense>
    </div>
  )
}

export default App

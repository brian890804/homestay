import { Suspense, lazy, useState } from 'react'
import JudeEnterWindow from './_basic/other/JudeEnterWindow'
import JudeWheel from './app/module/Event/JudeWheel'
import './_basic/css/global.css'
import './index.css'
const Routes = lazy(() => import('./app/module/pages/Routes'));
function App() {
  const [show, set] = useState(false);
  JudeEnterWindow();
  JudeWheel(set);

  return (
    <div
      style={{
        backgroundColor: '#fff',
        userSelect: 'none'
      }}>
      <Suspense fallback={"等等"} >
        <Routes show={show} />
      </Suspense>
    </div>
  )
}

export default App

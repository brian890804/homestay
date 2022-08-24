import JudeEnterWindow from './_basic/other/JudeEnterWindow'
import MainPage from './app/module/pages/MainPage'
import './_basic/css/global.css'
import './index.css'
function App() {
  JudeEnterWindow();
  return (
    <div
      className='g-center'
      style={{
        width: '100vw',
      }}>
      <MainPage />
    </div>
  )
}

export default App

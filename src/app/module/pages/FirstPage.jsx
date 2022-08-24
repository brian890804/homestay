import Title from "../components/MainPage/Title"
import NavigationBar from "../../../_basic/pages/toolbar/NavigationBar"
import RoomIntroduction from '../components/MainPage/RoomIntroduction'
import Introduce from "../components/MainPage/Introduce"
export default function FirstPage() {
    return (
        <div
            style={{
                height: '100%',
                width: '100%',
            }}>
            <Title />
            <NavigationBar />
            <div style={{ position: 'relative', height: '30%' }}>
                <RoomIntroduction />
            </div>
            <div className='mx-3 mt-3'>
                <Introduce />
            </div>
        </div>
    )
}
import Title from "../components/MainPage/Title"
import MainLayout from "../../../_basic/pages/layout/MainLayout"
import NavigationBar from "../../../_basic/pages/toolbar/NavigationBar"
import RoomIntroduction from '../components/MainPage/RoomIntroduction'

export default function MainPage() {
    return (
        <MainLayout>
            <Title />
            <NavigationBar />
            <RoomIntroduction />
        </MainLayout>
    )
}
import Title from "../components/MainPage/Title";
import NavigationBar from "../../../_basic/pages/toolbar/NavigationBar";
import SwiperIntroduction from "../components/MainPage/SwiperIntroduction";
import Introduce from "../components/MainPage/Introduce";
export default function MainPage() {
  return (
    <div>
      <Title />
      <NavigationBar />
      <SwiperIntroduction />
      <div className="mx-3 mt-3">
        <Introduce />
      </div>
    </div>
  );
}

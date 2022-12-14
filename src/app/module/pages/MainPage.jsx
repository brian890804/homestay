import Title from "../components/MainPage/Title";
import NavigationBar from "../../../_basic/pages/toolbar/NavigationBar";
import SwiperIntroduction from "../components/MainPage/SwiperIntroduction";
import Introduce from "../components/MainPage/Introduce";
export default function MainPage() {
  return (
    <section>
      <Title />
      <NavigationBar />
      <SwiperIntroduction />
      <div className="mx-3 mt-3" style={{ textAlign: "-webkit-center" }}>
        <Introduce />
      </div>
    </section>
  );
}

import Logo from "../../../../assets/Logo/Logo.jpg";
import useResize from "../../Event/Resize";
export default function Title() {
  const { isMobile } = useResize();
  const TitleHeight = isMobile ? 50 : 70;
  return (
    <header>
      <h1
        className={`fs-${isMobile ? 4 : 1} 
            align-items-center 
            justify-content-center
            fw-bold
            g-center `}
        style={{
          height: TitleHeight,
          textShadow: " 0px 0px 0.8px black",
        }}
      >
        <img
          src={Logo}
          alt="九份離老街最近的民宿"
          style={{
            maxWidth: TitleHeight - (isMobile ? 10 : 5),
            maxHeight: TitleHeight - (isMobile ? 10 : 5),
            marginRight: 20,
          }}
        />
        九份生活空間民宿
      </h1>
    </header>
  );
}

import { isMobile } from "react-device-detect";
export default function NavigationBar() {
  const Layout = {
    width: "100%",
    height: isMobile ? 30 : 50,
  };
  const Title = [
    { name: "關於我們", href: "#reservation" },
    { name: "房型介紹", href: "#roomIntroduce" },
    { name: "訂房說明", href: "#reservation" },
    { name: "交通導引", href: "#reservation" },
    { name: "聯絡我們", href: "#reservation" },
  ];
  return (
    <nav className="g-bc " style={Layout}>
      <div
        className={`row mx-${isMobile ? 0 : 5} g-center h-100`}
      >
        <div className="row col-12 text-center p-0 cursor  flex-nowrap">
          {Title.map((data, index) => {
            return (
              <a
                href={data.href}
                className="col g-ts-b g-ts-w text-white fw-bold "
                style={{
                  whiteSpace: "nowrap",
                  fontSize: isMobile ? "0.8rem" : "1.5rem",
                }}
                key={index}
              >
                {data.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

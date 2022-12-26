import{r as s,j as u,a as t}from"./index.1ed5c327.js";import{u as c,G as e,s as l}from"./Routes.d4a92719.js";const m="https://brian890804.github.io/homestay/assets/shop-1.8d414959.png",a="https://brian890804.github.io/homestay/assets/shop-2.673e141e.png";function F(){const{isMobile:i}=c(),[o,n]=s.exports.useState(null),r=s.exports.useRef();return s.exports.useEffect(()=>(window.addEventListener("scroll",()=>n(r.current.clientHeight)),()=>window.removeEventListener("scroll",()=>n(r.current.clientHeight))),[]),u(d,{isMobile:i,children:[u(e,{className:"text-start fw-bold p-0 mb-2 g-bc",container:!0,direction:"row",justifyContent:"center",alignItems:"center",children:[t(e,{item:!0,className:"g-ts-w",style:{fontSize:i?"1rem":"2rem",color:"white",padding:i?"0px 10px":"0px 20px"},children:"\u6700\u4F73\u7684\u624B\u4FE1"}),t(e,{item:!0,sm:!0,xs:!0,className:"g-ts-b mb-1",style:{lineHeight:i?2:3.2,backgroundColor:"#fff8bd"},children:"\xA0"})]}),u(e,{className:"fw-bold p-0 mb-2",container:!0,direction:"row",justifyContent:"center",alignItems:"center",spacing:1,children:[t(e,{item:!0,xs:7,sm:7,children:t("img",{src:m,loading:"lazy",ref:r,alt:"\u4E5D\u4EFD\u674E\u5100\u9905\u5E97"})}),t(e,{item:!0,xs:5,sm:5,children:t("img",{src:a,alt:"\u674E\u5100\u9905\u5E97",height:o,style:{backgroundSize:"contain"}})})]}),u(e,{className:"fw-bold p-0 mb-2 title_font g-ts-p",container:!0,direction:"row",justifyContent:"start",alignItems:"center",spacing:1,children:[u(e,{item:!0,sm:7,xs:7,children:[t("label",{className:"title_purple_block mr-2",children:"\xA0"}),"\u4E5D\u4EFD\u7E3D\u5E97"]}),u(e,{item:!0,sm:5,xs:5,children:[t("label",{className:"title_purple_block mr-2",children:"\xA0"}),"\u53F0\u5317\u5206\u5E97"]})]}),u(e,{className:"fw-bold p-0 mb-2 content_font ",container:!0,direction:"row",justifyContent:"start",spacing:0,children:[t(e,{item:!0,sm:7,xs:7,children:u(e,{className:"fw-bold p-0 mb-2 ",container:!0,direction:"row",justifyContent:"start",spacing:1,children:[t(e,{item:!0,xs:12,children:"\u4E5D\u4EFD\u7E3D\u5E97\uFF1A\u53F0\u5317\u7E23\u745E\u82B3\u93AE\u4E5D\u4EFD\u6C7D\u8ECA\u8DEF18\u865F(7-11\u7684\u5C0D\u9762)"}),t(e,{item:!0,xs:12,sm:6,children:"\u8A02\u8CA8\u5C08\u7DDA\uFF1A(02)2496-5628"}),t(e,{item:!0,xs:12,sm:6,children:"\u624B\u6A5F\uFF1A0955798018"}),t(e,{item:!0,xs:12,sm:6,children:"\u50B3\u771F\uFF1A(02)2406-3045"}),t(e,{item:!0,xs:12,sm:6,children:"E-mail:lw3in@seed.net.tw"}),t(e,{item:!0,xs:12,sm:6,children:"\u71DF\u696D\u6642\u9593\uFF1A9:00-17:00"})]})}),u(e,{item:!0,sm:5,xs:5,children:[t(e,{item:!0,xs:12,children:"\u53F0\u5317\u5206\u5E97\uFF1A\u53F0\u5317\u5E02\u4E2D\u6B63\u5340\u5FE0\u5B5D\u897F\u8DEF\u4E00\u6BB550-1\u865F (Z\u5340\u5730\u4E0B\u8857No. 6-3A,Z3\u51FA\u53E3\u65C1)"}),t(e,{item:!0,xs:12,sx:{paddingTop:"1.5%"},children:"\u96FB\u8A71\uFF1A(02)2331-3017"}),t(e,{item:!0,xs:12,sx:{paddingTop:"1.5%"},children:"\u71DF\u696D\u6642\u9593\uFF1A12:00-20:00"})]})]})]})}const d=l.div`
  /*  */
  padding: 4% 5%;
  background-color: #fff8bd;

  img {
    width: 100%;
  }

  .title {
    &_font {
      font-size: ${({isMobile:i})=>i?"1rem":"2rem"};
      color: #986795;
    }
    &_purple {
      &_block {
        min-width: 8px;
        background-color: #986795;
        @media (min-width: 599px) {
          min-width: 15px;
        }
      }
    }
  }

  .content {
    &_font {
      font-size: ${({isMobile:i})=>i?"0.6rem":"1.2rem"};
    }
  }
`;export{F as default};

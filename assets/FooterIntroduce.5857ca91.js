import{r as s,j as e,a as u}from"./index.2a02dfa6.js";import{u as n,G as t,s as o}from"./Routes.bb2ea101.js";const l="https://brian890804.github.io/homestay/assets/shop-1.8d414959.png",c="https://brian890804.github.io/homestay/assets/shop-2.673e141e.png";function h(){const{isMobile:i}=n(),r=s.exports.useRef();return e("footer",{children:u(d,{isMobile:i,children:[u(t,{className:"text-start fw-bold p-0 mb-2 g-bc",container:!0,direction:"row",justifyContent:"center",alignItems:"center",children:[e(t,{item:!0,className:"g-ts-w",style:{fontSize:i?"1rem":"2rem",color:"white",padding:i?"0px 10px":"0px 20px"},children:e("header",{children:"\u6700\u4F73\u7684\u624B\u4FE1 "})}),e(t,{item:!0,sm:!0,xs:!0,className:"g-ts-b mb-1",style:{lineHeight:i?2:3.2,backgroundColor:"#fff8bd"},children:"\xA0"})]}),u(t,{className:"fw-bold p-0 mb-2",container:!0,direction:"row",justifyContent:"center",alignItems:"center",spacing:1,children:[e(t,{item:!0,xs:7,sm:7,children:e("div",{style:{position:"relative",paddingBottom:"50%"},children:e("img",{style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,right:0,bottom:0},src:l,loading:"lazy",ref:r,alt:"\u4E5D\u4EFD \u4E5D\u4EFD\u8001\u8857 \u4E5D\u4EFD\u674E\u5100\u9905\u5E97"})})}),e(t,{item:!0,xs:5,sm:5,children:e("div",{style:{position:"relative",paddingBottom:"70%"},children:e("img",{src:c,alt:"\u4E5D\u4EFD \u4E5D\u4EFD\u8001\u8857\u65C1\u674E\u5100\u9905\u5E97",style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,right:0,bottom:0}})})})]}),u(t,{className:"fw-bold p-0 mb-2 title_font g-ts-p",container:!0,direction:"row",justifyContent:"start",alignItems:"center",spacing:1,children:[u(t,{item:!0,sm:7,xs:7,children:[e("label",{className:"title_purple_block mr-2",children:"\xA0"}),"\u4E5D\u4EFD\u7E3D\u5E97"]}),u(t,{item:!0,sm:5,xs:5,children:[e("label",{className:"title_purple_block mr-2",children:"\xA0"}),"\u53F0\u5317\u5206\u5E97"]})]}),u(t,{className:"fw-bold p-0 mb-2 content_font ",container:!0,direction:"row",justifyContent:"start",spacing:0,children:[e(t,{item:!0,sm:7,xs:7,children:u(t,{className:"fw-bold p-0 mb-2 ",container:!0,direction:"row",justifyContent:"start",spacing:1,children:[e(t,{item:!0,xs:12,children:"\u4E5D\u4EFD\u7E3D\u5E97\uFF1A\u53F0\u5317\u7E23\u745E\u82B3\u93AE\u4E5D\u4EFD\u6C7D\u8ECA\u8DEF18\u865F(7-11\u7684\u5C0D\u9762)"}),e(t,{item:!0,xs:12,sm:6,children:"\u8A02\u8CA8\u5C08\u7DDA\uFF1A(02)2496-5628"}),e(t,{item:!0,xs:12,sm:6,children:"\u624B\u6A5F\uFF1A0955798018"}),e(t,{item:!0,xs:12,sm:6,children:"\u50B3\u771F\uFF1A(02)2406-3045"}),e(t,{item:!0,xs:12,sm:6,children:"E-mail:lw3in@seed.net.tw"}),e(t,{item:!0,xs:12,sm:6,children:"\u71DF\u696D\u6642\u9593\uFF1A9:00-17:00"})]})}),u(t,{item:!0,sm:5,xs:5,children:[e(t,{item:!0,xs:12,children:"\u53F0\u5317\u5206\u5E97\uFF1A\u53F0\u5317\u5E02\u4E2D\u6B63\u5340\u5FE0\u5B5D\u897F\u8DEF\u4E00\u6BB550-1\u865F (Z\u5340\u5730\u4E0B\u8857No. 6-3A,Z3\u51FA\u53E3\u65C1)"}),e(t,{item:!0,xs:12,sx:{paddingTop:"1.5%"},children:"\u96FB\u8A71\uFF1A(02)2331-3017"}),e(t,{item:!0,xs:12,sx:{paddingTop:"1.5%"},children:"\u71DF\u696D\u6642\u9593\uFF1A12:00-20:00"})]})]})]})})}const d=o.div`
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
`;export{h as default};

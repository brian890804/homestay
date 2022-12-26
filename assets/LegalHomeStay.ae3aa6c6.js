import{T as o}from"./Title.ec1afc5a.js";import{u as c,s as l}from"./Routes.d4a92719.js";import{j as u,a as e}from"./index.1ed5c327.js";const n="https://brian890804.github.io/homestay/assets/license.2e5bccdd.png",d="https://brian890804.github.io/homestay/assets/view.ab7da0b8.png",r="https://brian890804.github.io/homestay/assets/1.71575488.png",m="https://brian890804.github.io/homestay/assets/2.830ba095.png",h="https://brian890804.github.io/homestay/assets/3.4a9731ac.png";function B(){const i=[r,m,h],{isMobile:t}=c();return u(g,{children:[e(o,{id:"legalHomeStay",children:"\u65B0\u5317\u5E02\u5408\u6CD5\u6C11\u5BBF"}),u("div",{className:"row body justify-content-center",children:[e("div",{className:"col-lg-4 col-6 mb-3 ",children:e("img",{src:n,className:"body_introduce_img_license",alt:"logo"})}),u("div",{className:`
                    col-lg-8
                    col-12 
                    text-start 
                    fw-bold fs-6
                    `,children:[e("div",{className:"row",children:u("div",{className:"col-12 body_introduce_text",children:["\u7248\u6B0A\u6240\u6709\u70BA\u751F\u6D3B\u7A7A\u9593\u6C11\u5BBF\u3002\u96FB\u8A71\uFF1A0986310045 \u5730\u5740\uFF1A \u65B0\u5317\u5E02\u745E\u82B3\u5340\u4E5D\u4EFD\u70CF\u52E2\u5DF76\u865F ",!t&&e("br",{}),"\u5317\u7E23 \u89C0\u5149\u5C40\u6838\u51C6\u5408\u6CD5\u6C11\u5BBF\u7DE8\u865F120\u865F 99\u5E741\u670812\u65E5\u5317\u5E9C\u89C0\u7BA1\u5B57\u7B2C0990879564\u865F"]})}),!t&&e("div",{className:"row mt-2 ",children:i.map((a,s)=>e("div",{className:"col-4 p-1",children:e("img",{loading:"lazy",src:a,alt:`2022 \u53F0\u7063\u4E5D\u4EFD\u6C11\u5BBF\u63A8\u85A6\u623F\u578B${s}`,className:"body_introduce_img_item"})},s))})]}),e("div",{className:"col-12",children:e("img",{src:d,className:"body_introduce",alt:"logo"})})]})]})}const g=l.div`
  /*  */
  width: 100%;
  height: 100%;
  .body {
    padding: 2%;
    &_introduce {
      background-repeat: no-repeat;
      width: 100%;
      height: auto;
      &_img {
        &_license {
          object-fit: cover;
          width: 100%;
        }

        &_item {
          width: 100%;
          height: 100%;
        }
      }
      &_text {
        line-height: 30px;
        font-size: 1rem;
        @media (max-width: 599px) {
          font-size: 0.8rem;
        }
      }
    }
  }
`;export{B as default};

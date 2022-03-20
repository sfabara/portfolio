(this.webpackJsonpsebasportfolio=this.webpackJsonpsebasportfolio||[]).push([[0],{101:function(e,n,t){},102:function(e,n,t){"use strict";t.r(n);var r,a,o,l,c,i,u,s,m,d,b,f,h,p=t(1),g=t.n(p),v=t(22),E=t.n(v),x=t(19),j=t(5),y=t(41),O=t(119),w=t(6),k={background:"rgb(47, 45, 56)",accent:"rgb(31, 31, 37) ",nav:"rgb(31, 31, 37,.75)",textColor:"rgb(245, 234, 210)",buttonColor:"rgb(245,234,210)",fancyButtonColor:"#25282e",hoverColor:"orange"},C={background:"rgb(245, 234, 210)",accent:"#dec0b1",nav:"#dec0b170",fancyButtonColor:"",textColor:"rgb(47, 45, 56)",buttonColor:"rgb(47,45,56)",hoverColor:"#628bbd"},z="dark",I="light",S=function(e){switch(e){case z:return k;case I:default:return C}},N=t(8),T=t(118),Y=w.b.header(r||(r=Object(N.a)(["\n  position: fixed;\n  width: 100%;\n  background-color: transparent;\n  top: 0rem;\n  transition: 0.6s;\n  z-index: 100000;\n  text-decoration: none;\n  background: inherit;\n  \n  &.sticky{\n    background-color: ","; \n    backdrop-filter: saturate(180%) blur(50px);\n  }\n\n"])),(function(e){return e.theme.nav})),B=w.b.div(a||(a=Object(N.a)(["\n  position: absolute;\n  top: 70px;\n  width: 300px;\n  transform: translateX(-90%);\n  background-color: ",";\n  border: var(--border);\n  border-radius: var(--border-radius);\n  padding: 1rem;\n  overflow: hidden;\n  transition: height var(--speed) ease;\n  outline: 0;\n  text-decoration: none;\n  & h3 {\n    color: ",";\n    font-size: 2rem;\n    margin: 0rem 2rem;\n    text-decoration: none;\n  }\n"])),(function(e){return e.theme.accent}),(function(e){return e.theme.textColor})),H=w.b.div(o||(o=Object(N.a)(["\n  display: flex;\n  flex-grow: 9;\n  position: relative;\n  align-items: flex-start;\n  justify-content: flex-start;\n  & ul {\n    position: relative;\n  }\n  & li {\n    display: inline;\n    margin: 0rem 0rem 0rem 5rem;\n    font-size: 3.6rem;\n    position: relative;\n  }\n  & a {\n    display: inline-block;\n    margin: 1rem 0rem;\n    text-decoration: none;\n    font-weight: bold;\n    position: relative;\n    color: ",";\n  }\n  & a:hover {\n    color: ",";\n  }\n"])),(function(e){return e.theme.textColor}),(function(e){return e.theme.hoverColor})),X=w.b.li(l||(l=Object(N.a)(["\n  width: calc(var(--nav-size) * 0.8);\n  position: relative;\n  display: flex;\n  margin: 1rem;\n  & a {\n    position: relative;\n    text-decoration: none;\n  }\n"]))),D=w.b.div(c||(c=Object(N.a)(["\n  & svg {\n    --button-size: calc(var(--nav-size) * 0.5);\n    width: var(--button-size);\n    height: var(--button-size);\n    background-color: ",";\n    border-radius: 10%;\n    padding: 8px;\n    margin: 1px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: filter 300ms;\n    color: ",";\n  }\n  & svg:hover {\n    box-shadow: 5px 2px 20px #00000050;\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.buttonColor}),(function(e){return e.theme.background}),(function(e){return e.theme.hoverColor})),G=w.b.a(i||(i=Object(N.a)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  border-radius: var(--border-radius);\n  transition: background var(--speed);\n  padding: 0.5rem;\n  outline: 0;\n  &:hover {\n    background-color: #52535770;\n  }\n"]))),L=t(24),_=t(46);t(97);function F(e){var n=Object(p.useState)("light"),t=Object(j.a)(n,2),r=t[0],a=t[1],o=Object(L.useGlobal)("onTheme"),l=Object(j.a)(o,2),c=l[0];l[1];return Object(p.useEffect)((function(){a(0==c?"light":"dark"),window.addEventListener("scroll",(function(){var e=document.querySelector("header");e&&e.classList.toggle("sticky",window.scrollY>0)}))})),g.a.createElement(w.a,{theme:S(r)},g.a.createElement(Y,null,g.a.createElement(M,null,g.a.createElement(W,null),g.a.createElement(R,null),g.a.createElement(R,{icon:g.a.createElement(y.a,null)},g.a.createElement(Z,null)))))}function M(e){return g.a.createElement("nav",{className:"navbar"},g.a.createElement("ul",{className:"navbar-nav"},e.children))}function R(e){var n=Object(p.useState)(!1),t=Object(j.a)(n,2),r=t[0],a=t[1];return g.a.createElement(X,null,g.a.createElement(D,null,g.a.createElement("a",{href:"#",onClick:function(){return a(!r)}},e.icon),r&&e.children))}function W(e){return g.a.createElement(H,null,g.a.createElement("li",null,g.a.createElement("a",{href:"#"},"\ud83d\ude80 Sebastian Fabara")))}function Z(e){function n(e){return g.a.createElement(G,{href:"#"},g.a.createElement("span",{className:"icon-left"},e.leftIcon),e.children,g.a.createElement("span",{className:"icon-right"},e.rightIcon))}return g.a.createElement(B,null,g.a.createElement(D,null,g.a.createElement(x.b,{to:"/"},g.a.createElement(n,{leftIcon:g.a.createElement(_.b,null)},g.a.createElement("h3",null,"Home"))),g.a.createElement(x.b,{to:"/portfolio"},g.a.createElement(n,{leftIcon:g.a.createElement(_.a,null)},g.a.createElement("h3",null,"Portfolio"))),g.a.createElement(x.b,{to:"/art"},g.a.createElement(n,{leftIcon:g.a.createElement(_.c,null)},g.a.createElement("h3",null,"Art"))),g.a.createElement(n,{leftIcon:g.a.createElement(A,{theme:e.theme})},g.a.createElement("h3",null,"Night Mode"))))}function A(e){e.handleTheme;var n=Object(L.useGlobal)("onTheme"),t=Object(j.a)(n,2),r=t[0],a=t[1];return g.a.createElement(O.a,{checked:r,onChange:function(){return a(!r)}})}Object(L.setGlobal)({onTheme:!0});var J,P,U,q=w.b.section(u||(u=Object(N.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    padding: 10rem;\n\n    & h1{\n        font-size: 5rem;\n        text-align: center;\n    }\n    & h3{\n        font-size: 2rem;\n        font-weight: 100;\n        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif !important;\n    }\n    & p {\n        font-size: 2rem;\n        margin: 0rem;\n        text-align: center;\n    }\n"]))),V=w.b.div(s||(s=Object(N.a)(["\n    background-color: ",";\n    display: flex;\n    padding: 15px;\n    border-radius: 8px;\n    margin: 40px;\n\n    & h3{\n        font-size: 2.0rem;\n    }\n"])),(function(e){return e.theme.accent})),K=(w.b.div(m||(m=Object(N.a)([""]))),w.b.div(d||(d=Object(N.a)(["\n        margin: 5px;\n        padding: 5px;\n        border-radius: 10px;\n"])))),Q=w.b.div(b||(b=Object(N.a)(["\n\n    & h3{\n        font-family: monospace !important;\n        font-weight: 100;\n    }\n\n\n"]))),$=w.b.div(f||(f=Object(N.a)(["\n    width: 70rem;\n    margin: 30px;\n    & p {\n        font-weight: 200;\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size: 2.5rem;\n    }\n\n"]))),ee=Object(w.b)(T.a.div)(h||(h=Object(N.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    background-color: ",";\n    padding: 20px;\n    margin: 4rem;\n    border-radius: 16px;\n    outline: solid  #111318;\n    -moz-outline-radius: 16px;\n    box-shadow: 5px 5px 0px 4px #111318;\n    cursor: pointer;\n    &:hover{\n      background-color: #0000004c;\n    }\n\n"])),(function(e){return e.theme.fancyButtonColor})),ne=function(e){var n=e.onClick,t=e.children,r=e.className;return g.a.createElement(ee,{className:r,whileHover:{scale:1.1,transition:{duration:.3}},whileTap:{scale:.9},onClick:n},t)},te=t(28),re=t.n(te),ae=t(30),oe=t(72),le=t(53),ce=t.n(le),ie=function(e,n){return-(e-n-window.innerHeight/2)/20},ue=function(e,n){return(e-n-window.innerWidth/2)/20},se=function(e){var n=.3*window.innerWidth-20;return"translateY(".concat(-n*(e<0?6:1)-e%(5*n),"px")};function me(e){Object(p.useEffect)((function(){var e=function(e){return e.preventDefault()};return document.addEventListener("gesturestart",e),document.addEventListener("gesturechange",e),function(){document.removeEventListener("gesturestart",e),document.removeEventListener("gesturechange",e)}}),[]);var n=Object(p.useRef)(null),t=Object(ae.useSpring)((function(){return{rotateX:0,rotateY:0,rotateZ:0,scale:1,zoom:0,x:0,y:0,config:{mass:5,tension:350,friction:40}}})),r=Object(j.a)(t,2),a=r[0],o=a.x,l=a.y,c=a.rotateX,i=a.rotateY,u=a.rotateZ,s=a.zoom,m=a.scale,d=r[1],b=Object(ae.useSpring)((function(){return{wheelY:0}})),f=Object(j.a)(b,2),h=f[0].wheelY,v=f[1];return Object(oe.a)({onDrag:function(e){var n=e.active,t=Object(j.a)(e.offset,2),r=t[0],a=t[1];return d({x:r,y:a,rotateX:0,rotateY:0,scale:n?1:1.1})},onPinch:function(e){var n=Object(j.a)(e.offset,2),t=n[0],r=n[1];return d({zoom:t/200,rotateZ:r})},onMove:function(e){var n=Object(j.a)(e.xy,2),t=n[0],r=n[1];return!e.dragging&&d({rotateX:ie(r,l.get()),rotateY:ue(t,o.get()),scale:1.1})},onHover:function(e){return!e.hovering&&d({rotateX:0,rotateY:0,scale:1})},onWheel:function(e){var n=e.event,t=Object(j.a)(e.offset,2)[1];n.preventDefault(),v.set({wheelY:t})}},{domTarget:n,eventOptions:{passive:!1}}),g.a.createElement("div",{className:ce.a.container},g.a.createElement(ae.animated.div,{ref:n,className:ce.a.card,style:{transform:"perspective(600px)",x:o,y:l,scale:Object(ae.to)([m,s],(function(e,n){return e+n})),rotateX:c,rotateY:i,rotateZ:u}},g.a.createElement(ae.animated.div,{style:{transform:h.to(se)}},g.a.createElement("img",{src:re.a,style:{zIndex:"10000",backgroundImage:"url(".concat(re.a,")")}}))))}function de(){return g.a.createElement("body",null,g.a.createElement(q,null,g.a.createElement(V,null,g.a.createElement("h3",null,"Hello! Im a software engineer based in the U.S")),g.a.createElement(me,{image:re.a}),g.a.createElement("div",{style:{width:"20rem",height:"20rem",backgroundColor:"transparent",borderRadius:"0px",display:"flex",alignItems:"center",justifyContent:"center"}},g.a.createElement("img",{src:re.a,style:{boxShadow:"2px 2px 15px #00000090",width:"100%",borderRadius:"20px",filter:"brightness(60%) contrast(95%)"}})),g.a.createElement(K,null,g.a.createElement("h1",{style:{}},"Sebastian Fabara")),g.a.createElement(Q,null,g.a.createElement("h3",null," Full Stack | Blockchain | Design")),g.a.createElement($,null,g.a.createElement("p",null,"I do all sort of stuff at work and at home please be impressed by this page and hire me I promise to do good, always.")),g.a.createElement(x.b,{to:"/portfolio",style:{color:"inherit",textDecoration:"none"}},g.a.createElement(ne,null,g.a.createElement("h3",null,"My Portfolio"),g.a.createElement(y.b,{size:25})))),g.a.createElement(q,null,g.a.createElement("h1",null,"What I Do")))}var be=w.b.div(J||(J=Object(N.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  background-color: ",";\n  position: fixed;\n  margin: 24rem 0rem 0rem 0rem;\n  border-radius: 1rem;\n  padding: .6rem;\n  box-shadow: 5px 5px 10px #00000040;\n  height: 20rem;\n  & svg:hover{\n    color: ",";\n    cursor: pointer;\n  }\n  & li{\n    padding: .5rem;\n  }\n"])),(function(e){return e.theme.accent}),(function(e){return e.theme.hoverColor})),fe=(Object(w.b)(T.a.div)(P||(P=Object(N.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    background-color: ",";\n    padding: 20px;\n    margin: 4rem;\n    border-radius: 16px;\n    outline: solid  #111318;\n    -moz-outline-radius: 16px;\n    box-shadow: 5px 5px 0px 4px #111318;\n    cursor: pointer;\n    &:hover{\n      background-color: #0000004c;\n    }\n\n"])),(function(e){return e.theme.fancyButtonColor})),Object(w.b)(T.a.div)(U||(U=Object(N.a)(["\n\n\n"]))),t(47));function he(){return g.a.createElement(be,{linkedin:"#0e76a8",github:"#171515",twitter:"#00acee"},g.a.createElement("ul",null,g.a.createElement("li",null,g.a.createElement(ve,{hoverColor:"#123456"},g.a.createElement(fe.b,{size:50}))),g.a.createElement("li",null,g.a.createElement(ve,null,g.a.createElement(fe.a,{size:50}))),g.a.createElement("li",null,g.a.createElement(ve,{hoverColor:"#0e76a8"},g.a.createElement(fe.c,{size:50,style:{}})))))}var pe,ge,ve=function(e){var n=e.children,t=e.hoverColor;return g.a.createElement(T.a.div,{className:t,style:{borderRadius:"10px"},whileHover:{scale:1.25,transition:{duration:.5}},whileTap:{scale:.9}},n)},Ee=w.b.html(pe||(pe=Object(N.a)(["\n  color: ",";\n  background-color: ",";\n  height: 300rem;\n"])),(function(e){return e.theme.textColor}),(function(e){return e.theme.background})),xe=(w.b.button(ge||(ge=Object(N.a)(["\n  color: ",";\n  background-color: ",";\n  margin: 2rem;\n"])),(function(e){return e.theme.hoverColor}),(function(e){return e.theme.hoverColor})),t(101),t(4));var je=function(){return g.a.createElement(de,null)},ye=function(){return console.log("In portfolio"),g.a.createElement(g.a.Fragment,null)},Oe=function(){return g.a.createElement("div",null,g.a.createElement("h1",{style:{fontSize:"100px"}},"This is art page"))},we=function(){var e=Object(p.useState)("dark"),n=Object(j.a)(e,2),t=n[0],r=n[1],a=Object(L.useGlobal)("onTheme"),o=Object(j.a)(a,2),l=o[0];o[1];return console.log("Theme: ",Object(L.useGlobal)("onTheme")[0]),Object(p.useEffect)((function(){r(0==l?"light":"dark")})),g.a.createElement("div",{className:"App"},g.a.createElement(w.a,{theme:S(t)},g.a.createElement(Ee,null,g.a.createElement(F,null),g.a.createElement(he,null),g.a.createElement(xe.c,null,g.a.createElement(xe.a,{path:"/",element:g.a.createElement(je,null)}),g.a.createElement(xe.a,{path:"portfolio",element:g.a.createElement(ye,null)}),g.a.createElement(xe.a,{path:"art",element:g.a.createElement(Oe,null)})))))};E.a.render(g.a.createElement(x.a,null,g.a.createElement(g.a.StrictMode,null,g.a.createElement(we,null))),document.getElementById("root"))},28:function(e,n,t){e.exports=t.p+"static/media/self-portrait.9fe08ed6.jpg"},53:function(e,n,t){e.exports={card:"styles_card__2sdCV",container:"styles_container__fuGqJ"}},74:function(e,n,t){e.exports=t(102)},97:function(e,n,t){}},[[74,1,2]]]);
//# sourceMappingURL=main.56bb60af.chunk.js.map
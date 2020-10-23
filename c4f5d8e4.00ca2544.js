(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{82:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n(0),r=n.n(i),l=n(94),o=n(91),d=n(92),p=n(106);const c={blue:"#0ae"},g="1260px",m={mobileS:`(min-width: ${"320px"})`,mobileM:`(min-width: ${"375px"})`,mobileL:`(min-width: ${"425px"})`,mobileXL:`(min-width: ${"640px"})`,tablet:`(min-width: ${"768px"})`,tabletL:`(min-width: ${"995px"})`,laptop:`(min-width: ${"1024px"})`,laptopL:`(min-width: ${"1118px"})`,desktop:`(min-width: ${g})`,desktopL:`(min-width: ${g})`},s=e=>e.toString().length&&!0!==e?e:20,u=p.a.div`
  ${e=>e.fixed&&"\n    position: fixed;\n"};
  display: inline-flex;
  ${e=>e.bkg&&"background-color: "+c[e.bkg]};
  ${e=>e.border&&`border: ${e.borderSize||1}px solid ${c[e.border]}`};
  ${e=>e.radius&&`border-radius: ${e.radius}px;`};
  ${e=>e.paddingAll&&`padding:${s(e.paddingAll)}px`}
  ${e=>e.paddingTop&&`padding-top:${s(e.paddingTop)}px`};
  ${e=>e.paddingLeft&&`padding-left:${s(e.paddingLeft)}px`};
  ${e=>e.paddingRight&&`padding-right:${s(e.paddingRight)}px`};
  ${e=>e.paddingBottom&&`padding-bottom:${s(e.paddingBottom)}px`};
  ${e=>e.paddingX&&`padding-left:${s(e.paddingX)}px; \n    padding-right:${s(e.paddingX)}px;`};
  ${e=>e.paddingY&&`padding-top:${s(e.paddingY)}px; \n    padding-bottom:${s(e.paddingY)}px;`};
  ${e=>e.marginAll&&`margin:${s(e.marginAll)}px`};
  ${e=>e.marginTop&&`margin-top:${s(e.marginTop)}px`};
  ${e=>e.marginLeft&&`margin-left:${s(e.marginLeft)}px`};
  ${e=>e.marginRight&&`margin-right:${s(e.marginRight)}px`};
  ${e=>e.marginBottom&&`margin-bottom:${s(e.marginBottom)}px`};
  ${e=>e.marginX&&`margin-left:${s(e.marginX)}px; margin-right:${s(e.marginX)}px;`};
  ${e=>e.marginY&&`margin-top:${s(e.marginY)}px; margin-bottom:${s(e.marginY)}px;`};
  ${e=>e.flex&&`flex: ${e.flex};`};
  ${e=>e.multiline&&"flex-wrap: wrap"};

  ${e=>e.hide&&`\n    @media ${m[e.hide]} {\n      display: none;\n    }\n  `};

  ${e=>e.show&&`\n    display: none;\n    @media ${m[e.show]} {\n      display: flex;\n    }\n  `};

  ${e=>e.bkgImage&&`\n    background-size: cover;\n    background-image: url(${e.bkgImage});\n  `};

  &.hover {
    cursor: pointer;
  }
`,x=Object(p.a)(u)`
  flex-direction: ${e=>e.reverse?"row-reverse":"row"};
  ${e=>e.expand&&"width: 100%"};
  ${e=>e.fit&&"flex: 1"};
  ${e=>e.noFlex&&"flex: 0"};
  ${e=>e.noShrink&&"flex-shrink: 0"};
  ${e=>e.top&&"align-items: flex-start"};
  ${e=>e.middle&&"align-items: center"};
  ${e=>e.bottom&&"align-items: flex-end"};
  ${e=>e.left&&"justify-content: flex-start"};
  ${e=>e.center&&"justify-content: center"};
  ${e=>e.right&&"justify-content: flex-end"};
  ${e=>e.spaceBetween&&"justify-content: space-between"};
  ${e=>e.truncate&&"\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  "};
`,$=Object(p.a)(u)`
  flex-direction: column;
  ${e=>e.fit&&"flex: 1;"};
  ${e=>e.expand&&"min-height: 100vh"};
  ${e=>e.top&&"justify-content: flex-start"};
  ${e=>e.middle&&"justify-content: center"};
  ${e=>e.bottom&&"justify-content: flex-end"};
  ${e=>e.left&&"align-items: flex-start"};
  ${e=>e.center&&"align-items: center"};
  ${e=>e.right&&"align-items: flex-end"};
  ${e=>e.stretch&&"width: 100%"};
`,f=p.a.div`
  display: flex;
  max-width: ${g};
  margin: 0 auto;
`;var h=n(7),b=n.n(h),w=n(87);const y=p.a.button`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  ${e=>e.expand&&"width: 100%"};
  border: ${e=>e.transparent?"1px solid white":"1px solid "+c.blue};
  background-color: ${e=>e.transparent?"transparent":c.blue};
  font-size: 11px;
  line-height: 18px;
  letter-spacing: 1.6px;
  padding: 25px 50px;
  transition: 0.4s;
  text-transform: uppercase;
  color: white;

  &:focus {
    outline: 0;
  }
`,E=p.a.div`
  display: inline-flex;
  &:hover {
    ${y} {
      background-color: white;
      color: ${c.blue};
    }

    a {
      width: 100%;
      height: 100%;
      text-decoration: none;
    }
  }
`,k=({to:e,label:t,onClick:n,transparent:a,expand:i})=>r.a.createElement(E,null,e?r.a.createElement(w.a,{to:e},r.a.createElement(y,{onClick:n,transparent:a,expand:i},t)):r.a.createElement(y,{onClick:n,transparent:a,expand:i},t));k.propTypes={transparent:b.a.bool,expand:b.a.bool,to:b.a.string,label:b.a.string,onClick:b.a.func};const v=p.a.header`
  display: flex;
  background: ${c.blue};
  justify-content: center;
  padding: 20px;
  color: white;
  @media ${m.laptop} {
    padding: 40px;
  }
`,j=Object(p.a)(f)`
  flex-direction: column;
  @media ${m.laptop} {
    flex-direction: row;
  }
`,L=p.a.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
  align-items: center;
  @media ${m.laptop} {
    align-items: flex-end;
  }
  @media ${m.laptop} {
    padding: 40px;
  }

  h1 {
    font-size: 70px;
    line-height: 1;
    font-family: 'TelefonicaExtraLight';
    text-align: center;
  }

  p {
    font-size: 20px;
    line-height: 1.3;
    text-align: center;
    @media ${m.laptop} {
      text-align: right;
    }
  }
`,T=p.a.div`
  display: flex;
  flex: 1;
  padding: 20px;
  justify-content: center;
  align-items: center;
  @media ${m.laptopL} {
    flex: 2;
  }
  @media ${m.laptop} {
    padding: 40px;
  }

  img {
    max-width: 300px;
    @media ${m.laptopL} {
      max-width: 600px;
    }
  }
`,_=[{title:"Easy to Use",imageUrl:"img/undraw_docusaurus_mountain.svg",description:r.a.createElement(r.a.Fragment,null,"Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.")},{title:"Focus on What Matters",imageUrl:"img/undraw_docusaurus_tree.svg",description:r.a.createElement(r.a.Fragment,null,"Docusaurus lets you focus on your docs, and we'll do the chores. Go ahead and move your docs into the ",r.a.createElement("code",null,"docs")," directory.")},{title:"Powered by React",imageUrl:"img/undraw_docusaurus_react.svg",description:r.a.createElement(r.a.Fragment,null,"Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer.")}];function O({imageUrl:e,title:t,description:n}){const a=Object(d.a)(e);return r.a.createElement($,{paddingAll:!0,center:!0},a&&r.a.createElement("img",{src:a,alt:t}),r.a.createElement($,{paddingTop:"40",center:!0},r.a.createElement("h3",null,t),r.a.createElement("p",null,n)))}t.default=function(){const e=Object(o.a)(),{siteConfig:t={}}=e;return r.a.createElement(l.a,{title:"Hello from "+t.title,description:"Description will go into a meta tag in <head />"},r.a.createElement(v,null,r.a.createElement(j,null,r.a.createElement(T,null,r.a.createElement("img",{src:"img/undraw_docusaurus_tree.svg",alt:""})),r.a.createElement(L,null,r.a.createElement("h1",null,t.title),r.a.createElement(x,{marginBottom:!0}),r.a.createElement("p",null,t.tagline),r.a.createElement(x,{marginTop:"10"}),r.a.createElement(k,{transparent:!0,to:Object(d.a)("docs/"),label:"\xa1M\xe1s informaci\xf3n aqu\xed!"})))),r.a.createElement(f,null,_&&_.length>0&&r.a.createElement(x,{paddingAll:"40"},_.map(((e,t)=>r.a.createElement(O,Object(a.a)({key:t},e)))))))}}}]);
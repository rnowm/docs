(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{83:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n(0),r=n.n(i),l=(n(89),n(95)),o=n(92),d=n(93),p=(n(77),n(107));const g={blue:"#0ae"},s="2560px",c={mobileS:`(min-width: ${"320px"})`,mobileM:`(min-width: ${"375px"})`,mobileL:`(min-width: ${"425px"})`,mobileXL:`(min-width: ${"640px"})`,tablet:`(min-width: ${"768px"})`,tabletL:`(min-width: ${"995px"})`,laptop:`(min-width: ${"1024px"})`,laptopL:`(min-width: ${"1118px"})`,desktop:`(min-width: ${s})`,desktopL:`(min-width: ${s})`},m=p.a.header`
  display: flex;
  background: ${g.blue};
  padding: 40px;
  color: white;
`,u=p.a.header`
  display: flex;
  flex: 1;
  padding: 40px;
  justify-content: right;

  h1 {
    font-size: 70px;
    line-height: 1;
    font-family: 'TelefonicaExtraLight';
    text-align: right;
  }

  p {
    font-size: 20px;
    text-align: right;
    line-height: 1.3;
  }
`,x=p.a.header`
  display: flex;
  flex: 2;
  padding: 40px;
`,$=e=>e.toString().length&&!0!==e?e:20,h=p.a.div`
  ${e=>e.fixed&&"\n    position: fixed;\n"};
  display: inline-flex;
  ${e=>e.bkg&&"background-color: "+g[e.bkg]};
  ${e=>e.border&&`border: ${e.borderSize||1}px solid ${g[e.border]}`};
  ${e=>e.radius&&`border-radius: ${e.radius}px;`};
  ${e=>e.paddingAll&&`padding:${$(e.paddingAll)}px`}
  ${e=>e.paddingTop&&`padding-top:${$(e.paddingTop)}px`};
  ${e=>e.paddingLeft&&`padding-left:${$(e.paddingLeft)}px`};
  ${e=>e.paddingRight&&`padding-right:${$(e.paddingRight)}px`};
  ${e=>e.paddingBottom&&`padding-bottom:${$(e.paddingBottom)}px`};
  ${e=>e.paddingX&&`padding-left:${$(e.paddingX)}px; \n    padding-right:${$(e.paddingX)}px;`};
  ${e=>e.paddingY&&`padding-top:${$(e.paddingY)}px; \n    padding-bottom:${$(e.paddingY)}px;`};
  ${e=>e.marginAll&&`margin:${$(e.marginAll)}px`};
  ${e=>e.marginTop&&`margin-top:${$(e.marginTop)}px`};
  ${e=>e.marginLeft&&`margin-left:${$(e.marginLeft)}px`};
  ${e=>e.marginRight&&`margin-right:${$(e.marginRight)}px`};
  ${e=>e.marginBottom&&`margin-bottom:${$(e.marginBottom)}px`};
  ${e=>e.marginX&&`margin-left:${$(e.marginX)}px; margin-right:${$(e.marginX)}px;`};
  ${e=>e.marginY&&`margin-top:${$(e.marginY)}px; margin-bottom:${$(e.marginY)}px;`};
  ${e=>e.flex&&`flex: ${e.flex};`};
  ${e=>e.multiline&&"flex-wrap: wrap"};

  ${e=>e.hide&&`\n    @media ${c[e.hide]} {\n      display: none;\n    }\n  `};

  ${e=>e.show&&`\n    display: none;\n    @media ${c[e.show]} {\n      display: flex;\n    }\n  `};

  ${e=>e.bkgImage&&`\n    background-size: cover;\n    background-image: url(${e.bkgImage});\n  `};

  &.hover {
    cursor: pointer;
  }
`,f=Object(p.a)(h)`
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
`,b=Object(p.a)(h)`
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
`;var w=n(7),y=n.n(w),E=n(88);const k=p.a.button`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  ${e=>e.expand&&"width: 100%"};
  border: ${e=>e.transparent?"1px solid white":"1px solid "+g.blue};
  background-color: ${e=>e.transparent?"transparent":g.blue};
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
`,v=p.a.div`
  &:hover {
    ${k} {
      background-color: white;
      color: ${g.blue};
    }

    a {
      text-decoration: none;
    }
  }
`,j=({to:e,label:t,onClick:n,transparent:a,expand:i})=>r.a.createElement(v,null,e?r.a.createElement(E.a,{to:e},r.a.createElement(k,{onClick:n,transparent:a,expand:i},t)):r.a.createElement(k,{onClick:n,transparent:a,expand:i},t));j.propTypes={transparent:y.a.bool,expand:y.a.bool,to:y.a.string,label:y.a.string,onClick:y.a.func};const L=[{title:"Easy to Use",imageUrl:"img/undraw_docusaurus_mountain.svg",description:r.a.createElement(r.a.Fragment,null,"Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.")},{title:"Focus on What Matters",imageUrl:"img/undraw_docusaurus_tree.svg",description:r.a.createElement(r.a.Fragment,null,"Docusaurus lets you focus on your docs, and we'll do the chores. Go ahead and move your docs into the ",r.a.createElement("code",null,"docs")," directory.")},{title:"Powered by React",imageUrl:"img/undraw_docusaurus_react.svg",description:r.a.createElement(r.a.Fragment,null,"Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer.")}];function T({imageUrl:e,title:t,description:n}){const a=Object(d.a)(e);return r.a.createElement(b,{paddingAll:!0,center:!0},a&&r.a.createElement("img",{src:a,alt:t}),r.a.createElement(b,{paddingTop:"40",center:!0},r.a.createElement("h3",null,t),r.a.createElement("p",null,n)))}t.default=function(){const e=Object(o.a)(),{siteConfig:t={}}=e;return r.a.createElement(l.a,{title:"Hello from "+t.title,description:"Description will go into a meta tag in <head />"},r.a.createElement(m,null,r.a.createElement(x,null,r.a.createElement("img",{src:"img/undraw_docusaurus_tree.svg",alt:""})),r.a.createElement(u,null,r.a.createElement(b,{right:!0},r.a.createElement("h1",null,t.title),r.a.createElement(f,{marginTop:!0,marginBottom:"10"},r.a.createElement("p",null,t.tagline)),r.a.createElement(j,{transparent:!0,to:Object(d.a)("docs/"),label:"\xa1M\xe1s informaci\xf3n aqu\xed!"})))),r.a.createElement(b,null,L&&L.length>0&&r.a.createElement(f,{paddingAll:"40"},L.map(((e,t)=>r.a.createElement(T,Object(a.a)({key:t},e)))))))}}}]);
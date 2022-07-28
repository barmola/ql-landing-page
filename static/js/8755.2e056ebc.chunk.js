"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[8755],{67871:function(e,r,t){t.d(r,{Z:function(){return m}});var n=t(1413),a=t(45987),i=t(9506),o=t(61113),s=t(47723),l=t(29466),c=t(3404),d=t(46417),x=["links","activeLast"];function u(e){var r=e.links,t=e.activeLast,s=void 0!==t&&t,l=(0,a.Z)(e,x),u=r[r.length-1].name,p=r.map((function(e){return(0,d.jsx)(h,{link:e},e.name)})),m=r.map((function(e){return(0,d.jsx)("div",{children:e.name!==u?(0,d.jsx)(h,{link:e}):(0,d.jsx)(o.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:u})},e.name)}));return(0,d.jsx)(c.Z,(0,n.Z)((0,n.Z)({separator:(0,d.jsx)(i.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},l),{},{children:s?p:m}))}function h(e){var r=e.link,t=r.href,n=r.name,a=r.icon;return(0,d.jsxs)(s.Z,{variant:"body2",component:l.rU,to:t||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[a&&(0,d.jsx)(i.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:a}),n]},n)}var p=["links","action","heading","moreLink","sx"];function m(e){var r=e.links,t=e.action,l=e.heading,c=e.moreLink,x=void 0===c?[]:c,h=e.sx,m=(0,a.Z)(e,p);return(0,d.jsxs)(i.Z,{sx:(0,n.Z)({mb:5},h),children:[(0,d.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,d.jsxs)(i.Z,{sx:{flexGrow:1},children:[(0,d.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:l}),(0,d.jsx)(u,(0,n.Z)({links:r},m))]}),t&&(0,d.jsx)(i.Z,{sx:{flexShrink:0},children:t})]}),(0,d.jsx)(i.Z,{sx:{mt:2},children:"string"===typeof x?(0,d.jsx)(s.Z,{href:x,target:"_blank",rel:"noopener",variant:"body2",children:x}):x.map((function(e){return(0,d.jsx)(s.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},68755:function(e,r,t){t.r(r),t.d(r,{default:function(){return C}});var n=t(43265),a=t(9506),i=t(48175),o=t(11338),s=t(95597),l=t(71361),c=t(67871),d=t(1413),x=t(88564),u=t(73428),h=t(63585),p=t(61113),m=t(35898),f=t(19536),v=t(50769),Z=t(76221),g=t(3484),b=t(26746),j=t(40483),y=t(46417),k=(0,x.ZP)("div")((function(e){var r=e.theme;return(0,d.Z)((0,d.Z)({},(0,v.Z)().bgBlur({blur:2,color:r.palette.primary.darker})),{},{top:0,zIndex:8,content:"''",width:"100%",height:"100%",position:"absolute"})}));function w(e){var r=e.user,t=r.name,n=r.cover,i=r.position,o=r.follower,s=r.totalPost,l=r.avatarUrl,c=r.following;return(0,y.jsxs)(u.Z,{sx:{textAlign:"center"},children:[(0,y.jsxs)(a.Z,{sx:{position:"relative"},children:[(0,y.jsx)(j.Z,{src:"https://minimal-assets-api-dev.vercel.app/assets/icons/shape-avatar.svg",sx:{width:144,height:62,zIndex:10,left:0,right:0,bottom:-26,mx:"auto",position:"absolute",color:"background.paper"}}),(0,y.jsx)(h.Z,{alt:t,src:l,sx:{width:64,height:64,zIndex:11,left:0,right:0,bottom:-32,mx:"auto",position:"absolute"}}),(0,y.jsx)(k,{}),(0,y.jsx)(g.Z,{src:n,alt:n,ratio:"16/9"})]}),(0,y.jsx)(p.Z,{variant:"subtitle1",sx:{mt:6},children:t}),(0,y.jsx)(p.Z,{variant:"body2",sx:{color:"text.secondary"},children:i}),(0,y.jsx)(m.Z,{alignItems:"center",children:(0,y.jsx)(b.Z,{initialColor:!0,sx:{my:2.5}})}),(0,y.jsx)(f.Z,{sx:{borderStyle:"dashed"}}),(0,y.jsxs)(a.Z,{sx:{py:3,display:"grid",gridTemplateColumns:"repeat(3, 1fr)"},children:[(0,y.jsxs)("div",{children:[(0,y.jsx)(p.Z,{variant:"caption",component:"div",sx:{mb:.75,color:"text.disabled"},children:"Follower"}),(0,y.jsx)(p.Z,{variant:"subtitle1",children:(0,Z.v1)(o)})]}),(0,y.jsxs)("div",{children:[(0,y.jsx)(p.Z,{variant:"caption",component:"div",sx:{mb:.75,color:"text.disabled"},children:"Following"}),(0,y.jsx)(p.Z,{variant:"subtitle1",children:(0,Z.v1)(c)})]}),(0,y.jsxs)("div",{children:[(0,y.jsx)(p.Z,{variant:"caption",component:"div",sx:{mb:.75,color:"text.disabled"},children:"Total Post"}),(0,y.jsx)(p.Z,{variant:"subtitle1",children:(0,Z.v1)(s)})]})]})]})}function C(){var e=(0,o.Z)().themeStretch;return(0,y.jsx)(l.Z,{title:"User: Cards",children:(0,y.jsxs)(n.Z,{maxWidth:!e&&"lg",children:[(0,y.jsx)(c.Z,{heading:"User Cards",links:[{name:"Dashboard",href:i.vB.root},{name:"User",href:i.vB.user.root},{name:"Cards"}]}),(0,y.jsx)(a.Z,{sx:{display:"grid",gap:3,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"}},children:s.oe.map((function(e){return(0,y.jsx)(w,{user:e},e.id)}))})]})})}},3404:function(e,r,t){t.d(r,{Z:function(){return I}});var n=t(93433),a=t(29439),i=t(4942),o=t(87462),s=t(63366),l=t(47313),c=(t(96214),t(83061)),d=t(50317),x=t(88564),u=t(25469),h=t(61113),p=t(17551),m=t(54750),f=t(46417),v=(0,m.Z)((0,f.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),Z=t(38743),g=(0,x.ZP)(Z.Z)((function(e){var r=e.theme;return(0,o.Z)({display:"flex",marginLeft:"calc(".concat(r.spacing(1)," * 0.5)"),marginRight:"calc(".concat(r.spacing(1)," * 0.5)")},"light"===r.palette.mode?{backgroundColor:r.palette.grey[100],color:r.palette.grey[700]}:{backgroundColor:r.palette.grey[700],color:r.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,o.Z)({},"light"===r.palette.mode?{backgroundColor:r.palette.grey[200]}:{backgroundColor:r.palette.grey[600]}),"&:active":(0,o.Z)({boxShadow:r.shadows[0]},"light"===r.palette.mode?{backgroundColor:(0,p._4)(r.palette.grey[200],.12)}:{backgroundColor:(0,p._4)(r.palette.grey[600],.12)})})})),b=(0,x.ZP)(v)({width:24,height:16});var j=function(e){var r=e;return(0,f.jsx)("li",{children:(0,f.jsx)(g,(0,o.Z)({focusRipple:!0},e,{ownerState:r,children:(0,f.jsx)(b,{ownerState:r})}))})},y=t(22131);function k(e){return(0,y.Z)("MuiBreadcrumbs",e)}var w=(0,t(655).Z)("MuiBreadcrumbs",["root","ol","li","separator"]),C=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],S=(0,x.ZP)(h.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,r){return[(0,i.Z)({},"& .".concat(w.li),r.li),r.root]}})({}),B=(0,x.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,r){return r.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),_=(0,x.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,r){return r.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function R(e,r,t,n){return e.reduce((function(a,i,o){return o<e.length-1?a=a.concat(i,(0,f.jsx)(_,{"aria-hidden":!0,className:r,ownerState:n,children:t},"separator-".concat(o))):a.push(i),a}),[])}var I=l.forwardRef((function(e,r){var t=(0,u.Z)({props:e,name:"MuiBreadcrumbs"}),i=t.children,x=t.className,h=t.component,p=void 0===h?"nav":h,m=t.expandText,v=void 0===m?"Show path":m,Z=t.itemsAfterCollapse,g=void 0===Z?1:Z,b=t.itemsBeforeCollapse,y=void 0===b?1:b,w=t.maxItems,_=void 0===w?8:w,I=t.separator,M=void 0===I?"/":I,P=(0,s.Z)(t,C),z=l.useState(!1),L=(0,a.Z)(z,2),N=L[0],T=L[1],A=(0,o.Z)({},t,{component:p,expanded:N,expandText:v,itemsAfterCollapse:g,itemsBeforeCollapse:y,maxItems:_,separator:M}),U=function(e){var r=e.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},k,r)}(A),W=l.useRef(null),F=l.Children.toArray(i).filter((function(e){return l.isValidElement(e)})).map((function(e,r){return(0,f.jsx)("li",{className:U.li,children:e},"child-".concat(r))}));return(0,f.jsx)(S,(0,o.Z)({ref:r,component:p,color:"text.secondary",className:(0,c.Z)(U.root,x),ownerState:A},P,{children:(0,f.jsx)(B,{className:U.ol,ref:W,ownerState:A,children:R(N||_&&F.length<=_?F:function(e){return y+g>=e.length?e:[].concat((0,n.Z)(e.slice(0,y)),[(0,f.jsx)(j,{"aria-label":v,onClick:function(){T(!0);var e=W.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,n.Z)(e.slice(e.length-g,e.length)))}(F),U.separator,M,A)})}))}))}}]);
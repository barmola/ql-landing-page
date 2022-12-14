"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[5312],{3404:function(e,t,o){o.d(t,{Z:function(){return j}});var r=o(93433),a=o(29439),n=o(4942),l=o(87462),i=o(63366),c=o(47313),s=(o(96214),o(83061)),d=o(50317),u=o(88564),p=o(25469),m=o(61113),f=o(17551),h=o(54750),g=o(46417),v=(0,h.Z)((0,g.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),b=o(38743),Z=(0,u.ZP)(b.Z)((function(e){var t=e.theme;return(0,l.Z)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,l.Z)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":(0,l.Z)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:(0,f._4)(t.palette.grey[200],.12)}:{backgroundColor:(0,f._4)(t.palette.grey[600],.12)})})})),x=(0,u.ZP)(v)({width:24,height:16});var y=function(e){var t=e;return(0,g.jsx)("li",{children:(0,g.jsx)(Z,(0,l.Z)({focusRipple:!0},e,{ownerState:t,children:(0,g.jsx)(x,{ownerState:t})}))})},C=o(22131);function k(e){return(0,C.Z)("MuiBreadcrumbs",e)}var R=(0,o(655).Z)("MuiBreadcrumbs",["root","ol","li","separator"]),w=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],z=(0,u.ZP)(m.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[(0,n.Z)({},"& .".concat(R.li),t.li),t.root]}})({}),S=(0,u.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),B=(0,u.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function M(e,t,o,r){return e.reduce((function(a,n,l){return l<e.length-1?a=a.concat(n,(0,g.jsx)(B,{"aria-hidden":!0,className:t,ownerState:r,children:o},"separator-".concat(l))):a.push(n),a}),[])}var j=c.forwardRef((function(e,t){var o=(0,p.Z)({props:e,name:"MuiBreadcrumbs"}),n=o.children,u=o.className,m=o.component,f=void 0===m?"nav":m,h=o.expandText,v=void 0===h?"Show path":h,b=o.itemsAfterCollapse,Z=void 0===b?1:b,x=o.itemsBeforeCollapse,C=void 0===x?1:x,R=o.maxItems,B=void 0===R?8:R,j=o.separator,_=void 0===j?"/":j,N=(0,i.Z)(o,w),T=c.useState(!1),F=(0,a.Z)(T,2),P=F[0],W=F[1],O=(0,l.Z)({},o,{component:f,expanded:P,expandText:v,itemsAfterCollapse:Z,itemsBeforeCollapse:C,maxItems:B,separator:_}),q=function(e){var t=e.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},k,t)}(O),A=c.useRef(null),I=c.Children.toArray(n).filter((function(e){return c.isValidElement(e)})).map((function(e,t){return(0,g.jsx)("li",{className:q.li,children:e},"child-".concat(t))}));return(0,g.jsx)(z,(0,l.Z)({ref:t,component:f,color:"text.secondary",className:(0,s.Z)(q.root,u),ownerState:O},N,{children:(0,g.jsx)(S,{className:q.ol,ref:A,ownerState:O,children:M(P||B&&I.length<=B?I:function(e){return C+Z>=e.length?e:[].concat((0,r.Z)(e.slice(0,C)),[(0,g.jsx)(y,{"aria-label":v,onClick:function(){W(!0);var e=A.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,r.Z)(e.slice(e.length-Z,e.length)))}(I),q.separator,_,O)})}))}))},3789:function(e,t,o){o.d(t,{Z:function(){return x}});var r=o(4942),a=o(63366),n=o(87462),l=o(47313),i=o(83061),c=o(50317),s=o(17551),d=o(38743),u=o(91615),p=o(25469),m=o(88564),f=o(22131);function h(e){return(0,f.Z)("MuiToggleButton",e)}var g=(0,o(655).Z)("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge"]),v=o(46417),b=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],Z=(0,m.ZP)(d.Z,{name:"MuiToggleButton",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t["size".concat((0,u.Z)(o.size))]]}})((function(e){var t,o=e.theme,a=e.ownerState,l="standard"===a.color?o.palette.text.primary:o.palette[a.color].main;return(0,n.Z)({},o.typography.button,{borderRadius:o.shape.borderRadius,padding:11,border:"1px solid ".concat(o.palette.divider),color:o.palette.action.active},a.fullWidth&&{width:"100%"},(t={},(0,r.Z)(t,"&.".concat(g.disabled),{color:o.palette.action.disabled,border:"1px solid ".concat(o.palette.action.disabledBackground)}),(0,r.Z)(t,"&:hover",{textDecoration:"none",backgroundColor:(0,s.Fq)(o.palette.text.primary,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}),(0,r.Z)(t,"&.".concat(g.selected),{color:l,backgroundColor:(0,s.Fq)(l,o.palette.action.selectedOpacity),"&:hover":{backgroundColor:(0,s.Fq)(l,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,s.Fq)(l,o.palette.action.selectedOpacity)}}}),t),"small"===a.size&&{padding:7,fontSize:o.typography.pxToRem(13)},"large"===a.size&&{padding:15,fontSize:o.typography.pxToRem(15)})})),x=l.forwardRef((function(e,t){var o=(0,p.Z)({props:e,name:"MuiToggleButton"}),r=o.children,l=o.className,s=o.color,d=void 0===s?"standard":s,m=o.disabled,f=void 0!==m&&m,g=o.disableFocusRipple,x=void 0!==g&&g,y=o.fullWidth,C=void 0!==y&&y,k=o.onChange,R=o.onClick,w=o.selected,z=o.size,S=void 0===z?"medium":z,B=o.value,M=(0,a.Z)(o,b),j=(0,n.Z)({},o,{color:d,disabled:f,disableFocusRipple:x,fullWidth:C,size:S}),_=function(e){var t=e.classes,o=e.fullWidth,r=e.selected,a=e.disabled,n=e.size,l=e.color,i={root:["root",r&&"selected",a&&"disabled",o&&"fullWidth","size".concat((0,u.Z)(n)),l]};return(0,c.Z)(i,h,t)}(j);return(0,v.jsx)(Z,(0,n.Z)({className:(0,i.Z)(_.root,l),disabled:f,focusRipple:!x,ref:t,onClick:function(e){R&&(R(e,B),e.defaultPrevented)||k&&k(e,B)},onChange:k,value:B,ownerState:j,"aria-pressed":w},M,{children:r}))}))}}]);
"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[1222],{25416:function(e,t,n){n.d(t,{Z:function(){return h}});var i=n(1413),r=n(45987),o=n(88564),s=n(61113),a=n(3484),l=n(46417),c=["title","description","img"],d=(0,o.ZP)("div")((function(e){return{height:"100%",display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:e.theme.spacing(8,2)}}));function h(e){var t=e.title,n=e.description,o=e.img,h=(0,r.Z)(e,c);return(0,l.jsxs)(d,(0,i.Z)((0,i.Z)({},h),{},{children:[(0,l.jsx)(a.Z,{disabledEffect:!0,visibleByDefault:!0,alt:"empty content",src:o||"/assets/illustrations/illustration_empty_content.svg",sx:{height:240,mb:3}}),(0,l.jsx)(s.Z,{variant:"h5",gutterBottom:!0,children:t}),n&&(0,l.jsx)(s.Z,{variant:"body2",sx:{color:"text.secondary"},children:n})]}))}},40885:function(e,t,n){n.d(t,{cU:function(){return S},i5:function(){return m},A0:function(){return d}});var i=n(1413),r=n(88564),o=n(9506),s=n(46417),a=(0,r.ZP)(o.Z,{shouldForwardProp:function(e){return"rounded"!==e}})((function(e){var t=e.rounded;return{display:"flex",listStyle:"none",alignItems:"center",justifyContent:"center","& li":{width:18,height:18,opacity:.32,cursor:"pointer"},"& li.slick-active":(0,i.Z)({opacity:1},t&&{"& .dotActive":{width:16,borderRadius:6}})}})),l=(0,r.ZP)("div")((function(){return{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}})),c=(0,r.ZP)("span")((function(e){var t=e.theme;return{width:8,height:8,borderRadius:"50%",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.short})}}));function d(e){var t=null===e||void 0===e?void 0:e.color,n=(null===e||void 0===e?void 0:e.rounded)||!1;return{appendDots:function(t){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a,(0,i.Z)((0,i.Z)({rounded:n,component:"ul"},e),{},{children:t}))})},customPaging:function(){return(0,s.jsx)(l,{children:(0,s.jsx)(c,{className:"dotActive",sx:{bgcolor:t||"primary.main"}})})}}}var h=n(45987),u=n(19860),x=n(35898),p=n(42593),Z=n(57597),f=["filled","customIcon","onNext","onPrevious","children"],g=(0,r.ZP)(Z.w_,{shouldForwardProp:function(e){return"filled"!==e}})((function(e){var t=e.filled,n=e.theme;return(0,i.Z)({width:40,height:40,cursor:"pointer",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:n.palette.text.primary}},t&&{opacity:.48,borderRadius:1.5*Number(n.shape.borderRadius),color:n.palette.common.white,backgroundColor:n.palette.grey[900],"&:hover":{opacity:1,color:n.palette.common.white,backgroundColor:n.palette.grey[900]}})}));function m(e){var t=e.filled,n=void 0!==t&&t,r=e.customIcon,a=e.onNext,l=e.onPrevious,c=e.children,d=(0,h.Z)(e,f),p="rtl"===(0,u.Z)().direction,Z={position:"absolute",mt:-2.5,top:"50%",zIndex:9};return c?(0,s.jsxs)(o.Z,(0,i.Z)((0,i.Z)({},d),{},{children:[(0,s.jsx)(o.Z,{className:"arrow left",sx:(0,i.Z)((0,i.Z)({},Z),{},{left:0}),children:(0,s.jsx)(g,{filled:n,onClick:l,children:j(r,p)})}),c,(0,s.jsx)(o.Z,{className:"arrow right",sx:(0,i.Z)((0,i.Z)({},Z),{},{right:0}),children:(0,s.jsx)(g,{filled:n,onClick:a,children:v(r,p)})})]})):(0,s.jsxs)(x.Z,(0,i.Z)((0,i.Z)({direction:"row",spacing:1},d),{},{children:[(0,s.jsx)(g,{className:"arrow left",filled:n,onClick:l,children:j(r,p)}),(0,s.jsx)(g,{className:"arrow right",filled:n,onClick:a,children:v(r,p)})]}))}var j=function(e,t){return(0,s.jsx)(p.Z,{icon:e||"eva:arrow-right-fill",sx:(0,i.Z)({width:20,height:20,transform:" scaleX(-1)"},t&&{transform:" scaleX(1)"})})},v=function(e,t){return(0,s.jsx)(p.Z,{icon:e||"eva:arrow-right-fill",sx:(0,i.Z)({width:20,height:20},t&&{transform:" scaleX(-1)"})})},b=n(17551),w=n(47131),y=n(61113),k=["index","total","onNext","onPrevious","customIcon"],C=(0,r.ZP)(o.Z)((function(e){var t=e.theme;return{zIndex:9,display:"flex",alignItems:"center",position:"absolute",bottom:t.spacing(2),right:t.spacing(2),color:t.palette.common.white,borderRadius:t.shape.borderRadius,backgroundColor:(0,b.Fq)(t.palette.grey[900],.48)}})),I=(0,r.ZP)(w.Z)((function(e){return{padding:6,opacity:.48,color:e.theme.palette.common.white,"&:hover":{opacity:1}}}));function S(e){var t=e.index,n=e.total,r=e.onNext,o=e.onPrevious,a=e.customIcon,l=(0,h.Z)(e,k),c="rtl"===(0,u.Z)().direction;return(0,s.jsxs)(C,(0,i.Z)((0,i.Z)({},l),{},{children:[(0,s.jsx)(I,{size:"small",onClick:o,children:P(a,c)}),(0,s.jsxs)(y.Z,{variant:"subtitle2",children:[t+1,"/",n]}),(0,s.jsx)(I,{size:"small",onClick:r,children:R(a,c)})]}))}var P=function(e,t){return(0,s.jsx)(p.Z,{icon:e||"eva:arrow-right-fill",sx:(0,i.Z)({width:20,height:20,transform:" scaleX(-1)"},t&&{transform:" scaleX(1)"})})},R=function(e,t){return(0,s.jsx)(p.Z,{icon:e||"eva:arrow-right-fill",sx:(0,i.Z)({width:20,height:20},t&&{transform:" scaleX(-1)"})})}},55844:function(e,t,n){n.d(t,{$W:function(){return f},K:function(){return w},V7:function(){return h},et:function(){return a},Nl:function(){return I},hM:function(){return Z}});var i=n(24076),r=n(67478),o=n(25416),s=n(46417);function a(e){var t=e.isNotFound;return(0,s.jsx)(i.Z,{children:t?(0,s.jsx)(r.Z,{colSpan:12,children:(0,s.jsx)(o.Z,{title:"No Data",sx:{"& span.MuiBox-root":{height:160}}})}):(0,s.jsx)(r.Z,{colSpan:12,sx:{p:0}})})}var l=n(47131),c=n(42593),d=n(28100);function h(e){var t=e.actions,n=e.open,i=e.onClose,r=e.onOpen;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.Z,{onClick:r,children:(0,s.jsx)(c.Z,{icon:"eva:more-vertical-fill",width:20,height:20})}),(0,s.jsx)(d.Z,{open:Boolean(n),anchorEl:n,onClose:i,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},arrow:"right-top",sx:{mt:-1,width:160,"& .MuiMenuItem-root":{px:1,typography:"body2",borderRadius:.75,"& svg":{mr:2,width:20,height:20}}},children:t})]})}var u=n(1413),x=n(35898),p=n(84488);function Z(e){var t=Object.assign({},e);return(0,s.jsx)(i.Z,(0,u.Z)((0,u.Z)({},t),{},{children:(0,s.jsx)(r.Z,{colSpan:12,children:(0,s.jsxs)(x.Z,{spacing:3,direction:"row",alignItems:"center",children:[(0,s.jsx)(p.Z,{variant:"rectangular",width:40,height:40,sx:{borderRadius:1,flexShrink:0}}),(0,s.jsx)(p.Z,{variant:"text",width:"100%",height:20}),(0,s.jsx)(p.Z,{variant:"text",width:160,height:20}),(0,s.jsx)(p.Z,{variant:"text",width:160,height:20}),(0,s.jsx)(p.Z,{variant:"text",width:160,height:20}),(0,s.jsx)(p.Z,{variant:"text",width:160,height:20})]})})}))}function f(e){var t=e.emptyRows,n=e.height;return t?(0,s.jsx)(i.Z,{sx:(0,u.Z)({},n&&{height:n*t}),children:(0,s.jsx)(r.Z,{colSpan:9})}):null}var g=n(23477),m=n(44758),j=n(82558),v=n(9506),b={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function w(e){var t=e.order,n=e.orderBy,o=e.rowCount,a=void 0===o?0:o,l=e.headLabel,c=e.numSelected,d=void 0===c?0:c,h=e.onSort,x=e.onSelectAllRows,p=e.sx;return(0,s.jsx)(g.Z,{sx:p,children:(0,s.jsxs)(i.Z,{children:[x&&(0,s.jsx)(r.Z,{padding:"checkbox",children:(0,s.jsx)(m.Z,{indeterminate:d>0&&d<a,checked:a>0&&d===a,onChange:function(e){return x(e.target.checked)}})}),l.map((function(e){return(0,s.jsx)(r.Z,{align:e.align||"left",sortDirection:n===e.id&&t,sx:{width:e.width,minWidth:e.minWidth},children:h?(0,s.jsxs)(j.Z,{hideSortIcon:!0,active:n===e.id,direction:n===e.id?t:"asc",onClick:function(){return h(e.id)},sx:{textTransform:"capitalize"},children:[e.label,n===e.id?(0,s.jsx)(v.Z,{sx:(0,u.Z)({},b),children:"desc"===t?"sorted descending":"sorted ascending"}):null]}):e.label},e.id)}))]})})}var y=n(45987),k=n(61113),C=["dense","actions","rowCount","numSelected","onSelectAllRows","sx"];function I(e){var t=e.dense,n=e.actions,i=e.rowCount,r=e.numSelected,o=e.onSelectAllRows,a=e.sx,l=(0,y.Z)(e,C);return(0,s.jsxs)(x.Z,(0,u.Z)((0,u.Z)({direction:"row",alignItems:"center",sx:(0,u.Z)((0,u.Z)({px:2,top:0,left:8,right:8,zIndex:9,height:58,borderRadius:1,position:"absolute",bgcolor:"primary.lighter"},t&&{pl:1,height:38}),a)},l),{},{children:[(0,s.jsx)(m.Z,{indeterminate:r>0&&r<i,checked:i>0&&r===i,onChange:function(e){return o(e.target.checked)}}),(0,s.jsxs)(k.Z,{variant:"subtitle1",sx:(0,u.Z)({ml:2,flexGrow:1,color:"primary.main"},t&&{ml:3}),children:[r," selected"]}),n&&n]}))}},91222:function(e,t,n){n.d(t,{mu:function(){return Ze},q7:function(){return be},OP:function(){return W},H$:function(){return Q},mE:function(){return ae},mb:function(){return Ce},wz:function(){return he},E0:function(){return C},BB:function(){return v},xq:function(){return me}});var i=n(1413),r=n(45987),o=n(19118),s=n.n(o),a=n(58446),l=n(88564),c=n(19860),d=n(73428),h=n(9506),u=n(61113),x=n(76221),p=n(42593),Z=n(48999),f=n(46417),g=["title","total","icon","color","chartData"],m=(0,l.ZP)(d.Z)((function(e){var t=e.theme;return{display:"flex",position:"relative",alignItems:"center",padding:t.spacing(3),backgroundColor:t.palette.primary.darker}})),j=(0,l.ZP)(p.Z)((function(e){var t=e.theme;return{width:120,height:120,opacity:.12,position:"absolute",right:t.spacing(-3),color:t.palette.common.white}}));function v(e){var t=e.title,n=e.total,o=e.icon,l=e.color,d=void 0===l?"primary":l,p=e.chartData,v=(0,r.Z)(e,g),b=(0,c.Z)(),w=s()((0,Z.F)(),{colors:[b.palette[d].main],chart:{sparkline:{enabled:!0}},legend:{show:!1},plotOptions:{radialBar:{hollow:{size:"78%"},track:{margin:0},dataLabels:{name:{show:!1},value:{offsetY:6,color:b.palette.common.white,fontSize:b.typography.subtitle2.fontSize}}}}});return(0,f.jsxs)(m,(0,i.Z)((0,i.Z)({sx:{bgcolor:b.palette[d].darker}},v),{},{children:[(0,f.jsx)(a.Z,{type:"radialBar",series:[p],options:w,width:86,height:86}),(0,f.jsxs)(h.Z,{sx:{ml:3,color:"common.white"},children:[(0,f.jsxs)(u.Z,{variant:"h4",children:[" ",(0,x.FK)(n)]}),(0,f.jsx)(u.Z,{variant:"body2",sx:{opacity:.72},children:t})]}),(0,f.jsx)(j,{icon:o})]}))}var b=n(4942),w=n(93405),y=["title","description","action","img"],k=(0,l.ZP)(d.Z)((function(e){var t=e.theme;return(0,b.Z)({boxShadow:"none",textAlign:"center",backgroundColor:t.palette.primary.lighter},t.breakpoints.up("md"),{height:"100%",display:"flex",textAlign:"left",alignItems:"center",justifyContent:"space-between"})}));function C(e){var t=e.title,n=e.description,o=e.action,s=e.img,a=(0,r.Z)(e,y);return(0,f.jsxs)(k,(0,i.Z)((0,i.Z)({},a),{},{children:[(0,f.jsxs)(w.Z,{sx:{p:{md:0},pl:{md:5},color:"grey.800"},children:[(0,f.jsx)(u.Z,{gutterBottom:!0,variant:"h4",sx:{whiteSpace:"pre-line"},children:t}),(0,f.jsx)(u.Z,{variant:"body2",sx:{pb:{xs:3,xl:5},maxWidth:480,mx:"auto"},children:n}),o&&o]}),s&&s]}))}var I=n(29439),S=n(44021),P=n(80206),R=n(47313),F=n(17551),D=n(47723),N=n(3484),z=n(57597),A=n(40885),_=["list"],O=(0,l.ZP)("div")((function(e){var t=e.theme;return{top:0,left:0,right:0,bottom:0,zIndex:8,position:"absolute",backgroundColor:(0,F.Fq)(t.palette.grey[900],.64)}}));function W(e){var t=e.list,n=(0,r.Z)(e,_),o=(0,c.Z)(),s=(0,R.useRef)(null),a=(0,R.useState)("rtl"===o.direction?t.length-1:0),l=(0,I.Z)(a,2),h=l[0],u=l[1],x=(0,i.Z)({speed:800,dots:!0,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,rtl:Boolean("rtl"===o.direction),beforeChange:function(e,t){return u(t)}},(0,A.A0)({zIndex:9,top:24,left:24,position:"absolute"}));return(0,f.jsxs)(d.Z,(0,i.Z)((0,i.Z)({},n),{},{children:[(0,f.jsx)(S.Z,(0,i.Z)((0,i.Z)({ref:s},x),{},{children:t.map((function(e,t){return(0,f.jsx)(B,{item:e,isActive:t===h},e.id)}))})),(0,f.jsx)(A.i5,{onNext:function(){var e;null===(e=s.current)||void 0===e||e.slickNext()},onPrevious:function(){var e;null===(e=s.current)||void 0===e||e.slickPrev()},spacing:0,sx:{top:16,right:16,position:"absolute","& .arrow":{p:0,width:32,height:32,opacity:.48,color:"common.white","&:hover":{color:"common.white",opacity:1}}}})]}))}function B(e){var t=e.item,n=e.isActive,i=t.image,r=t.title,o=t.description;return(0,f.jsxs)(h.Z,{sx:{position:"relative"},children:[(0,f.jsxs)(w.Z,{component:z.NM,animate:n,action:!0,sx:{bottom:0,width:1,zIndex:9,textAlign:"left",position:"absolute",color:"common.white"},children:[(0,f.jsx)(P.m.div,{variants:(0,z.EU)().inRight,children:(0,f.jsx)(u.Z,{variant:"overline",component:"div",sx:{mb:1,opacity:.48},children:"Featured App"})}),(0,f.jsx)(P.m.div,{variants:(0,z.EU)().inRight,children:(0,f.jsx)(D.Z,{color:"inherit",underline:"none",children:(0,f.jsx)(u.Z,{variant:"h5",gutterBottom:!0,noWrap:!0,children:r})})}),(0,f.jsx)(P.m.div,{variants:(0,z.EU)().inRight,children:(0,f.jsx)(u.Z,{variant:"body2",noWrap:!0,children:o})})]}),(0,f.jsx)(O,{}),(0,f.jsx)(N.Z,{alt:r,src:i,sx:{height:{xs:280,xl:320}}})]})}var E=n(13305),q=n(54641),L=n(51629),T=n(66835),K=n(57861),M=n(19536),X=n(69099),G=n(24076),U=n(67478),V=n(51405),H=n(86853),$=n(62677),Y=n(55844),J=["title","subheader","tableData","tableLabels"];function Q(e){var t=e.title,n=e.subheader,o=e.tableData,s=e.tableLabels,a=(0,r.Z)(e,J);return(0,f.jsxs)(d.Z,(0,i.Z)((0,i.Z)({},a),{},{children:[(0,f.jsx)(q.Z,{title:t,subheader:n,sx:{mb:3}}),(0,f.jsx)($.Z,{children:(0,f.jsx)(L.Z,{sx:{minWidth:720},children:(0,f.jsxs)(T.Z,{children:[(0,f.jsx)(Y.K,{headLabel:s}),(0,f.jsx)(K.Z,{children:o.map((function(e){return(0,f.jsx)(ee,{row:e},e.id)}))})]})})}),(0,f.jsx)(M.Z,{}),(0,f.jsx)(h.Z,{sx:{p:2,textAlign:"right"},children:(0,f.jsx)(X.Z,{size:"small",color:"inherit",endIcon:(0,f.jsx)(p.Z,{icon:"eva:arrow-ios-forward-fill"}),children:"View All"})})]}))}function ee(e){var t=e.row,n=(0,c.Z)(),i=(0,R.useState)(null),r=(0,I.Z)(i,2),o=r[0],s=r[1],a=function(){s(null)};return(0,f.jsxs)(G.Z,{children:[(0,f.jsx)(U.Z,{children:"INV-".concat(t.id)}),(0,f.jsx)(U.Z,{children:t.category}),(0,f.jsx)(U.Z,{children:(0,x.e_)(t.price)}),(0,f.jsx)(U.Z,{children:(0,f.jsx)(H.Z,{variant:"light"===n.palette.mode?"ghost":"filled",color:("in_progress"===t.status?"warning":"out_of_date"===t.status&&"error")||"success",children:(0,E.G)(t.status)})}),(0,f.jsx)(U.Z,{align:"right",children:(0,f.jsx)(Y.V7,{open:o,onOpen:function(e){s(e.currentTarget)},onClose:a,actions:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(V.Z,{onClick:function(){a(),console.log("DOWNLOAD",t.id)},children:[(0,f.jsx)(p.Z,{icon:"eva:download-fill"}),"Download"]}),(0,f.jsxs)(V.Z,{onClick:function(){a(),console.log("PRINT",t.id)},children:[(0,f.jsx)(p.Z,{icon:"eva:printer-fill"}),"Print"]}),(0,f.jsxs)(V.Z,{onClick:function(){a(),console.log("SHARE",t.id)},children:[(0,f.jsx)(p.Z,{icon:"eva:share-fill"}),"Share"]}),(0,f.jsx)(M.Z,{sx:{borderStyle:"dashed"}}),(0,f.jsxs)(V.Z,{onClick:function(){a(),console.log("DELETE",t.id)},sx:{color:"error.main"},children:[(0,f.jsx)(p.Z,{icon:"eva:trash-2-outline"}),"Delete"]})]})})})]})}var te=n(68520),ne=n.n(te),ie=n(35898),re=n(63585),oe=["title","subheader","list"],se=(0,l.ZP)("div")((function(e){var t=e.theme;return{width:40,height:40,display:"flex",borderRadius:"50%",alignItems:"center",justifyContent:"center",color:t.palette.primary.main,backgroundColor:(0,F.Fq)(t.palette.primary.main,.08)}}));function ae(e){var t=e.title,n=e.subheader,o=e.list,s=(0,r.Z)(e,oe);return(0,f.jsxs)(d.Z,(0,i.Z)((0,i.Z)({},s),{},{children:[(0,f.jsx)(q.Z,{title:t,subheader:n}),(0,f.jsx)(ie.Z,{spacing:3,sx:{p:3},children:ne()(o,["favourite"],["desc"]).map((function(e,t){return(0,f.jsx)(le,{author:e,index:t},e.id)}))})]}))}function le(e){var t=e.author,n=e.index;return(0,f.jsxs)(ie.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,f.jsx)(re.Z,{alt:t.name,src:t.avatar}),(0,f.jsxs)(h.Z,{sx:{flexGrow:1},children:[(0,f.jsx)(u.Z,{variant:"subtitle2",children:t.name}),(0,f.jsxs)(u.Z,{variant:"caption",sx:{mt:.5,display:"flex",alignItems:"center",color:"text.secondary"},children:[(0,f.jsx)(p.Z,{icon:"eva:heart-fill",sx:{width:16,height:16,mr:.5}}),(0,x.v1)(t.favourite)]})]}),(0,f.jsx)(se,{sx:(0,i.Z)((0,i.Z)({},1===n&&{color:"info.main",bgcolor:function(e){return(0,F.Fq)(e.palette.info.main,.08)}}),2===n&&{color:"error.main",bgcolor:function(e){return(0,F.Fq)(e.palette.error.main,.08)}}),children:(0,f.jsx)(p.Z,{icon:"ant-design:trophy-filled",width:20,height:20})})]})}var ce=n(55942),de=["title","subheader","list"];function he(e){var t=e.title,n=e.subheader,o=e.list,s=(0,r.Z)(e,de);return(0,f.jsxs)(d.Z,(0,i.Z)((0,i.Z)({},s),{},{children:[(0,f.jsx)(q.Z,{title:t,subheader:n}),(0,f.jsx)($.Z,{children:(0,f.jsx)(ie.Z,{spacing:3,sx:{p:3,pr:0},children:o.map((function(e){return(0,f.jsx)(ue,{app:e},e.id)}))})})]}))}function ue(e){var t=e.app,n=(0,c.Z)(),i=t.shortcut,r=t.system,o=t.price,s=t.rating,a=t.review,l=t.name;return(0,f.jsxs)(ie.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,f.jsx)(h.Z,{sx:{width:48,height:48,flexShrink:0,display:"flex",borderRadius:1.5,alignItems:"center",justifyContent:"center",bgcolor:"background.neutral"},children:(0,f.jsx)(N.Z,{src:i,alt:l,sx:{width:24,height:24}})}),(0,f.jsxs)(h.Z,{sx:{flexGrow:1,minWidth:160},children:[(0,f.jsx)(u.Z,{variant:"subtitle2",children:l}),(0,f.jsxs)(ie.Z,{direction:"row",alignItems:"center",sx:{mt:.5,color:"text.secondary"},children:[(0,f.jsx)(p.Z,{width:16,height:16,icon:"Mac"===r?"ant-design:apple-filled":"ant-design:windows-filled"}),(0,f.jsx)(u.Z,{variant:"caption",sx:{ml:.5,mr:1},children:r}),(0,f.jsx)(H.Z,{variant:"light"===n.palette.mode?"ghost":"filled",color:0===o?"success":"error",children:0===o?"Free":(0,x.e_)(o)})]})]}),(0,f.jsxs)(ie.Z,{alignItems:"flex-end",sx:{pr:3},children:[(0,f.jsx)(ce.Z,{readOnly:!0,size:"small",precision:.5,name:"reviews",value:s}),(0,f.jsxs)(u.Z,{variant:"caption",sx:{mt:.5,color:"text.secondary"},children:[(0,x.v1)(a),"\xa0reviews"]})]})]})}var xe=n(15082),pe=["title","subheader","chartLabels","chartData"];function Ze(e){var t=e.title,n=e.subheader,o=e.chartLabels,l=e.chartData,c=(0,r.Z)(e,pe),u=(0,R.useState)("2019"),x=(0,I.Z)(u,2),p=x[0],g=x[1],m=s()((0,Z.F)(),{xaxis:{categories:o}});return(0,f.jsxs)(d.Z,(0,i.Z)((0,i.Z)({},c),{},{children:[(0,f.jsx)(q.Z,{title:t,subheader:n,action:(0,f.jsx)(xe.Z,{select:!0,fullWidth:!0,value:p,SelectProps:{native:!0},onChange:function(e){g(e.target.value)},sx:{"& fieldset":{border:"0 !important"},"& select":{pl:1,py:.5,pr:"24px !important",typography:"subtitle2"},"& .MuiOutlinedInput-root":{borderRadius:.75,bgcolor:"background.neutral"},"& .MuiNativeSelect-icon":{top:4,right:0,width:20,height:20}},children:l.map((function(e){return(0,f.jsx)("option",{value:e.year,children:e.year},e.year)}))})}),l.map((function(e){return(0,f.jsx)(h.Z,{sx:{mt:3,mx:3},dir:"ltr",children:e.year===p&&(0,f.jsx)(a.Z,{type:"line",series:e.data,options:m,height:364})},e.year)}))]}))}var fe=["title","percent","total","chartColor","chartData","sx"],ge=(0,l.ZP)("div")((function(e){var t=e.theme;return{width:24,height:24,display:"flex",borderRadius:"50%",alignItems:"center",justifyContent:"center",color:t.palette.success.main,backgroundColor:(0,F.Fq)(t.palette.success.main,.16)}}));function me(e){var t=e.title,n=e.percent,o=e.total,s=e.chartColor,l=e.chartData,Z=e.sx,g=(0,r.Z)(e,fe),m=(0,c.Z)(),j={colors:[s],chart:{sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"68%",borderRadius:2}},tooltip:{x:{show:!1},y:{formatter:function(e){return(0,x.FK)(e)},title:{formatter:function(e){return"@".concat(e)}}},marker:{show:!1}}};return(0,f.jsxs)(d.Z,(0,i.Z)((0,i.Z)({sx:(0,i.Z)({display:"flex",alignItems:"center",p:3},Z)},g),{},{children:[(0,f.jsxs)(h.Z,{sx:{flexGrow:1},children:[(0,f.jsx)(u.Z,{variant:"subtitle2",children:t}),(0,f.jsxs)(ie.Z,{direction:"row",alignItems:"center",spacing:1,sx:{mt:2,mb:1},children:[(0,f.jsx)(ge,{sx:(0,i.Z)({},n<0&&{color:"error.main",bgcolor:(0,F.Fq)(m.palette.error.main,.16)}),children:(0,f.jsx)(p.Z,{width:16,height:16,icon:n>=0?"eva:trending-up-fill":"eva:trending-down-fill"})}),(0,f.jsxs)(u.Z,{component:"span",variant:"subtitle2",children:[n>0&&"+",(0,x.f2)(n)]})]}),(0,f.jsx)(u.Z,{variant:"h3",children:(0,x.FK)(o)})]}),(0,f.jsx)(a.Z,{type:"bar",series:[{data:l}],options:j,width:60,height:36})]}))}var je=["title","subheader","chartData","chartColors"],ve=(0,l.ZP)("div")((function(e){var t=e.theme;return{height:392,marginTop:t.spacing(5),"& .apexcharts-canvas svg":{height:392},"& .apexcharts-canvas svg,.apexcharts-canvas foreignObject":{overflow:"visible"},"& .apexcharts-legend":{height:72,alignContent:"center",position:"relative !important",borderTop:"solid 1px ".concat(t.palette.divider),top:"calc(".concat(320,"px) !important")}}}));function be(e){var t=e.title,n=e.subheader,o=e.chartData,l=e.chartColors,h=(0,r.Z)(e,je),u=(0,c.Z)(),p=o.map((function(e){return e.label})),g=o.map((function(e){return e.value})),m=s()((0,Z.F)(),{colors:l,labels:p,stroke:{colors:[u.palette.background.paper]},legend:{floating:!0,horizontalAlign:"center"},tooltip:{fillSeriesColor:!1,y:{formatter:function(e){return(0,x.FK)(e)},title:{formatter:function(e){return"".concat(e)}}}},plotOptions:{pie:{donut:{size:"90%",labels:{value:{formatter:function(e){return(0,x.FK)(e)}},total:{formatter:function(e){var t=e.globals.seriesTotals.reduce((function(e,t){return e+t}),0);return(0,x.FK)(t)}}}}}}});return(0,f.jsxs)(d.Z,(0,i.Z)((0,i.Z)({},h),{},{children:[(0,f.jsx)(q.Z,{title:t,subheader:n}),(0,f.jsx)(ve,{dir:"ltr",children:(0,f.jsx)(a.Z,{type:"donut",series:g,options:m,height:280})})]}))}var we=["title","subheader","list"],ye=(0,l.ZP)((function(e){return(0,f.jsx)(ie.Z,(0,i.Z)({direction:"row",alignItems:"center"},e))}))({minWidth:72,flex:"1 1"}),ke=(0,l.ZP)(p.Z)((function(e){var t=e.theme;return{width:16,height:16,marginRight:t.spacing(.5),color:t.palette.text.disabled}}));function Ce(e){var t=e.title,n=e.subheader,o=e.list,s=(0,r.Z)(e,we);return(0,f.jsxs)(d.Z,(0,i.Z)((0,i.Z)({},s),{},{children:[(0,f.jsx)(q.Z,{title:t,subheader:n}),(0,f.jsx)($.Z,{children:(0,f.jsx)(ie.Z,{spacing:3,sx:{p:3},children:o.map((function(e){return(0,f.jsx)(Ie,{country:e},e.id)}))})})]}))}function Ie(e){var t=e.country;return(0,f.jsxs)(ie.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,f.jsxs)(ye,{sx:{minWidth:120},children:[(0,f.jsx)(N.Z,{disabledEffect:!0,alt:t.name,src:t.flag,sx:{width:28,mr:1}}),(0,f.jsx)(u.Z,{variant:"subtitle2",children:t.name})]}),(0,f.jsxs)(ye,{children:[(0,f.jsx)(ke,{icon:"ant-design:android-filled"}),(0,f.jsx)(u.Z,{variant:"body2",children:(0,x.v1)(t.android)})]}),(0,f.jsxs)(ye,{children:[(0,f.jsx)(ke,{icon:"ant-design:windows-filled"}),(0,f.jsx)(u.Z,{variant:"body2",children:(0,x.v1)(t.windows)})]}),(0,f.jsxs)(ye,{sx:{minWidth:88},children:[(0,f.jsx)(ke,{icon:"ant-design:apple-filled"}),(0,f.jsx)(u.Z,{variant:"body2",children:(0,x.v1)(t.windows)})]})]})}}}]);
"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[8885],{21421:function(t,r,e){e.d(r,{i4:function(){return g},Ml:function(){return Z},bB:function(){return p},VJ:function(){return a},M2:function(){return l},Ti:function(){return c},JJ:function(){return u}});var n=e(46417);var i=e(84488),s=e(9506);function a(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{width:"100%",height:560,variant:"rectangular",sx:{borderRadius:2}}),(0,n.jsxs)(s.Z,{sx:{mt:3,display:"flex",alignItems:"center"},children:[(0,n.jsx)(i.Z,{variant:"circular",width:64,height:64}),(0,n.jsxs)(s.Z,{sx:{flexGrow:1,ml:2},children:[(0,n.jsx)(i.Z,{variant:"text",height:20}),(0,n.jsx)(i.Z,{variant:"text",height:20}),(0,n.jsx)(i.Z,{variant:"text",height:20})]})]})]})}var x=e(9019);function c(){return(0,n.jsxs)(x.ZP,{container:!0,spacing:3,children:[(0,n.jsx)(x.ZP,{item:!0,xs:12,md:6,lg:7,children:(0,n.jsx)(i.Z,{variant:"rectangular",width:"100%",sx:{paddingTop:"100%",borderRadius:2}})}),(0,n.jsxs)(x.ZP,{item:!0,xs:12,md:6,lg:5,children:[(0,n.jsx)(i.Z,{variant:"circular",width:80,height:80}),(0,n.jsx)(i.Z,{variant:"text",height:240}),(0,n.jsx)(i.Z,{variant:"text",height:40}),(0,n.jsx)(i.Z,{variant:"text",height:40}),(0,n.jsx)(i.Z,{variant:"text",height:40})]})]})}function l(){return(0,n.jsxs)(x.ZP,{item:!0,xs:12,sm:6,md:3,children:[(0,n.jsx)(i.Z,{variant:"rectangular",width:"100%",sx:{height:200,borderRadius:2}}),(0,n.jsxs)(s.Z,{sx:{display:"flex",mt:1.5},children:[(0,n.jsx)(i.Z,{variant:"circular",sx:{width:40,height:40}}),(0,n.jsx)(i.Z,{variant:"text",sx:{mx:1,flexGrow:1}})]})]})}var h=e(73428),d=e(35898);function u(){return(0,n.jsxs)(h.Z,{children:[(0,n.jsx)(i.Z,{variant:"rectangular",sx:{paddingTop:"100%"}}),(0,n.jsxs)(d.Z,{spacing:2,sx:{p:3},children:[(0,n.jsx)(i.Z,{variant:"text",sx:{width:.5}}),(0,n.jsxs)(d.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,n.jsxs)(d.Z,{direction:"row",children:[(0,n.jsx)(i.Z,{variant:"circular",sx:{width:16,height:16}}),(0,n.jsx)(i.Z,{variant:"circular",sx:{width:16,height:16}}),(0,n.jsx)(i.Z,{variant:"circular",sx:{width:16,height:16}})]}),(0,n.jsx)(i.Z,{variant:"text",sx:{width:40}})]})]})]})}var o=e(93433),j=e(82295);function Z(){return(0,n.jsx)(s.Z,{sx:{display:"grid",gap:3,gridTemplateColumns:"repeat(4, 1fr)"},children:(0,o.Z)(Array(3)).map((function(t,r){return(0,n.jsx)(j.Z,{variant:"outlined",sx:{p:2.5,width:310},children:(0,n.jsxs)(d.Z,{spacing:2,children:[(0,n.jsx)(i.Z,{variant:"rectangular",sx:{paddingTop:"75%",borderRadius:1.5}}),0===r&&(0,n.jsx)(i.Z,{variant:"rectangular",sx:{paddingTop:"25%",borderRadius:1.5}}),2!==r&&(0,n.jsx)(i.Z,{variant:"rectangular",sx:{paddingTop:"25%",borderRadius:1.5}})]})},r)}))})}function p(){return(0,n.jsxs)(d.Z,{spacing:1,direction:"row",alignItems:"center",sx:{px:3,py:1},children:[(0,n.jsx)(i.Z,{variant:"circular",width:32,height:32}),(0,n.jsx)(i.Z,{variant:"text",sx:{width:.25,height:16}})]})}function g(){return(0,n.jsxs)(d.Z,{spacing:1,direction:"row",alignItems:"center",sx:{px:3,py:1.5},children:[(0,n.jsx)(i.Z,{variant:"circular",width:48,height:48}),(0,n.jsxs)(d.Z,{spacing:.5,sx:{flexGrow:1},children:[(0,n.jsx)(i.Z,{variant:"text",sx:{width:.5,height:16}}),(0,n.jsx)(i.Z,{variant:"text",sx:{width:.25,height:12}})]})]})}},68885:function(t,r,e){e.r(r),e.d(r,{default:function(){return C}});var n=e(15861),i=e(29439),s=e(87757),a=e.n(s),x=e(47313),c=e(13305),l=e(97890),h=e(43265),d=e(73428),u=e(9506),o=e(61113),j=e(19536),Z=e(74312),p=e(48175),g=e(11338),v=e(58434),m=e(85077),f=e(71361),w=e(44968),b=e(67871),k=e(21421),y=e(81296),_=e(46417);function C(){var t=(0,g.Z)().themeStretch,r=(0,v.Z)(),e=(0,l.UO)().title,s=(0,x.useState)([]),C=(0,i.Z)(s,2),P=C[0],T=C[1],R=(0,x.useState)(null),B=(0,i.Z)(R,2),G=B[0],I=B[1],J=(0,x.useState)(null),S=(0,i.Z)(J,2),D=S[0],V=S[1],M=(0,x.useCallback)((0,n.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.Z.get("/api/blog/post",{params:{title:e}});case 3:n=t.sent,r.current&&I(n.data.post),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0),V(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,7]])}))),[r,e]),A=(0,x.useCallback)((0,n.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.Z.get("/api/blog/posts/recent",{params:{title:e}});case 3:n=t.sent,r.current&&T(n.data.recentPosts),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),[r,e]);return(0,x.useEffect)((function(){M(),A()}),[A,M]),(0,_.jsx)(f.Z,{title:"Blog: Post Details",children:(0,_.jsxs)(h.Z,{maxWidth:!t&&"lg",children:[(0,_.jsx)(b.Z,{heading:"Post Details",links:[{name:"Dashboard",href:p.vB.root},{name:"Blog",href:p.vB.blog.root},{name:(0,c.G)(e)}]}),G&&(0,_.jsxs)(d.Z,{children:[(0,_.jsx)(y.pi,{post:G}),(0,_.jsxs)(u.Z,{sx:{p:{xs:3,md:5}},children:[(0,_.jsx)(o.Z,{variant:"h6",sx:{mb:5},children:G.description}),(0,_.jsx)(w.Z,{children:G.body}),(0,_.jsxs)(u.Z,{sx:{my:5},children:[(0,_.jsx)(j.Z,{}),(0,_.jsx)(y.j6,{post:G}),(0,_.jsx)(j.Z,{})]}),(0,_.jsxs)(u.Z,{sx:{display:"flex",mb:2},children:[(0,_.jsx)(o.Z,{variant:"h4",children:"Comments"}),(0,_.jsxs)(o.Z,{variant:"subtitle2",sx:{color:"text.disabled"},children:["(",G.comments.length,")"]})]}),(0,_.jsx)(y.bt,{post:G}),(0,_.jsx)(u.Z,{sx:{mb:5,mt:3,display:"flex",justifyContent:"flex-end"},children:(0,_.jsx)(Z.Z,{count:8,color:"primary"})}),(0,_.jsx)(y.fV,{})]})]}),!G&&!D&&(0,_.jsx)(k.VJ,{}),D&&(0,_.jsxs)(o.Z,{variant:"h6",children:["404 ",D,"!"]}),(0,_.jsx)(y._Y,{posts:P})]})})}}}]);
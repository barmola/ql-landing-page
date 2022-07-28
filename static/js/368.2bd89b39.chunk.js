"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[368],{93542:function(e,t,n){n.d(t,{Z:function(){return X}});var o=n(4942),r=n(63366),i=n(87462),a=n(47313),l=n(83061),c=n(29439),u=n(33362),p=n(10782),s=n(42780),d=n(89265);function f(e){return"undefined"!==typeof e.normalize?e.normalize("NFD").replace(/[\u0300-\u036f]/g,""):e}function g(e,t){for(var n=0;n<e.length;n+=1)if(t(e[n]))return n;return-1}var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ignoreAccents,n=void 0===t||t,o=e.ignoreCase,r=void 0===o||o,i=e.limit,a=e.matchFrom,l=void 0===a?"any":a,c=e.stringify,u=e.trim,p=void 0!==u&&u;return function(e,t){var o=t.inputValue,a=t.getOptionLabel,u=p?o.trim():o;r&&(u=u.toLowerCase()),n&&(u=f(u));var s=e.filter((function(e){var t=(c||a)(e);return r&&(t=t.toLowerCase()),n&&(t=f(t)),"start"===l?0===t.indexOf(u):t.indexOf(u)>-1}));return"number"===typeof i?s.slice(0,i):s}}();function h(e){var t,n=e.autoComplete,o=void 0!==n&&n,r=e.autoHighlight,l=void 0!==r&&r,f=e.autoSelect,h=void 0!==f&&f,m=e.blurOnSelect,b=void 0!==m&&m,x=e.disabled,Z=e.clearOnBlur,O=void 0===Z?!e.freeSolo:Z,I=e.clearOnEscape,y=void 0!==I&&I,P=e.componentName,C=void 0===P?"useAutocomplete":P,S=e.defaultValue,w=void 0===S?e.multiple?[]:null:S,k=e.disableClearable,A=void 0!==k&&k,L=e.disableCloseOnSelect,R=void 0!==L&&L,T=e.disabledItemsFocusable,M=void 0!==T&&T,D=e.disableListWrap,N=void 0!==D&&D,E=e.filterOptions,F=void 0===E?v:E,z=e.filterSelectedOptions,H=void 0!==z&&z,j=e.freeSolo,W=void 0!==j&&j,V=e.getOptionDisabled,q=e.getOptionLabel,B=void 0===q?function(e){var t;return null!=(t=e.label)?t:e}:q,K=e.isOptionEqualToValue,U=void 0===K?function(e,t){return e===t}:K,_=e.groupBy,G=e.handleHomeEndKeys,J=void 0===G?!e.freeSolo:G,Q=e.id,X=e.includeInputInList,Y=void 0!==X&&X,$=e.inputValue,ee=e.multiple,te=void 0!==ee&&ee,ne=e.onChange,oe=e.onClose,re=e.onHighlightChange,ie=e.onInputChange,ae=e.onOpen,le=e.open,ce=e.openOnFocus,ue=void 0!==ce&&ce,pe=e.options,se=e.readOnly,de=void 0!==se&&se,fe=e.selectOnFocus,ge=void 0===fe?!e.freeSolo:fe,ve=e.value,he=(0,u.Z)(Q);t=function(e){var t=B(e);return"string"!==typeof t?String(t):t};var me=a.useRef(!1),be=a.useRef(!0),xe=a.useRef(null),Ze=a.useRef(null),Oe=a.useState(null),Ie=(0,c.Z)(Oe,2),ye=Ie[0],Pe=Ie[1],Ce=a.useState(-1),Se=(0,c.Z)(Ce,2),we=Se[0],ke=Se[1],Ae=l?0:-1,Le=a.useRef(Ae),Re=(0,p.Z)({controlled:ve,default:w,name:C}),Te=(0,c.Z)(Re,2),Me=Te[0],De=Te[1],Ne=(0,p.Z)({controlled:$,default:"",name:C,state:"inputValue"}),Ee=(0,c.Z)(Ne,2),Fe=Ee[0],ze=Ee[1],He=a.useState(!1),je=(0,c.Z)(He,2),We=je[0],Ve=je[1],qe=a.useCallback((function(e,n){if((te?Me.length<n.length:null!==n)||O){var o;if(te)o="";else if(null==n)o="";else{var r=t(n);o="string"===typeof r?r:""}Fe!==o&&(ze(o),ie&&ie(e,o,"reset"))}}),[t,Fe,te,ie,ze,O,Me]),Be=a.useRef();a.useEffect((function(){var e=Me!==Be.current;Be.current=Me,We&&!e||W&&!e||qe(null,Me)}),[Me,qe,We,Be,W]);var Ke=(0,p.Z)({controlled:le,default:!1,name:C,state:"open"}),Ue=(0,c.Z)(Ke,2),_e=Ue[0],Ge=Ue[1],Je=a.useState(!0),Qe=(0,c.Z)(Je,2),Xe=Qe[0],Ye=Qe[1],$e=!te&&null!=Me&&Fe===t(Me),et=_e&&!de,tt=et?F(pe.filter((function(e){return!H||!(te?Me:[Me]).some((function(t){return null!==t&&U(e,t)}))})),{inputValue:$e&&Xe?"":Fe,getOptionLabel:t}):[],nt=_e&&tt.length>0&&!de,ot=(0,s.Z)((function(e){-1===e?xe.current.focus():ye.querySelector('[data-tag-index="'.concat(e,'"]')).focus()}));a.useEffect((function(){te&&we>Me.length-1&&(ke(-1),ot(-1))}),[Me,te,we,ot]);var rt=(0,s.Z)((function(e){var t=e.event,n=e.index,o=e.reason,r=void 0===o?"auto":o;if(Le.current=n,-1===n?xe.current.removeAttribute("aria-activedescendant"):xe.current.setAttribute("aria-activedescendant","".concat(he,"-option-").concat(n)),re&&re(t,-1===n?null:tt[n],r),Ze.current){var i=Ze.current.querySelector('[role="option"].Mui-focused');i&&(i.classList.remove("Mui-focused"),i.classList.remove("Mui-focusVisible"));var a=Ze.current.parentElement.querySelector('[role="listbox"]');if(a)if(-1!==n){var l=Ze.current.querySelector('[data-option-index="'.concat(n,'"]'));if(l&&(l.classList.add("Mui-focused"),"keyboard"===r&&l.classList.add("Mui-focusVisible"),a.scrollHeight>a.clientHeight&&"mouse"!==r)){var c=l,u=a.clientHeight+a.scrollTop,p=c.offsetTop+c.offsetHeight;p>u?a.scrollTop=p-a.clientHeight:c.offsetTop-c.offsetHeight*(_?1.3:0)<a.scrollTop&&(a.scrollTop=c.offsetTop-c.offsetHeight*(_?1.3:0))}}else a.scrollTop=0}})),it=(0,s.Z)((function(e){var n=e.event,r=e.diff,i=e.direction,a=void 0===i?"next":i,l=e.reason,c=void 0===l?"auto":l;if(et){var u=function(e,t){if(!Ze.current||-1===e)return-1;for(var n=e;;){if("next"===t&&n===tt.length||"previous"===t&&-1===n)return-1;var o=Ze.current.querySelector('[data-option-index="'.concat(n,'"]')),r=!M&&(!o||o.disabled||"true"===o.getAttribute("aria-disabled"));if(!(o&&!o.hasAttribute("tabindex")||r))return n;n+="next"===t?1:-1}}(function(){var e=tt.length-1;if("reset"===r)return Ae;if("start"===r)return 0;if("end"===r)return e;var t=Le.current+r;return t<0?-1===t&&Y?-1:N&&-1!==Le.current||Math.abs(r)>1?0:e:t>e?t===e+1&&Y?-1:N||Math.abs(r)>1?e:0:t}(),a);if(rt({index:u,reason:c,event:n}),o&&"reset"!==r)if(-1===u)xe.current.value=Fe;else{var p=t(tt[u]);xe.current.value=p,0===p.toLowerCase().indexOf(Fe.toLowerCase())&&Fe.length>0&&xe.current.setSelectionRange(Fe.length,p.length)}}})),at=a.useCallback((function(){if(et){var e=te?Me[0]:Me;if(0!==tt.length&&null!=e){if(Ze.current)if(null==e)Le.current>=tt.length-1?rt({index:tt.length-1}):rt({index:Le.current});else{var t=tt[Le.current];if(te&&t&&-1!==g(Me,(function(e){return U(t,e)})))return;var n=g(tt,(function(t){return U(t,e)}));-1===n?it({diff:"reset"}):rt({index:n})}}else it({diff:"reset"})}}),[tt.length,!te&&Me,H,it,rt,et,Fe,te]),lt=(0,s.Z)((function(e){(0,d.Z)(Ze,e),e&&at()}));a.useEffect((function(){at()}),[at]);var ct=function(e){_e||(Ge(!0),Ye(!0),ae&&ae(e))},ut=function(e,t){_e&&(Ge(!1),oe&&oe(e,t))},pt=function(e,t,n,o){if(Array.isArray(Me)){if(Me.length===t.length&&Me.every((function(e,n){return e===t[n]})))return}else if(Me===t)return;ne&&ne(e,t,n,o),De(t)},st=a.useRef(!1),dt=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"selectOption",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"options",r=n,i=t;if(te){var a=g(i=Array.isArray(Me)?Me.slice():[],(function(e){return U(t,e)}));-1===a?i.push(t):"freeSolo"!==o&&(i.splice(a,1),r="removeOption")}qe(e,i),pt(e,i,r,{option:t}),R||e.ctrlKey||e.metaKey||ut(e,r),(!0===b||"touch"===b&&st.current||"mouse"===b&&!st.current)&&xe.current.blur()};var ft=function(e,t){if(te){ut(e,"toggleInput");var n=we;-1===we?""===Fe&&"previous"===t&&(n=Me.length-1):((n+="next"===t?1:-1)<0&&(n=0),n===Me.length&&(n=-1)),n=function(e,t){if(-1===e)return-1;for(var n=e;;){if("next"===t&&n===Me.length||"previous"===t&&-1===n)return-1;var o=ye.querySelector('[data-tag-index="'.concat(n,'"]'));if(o&&o.hasAttribute("tabindex")&&!o.disabled&&"true"!==o.getAttribute("aria-disabled"))return n;n+="next"===t?1:-1}}(n,t),ke(n),ot(n)}},gt=function(e){me.current=!0,ze(""),ie&&ie(e,"","clear"),pt(e,te?[]:null,"clear")},vt=function(e){return function(t){if(e.onKeyDown&&e.onKeyDown(t),!t.defaultMuiPrevented&&(-1!==we&&-1===["ArrowLeft","ArrowRight"].indexOf(t.key)&&(ke(-1),ot(-1)),229!==t.which))switch(t.key){case"Home":et&&J&&(t.preventDefault(),it({diff:"start",direction:"next",reason:"keyboard",event:t}));break;case"End":et&&J&&(t.preventDefault(),it({diff:"end",direction:"previous",reason:"keyboard",event:t}));break;case"PageUp":t.preventDefault(),it({diff:-5,direction:"previous",reason:"keyboard",event:t}),ct(t);break;case"PageDown":t.preventDefault(),it({diff:5,direction:"next",reason:"keyboard",event:t}),ct(t);break;case"ArrowDown":t.preventDefault(),it({diff:1,direction:"next",reason:"keyboard",event:t}),ct(t);break;case"ArrowUp":t.preventDefault(),it({diff:-1,direction:"previous",reason:"keyboard",event:t}),ct(t);break;case"ArrowLeft":ft(t,"previous");break;case"ArrowRight":ft(t,"next");break;case"Enter":if(-1!==Le.current&&et){var n=tt[Le.current],r=!!V&&V(n);if(t.preventDefault(),r)return;dt(t,n,"selectOption"),o&&xe.current.setSelectionRange(xe.current.value.length,xe.current.value.length)}else W&&""!==Fe&&!1===$e&&(te&&t.preventDefault(),dt(t,Fe,"createOption","freeSolo"));break;case"Escape":et?(t.preventDefault(),t.stopPropagation(),ut(t,"escape")):y&&(""!==Fe||te&&Me.length>0)&&(t.preventDefault(),t.stopPropagation(),gt(t));break;case"Backspace":if(te&&!de&&""===Fe&&Me.length>0){var i=-1===we?Me.length-1:we,a=Me.slice();a.splice(i,1),pt(t,a,"removeOption",{option:Me[i]})}}}},ht=function(e){Ve(!0),ue&&!me.current&&ct(e)},mt=function(e){null!==Ze.current&&Ze.current.parentElement.contains(document.activeElement)?xe.current.focus():(Ve(!1),be.current=!0,me.current=!1,h&&-1!==Le.current&&et?dt(e,tt[Le.current],"blur"):h&&W&&""!==Fe?dt(e,Fe,"blur","freeSolo"):O&&qe(e,Me),ut(e,"blur"))},bt=function(e){var t=e.target.value;Fe!==t&&(ze(t),Ye(!1),ie&&ie(e,t,"input")),""===t?A||te||pt(e,null,"clear"):ct(e)},xt=function(e){rt({event:e,index:Number(e.currentTarget.getAttribute("data-option-index")),reason:"mouse"})},Zt=function(){st.current=!0},Ot=function(e){var t=Number(e.currentTarget.getAttribute("data-option-index"));dt(e,tt[t],"selectOption"),st.current=!1},It=function(e){return function(t){var n=Me.slice();n.splice(e,1),pt(t,n,"removeOption",{option:Me[e]})}},yt=function(e){_e?ut(e,"toggleInput"):ct(e)},Pt=function(e){e.target.getAttribute("id")!==he&&e.preventDefault()},Ct=function(){xe.current.focus(),ge&&be.current&&xe.current.selectionEnd-xe.current.selectionStart===0&&xe.current.select(),be.current=!1},St=function(e){""!==Fe&&_e||yt(e)},wt=W&&Fe.length>0;wt=wt||(te?Me.length>0:null!==Me);var kt=tt;if(_){new Map;kt=tt.reduce((function(e,t,n){var o=_(t);return e.length>0&&e[e.length-1].group===o?e[e.length-1].options.push(t):e.push({key:n,index:n,group:o,options:[t]}),e}),[])}return x&&We&&mt(),{getRootProps:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.Z)({"aria-owns":nt?"".concat(he,"-listbox"):null},e,{onKeyDown:vt(e),onMouseDown:Pt,onClick:Ct})},getInputLabelProps:function(){return{id:"".concat(he,"-label"),htmlFor:he}},getInputProps:function(){return{id:he,value:Fe,onBlur:mt,onFocus:ht,onChange:bt,onMouseDown:St,"aria-activedescendant":et?"":null,"aria-autocomplete":o?"both":"list","aria-controls":nt?"".concat(he,"-listbox"):void 0,"aria-expanded":nt,autoComplete:"off",ref:xe,autoCapitalize:"none",spellCheck:"false",role:"combobox"}},getClearProps:function(){return{tabIndex:-1,onClick:gt}},getPopupIndicatorProps:function(){return{tabIndex:-1,onClick:yt}},getTagProps:function(e){var t=e.index;return(0,i.Z)({key:t,"data-tag-index":t,tabIndex:-1},!de&&{onDelete:It(t)})},getListboxProps:function(){return{role:"listbox",id:"".concat(he,"-listbox"),"aria-labelledby":"".concat(he,"-label"),ref:lt,onMouseDown:function(e){e.preventDefault()}}},getOptionProps:function(e){var n=e.index,o=e.option,r=(te?Me:[Me]).some((function(e){return null!=e&&U(o,e)})),i=!!V&&V(o);return{key:t(o),tabIndex:-1,role:"option",id:"".concat(he,"-option-").concat(n),onMouseOver:xt,onClick:Ot,onTouchStart:Zt,"data-option-index":n,"aria-disabled":i,"aria-selected":r}},id:he,inputValue:Fe,value:Me,dirty:wt,popupOpen:et,focused:We||-1!==we,anchorEl:ye,setAnchorEl:Pe,focusedTag:we,groupedOptions:kt}}var m=n(50317),b=n(17551),x=n(53540),Z=n(58800),O=n(82295),I=n(47131),y=n(66212),P=n(79783),C=n(17569),S=n(40708),w=n(73201),k=n(91251),A=n(6613),L=n(25469),R=n(88564),T=n(22131);function M(e){return(0,T.Z)("MuiAutocomplete",e)}var D,N,E=(0,n(655).Z)("MuiAutocomplete",["root","fullWidth","focused","focusVisible","tag","tagSizeSmall","tagSizeMedium","hasPopupIcon","hasClearIcon","inputRoot","input","inputFocused","endAdornment","clearIndicator","popupIndicator","popupIndicatorOpen","popper","popperDisablePortal","paper","listbox","loading","noOptions","option","groupLabel","groupUl"]),F=n(91615),z=n(46417),H=["autoComplete","autoHighlight","autoSelect","blurOnSelect","ChipProps","className","clearIcon","clearOnBlur","clearOnEscape","clearText","closeText","componentsProps","defaultValue","disableClearable","disableCloseOnSelect","disabled","disabledItemsFocusable","disableListWrap","disablePortal","filterOptions","filterSelectedOptions","forcePopupIcon","freeSolo","fullWidth","getLimitTagsText","getOptionDisabled","getOptionLabel","isOptionEqualToValue","groupBy","handleHomeEndKeys","id","includeInputInList","inputValue","limitTags","ListboxComponent","ListboxProps","loading","loadingText","multiple","noOptionsText","onChange","onClose","onHighlightChange","onInputChange","onOpen","open","openOnFocus","openText","options","PaperComponent","PopperComponent","popupIcon","readOnly","renderGroup","renderInput","renderOption","renderTags","selectOnFocus","size","value"],j=(0,R.ZP)("div",{name:"MuiAutocomplete",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState,r=n.fullWidth,i=n.hasClearIcon,a=n.hasPopupIcon,l=n.inputFocused,c=n.size;return[(0,o.Z)({},"& .".concat(E.tag),t.tag),(0,o.Z)({},"& .".concat(E.tag),t["tagSize".concat((0,F.Z)(c))]),(0,o.Z)({},"& .".concat(E.inputRoot),t.inputRoot),(0,o.Z)({},"& .".concat(E.input),t.input),(0,o.Z)({},"& .".concat(E.input),l&&t.inputFocused),t.root,r&&t.fullWidth,a&&t.hasPopupIcon,i&&t.hasClearIcon]}})((function(e){var t,n,r,a,l,c=e.ownerState;return(0,i.Z)((t={},(0,o.Z)(t,"&.".concat(E.focused," .").concat(E.clearIndicator),{visibility:"visible"}),(0,o.Z)(t,"@media (pointer: fine)",(0,o.Z)({},"&:hover .".concat(E.clearIndicator),{visibility:"visible"})),t),c.fullWidth&&{width:"100%"},(l={},(0,o.Z)(l,"& .".concat(E.tag),(0,i.Z)({margin:3,maxWidth:"calc(100% - 6px)"},"small"===c.size&&{margin:2,maxWidth:"calc(100% - 4px)"})),(0,o.Z)(l,"& .".concat(E.inputRoot),(n={flexWrap:"wrap"},(0,o.Z)(n,".".concat(E.hasPopupIcon,"&, .").concat(E.hasClearIcon,"&"),{paddingRight:30}),(0,o.Z)(n,".".concat(E.hasPopupIcon,".").concat(E.hasClearIcon,"&"),{paddingRight:56}),(0,o.Z)(n,"& .".concat(E.input),{width:0,minWidth:30}),n)),(0,o.Z)(l,"& .".concat(P.Z.root),{paddingBottom:1,"& .MuiInput-input":{padding:"4px 4px 4px 0px"}}),(0,o.Z)(l,"& .".concat(P.Z.root,".").concat(C.Z.sizeSmall),(0,o.Z)({},"& .".concat(P.Z.input),{padding:"2px 4px 3px 0"})),(0,o.Z)(l,"& .".concat(S.Z.root),(r={padding:9},(0,o.Z)(r,".".concat(E.hasPopupIcon,"&, .").concat(E.hasClearIcon,"&"),{paddingRight:39}),(0,o.Z)(r,".".concat(E.hasPopupIcon,".").concat(E.hasClearIcon,"&"),{paddingRight:65}),(0,o.Z)(r,"& .".concat(E.input),{padding:"7.5px 4px 7.5px 6px"}),(0,o.Z)(r,"& .".concat(E.endAdornment),{right:9}),r)),(0,o.Z)(l,"& .".concat(S.Z.root,".").concat(C.Z.sizeSmall),(0,o.Z)({padding:6},"& .".concat(E.input),{padding:"2.5px 4px 2.5px 6px"})),(0,o.Z)(l,"& .".concat(w.Z.root),(a={paddingTop:19,paddingLeft:8},(0,o.Z)(a,".".concat(E.hasPopupIcon,"&, .").concat(E.hasClearIcon,"&"),{paddingRight:39}),(0,o.Z)(a,".".concat(E.hasPopupIcon,".").concat(E.hasClearIcon,"&"),{paddingRight:65}),(0,o.Z)(a,"& .".concat(w.Z.input),{padding:"7px 4px"}),(0,o.Z)(a,"& .".concat(E.endAdornment),{right:9}),a)),(0,o.Z)(l,"& .".concat(w.Z.root,".").concat(C.Z.sizeSmall),(0,o.Z)({paddingBottom:1},"& .".concat(w.Z.input),{padding:"2.5px 4px"})),(0,o.Z)(l,"& .".concat(C.Z.hiddenLabel),{paddingTop:8}),(0,o.Z)(l,"& .".concat(E.input),(0,i.Z)({flexGrow:1,textOverflow:"ellipsis",opacity:0},c.inputFocused&&{opacity:1})),l))})),W=(0,R.ZP)("div",{name:"MuiAutocomplete",slot:"EndAdornment",overridesResolver:function(e,t){return t.endAdornment}})({position:"absolute",right:0,top:"calc(50% - 14px)"}),V=(0,R.ZP)(I.Z,{name:"MuiAutocomplete",slot:"ClearIndicator",overridesResolver:function(e,t){return t.clearIndicator}})({marginRight:-2,padding:4,visibility:"hidden"}),q=(0,R.ZP)(I.Z,{name:"MuiAutocomplete",slot:"PopupIndicator",overridesResolver:function(e,t){var n=e.ownerState;return(0,i.Z)({},t.popupIndicator,n.popupOpen&&t.popupIndicatorOpen)}})((function(e){var t=e.ownerState;return(0,i.Z)({padding:2,marginRight:-2},t.popupOpen&&{transform:"rotate(180deg)"})})),B=(0,R.ZP)(x.Z,{name:"MuiAutocomplete",slot:"Popper",overridesResolver:function(e,t){var n=e.ownerState;return[(0,o.Z)({},"& .".concat(E.option),t.option),t.popper,n.disablePortal&&t.popperDisablePortal]}})((function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({zIndex:t.zIndex.modal},n.disablePortal&&{position:"absolute"})})),K=(0,R.ZP)(O.Z,{name:"MuiAutocomplete",slot:"Paper",overridesResolver:function(e,t){return t.paper}})((function(e){var t=e.theme;return(0,i.Z)({},t.typography.body1,{overflow:"auto"})})),U=(0,R.ZP)("div",{name:"MuiAutocomplete",slot:"Loading",overridesResolver:function(e,t){return t.loading}})((function(e){return{color:e.theme.palette.text.secondary,padding:"14px 16px"}})),_=(0,R.ZP)("div",{name:"MuiAutocomplete",slot:"NoOptions",overridesResolver:function(e,t){return t.noOptions}})((function(e){return{color:e.theme.palette.text.secondary,padding:"14px 16px"}})),G=(0,R.ZP)("div",{name:"MuiAutocomplete",slot:"Listbox",overridesResolver:function(e,t){return t.listbox}})((function(e){var t,n,r=e.theme;return(0,o.Z)({listStyle:"none",margin:0,padding:"8px 0",maxHeight:"40vh",overflow:"auto"},"& .".concat(E.option),(n={minHeight:48,display:"flex",overflow:"hidden",justifyContent:"flex-start",alignItems:"center",cursor:"pointer",paddingTop:6,boxSizing:"border-box",outline:"0",WebkitTapHighlightColor:"transparent",paddingBottom:6,paddingLeft:16,paddingRight:16},(0,o.Z)(n,r.breakpoints.up("sm"),{minHeight:"auto"}),(0,o.Z)(n,"&.".concat(E.focused),{backgroundColor:r.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}),(0,o.Z)(n,'&[aria-disabled="true"]',{opacity:r.palette.action.disabledOpacity,pointerEvents:"none"}),(0,o.Z)(n,"&.".concat(E.focusVisible),{backgroundColor:r.palette.action.focus}),(0,o.Z)(n,'&[aria-selected="true"]',(t={backgroundColor:(0,b.Fq)(r.palette.primary.main,r.palette.action.selectedOpacity)},(0,o.Z)(t,"&.".concat(E.focused),{backgroundColor:(0,b.Fq)(r.palette.primary.main,r.palette.action.selectedOpacity+r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:r.palette.action.selected}}),(0,o.Z)(t,"&.".concat(E.focusVisible),{backgroundColor:(0,b.Fq)(r.palette.primary.main,r.palette.action.selectedOpacity+r.palette.action.focusOpacity)}),t)),n))})),J=(0,R.ZP)(Z.Z,{name:"MuiAutocomplete",slot:"GroupLabel",overridesResolver:function(e,t){return t.groupLabel}})((function(e){return{backgroundColor:e.theme.palette.background.paper,top:-8}})),Q=(0,R.ZP)("ul",{name:"MuiAutocomplete",slot:"GroupUl",overridesResolver:function(e,t){return t.groupUl}})((0,o.Z)({padding:0},"& .".concat(E.option),{paddingLeft:24})),X=a.forwardRef((function(e,t){var n,o,c,u=(0,L.Z)({props:e,name:"MuiAutocomplete"}),p=(u.autoComplete,u.autoHighlight,u.autoSelect,u.blurOnSelect,u.ChipProps),s=u.className,d=u.clearIcon,f=void 0===d?D||(D=(0,z.jsx)(k.Z,{fontSize:"small"})):d,g=u.clearOnBlur,v=(void 0===g&&u.freeSolo,u.clearOnEscape,u.clearText),b=void 0===v?"Clear":v,Z=u.closeText,I=void 0===Z?"Close":Z,P=u.componentsProps,C=void 0===P?{}:P,S=u.defaultValue,w=(void 0===S&&u.multiple,u.disableClearable),R=void 0!==w&&w,T=(u.disableCloseOnSelect,u.disabled),E=void 0!==T&&T,X=(u.disabledItemsFocusable,u.disableListWrap,u.disablePortal),Y=void 0!==X&&X,$=(u.filterSelectedOptions,u.forcePopupIcon),ee=void 0===$?"auto":$,te=u.freeSolo,ne=void 0!==te&&te,oe=u.fullWidth,re=void 0!==oe&&oe,ie=u.getLimitTagsText,ae=void 0===ie?function(e){return"+".concat(e)}:ie,le=u.getOptionLabel,ce=void 0===le?function(e){var t;return null!=(t=e.label)?t:e}:le,ue=u.groupBy,pe=u.handleHomeEndKeys,se=(void 0===pe&&u.freeSolo,u.includeInputInList,u.limitTags),de=void 0===se?-1:se,fe=u.ListboxComponent,ge=void 0===fe?"ul":fe,ve=u.ListboxProps,he=u.loading,me=void 0!==he&&he,be=u.loadingText,xe=void 0===be?"Loading\u2026":be,Ze=u.multiple,Oe=void 0!==Ze&&Ze,Ie=u.noOptionsText,ye=void 0===Ie?"No options":Ie,Pe=(u.openOnFocus,u.openText),Ce=void 0===Pe?"Open":Pe,Se=u.PaperComponent,we=void 0===Se?O.Z:Se,ke=u.PopperComponent,Ae=void 0===ke?x.Z:ke,Le=u.popupIcon,Re=void 0===Le?N||(N=(0,z.jsx)(A.Z,{})):Le,Te=u.readOnly,Me=void 0!==Te&&Te,De=u.renderGroup,Ne=u.renderInput,Ee=u.renderOption,Fe=u.renderTags,ze=u.selectOnFocus,He=(void 0===ze&&u.freeSolo,u.size),je=void 0===He?"medium":He,We=(0,r.Z)(u,H),Ve=h((0,i.Z)({},u,{componentName:"Autocomplete"})),qe=Ve.getRootProps,Be=Ve.getInputProps,Ke=Ve.getInputLabelProps,Ue=Ve.getPopupIndicatorProps,_e=Ve.getClearProps,Ge=Ve.getTagProps,Je=Ve.getListboxProps,Qe=Ve.getOptionProps,Xe=Ve.value,Ye=Ve.dirty,$e=Ve.id,et=Ve.popupOpen,tt=Ve.focused,nt=Ve.focusedTag,ot=Ve.anchorEl,rt=Ve.setAnchorEl,it=Ve.inputValue,at=Ve.groupedOptions,lt=!R&&!E&&Ye&&!Me,ct=(!ne||!0===ee)&&!1!==ee,ut=(0,i.Z)({},u,{disablePortal:Y,focused:tt,fullWidth:re,hasClearIcon:lt,hasPopupIcon:ct,inputFocused:-1===nt,popupOpen:et,size:je}),pt=function(e){var t=e.classes,n=e.disablePortal,o=e.focused,r=e.fullWidth,i=e.hasClearIcon,a=e.hasPopupIcon,l=e.inputFocused,c=e.popupOpen,u=e.size,p={root:["root",o&&"focused",r&&"fullWidth",i&&"hasClearIcon",a&&"hasPopupIcon"],inputRoot:["inputRoot"],input:["input",l&&"inputFocused"],tag:["tag","tagSize".concat((0,F.Z)(u))],endAdornment:["endAdornment"],clearIndicator:["clearIndicator"],popupIndicator:["popupIndicator",c&&"popupIndicatorOpen"],popper:["popper",n&&"popperDisablePortal"],paper:["paper"],listbox:["listbox"],loading:["loading"],noOptions:["noOptions"],option:["option"],groupLabel:["groupLabel"],groupUl:["groupUl"]};return(0,m.Z)(p,M,t)}(ut);if(Oe&&Xe.length>0){var st=function(e){return(0,i.Z)({className:(0,l.Z)(pt.tag),disabled:E},Ge(e))};c=Fe?Fe(Xe,st):Xe.map((function(e,t){return(0,z.jsx)(y.Z,(0,i.Z)({label:ce(e),size:je},st({index:t}),p))}))}if(de>-1&&Array.isArray(c)){var dt=c.length-de;!tt&&dt>0&&(c=c.splice(0,de)).push((0,z.jsx)("span",{className:pt.tag,children:ae(dt)},c.length))}var ft=De||function(e){return(0,z.jsxs)("li",{children:[(0,z.jsx)(J,{className:pt.groupLabel,ownerState:ut,component:"div",children:e.group}),(0,z.jsx)(Q,{className:pt.groupUl,ownerState:ut,children:e.children})]},e.key)},gt=Ee||function(e,t){return(0,z.jsx)("li",(0,i.Z)({},e,{children:ce(t)}))},vt=function(e,t){var n=Qe({option:e,index:t});return gt((0,i.Z)({},n,{className:pt.option}),e,{selected:n["aria-selected"],inputValue:it})};return(0,z.jsxs)(a.Fragment,{children:[(0,z.jsx)(j,(0,i.Z)({ref:t,className:(0,l.Z)(pt.root,s),ownerState:ut},qe(We),{children:Ne({id:$e,disabled:E,fullWidth:!0,size:"small"===je?"small":void 0,InputLabelProps:Ke(),InputProps:{ref:rt,className:pt.inputRoot,startAdornment:c,endAdornment:(0,z.jsxs)(W,{className:pt.endAdornment,ownerState:ut,children:[lt?(0,z.jsx)(V,(0,i.Z)({},_e(),{"aria-label":b,title:b,ownerState:ut},C.clearIndicator,{className:(0,l.Z)(pt.clearIndicator,null==(n=C.clearIndicator)?void 0:n.className),children:f})):null,ct?(0,z.jsx)(q,(0,i.Z)({},Ue(),{disabled:E,"aria-label":et?I:Ce,title:et?I:Ce,className:(0,l.Z)(pt.popupIndicator),ownerState:ut,children:Re})):null]})},inputProps:(0,i.Z)({className:(0,l.Z)(pt.input),disabled:E,readOnly:Me},Be())})})),et&&ot?(0,z.jsx)(B,{as:Ae,className:(0,l.Z)(pt.popper),disablePortal:Y,style:{width:ot?ot.clientWidth:null},ownerState:ut,role:"presentation",anchorEl:ot,open:!0,children:(0,z.jsxs)(K,(0,i.Z)({ownerState:ut,as:we},C.paper,{className:(0,l.Z)(pt.paper,null==(o=C.paper)?void 0:o.className),children:[me&&0===at.length?(0,z.jsx)(U,{className:pt.loading,ownerState:ut,children:xe}):null,0!==at.length||ne||me?null:(0,z.jsx)(_,{className:pt.noOptions,ownerState:ut,role:"presentation",onMouseDown:function(e){e.preventDefault()},children:ye}),at.length>0?(0,z.jsx)(G,(0,i.Z)({as:ge,className:pt.listbox,ownerState:ut},Je(),ve,{children:at.map((function(e,t){return ue?ft({key:e.key,group:e.group,children:e.options.map((function(t,n){return vt(t,e.index+n)}))}):vt(e,t)}))})):null]}))}):null]})}))}}]);
import{a as fe,b as ge,k as I,m as a,j as H,l as u,n as G,f as O,u as ve,o as Y,g as K,p as me,q as pe,d as z,E as p,v as we,aO as L,h as r,Q as w,z as M,J,O as q,P as j,L as S,aX as U,aY as ye,aZ as xe,U as _e,a_ as ke,V as Be,_ as Ce}from"./index.1f4de99e.js";import{D as X,c as Se,E as P,G as h,H as Re,I as $e,w as Ve,J as Fe,N as ze}from"./DataTable.10763edc.js";const Ne={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"},Te=e=>{const{primaryColor:d,opacityDisabled:c,borderRadius:s,textColor3:t}=e,l="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},Ne),{iconColor:t,textColor:"white",loadingColor:d,opacityDisabled:c,railColor:l,railColorActive:d,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:s,railBorderRadiusMedium:s,railBorderRadiusLarge:s,buttonBorderRadiusSmall:s,buttonBorderRadiusMedium:s,buttonBorderRadiusLarge:s,boxShadowFocus:`0 0 0 2px ${ge(d,{alpha:.2})}`})},De={name:"Switch",common:fe,self:Te},We=De,Ee=I("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[a("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),a("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),a("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),I("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[X({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),a("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),a("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),a("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),H("&:focus",[a("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),u("round",[a("rail","border-radius: calc(var(--n-rail-height) / 2);",[a("button","border-radius: calc(var(--n-button-height) / 2);")])]),G("disabled",[G("icon",[u("rubber-band",[u("pressed",[a("rail",[a("button","max-width: var(--n-button-width-pressed);")])]),a("rail",[H("&:active",[a("button","max-width: var(--n-button-width-pressed);")])]),u("active",[u("pressed",[a("rail",[a("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),a("rail",[H("&:active",[a("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),u("active",[a("rail",[a("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),a("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[a("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[X()]),a("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),u("active",[a("rail","background-color: var(--n-rail-color-active);")]),u("loading",[a("rail",`
 cursor: wait;
 `)]),u("disabled",[a("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),He=Object.assign(Object.assign({},Y.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let C;const Ke=O({name:"Switch",props:He,setup(e){C===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?C=CSS.supports("width","max(1px)"):C=!1:C=!0);const{mergedClsPrefixRef:d,inlineThemeDisabled:c}=ve(e),s=Y("Switch","-switch",Ee,We,e,d),t=Se(e),{mergedSizeRef:l,mergedDisabledRef:o}=t,_=K(e.defaultValue),R=me(e,"value"),m=pe(R,_),k=z(()=>m.value===e.checkedValue),y=K(!1),n=K(!1),b=z(()=>{const{railStyle:i}=e;if(!!i)return i({focused:n.value,checked:k.value})});function f(i){const{"onUpdate:value":$,onChange:V,onUpdateValue:F}=e,{nTriggerFormInput:N,nTriggerFormChange:T}=t;$&&M($,i),F&&M(F,i),V&&M(V,i),_.value=i,N(),T()}function Q(){const{nTriggerFormFocus:i}=t;i()}function Z(){const{nTriggerFormBlur:i}=t;i()}function ee(){e.loading||o.value||(m.value!==e.checkedValue?f(e.checkedValue):f(e.uncheckedValue))}function te(){n.value=!0,Q()}function ae(){n.value=!1,Z(),y.value=!1}function ie(i){e.loading||o.value||i.key===" "&&(m.value!==e.checkedValue?f(e.checkedValue):f(e.uncheckedValue),y.value=!1)}function ne(i){e.loading||o.value||i.key===" "&&(i.preventDefault(),y.value=!0)}const A=z(()=>{const{value:i}=l,{self:{opacityDisabled:$,railColor:V,railColorActive:F,buttonBoxShadow:N,buttonColor:T,boxShadowFocus:oe,loadingColor:re,textColor:le,iconColor:se,[p("buttonHeight",i)]:g,[p("buttonWidth",i)]:de,[p("buttonWidthPressed",i)]:ce,[p("railHeight",i)]:v,[p("railWidth",i)]:B,[p("railBorderRadius",i)]:ue,[p("buttonBorderRadius",i)]:he},common:{cubicBezierEaseInOut:be}}=s.value;let D,W,E;return C?(D=`calc((${v} - ${g}) / 2)`,W=`max(${v}, ${g})`,E=`max(${B}, calc(${B} + ${g} - ${v}))`):(D=P((h(v)-h(g))/2),W=P(Math.max(h(v),h(g))),E=h(v)>h(g)?B:P(h(B)+h(g)-h(v))),{"--n-bezier":be,"--n-button-border-radius":he,"--n-button-box-shadow":N,"--n-button-color":T,"--n-button-width":de,"--n-button-width-pressed":ce,"--n-button-height":g,"--n-height":W,"--n-offset":D,"--n-opacity-disabled":$,"--n-rail-border-radius":ue,"--n-rail-color":V,"--n-rail-color-active":F,"--n-rail-height":v,"--n-rail-width":B,"--n-width":E,"--n-box-shadow-focus":oe,"--n-loading-color":re,"--n-text-color":le,"--n-icon-color":se}}),x=c?we("switch",z(()=>l.value[0]),A,e):void 0;return{handleClick:ee,handleBlur:ae,handleFocus:te,handleKeyup:ie,handleKeydown:ne,mergedRailStyle:b,pressed:y,mergedClsPrefix:d,mergedValue:m,checked:k,mergedDisabled:o,cssVars:c?void 0:A,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:d,checked:c,mergedRailStyle:s,onRender:t,$slots:l}=this;t==null||t();const{checked:o,unchecked:_,icon:R,"checked-icon":m,"unchecked-icon":k}=l,y=!(L(R)&&L(m)&&L(k));return r("div",{role:"switch","aria-checked":c,class:[`${e}-switch`,this.themeClass,y&&`${e}-switch--icon`,c&&`${e}-switch--active`,d&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},r("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:s},w(o,n=>w(_,b=>n||b?r("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},r("div",{class:`${e}-switch__rail-placeholder`},r("div",{class:`${e}-switch__button-placeholder`}),n),r("div",{class:`${e}-switch__rail-placeholder`},r("div",{class:`${e}-switch__button-placeholder`}),b)):null)),r("div",{class:`${e}-switch__button`},w(R,n=>w(m,b=>w(k,f=>r(Re,null,{default:()=>this.loading?r($e,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(b||n)?r("div",{class:`${e}-switch__button-icon`,key:b?"checked-icon":"icon"},b||n):!this.checked&&(f||n)?r("div",{class:`${e}-switch__button-icon`,key:f?"unchecked-icon":"icon"},f||n):null})))),w(o,n=>n&&r("div",{key:"checked",class:`${e}-switch__checked`},n)),w(_,n=>n&&r("div",{key:"unchecked",class:`${e}-switch__unchecked`},n)))))}}),Le={class:"to-buy-table"},Me=O({__name:"ToBuyTable",setup(e){const d=[{type:"selection",width:20},{title:"\u6E20\u9053",key:"totalGram",width:50,align:"center",render(t){return r(Ke,{value:t.buyFrom==="online",onUpdateValue(l){U.find(o=>o.ingredName===t.ingredName).buyFrom=l?"online":"offline"},size:"small"},{checked:()=>"\u{1F6D2}",unchecked:()=>"\u{1F4E6}"})}},{title:"\u98DF\u6750",key:"ingredName",width:70,align:"center",render(t){return t.ingredName}},{title:"\u603B\u91CD",key:"totalGram",width:50,align:"center",render(t){return t.description?r(Fe,{trigger:"click"},{trigger:()=>t.totalGram,default:()=>t.description}):t.totalGram}},{title:"\u53C2\u8003\u4EFD\u6570",key:"totalUnits",width:40,align:"center",render(t){var l;return t.totalUnits?(l=t.totalUnits)==null?void 0:l.toFixed(2):"-"}}],c=t=>t.ingredName;function s(t){const l=new Set(t);U.forEach(o=>{o.isBought=l.has(o.ingredName)})}return(t,l)=>(J(),q("div",Le,[j(S(Ve),{rowKey:c,columns:d,checkedRowKeys:S(U).filter(o=>o.isBought).map(o=>o.ingredName),striped:"",data:S(ye),"onUpdate:checkedRowKeys":s},null,8,["checkedRowKeys","data"])]))}});const Ue={class:"to-buy-view"},Pe={class:"actions"},je=Be("\u8FDB\u884C\u8BA1\u7B97 \u{1F9EE}"),Oe=O({__name:"ToBuyView",setup(e){return(d,c)=>(J(),q("div",Ue,[j(Me),xe("div",Pe,[j(S(ze),{onClick:S(ke)},{default:_e(()=>[je]),_:1},8,["onClick"])])]))}});const Ge=Ce(Oe,[["__scopeId","data-v-2a3c58c5"]]);export{Ge as default};

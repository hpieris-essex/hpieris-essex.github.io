"use strict";(self.webpackChunkessex_portfolio_ml=self.webpackChunkessex_portfolio_ml||[]).push([[1321],{471:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>o,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var i=n(4848),r=n(8453);const s={},l="Jaccard Coefficient",c={id:"ml-docs/unit-5/unit-5",title:"Jaccard Coefficient",description:"Introduction",source:"@site/docs/ml-docs/unit-5/unit-5.md",sourceDirName:"ml-docs/unit-5",slug:"/ml-docs/unit-5/",permalink:"/ml-docs/unit-5/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Reflection",permalink:"/ml-docs/unit-5/Reflection"},next:{title:"6. Clustering with Python",permalink:"/category/6-clustering-with-python"}},d={},a=[{value:"Introduction",id:"introduction",level:4},{value:"Dataset",id:"dataset",level:4},{value:"The Process",id:"the-process",level:4},{value:"Calculations",id:"calculations",level:4},{value:"Results",id:"results",level:4},{value:"References",id:"references",level:4}];function h(e){const t={a:"a",code:"code",h1:"h1",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"jaccard-coefficient",children:"Jaccard Coefficient"}),"\n",(0,i.jsx)(t.h4,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.p,{children:"Jaccard similarity is a statistic used to compute the similarity between two objects (Karabiber, F., N.D.)"}),"\n",(0,i.jsx)(t.p,{children:"The formula for the jaccard coefficient is as below:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"J(A, B) = |A \u2229 B| / |A \u222a B|\n"})}),"\n",(0,i.jsx)(t.h4,{id:"dataset",children:"Dataset"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Gender"}),(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Fever"}),(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Cough"}),(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Test-1"}),(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Test-2"}),(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Test-3"}),(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Test-4"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Jack"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"M"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"Y"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"N"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"P"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"N"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"N"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"A"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Mary"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"F"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"Y"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"N"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"P"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"A"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"P"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"N"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Jim"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"M"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"Y"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"P"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"N"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"N"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"N"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"A"})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"the-process",children:"The Process"}),"\n",(0,i.jsx)(t.p,{children:"Provided the above data set, we can take the below approach to calculate the Jaccard coefficients:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Convert each row into a set of attributes, where the attributes include only those columns with positive values (P - positive, N - negative, A - absent)."}),"\n",(0,i.jsx)(t.li,{children:"Calculate the Jaccard coefficient using the formula: J(A, B) = |A \u2229 B| / |A \u222a B| shown above, where A and B are the sets from step 1, |A \u2229 B| is the number of elements in both sets, and |A \u222a B| is the total number of unique elements across both sets."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Given the dataset:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"- Jack: { Fever, Test-1 }\n- Mary: { Fever, Test-1, Test-3 }\n- Jim: { Fever, Cough }\n"})}),"\n",(0,i.jsx)(t.h4,{id:"calculations",children:"Calculations"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Jack and Mary:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"- Jack \u2229 Mary: {Fever, Test-1}\n- Jack \u222a Mary: {Fever, Test-1, Test-3}\n- Jaccard(Jack, Mary) = |{Fever, Test-1}| / |{Fever, Test-1, Test-3}| = 2 / 3\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Jack and Jim:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"- Jack \u2229 Jim: {Fever}\n- Jack \u222a Jim: {Fever, Test-1, Cough}\n- Jaccard(Jack, Jim) = |{Fever}| / |{Fever, Test-1, Cough}| = 1 / 3\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Jim and Mary:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"- Jim \u2229 Mary: {Fever}\n- Jim \u222a Mary: {Fever, Cough, Test-1, Test-3}\n- Jaccard(Jim, Mary) = |{Fever}| / |{Fever, Cough, Test-1, Test-3}| = 1 / 4\n"})}),"\n",(0,i.jsx)(t.h4,{id:"results",children:"Results"}),"\n",(0,i.jsx)(t.p,{children:"The Jaccard coefficients:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Jack and Mary: 0.66"}),"\n",(0,i.jsx)(t.li,{children:"Jack and Jim: 0.33"}),"\n",(0,i.jsx)(t.li,{children:"Jim and Mary: 0.25"}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"references",children:"References"}),"\n",(0,i.jsxs)(t.p,{children:["Karabiber, F. (N.D.) Jaccard Similarity. Available from: ",(0,i.jsx)(t.a,{href:"https://www.learndatasci.com/glossary/jaccard-similarity",children:"https://www.learndatasci.com/glossary/jaccard-similarity"})," [Accessed 19 February 2024]."]})]})}function o(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>c});var i=n(6540);const r={},s=i.createContext(r);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);
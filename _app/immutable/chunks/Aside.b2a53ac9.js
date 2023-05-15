import{S as N,i as O,s as Z,k as b,a as A,q,l as x,m as k,h as d,c as P,r as S,n as v,b as y,F as f,G as I,H as w,j as U,t as H,e as V,N as j,u as B,O as F}from"./index.f2b26511.js";import{p as T}from"./Title.02c2f848.js";function C(a,r,n){const o=a.slice();return o[13]=r[n],o}function G(a){let r,n,o,e,i;return{c(){r=b("div"),n=b("div"),o=A(),e=b("style"),i=q(`.loading {\r
                    height: 100%;\r
                    display: flex;\r
                    place-content: center;\r
                    place-items: center;\r
                }\r
                .dot-revolution {\r
                    position: relative;\r
                    width: 10px;\r
                    height: 10px;\r
                    border-radius: 5px;\r
                    background-color: var(--svg-color);\r
                    color: var(--svg-color);\r
                }\r
                .dot-revolution::before, .dot-revolution::after {\r
                    content: "";\r
                    display: inline-block;\r
                    position: absolute;\r
                }\r
                .dot-revolution::before {\r
                    left: 0;\r
                    top: -15px;\r
                    width: 10px;\r
                    height: 10px;\r
                    border-radius: 5px;\r
                    background-color: var(--svg-color);\r
                    color: var(--svg-color);\r
                    transform-origin: 5px 20px;\r
                    animation: dot-revolution 1.4s linear infinite;\r
                }\r
                .dot-revolution::after {\r
                    left: 0;\r
                    top: -30px;\r
                    width: 10px;\r
                    height: 10px;\r
                    border-radius: 5px;\r
                    background-color: var(--svg-color);\r
                    color: var(--svg-color);\r
                    transform-origin: 5px 35px;\r
                    animation: dot-revolution 1s linear infinite;\r
                }\r
\r
                @keyframes dot-revolution {\r
                    0% {\r
                        transform: rotateZ(0deg) translate3d(0, 0, 0);\r
                    }\r
                    100% {\r
                        transform: rotateZ(360deg) translate3d(0, 0, 0);\r
                    }\r
                }`),this.h()},l(t){r=x(t,"DIV",{class:!0});var s=k(r);n=x(s,"DIV",{class:!0}),k(n).forEach(d),s.forEach(d),o=P(t),e=x(t,"STYLE",{});var c=k(e);i=S(c,`.loading {\r
                    height: 100%;\r
                    display: flex;\r
                    place-content: center;\r
                    place-items: center;\r
                }\r
                .dot-revolution {\r
                    position: relative;\r
                    width: 10px;\r
                    height: 10px;\r
                    border-radius: 5px;\r
                    background-color: var(--svg-color);\r
                    color: var(--svg-color);\r
                }\r
                .dot-revolution::before, .dot-revolution::after {\r
                    content: "";\r
                    display: inline-block;\r
                    position: absolute;\r
                }\r
                .dot-revolution::before {\r
                    left: 0;\r
                    top: -15px;\r
                    width: 10px;\r
                    height: 10px;\r
                    border-radius: 5px;\r
                    background-color: var(--svg-color);\r
                    color: var(--svg-color);\r
                    transform-origin: 5px 20px;\r
                    animation: dot-revolution 1.4s linear infinite;\r
                }\r
                .dot-revolution::after {\r
                    left: 0;\r
                    top: -30px;\r
                    width: 10px;\r
                    height: 10px;\r
                    border-radius: 5px;\r
                    background-color: var(--svg-color);\r
                    color: var(--svg-color);\r
                    transform-origin: 5px 35px;\r
                    animation: dot-revolution 1s linear infinite;\r
                }\r
\r
                @keyframes dot-revolution {\r
                    0% {\r
                        transform: rotateZ(0deg) translate3d(0, 0, 0);\r
                    }\r
                    100% {\r
                        transform: rotateZ(360deg) translate3d(0, 0, 0);\r
                    }\r
                }`),c.forEach(d),this.h()},h(){v(n,"class","dot-revolution"),v(r,"class","loading")},m(t,s){y(t,r,s),f(r,n),y(t,o,s),y(t,e,s),f(e,i)},p:w,d(t){t&&d(r),t&&d(o),t&&d(e)}}}function W(a){let r,n=a[2](a[0]),o=[];for(let e=0;e<n.length;e+=1)o[e]=D(C(a,n,e));return{c(){for(let e=0;e<o.length;e+=1)o[e].c();r=V()},l(e){for(let i=0;i<o.length;i+=1)o[i].l(e);r=V()},m(e,i){for(let t=0;t<o.length;t+=1)o[t]&&o[t].m(e,i);y(e,r,i)},p(e,i){if(i&13){n=e[2](e[0]);let t;for(t=0;t<n.length;t+=1){const s=C(e,n,t);o[t]?o[t].p(s,i):(o[t]=D(s),o[t].c(),o[t].m(r.parentNode,r))}for(;t<o.length;t+=1)o[t].d(1);o.length=n.length}},d(e){j(o,e),e&&d(r)}}}function D(a){let r,n,o=T.get(a[13])+"",e,i,t,s,c,_;return{c(){r=b("ul"),n=b("a"),e=q(o),t=A(),this.h()},l(u){r=x(u,"UL",{id:!0,class:!0});var p=k(r);n=x(p,"A",{href:!0,class:!0});var h=k(n);e=S(h,o),h.forEach(d),t=P(p),p.forEach(d),this.h()},h(){v(n,"href",i=a[13]),v(n,"class","svelte-4ir4oi"),v(r,"id",s=a[13]),v(r,"class","sidebar-item svelte-4ir4oi")},m(u,p){y(u,r,p),f(r,n),f(n,e),f(r,t),c||(_=[I(n,"click",z),I(r,"click",a[5])],c=!0)},p(u,p){p&1&&o!==(o=T.get(u[13])+"")&&B(e,o),p&1&&i!==(i=u[13])&&v(n,"href",i),p&1&&s!==(s=u[13])&&v(r,"id",s)},d(u){u&&d(r),c=!1,F(_)}}}function Y(a){let r,n,o,e,i,t,s,c,_;function u(m,l){return m[1]?W:G}let p=u(a),h=p(a);return{c(){r=b("div"),n=b("nav"),h.c(),o=A(),e=b("div"),i=b("button"),t=q("‹"),s=q(`\r
        voltar ao topo`),this.h()},l(m){r=x(m,"DIV",{class:!0});var l=k(r);n=x(l,"NAV",{class:!0});var g=k(n);h.l(g),g.forEach(d),o=P(l),e=x(l,"DIV",{class:!0});var E=k(e);i=x(E,"BUTTON",{class:!0});var L=k(i);t=S(L,"‹"),L.forEach(d),s=S(E,`\r
        voltar ao topo`),E.forEach(d),l.forEach(d),this.h()},h(){v(n,"class","sidebar-nav svelte-4ir4oi"),v(i,"class","svelte-4ir4oi"),v(e,"class","back-to-top svelte-4ir4oi"),v(r,"class","sidebar svelte-4ir4oi")},m(m,l){y(m,r,l),f(r,n),h.m(n,null),f(r,o),f(r,e),f(e,i),f(i,t),f(e,s),c||(_=I(i,"click",a[6]),c=!0)},p(m,[l]){p===(p=u(m))&&h?h.p(m,l):(h.d(1),h=p(m),h&&(h.c(),h.m(n,null)))},i:w,o:w,d(m){m&&d(r),h.d(),c=!1,_()}}}const z=a=>a.currentTarget.scrollIntoView({behavior:"smooth",block:"center"});function J(a,r,n){let{path:o=""}=r;const e=Array.from(T.keys());let i="",t,s=!1;U(async()=>{n(4,o=window.location.pathname),n(0,i="/"+o.split("/")[1]),await H(),t=document.querySelectorAll(".sidebar-item"),t.forEach(l=>{_(l.id)[0]&&Array.from(t).forEach(E=>{u(l.id).includes(E.id)&&l.appendChild(E)})}),n(1,s=!0)});const c=l=>e.find(g=>g==l.slice(0,l.lastIndexOf("/"))),_=l=>e.filter(g=>g.startsWith(l+"/")),u=l=>_(l).filter(g=>c(g)===l),p=l=>{const g=l.currentTarget;g.classList.toggle("open"),g.nextElementSibling},h=l=>p(l),m=()=>window.scrollTo({top:0,behavior:"smooth"});return a.$$set=l=>{"path"in l&&n(4,o=l.path)},[i,s,_,p,o,h,m]}class R extends N{constructor(r){super(),O(this,r,J,Y,Z,{path:4})}}function K(a){let r,n,o,e,i,t;return{c(){r=b("section"),n=b("h2"),o=q("Pop card title"),e=A(),i=b("p"),t=q("Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro perspiciatis, in aut rem voluptatem culpa quisquam esse corrupti dicta quos magnam omnis, libero distinctio rerum, ducimus velit! Praesentium, nobis molestias!"),this.h()},l(s){r=x(s,"SECTION",{class:!0});var c=k(r);n=x(c,"H2",{class:!0});var _=k(n);o=S(_,"Pop card title"),_.forEach(d),e=P(c),i=x(c,"P",{});var u=k(i);t=S(u,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro perspiciatis, in aut rem voluptatem culpa quisquam esse corrupti dicta quos magnam omnis, libero distinctio rerum, ducimus velit! Praesentium, nobis molestias!"),u.forEach(d),c.forEach(d),this.h()},h(){v(n,"class","svelte-ikxtsl"),v(r,"class","aside-card svelte-ikxtsl")},m(s,c){y(s,r,c),f(r,n),f(n,o),f(r,e),f(r,i),f(i,t)},p:w,i:w,o:w,d(s){s&&d(r)}}}class X extends N{constructor(r){super(),O(this,r,null,K,Z,{})}}export{X as A,R as S};

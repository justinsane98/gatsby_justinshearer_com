(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{AKwe:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),r=a.n(l),n=a("qIEF"),s=a("rOkU"),c=a("Du2/");t.default=function(){var e=new Date,t=new Date(e);t.setDate(t.getDate()-99999);var a=new Date(e);return a.setDate(a.getDate()),r.a.createElement(r.a.Fragment,null,r.a.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),r.a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"1"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Playfair+Display&display=swap",rel:"stylesheet"}),r.a.createElement(c.a,null),r.a.createElement("div",{className:"my-12 mx-auto max-w-2xl w-3/4 font-serif"},r.a.createElement("main",null,r.a.createElement("section",{className:"mb-12 relative"},r.a.createElement("h2",{className:"text-2xl border-b border-black-25 pb-2"},"Proposed Rules"),r.a.createElement(n.a,{startDate:t,endDate:a}),r.a.createElement("div",{className:"425px:absolute top-2 right-0"},r.a.createElement("a",{className:"text-gold leading-loose hover:underline",href:"https://www.sec.gov/rss/rules/proposed.xml"},"XML")," | ",r.a.createElement("a",{className:"inline-block text-navy hover:underline",href:"https://www.sec.gov/rules/proposed.shtml"},"Source")))),r.a.createElement(s.a,null)))}},"Du2/":function(e,t,a){"use strict";var l=a("q1tI"),r=a.n(l);t.a=function(e){return r.a.createElement("header",{className:"bg-navy text-center px-12 relative"},r.a.createElement("div",{className:"absolute top-2 left-2 768px:left-1/4 bg-white-10 h-0.5 right-2 768px:right-1/4 w-100 z-0"}),r.a.createElement("div",{className:"absolute top-3 left-2 768px:left-1/4 ml-1 bg-white-10 h-0.5 right-2 768px:right-1/4 mr-1 w-100 z-0"}),r.a.createElement("div",{className:"absolute top-4 left-2 768px:left-1/4 ml-2 bg-white-10 h-0.5 right-2 768px:right-1/4 mr-2 w-100 z-0"}),r.a.createElement("a",{href:"/sec",className:"relative inline-block bg-navy py-1 px-2 text-sm uppercase text-white-50 font-serif z-1"},"Secretary of the Secretary"))}},qIEF:function(e,t,a){"use strict";var l=a("q1tI"),r=a.n(l),n=a("Wbzz");t.a=function(e){var t=e.startDate,a=e.endDate,l=e.message,s=Object(n.useStaticQuery)("1505888469"),c=["January","February","March","April","May","June","July","August","September","October","November","December"],i=[];return s.allFeedProposedRules.nodes.forEach((function(e,l){var n=e.pubDate.split(" ")[1],s=e.pubDate.split(" ")[2],o=e.pubDate.split(" ")[3],p=e.pubDate.split(" ")[4],m=p.split(":")[1],u=p.split(":")[0],f=new Date(o,c.findIndex((function(e){return e.includes(s)})),n);f.setHours(0,0,0,0)>=t.setHours(0,0,0,0)&&f.setHours(0,0,0,0)<=a.setHours(0,0,0,0)&&i.push(r.a.createElement("li",{className:"768px:flex-col 768px:w-1/2 768px:px-8 py-4",key:e.title+l},r.a.createElement("a",{className:"text-large text-navy font-bold hover:underline",href:e.link},e.title),r.a.createElement("p",{className:"text-sm opacity-25"},s," ",n," ",u,":",m," EST")))})),r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:(i.length>0?"":"hidden")+" 768px:flex 768px:flex-wrap 768px:-mx-8"},i),r.a.createElement("p",{className:(i.length>0?"hidden":"")+" py-4 opacity-50"},"No proposed rule ",l,"."))}},rOkU:function(e,t,a){"use strict";var l=a("q1tI"),r=a.n(l);t.a=function(e){return r.a.createElement("div",null)}}}]);
//# sourceMappingURL=component---src-pages-proposed-rules-js-ccd709224f66982ce374.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"Du2/":function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l);t.a=function(e){return n.a.createElement("header",{className:"bg-navy text-center px-12 relative"},n.a.createElement("div",{className:"absolute top-2 left-2 768px:left-1/4 bg-white-10 h-0.5 right-2 768px:right-1/4 w-100 z-0"}),n.a.createElement("div",{className:"absolute top-3 left-2 768px:left-1/4 ml-1 bg-white-10 h-0.5 right-2 768px:right-1/4 mr-1 w-100 z-0"}),n.a.createElement("div",{className:"absolute top-4 left-2 768px:left-1/4 ml-2 bg-white-10 h-0.5 right-2 768px:right-1/4 mr-2 w-100 z-0"}),n.a.createElement("a",{href:"/sec",className:"relative inline-block bg-navy py-1 px-2 text-sm uppercase text-white-50 font-serif z-1"},"Secretary of the Secretary"))}},Jxym:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),r=a("ilLm"),s=a("rOkU"),i=a("Du2/");t.default=function(){var e=new Date,t=new Date(e);t.setDate(t.getDate()-99999);var a=new Date(e);return a.setDate(a.getDate()),n.a.createElement(n.a.Fragment,null,n.a.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),n.a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"1"}),n.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Playfair+Display&display=swap",rel:"stylesheet"}),n.a.createElement(i.a,null),n.a.createElement("div",{className:"my-12 mx-auto max-w-2xl w-3/4 font-serif"},n.a.createElement("main",null,n.a.createElement("section",{className:"mb-12 relative"},n.a.createElement("h2",{className:"text-2xl border-b border-black-25 pb-2"},"Litigation"),n.a.createElement(r.a,{startDate:t,endDate:a}),n.a.createElement("div",{className:"425px:absolute top-2 right-0"},n.a.createElement("a",{className:"text-gold leading-loose hover:underline",href:"https://www.sec.gov/rss/litigation/litreleases.xml"},"XML")," | ",n.a.createElement("a",{className:"inline-block text-navy hover:underline",href:"https://www.sec.gov/litigation/litreleases.htm"},"Source")))),n.a.createElement(s.a,null)))}},ilLm:function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),r=a("Wbzz");t.a=function(e){var t=e.startDate,a=e.endDate,l=e.message,s=Object(r.useStaticQuery)("2922819327"),i=["January","February","March","April","May","June","July","August","September","October","November","December"],c=[];return s.allFeedLitigation.nodes.forEach((function(e,l){var r=e.pubDate.split(" ")[1],s=e.pubDate.split(" ")[2],o=e.pubDate.split(" ")[3],m=e.pubDate.split(" ")[4],p=m.split(":")[1],u=m.split(":")[0],f=e.content?e.content.replaceAll("<br />"," "):"",h=new Date(o,i.findIndex((function(e){return e.includes(s)})),r);h.setHours(0,0,0,0)>=t.setHours(0,0,0,0)&&h.setHours(0,0,0,0)<=a.setHours(0,0,0,0)&&c.push(n.a.createElement("li",{className:"768px:flex-col 768px:w-1/2 768px:px-8 py-4",key:e.title+l},n.a.createElement("a",{className:"text-large text-navy font-bold hover:underline",href:e.link},e.title),n.a.createElement("p",{className:"opacity-90"},f),n.a.createElement("p",{className:"text-sm opacity-25"},s," ",r," ",u,":",p," EST")))})),n.a.createElement(n.a.Fragment,null,n.a.createElement("ul",{className:(c.length>0?"":"hidden")+" 768px:flex 768px:flex-wrap 768px:-mx-8"},c),n.a.createElement("p",{className:(c.length>0?"hidden":"")+" py-4 opacity-50"},"No litigation ",l,"."))}},rOkU:function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l);t.a=function(e){return n.a.createElement("div",null)}}}]);
//# sourceMappingURL=component---src-pages-litigation-js-7c9a838dd1f90eef2e0e.js.map
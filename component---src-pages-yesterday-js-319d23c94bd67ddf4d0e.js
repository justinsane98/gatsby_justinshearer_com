(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"3HQJ":function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),r=a("Wbzz");t.a=function(e){e.rssUrl,e.sourceUrl,e.title;var t=e.startDate,a=e.endDate,l=Object(r.useStaticQuery)("422925003"),s=["January","February","March","April","May","June","July","August","September","October","November","December"],c=[];return l.allFeedAdmin.nodes.forEach((function(e,l){var r=e.pubDate.split(" ")[1],i=e.pubDate.split(" ")[2],o=e.pubDate.split(" ")[3],m=e.pubDate.split(" ")[4],p=m.split(":")[1],u=m.split(":")[0],d=e.content?e.content.replaceAll("<br />"," "):"",h=new Date(o,s.findIndex((function(e){return e.includes(i)})),r);h.setHours(0,0,0,0)>=t.setHours(0,0,0,0)&&h.setHours(0,0,0,0)<=a.setHours(0,0,0,0)&&c.push(n.a.createElement("li",{className:"768px:flex-col 768px:w-1/2 768px:px-8 py-4",key:e.title+l},n.a.createElement("a",{className:"text-large text-navy font-bold hover:underline",href:e.link},e.title),n.a.createElement("p",{className:"opacity-90"},d),n.a.createElement("p",{className:"text-sm opacity-25"},i," ",r," ",u,":",p," EST")))})),n.a.createElement(n.a.Fragment,null,n.a.createElement("ul",{className:(c.length>0?"":"hidden")+" 768px:flex 768px:flex-wrap 768px:-mx-8"},c),n.a.createElement("p",{className:(c.length>0?"hidden":"")+" py-4 opacity-50"},"No administrative proceeding has been published today."))}},A8iH:function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),r=a("Wbzz");t.a=function(e){var t=e.startDate,a=e.endDate,l=Object(r.useStaticQuery)("146760989"),s=["January","February","March","April","May","June","July","August","September","October","November","December"],c=[];return l.allFeedSpeeches.nodes.forEach((function(e,l){var r=e.pubDate.split(" ")[1],i=e.pubDate.split(" ")[2],o=e.pubDate.split(" ")[3],m=e.pubDate.split(" ")[4],p=m.split(":")[1],u=m.split(":")[0],d=e.content?e.content.replaceAll("<br />"," "):"",h=new Date(o,s.findIndex((function(e){return e.includes(i)})),r);h.setHours(0,0,0,0)>=t.setHours(0,0,0,0)&&h.setHours(0,0,0,0)<=a.setHours(0,0,0,0)&&c.push(n.a.createElement("li",{className:"768px:flex-col 768px:w-1/2 768px:px-8 py-4",key:e.title+l},n.a.createElement("a",{className:"text-large text-navy font-bold hover:underline",href:e.link},e.title),n.a.createElement("p",{className:"opacity-90"},d),n.a.createElement("p",{className:"text-sm opacity-25"},i," ",r," ",u,":",p," EST")))})),n.a.createElement(n.a.Fragment,null,n.a.createElement("ul",{className:(c.length>0?"":"hidden")+" 768px:flex 768px:flex-wrap 768px:-mx-8"},c),n.a.createElement("p",{className:(c.length>0?"hidden":"")+" py-4 opacity-50"},"No speech has been published today."))}},LI5u:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),r=a("ilLm"),s=a("MflX"),c=a("A8iH"),i=a("XUBH"),o=a("xS/I"),m=a("3HQJ"),p=a("nqmB"),u=a("rOkU");t.default=function(){var e=["January","February","March","April","May","June","July","August","September","October","November","December"],t=new Date,a=new Date(t);a.setDate(a.getDate()-1);var l=e[a.getMonth()]+" "+a.getDate()+", "+a.getFullYear(),d=new Date(t);d.setDate(d.getDate()-1);var h=e[d.getMonth()]+" "+d.getDate()+", "+d.getFullYear();return n.a.createElement(n.a.Fragment,null,n.a.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),n.a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"1"}),n.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Playfair+Display&display=swap",rel:"stylesheet"}),n.a.createElement("header",{className:"bg-navy text-center px-12 relative"},n.a.createElement("div",{className:"absolute top-2 left-12 bg-white-10 h-0.5 right-12 w-100 z-0"}),n.a.createElement("div",{className:"absolute top-3 left-10 bg-white-10 h-0.5 right-10 w-100 z-0"}),n.a.createElement("div",{className:"absolute top-4 left-12 bg-white-10 h-0.5 right-12 w-100 z-0"}),n.a.createElement("span",{className:"relative inline-block bg-navy py-1 px-2 text-sm uppercase text-white-50 font-serif z-1"},"Secretary of the Secretary")),n.a.createElement("div",{className:"my-12 mx-auto max-w-2xl w-3/4 font-serif"},n.a.createElement("main",null,n.a.createElement("h1",{className:"text-3xl text-navy text-center"},"Yesterday at the SEC"),n.a.createElement("h2",{className:"mb-8 text-lg text-center"},l===h?l:l+" - "+h,n.a.createElement("a",{className:"text-navy-50 inline-block relative top-1 left-2",href:"/sec"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})))),n.a.createElement("section",{className:"mb-12 relative"},n.a.createElement("h2",{className:"text-2xl border-b border-black-25 pb-2"},"News"),n.a.createElement(s.a,{startDate:a,endDate:d}),n.a.createElement("div",{className:"425px:absolute top-2 right-0 text-navy"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 inline-block relative -top-0.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}))," ",n.a.createElement("a",{className:"inline-block hover:underline",href:"/news"},"Past News"))),n.a.createElement("section",{className:"mb-12 relative"},n.a.createElement("h2",{className:"text-2xl border-b border-black-25 pb-2"},"Speeches"),n.a.createElement(c.a,{startDate:a,endDate:d}),n.a.createElement("div",{className:"425px:absolute top-2 right-0 text-navy"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 inline-block relative -top-0.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}))," ",n.a.createElement("a",{className:"inline-block hover:underline",href:"/speeches"},"Past Speeches"))),n.a.createElement("section",{className:"mb-12 relative"},n.a.createElement("h2",{className:"text-2xl border-b border-black-25 pb-2"},"Testimony"),n.a.createElement(i.a,{startDate:a,endDate:d}),n.a.createElement("div",{className:"425px:absolute top-2 right-0 text-navy"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 inline-block relative -top-0.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}))," ",n.a.createElement("a",{className:"inline-block hover:underline",href:"/testimony"},"Past Testimony"))),n.a.createElement("section",{className:"mb-12 relative"},n.a.createElement("h2",{className:"text-2xl border-b border-black-25 pb-2"},"Public Statements"),n.a.createElement(o.a,{startDate:a,endDate:d}),n.a.createElement("div",{className:"425px:absolute top-2 right-0 text-navy"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 inline-block relative -top-0.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}))," ",n.a.createElement("a",{className:"inline-block hover:underline",href:"/statements"},"Past Statements"))),n.a.createElement("section",{className:"mb-12 relative"},n.a.createElement("h2",{className:"text-2xl border-b border-black-25 pb-2"},"Litigation"),n.a.createElement(r.a,{startDate:a,endDate:d}),n.a.createElement("div",{className:"425px:absolute top-2 right-0 text-navy"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 inline-block relative -top-0.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}))," ",n.a.createElement("a",{className:"inline-block hover:underline",href:"/litigation"},"Past Litigation"))),n.a.createElement("section",{className:"mb-12 relative"},n.a.createElement("h2",{className:"text-2xl border-b border-black-25 pb-2"},"Administrative Proceedings"),n.a.createElement(m.a,{startDate:a,endDate:d}),n.a.createElement("div",{className:"425px:absolute top-2 right-0 text-navy"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 inline-block relative -top-0.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}))," ",n.a.createElement("a",{className:"inline-block hover:underline",href:"/admin"},"Past Proceedings"))),n.a.createElement("section",{className:"mb-12 relative"},n.a.createElement("h2",{className:"text-2xl border-b border-black-25 pb-2"},"Trading Suspensions"),n.a.createElement(p.a,{startDate:a,endDate:d}),n.a.createElement("div",{className:"425px:absolute top-2 right-0 text-navy"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 inline-block relative -top-0.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}))," ",n.a.createElement("a",{className:"inline-block hover:underline",href:"/tradingSuspensions"},"Past Suspensions")))),n.a.createElement(u.a,null)))}},MflX:function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),r=a("Wbzz");t.a=function(e){var t=e.startDate,a=e.endDate,l=Object(r.useStaticQuery)("1748296325"),s=["January","February","March","April","May","June","July","August","September","October","November","December"],c=[];return l.allFeedNews.nodes.forEach((function(e,l){var r=e.pubDate.split(" ")[1],i=e.pubDate.split(" ")[2],o=e.pubDate.split(" ")[3],m=e.pubDate.split(" ")[4],p=m.split(":")[1],u=m.split(":")[0],d=e.content?e.content.replaceAll("<br />"," "):"",h=new Date(o,s.findIndex((function(e){return e.includes(i)})),r);h.setHours(0,0,0,0)>=t.setHours(0,0,0,0)&&h.setHours(0,0,0,0)<=a.setHours(0,0,0,0)&&c.push(n.a.createElement("li",{className:"768px:flex-col 768px:w-1/2 768px:px-8 py-4",key:e.title+l},n.a.createElement("a",{className:"text-large text-navy font-bold hover:underline",href:e.link},e.title),n.a.createElement("p",{className:"opacity-90"},d),n.a.createElement("p",{className:"text-sm opacity-25"},i," ",r," ",u,":",p," EST")))})),n.a.createElement(n.a.Fragment,null,n.a.createElement("ul",{className:(c.length>0?"":"hidden")+" 768px:flex 768px:flex-wrap 768px:-mx-8"},c),n.a.createElement("p",{className:(c.length>0?"hidden":"")+" py-4 opacity-50"},"No news has been published today."))}},XUBH:function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),r=a("Wbzz");t.a=function(e){var t=e.startDate,a=e.endDate,l=Object(r.useStaticQuery)("2476850674"),s=["January","February","March","April","May","June","July","August","September","October","November","December"],c=[];return l.allFeedTestimony.nodes.forEach((function(e,l){var r=e.pubDate.split(" ")[1],i=e.pubDate.split(" ")[2],o=e.pubDate.split(" ")[3],m=e.pubDate.split(" ")[4],p=m.split(":")[1],u=m.split(":")[0],d=e.content?e.content.replaceAll("<br />"," "):"",h=new Date(o,s.findIndex((function(e){return e.includes(i)})),r);h.setHours(0,0,0,0)>=t.setHours(0,0,0,0)&&h.setHours(0,0,0,0)<=a.setHours(0,0,0,0)&&c.push(n.a.createElement("li",{className:"768px:flex-col 768px:w-1/2 768px:px-8 py-4",key:e.title+l},n.a.createElement("a",{className:"text-large text-navy font-bold hover:underline",href:e.link},e.title),n.a.createElement("p",{className:"opacity-90"},d),n.a.createElement("p",{className:"text-sm opacity-25"},i," ",r," ",u,":",p," EST")))})),n.a.createElement(n.a.Fragment,null,n.a.createElement("ul",{className:(c.length>0?"":"hidden")+" 768px:flex 768px:flex-wrap 768px:-mx-8"},c),n.a.createElement("p",{className:(c.length>0?"hidden":"")+" py-4 opacity-50"},"No testimony has been published today."))}},ilLm:function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),r=a("Wbzz");t.a=function(e){var t=e.startDate,a=e.endDate,l=Object(r.useStaticQuery)("2922819327"),s=["January","February","March","April","May","June","July","August","September","October","November","December"],c=[];return l.allFeedLitigation.nodes.forEach((function(e,l){var r=e.pubDate.split(" ")[1],i=e.pubDate.split(" ")[2],o=e.pubDate.split(" ")[3],m=e.pubDate.split(" ")[4],p=m.split(":")[1],u=m.split(":")[0],d=e.content?e.content.replaceAll("<br />"," "):"",h=new Date(o,s.findIndex((function(e){return e.includes(i)})),r);h.setHours(0,0,0,0)>=t.setHours(0,0,0,0)&&h.setHours(0,0,0,0)<=a.setHours(0,0,0,0)&&c.push(n.a.createElement("li",{className:"768px:flex-col 768px:w-1/2 768px:px-8 py-4",key:e.title+l},n.a.createElement("a",{className:"text-large text-navy font-bold hover:underline",href:e.link},e.title),n.a.createElement("p",{className:"opacity-90"},d),n.a.createElement("p",{className:"text-sm opacity-25"},i," ",r," ",u,":",p," EST")))})),n.a.createElement(n.a.Fragment,null,n.a.createElement("ul",{className:(c.length>0?"":"hidden")+" 768px:flex 768px:flex-wrap 768px:-mx-8"},c),n.a.createElement("p",{className:(c.length>0?"hidden":"")+" py-4 opacity-50"},"No litigation has been published today."))}},nqmB:function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),r=a("Wbzz");t.a=function(e){e.rssUrl,e.sourceUrl,e.title;var t=e.startDate,a=e.endDate,l=Object(r.useStaticQuery)("1568898134"),s=["January","February","March","April","May","June","July","August","September","October","November","December"],c=[];return l.allFeedTradingSuspensions.nodes.forEach((function(e,l){var r=e.pubDate.split(" ")[1],i=e.pubDate.split(" ")[2],o=e.pubDate.split(" ")[3],m=e.pubDate.split(" ")[4],p=m.split(":")[1],u=m.split(":")[0],d=e.content?e.content.replaceAll("<br />"," "):"",h=new Date(o,s.findIndex((function(e){return e.includes(i)})),r);h.setHours(0,0,0,0)>=t.setHours(0,0,0,0)&&h.setHours(0,0,0,0)<=a.setHours(0,0,0,0)&&c.push(n.a.createElement("li",{className:"768px:flex-col 768px:w-1/2 768px:px-8 py-4",key:e.title+l},n.a.createElement("a",{className:"text-large text-navy font-bold hover:underline",href:e.link},e.title),n.a.createElement("p",{className:"opacity-90"},d),n.a.createElement("p",{className:"text-sm opacity-25"},i," ",r," ",u,":",p," EST")))})),n.a.createElement(n.a.Fragment,null,n.a.createElement("ul",{className:(c.length>0?"":"hidden")+" 768px:flex 768px:flex-wrap 768px:-mx-8"},c),n.a.createElement("p",{className:(c.length>0?"hidden":"")+" py-4 opacity-50"},"No suspension has been published today."))}},rOkU:function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l);t.a=function(e){return n.a.createElement("div",{className:"mt-12 pt-12 opacity-25 text-sm text-center border-t border-black-25"},n.a.createElement("h3",{className:"text-lg pb-2 font-bold"},"Fineprint / Legalese"),n.a.createElement("p",{className:"mb-4"},"This page provides a daily list of the most recent materials posted to the SEC website. The official release date of a document may differ from the posting date so always verify the source documents. Some legacy sections do not have data feeds, the SEC has been notified and we hope they will provide a feed in the future. Those sections include:"),n.a.createElement("ul",{className:"pl-8"},n.a.createElement("li",null,n.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/rules/other.htm"},"Other Commission Orders, Notices, and Information")),n.a.createElement("li",null,n.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/about/upcoming-events.htm"},"Upcoming Events")),n.a.createElement("li",null,n.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/cgi-bin/browse-edgar?action=getcurrent"},"Latest Filings")),n.a.createElement("li",null,n.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/news/whatsnew/wn-archive.shtml"},"Previous What’s New Issues")),n.a.createElement("li",null,n.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/news/digest.shtml"},"News Digest Archives (1956-2013)"))))}},"xS/I":function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),r=a("Wbzz");t.a=function(e){e.rssUrl,e.sourceUrl,e.title;var t=e.startDate,a=e.endDate,l=Object(r.useStaticQuery)("681042767"),s=["January","February","March","April","May","June","July","August","September","October","November","December"],c=[];return l.allFeedStatements.nodes.forEach((function(e,l){var r=e.pubDate.split(" ")[1],i=e.pubDate.split(" ")[2],o=e.pubDate.split(" ")[3],m=e.pubDate.split(" ")[4],p=m.split(":")[1],u=m.split(":")[0],d=e.content?e.content.replaceAll("<br />"," "):"",h=new Date(o,s.findIndex((function(e){return e.includes(i)})),r);h.setHours(0,0,0,0)>=t.setHours(0,0,0,0)&&h.setHours(0,0,0,0)<=a.setHours(0,0,0,0)&&c.push(n.a.createElement("li",{className:"768px:flex-col 768px:w-1/2 768px:px-8 py-4",key:e.title+l},n.a.createElement("a",{className:"text-large text-navy font-bold hover:underline",href:e.link},e.title),n.a.createElement("p",{className:"opacity-90"},d),n.a.createElement("p",{className:"text-sm opacity-25"},i," ",r," ",u,":",p," EST")))})),n.a.createElement(n.a.Fragment,null,n.a.createElement("ul",{className:(c.length>0?"":"hidden")+" 768px:flex 768px:flex-wrap 768px:-mx-8"},c),n.a.createElement("p",{className:(c.length>0?"hidden":"")+" py-4 opacity-50"},"No statement has been published today."))}}}]);
//# sourceMappingURL=component---src-pages-yesterday-js-319d23c94bd67ddf4d0e.js.map
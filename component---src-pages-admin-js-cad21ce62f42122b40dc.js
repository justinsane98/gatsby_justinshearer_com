(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"3HQJ":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),s=a("Wbzz");t.a=function(e){e.rssUrl,e.sourceUrl,e.title;var t=e.startDate,a=e.endDate,n=Object(s.useStaticQuery)("422925003"),r=["January","February","March","April","May","June","July","August","September","October","November","December"],c=[];return n.allFeedAdmin.nodes.forEach((function(e,n){var s=e.pubDate.split(" ")[1],o=e.pubDate.split(" ")[2],i=e.pubDate.split(" ")[3],m=e.pubDate.split(" ")[4],p=m.split(":")[1],u=m.split(":")[0],h=e.content?e.content.replaceAll("<br />"," "):"",d=new Date(i,r.findIndex((function(e){return e.includes(o)})),s);d.setHours(0,0,0,0)>=t.setHours(0,0,0,0)&&d.setHours(0,0,0,0)<=a.setHours(0,0,0,0)&&c.push(l.a.createElement("li",{className:"768px:flex-col 768px:w-1/2 768px:px-8 py-4",key:e.title+n},l.a.createElement("a",{className:"text-large text-navy font-bold hover:underline",href:e.link},e.title),l.a.createElement("p",{className:"opacity-90"},h),l.a.createElement("p",{className:"text-sm opacity-25"},o," ",s," ",u,":",p," EST")))})),l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",{className:(c.length>0?"":"hidden")+" 768px:flex 768px:flex-wrap 768px:-mx-8"},c),l.a.createElement("p",{className:(c.length>0?"hidden":"")+" py-4 opacity-50"},"No administrative proceeding has been published today."))}},mR1u:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),s=a("3HQJ"),r=a("rOkU");t.default=function(){var e=new Date,t=new Date(e);t.setDate(t.getDate()-99999);var a=new Date(e);return a.setDate(a.getDate()),l.a.createElement(l.a.Fragment,null,l.a.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),l.a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"1"}),l.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Playfair+Display&display=swap",rel:"stylesheet"}),l.a.createElement("header",{className:"bg-navy py-1"},l.a.createElement("div",{className:"relative px-4 mx-auto max-w-2xl"},l.a.createElement("a",{className:"absolute top-0 left-0 text-white-50",href:"/sec"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},l.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"}))),l.a.createElement("h3",{className:"text-white-50 font-serif text-center text-sm uppercase"},"Secretary of the Secretary"))),l.a.createElement("div",{className:"my-12 mx-auto max-w-2xl w-3/4 font-serif"},l.a.createElement("main",null,l.a.createElement("section",{className:"mb-12 relative"},l.a.createElement("h2",{className:"text-2xl border-b border-black-25 pb-2"},"Administrative Proceedings"),l.a.createElement(s.a,{startDate:t,endDate:a}),l.a.createElement("div",{className:"425px:absolute top-2 right-0"},l.a.createElement("a",{className:"text-gold leading-loose hover:underline",href:"https://www.sec.gov/rss/litigation/admin.xml"},"XML")," | ",l.a.createElement("a",{className:"inline-block text-navy hover:underline",href:"https://www.sec.gov/litigation/admin.htm"},"Source")))),l.a.createElement(r.a,null)))}},rOkU:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n);t.a=function(e){return l.a.createElement("div",{className:"mt-12 pt-12 opacity-25 text-sm text-center border-t border-black-25"},l.a.createElement("h3",{className:"text-lg pb-2 font-bold"},"Fineprint / Legalese"),l.a.createElement("p",{className:"mb-4"},"This page provides a daily list of the most recent materials posted to the SEC website. The official release date of a document may differ from the posting date so always verify the source documents. Some legacy sections do not have data feeds, the SEC has been notified and we hope they will provide a feed in the future. Those sections include:"),l.a.createElement("ul",{className:"pl-8"},l.a.createElement("li",null,l.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/rules/other.htm"},"Other Commission Orders, Notices, and Information")),l.a.createElement("li",null,l.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/about/upcoming-events.htm"},"Upcoming Events")),l.a.createElement("li",null,l.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/cgi-bin/browse-edgar?action=getcurrent"},"Latest Filings")),l.a.createElement("li",null,l.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/news/whatsnew/wn-archive.shtml"},"Previous What’s New Issues")),l.a.createElement("li",null,l.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/news/digest.shtml"},"News Digest Archives (1956-2013)"))))}}}]);
//# sourceMappingURL=component---src-pages-admin-js-cad21ce62f42122b40dc.js.map
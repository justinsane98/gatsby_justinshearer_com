(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"3HQJ":function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),r=a("Wbzz");t.a=function(e){e.rssUrl,e.sourceUrl,e.title;var t=e.startDate,a=e.endDate,l=Object(r.useStaticQuery)("422925003"),s=["January","February","March","April","May","June","July","August","September","October","November","December"],i=[];return l.allFeedAdmin.nodes.forEach((function(e,l){var r=e.pubDate.split(" ")[1],c=e.pubDate.split(" ")[2],o=e.pubDate.split(" ")[3],m=e.pubDate.split(" ")[4],p=m.split(":")[1],u=m.split(":")[0],h=e.content?e.content.replaceAll("<br />"," "):"",d=new Date(o,s.findIndex((function(e){return e.includes(c)})),r);d.setHours(0,0,0,0)>=t.setHours(0,0,0,0)&&d.setHours(0,0,0,0)<=a.setHours(0,0,0,0)&&i.push(n.a.createElement("li",{className:"768px:flex-col 768px:w-1/2 768px:px-8 py-4",key:e.title+l},n.a.createElement("a",{className:"text-large text-navy font-bold hover:underline",href:e.link},e.title),n.a.createElement("p",{className:"opacity-90"},h),n.a.createElement("p",{className:"text-sm opacity-25"},c," ",r," ",u,":",p," EST")))})),n.a.createElement(n.a.Fragment,null,n.a.createElement("ul",{className:(i.length>0?"":"hidden")+" 768px:flex 768px:flex-wrap 768px:-mx-8"},i),n.a.createElement("p",{className:(i.length>0?"hidden":"")+" py-4 opacity-50"},"No administrative proceeding has been published today."))}},"Du2/":function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l);t.a=function(e){return n.a.createElement("header",{className:"bg-navy text-center px-12 relative"},n.a.createElement("div",{className:"absolute top-2 left-2 768px:left-1/4 bg-white-10 h-0.5 right-2 768px:right-1/4 w-100 z-0"}),n.a.createElement("div",{className:"absolute top-3 left-2 768px:left-1/4 ml-1 bg-white-10 h-0.5 right-2 768px:right-1/4 mr-1 w-100 z-0"}),n.a.createElement("div",{className:"absolute top-4 left-2 768px:left-1/4 ml-2 bg-white-10 h-0.5 right-2 768px:right-1/4 mr-2 w-100 z-0"}),n.a.createElement("span",{className:"relative inline-block bg-navy py-1 px-2 text-sm uppercase text-white-50 font-serif z-1"},"Secretary of the Secretary"))}},mR1u:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),r=a("3HQJ"),s=a("rOkU"),i=a("Du2/");t.default=function(){var e=new Date,t=new Date(e);t.setDate(t.getDate()-99999);var a=new Date(e);return a.setDate(a.getDate()),n.a.createElement(n.a.Fragment,null,n.a.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),n.a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"1"}),n.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Playfair+Display&display=swap",rel:"stylesheet"}),n.a.createElement(i.a,null),n.a.createElement("div",{className:"my-12 mx-auto max-w-2xl w-3/4 font-serif"},n.a.createElement("main",null,n.a.createElement("section",{className:"mb-12 relative"},n.a.createElement("h2",{className:"text-2xl border-b border-black-25 pb-2"},"Administrative Proceedings"),n.a.createElement(r.a,{startDate:t,endDate:a}),n.a.createElement("div",{className:"425px:absolute top-2 right-0"},n.a.createElement("a",{className:"text-gold leading-loose hover:underline",href:"https://www.sec.gov/rss/litigation/admin.xml"},"XML")," | ",n.a.createElement("a",{className:"inline-block text-navy hover:underline",href:"https://www.sec.gov/litigation/admin.htm"},"Source")))),n.a.createElement(s.a,null)))}},rOkU:function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l);t.a=function(e){return n.a.createElement("div",{className:"mt-12 pt-12 opacity-25 text-sm text-center border-t border-black-25"},n.a.createElement("h3",{className:"text-lg pb-2 font-bold"},"Fineprint / Legalese"),n.a.createElement("p",{className:"mb-4"},"This page provides a daily list of the most recent materials posted to the SEC website. The official release date of a document may differ from the posting date so always verify the source documents. Some legacy sections do not have data feeds, the SEC has been notified and we hope they will provide a feed in the future. Those sections include:"),n.a.createElement("ul",{className:"pl-8"},n.a.createElement("li",null,n.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/rules/other.htm"},"Other Commission Orders, Notices, and Information")),n.a.createElement("li",null,n.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/about/upcoming-events.htm"},"Upcoming Events")),n.a.createElement("li",null,n.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/cgi-bin/browse-edgar?action=getcurrent"},"Latest Filings")),n.a.createElement("li",null,n.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/news/whatsnew/wn-archive.shtml"},"Previous What’s New Issues")),n.a.createElement("li",null,n.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/news/digest.shtml"},"News Digest Archives (1956-2013)"))))}}}]);
//# sourceMappingURL=component---src-pages-admin-js-c33b130a73310d5e7dcf.js.map
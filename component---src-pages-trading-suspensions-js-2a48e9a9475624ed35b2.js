(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"Du2/":function(e,t,a){"use strict";var n=a("q1tI"),s=a.n(n);t.a=function(e){return s.a.createElement("header",{className:"bg-navy text-center px-12 relative"},s.a.createElement("div",{className:"absolute top-2 left-2 768px:left-1/4 bg-white-10 h-0.5 right-2 768px:right-1/4 w-100 z-0"}),s.a.createElement("div",{className:"absolute top-3 left-2 768px:left-1/4 ml-1 bg-white-10 h-0.5 right-2 768px:right-1/4 mr-1 w-100 z-0"}),s.a.createElement("div",{className:"absolute top-4 left-2 768px:left-1/4 ml-2 bg-white-10 h-0.5 right-2 768px:right-1/4 mr-2 w-100 z-0"}),s.a.createElement("span",{className:"relative inline-block bg-navy py-1 px-2 text-sm uppercase text-white-50 font-serif z-1"},"Secretary of the Secretary"))}},nAKG:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),s=a.n(n),l=a("nqmB"),r=a("rOkU"),c=a("Du2/");t.default=function(){var e=new Date,t=new Date(e);t.setDate(t.getDate()-99999);var a=new Date(e);return a.setDate(a.getDate()),s.a.createElement(s.a.Fragment,null,s.a.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),s.a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"1"}),s.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Playfair+Display&display=swap",rel:"stylesheet"}),s.a.createElement(c.a,null),s.a.createElement("div",{className:"my-12 mx-auto max-w-2xl w-3/4 font-serif"},s.a.createElement("main",null,s.a.createElement("section",{className:"mb-12 relative"},s.a.createElement("h2",{className:"text-2xl border-b border-black-25 pb-2"},"Trading Suspensions"),s.a.createElement(l.a,{startDate:t,endDate:a}),s.a.createElement("div",{className:"425px:absolute top-2 right-0"},s.a.createElement("a",{className:"text-gold leading-loose hover:underline",href:"https://www.sec.gov/rss/litigation/suspensions.xml"},"XML")," | ",s.a.createElement("a",{className:"inline-block text-navy hover:underline",href:"https://www.sec.gov/litigation/suspensions.htm"},"Source")))),s.a.createElement(r.a,null)))}},nqmB:function(e,t,a){"use strict";var n=a("q1tI"),s=a.n(n),l=a("Wbzz");t.a=function(e){e.rssUrl,e.sourceUrl,e.title;var t=e.startDate,a=e.endDate,n=Object(l.useStaticQuery)("1568898134"),r=["January","February","March","April","May","June","July","August","September","October","November","December"],c=[];return n.allFeedTradingSuspensions.nodes.forEach((function(e,n){var l=e.pubDate.split(" ")[1],i=e.pubDate.split(" ")[2],o=e.pubDate.split(" ")[3],m=e.pubDate.split(" ")[4],p=m.split(":")[1],u=m.split(":")[0],h=e.content?e.content.replaceAll("<br />"," "):"",d=new Date(o,r.findIndex((function(e){return e.includes(i)})),l);d.setHours(0,0,0,0)>=t.setHours(0,0,0,0)&&d.setHours(0,0,0,0)<=a.setHours(0,0,0,0)&&c.push(s.a.createElement("li",{className:"768px:flex-col 768px:w-1/2 768px:px-8 py-4",key:e.title+n},s.a.createElement("a",{className:"text-large text-navy font-bold hover:underline",href:e.link},e.title),s.a.createElement("p",{className:"opacity-90"},h),s.a.createElement("p",{className:"text-sm opacity-25"},i," ",l," ",u,":",p," EST")))})),s.a.createElement(s.a.Fragment,null,s.a.createElement("ul",{className:(c.length>0?"":"hidden")+" 768px:flex 768px:flex-wrap 768px:-mx-8"},c),s.a.createElement("p",{className:(c.length>0?"hidden":"")+" py-4 opacity-50"},"No suspension has been published today."))}},rOkU:function(e,t,a){"use strict";var n=a("q1tI"),s=a.n(n);t.a=function(e){return s.a.createElement("div",{className:"mt-12 pt-12 opacity-25 text-sm text-center border-t border-black-25"},s.a.createElement("h3",{className:"text-lg pb-2 font-bold"},"Fineprint / Legalese"),s.a.createElement("p",{className:"mb-4"},"This page provides a daily list of the most recent materials posted to the SEC website. The official release date of a document may differ from the posting date so always verify the source documents. Some legacy sections do not have data feeds, the SEC has been notified and we hope they will provide a feed in the future. Those sections include:"),s.a.createElement("ul",{className:"pl-8"},s.a.createElement("li",null,s.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/rules/other.htm"},"Other Commission Orders, Notices, and Information")),s.a.createElement("li",null,s.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/about/upcoming-events.htm"},"Upcoming Events")),s.a.createElement("li",null,s.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/cgi-bin/browse-edgar?action=getcurrent"},"Latest Filings")),s.a.createElement("li",null,s.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/news/whatsnew/wn-archive.shtml"},"Previous What’s New Issues")),s.a.createElement("li",null,s.a.createElement("a",{className:"font-bold hover:underline",href:"https://www.sec.gov/news/digest.shtml"},"News Digest Archives (1956-2013)"))))}}}]);
//# sourceMappingURL=component---src-pages-trading-suspensions-js-2a48e9a9475624ed35b2.js.map
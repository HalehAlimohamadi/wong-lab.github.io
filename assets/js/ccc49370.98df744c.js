(self.webpackChunkwonglab_web=self.webpackChunkwonglab_web||[]).push([[6103],{71481:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var n=a(67294),r=a(16016),l=a(85286),o=a(24973),i=a(36742);var s=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(i.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(i.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},c=a(95601),m=a(571),u=a(39306);var d=function(e){var t=e.content,a=e.sidebar,o=t.frontMatter,i=t.metadata,d=i.title,g=i.description,b=i.nextItem,p=i.prevItem,v=o.hide_table_of_contents;return n.createElement(r.Z,{title:d,description:g,wrapperClassName:u.kM.wrapper.blogPages,pageClassName:u.kM.page.blogPostPage},t&&n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("aside",{className:"col col--3"},n.createElement(c.Z,{sidebar:a})),n.createElement("main",{className:"col col--7"},n.createElement(l.Z,{frontMatter:o,metadata:i,isBlogPostPage:!0},n.createElement(t,null)),(b||p)&&n.createElement(s,{nextItem:b,prevItem:p})),!v&&t.toc&&n.createElement("div",{className:"col col--2"},n.createElement(m.Z,{toc:t.toc})))))}},95601:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var n=a(67294),r=a(86010),l=a(36742),o="sidebar_2ahu",i="sidebarItemTitle_2hhb",s="sidebarItemList_2xAf",c="sidebarItem_2UVv",m="sidebarItemLink_1RT6",u="sidebarItemLinkActive_12pM",d=a(24973);function g(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,r.Z)(o,"thin-scrollbar"),"aria-label":(0,d.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,r.Z)(i,"margin-bottom--md")},t.title),n.createElement("ul",{className:s},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:c},n.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:m,activeClassName:u},e.title))}))))}},86146:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var n=a(67294),r=a(24973),l=a(22122),o=a(19756),i=a(86010),s="iconEdit_2_ui",c=["className"],m=function(e){var t=e.className,a=(0,o.Z)(e,c);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(s,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function u(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(m,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(67294),r=a(86010);var l=function(e,t,a){var r=(0,n.useState)(void 0),l=r[0],o=r[1];(0,n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var r=0,i=!1,s=document.getElementsByClassName(e);r<s.length&&!i;){var c=s[r],m=c.href,u=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===u&&(l&&l.classList.remove(t),c.classList.add(t),o(c),i=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},o="tableOfContents_35-E",i="table-of-contents__link";function s(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:i,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(s,{isChild:!0,toc:e.children}))}))):null}var c=function(e){var t=e.toc;return l(i,"table-of-contents__link--active",100),n.createElement("div",{className:(0,r.Z)(o,"thin-scrollbar")},n.createElement(s,{toc:t}))}},85286:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var n=a(67294),r=a(86010),l=a(3905),o=a(24973),i=a(36742),s=a(87277),c=a(41217),m=a(86146),u={blogPostTitle:"blogPostTitle_nmLu",blogPostData:"blogPostData_3WzT",blogPostFooter:"blogPostFooter_xhRi",truncated:"truncated_2qSi",blogPostDetailsFull:"blogPostDetailsFull_3bEF",readAbstract:"readAbstract_3iLQ",author:"author_zTzN","author-last":"author-last_R2KS","author-orcid":"author-orcid_3F1r","author-gerard":"author-gerard_3xRR","author-member":"author-member_1Xgg","symbol-note":"symbol-note_35xK"};var d=function(e){var t,a,d,g,b,p=e.children,v=e.frontMatter,h=e.metadata,E=e.truncated,f=e.isBlogPostPage,_=void 0!==f&&f,N=h.date,Z=h.formattedDate,k=h.permalink,P=h.tags,w=h.title,T=h.editUrl,y=v.author,C=v.image,L=v.keywords,F=v.journal,I=v.url,x=v.pdf,A=function(e){var t=e.author,a=t.given,l=t.family,o=t.isFirst,i=t.isCorresponding,s=t.isMember,c=t.isGerard,m=t.orcid,d=[c?"author-gerard":"",s&&!c?"author-member":""].filter((function(e){return e}));return n.createElement("span",{className:(0,r.Z)(u.author,e.isLast&&u["author-last"])},m&&n.createElement("a",{href:m},n.createElement("img",{src:"/img/orcid.svg",alt:"orcid",height:"12",width:"12",className:u["author-orcid"]})),n.createElement("span",{className:r.Z.apply(void 0,d.map((function(e){return u[e]})))},a.replace("&apos;","'")," ",l.replace("&apos;","'")),o&&n.createElement("sup",{className:u["no-style"]},"*"),i&&n.createElement("sup",{className:u["no-style"]},"\xa7"))};return n.createElement(n.Fragment,null,n.createElement(c.Z,{keywords:L,image:C}),n.createElement("article",{className:_?void 0:"margin-bottom--xl"},(a=_?"h1":"h2",d=new Date(N),g=1==d.getUTCDate()?new Intl.DateTimeFormat("en",{month:0===d.getMonth()?"long":void 0,year:"numeric",timeZone:"UTC"}).format(d):Z,b=JSON.parse(y),n.createElement("header",null,n.createElement(a,{className:u.blogPostTitle},_?w:n.createElement(i.Z,{to:k},w)),n.createElement("div",null,b.map((function(e,t){return n.createElement(A,{key:v+e.given+e.family,author:e,isLast:t+1===b.length})})),b.some((function(e){var t=e.isFirst,a=e.isCorresponding;return t||a}))&&n.createElement("p",{className:u["symbol-note"]},b.some((function(e){return e.isFirst}))&&n.createElement(n.Fragment,null,"* denotes first authorship"),b.some((function(e){return e.isCorresponding}))&&n.createElement(n.Fragment,null,"\xa0 \xa7 denotes corresponding author"))),n.createElement("div",{className:(0,r.Z)(u.blogPostData,"margin-vert--md")},n.createElement("time",{dateTime:N},"Published on ",g),F&&n.createElement(n.Fragment,null," \xb7 ",n.createElement("a",{href:I},F)),x&&n.createElement(n.Fragment,null," \xb7 ",n.createElement("a",{href:x},"PDF"))))),n.createElement("div",{className:"markdown"},n.createElement(l.Zo,{components:s.Z},p)),(P.length>0||E)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",u.blogPostFooter,(t={},t[u.blogPostDetailsFull]=_,t[u.truncated]=E,t))},P.length>0&&n.createElement("div",{className:"col"},n.createElement("b",null,n.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),P.map((function(e){var t=e.label,a=e.permalink;return n.createElement(i.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),_&&T&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(m.Z,{editUrl:T})),!_&&E&&v.hasAbstract&&n.createElement("div",{className:((0,r.Z)("col text--right"),u.readAbstract)},n.createElement(i.Z,{to:h.permalink,"aria-label":"Read more about "+w},n.createElement("b",null,n.createElement(o.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read Abstract")))))))}}}]);
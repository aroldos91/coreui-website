(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-476dbec6"],{"0cd0":function(t,a,s){},"78eb":function(t,a,s){"use strict";var e=s("9f64"),i=s.n(e);i.a},"9f64":function(t,a,s){},de16:function(t,a,s){"use strict";var e=s("e298"),i=s.n(e);i.a},e298:function(t,a,s){},f593:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"c-app",class:{"c-dark-theme":t.$store.state.darkMode}},[s("TheSidebar"),s("TheAside"),s("CWrapper",[s("TheHeader"),s("div",{staticClass:"c-body"},[s("main",{staticClass:"c-main"},[s("CContainer",{attrs:{fluid:""}},[s("transition",{attrs:{name:"fade"}},[s("router-view")],1)],1)],1),s("TheFooter")],1)],1)],1)},i=[],r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("CSidebar",{attrs:{minimize:t.minimize,unfoldable:"",show:t.show},on:{"update:show":function(a){return t.$store.commit("set",["sidebarShow",a])}}},[s("CSidebarBrand",{staticClass:"d-md-down-none",attrs:{to:"/"}},[s("CIcon",{staticClass:"c-sidebar-brand-full",attrs:{name:"logo",size:"custom-size",height:35,viewBox:"0 0 556 134"}}),s("CIcon",{staticClass:"c-sidebar-brand-minimized",attrs:{name:"logo",size:"custom-size",height:35,viewBox:"0 0 110 134"}})],1),s("CRenderFunction",{attrs:{flat:"",contentToRender:t.$options.nav}}),s("CSidebarMinimizer",{staticClass:"c-d-md-down-none",nativeOn:{click:function(a){return t.$store.commit("toggle","sidebarMinimize")}}})],1)},o=[],l=[{_name:"CSidebarNav",_children:[{_name:"CSidebarNavItem",name:"Dashboard",to:"/dashboard",icon:"cil-speedometer",badge:{color:"primary",text:"NEW"}},{_name:"CSidebarNavTitle",_children:["Theme"]},{_name:"CSidebarNavItem",name:"Colors",to:"/theme/colors",icon:"cil-drop"},{_name:"CSidebarNavItem",name:"Typography",to:"/theme/typography",icon:"cil-pencil"},{_name:"CSidebarNavTitle",_children:["Components"]},{_name:"CSidebarNavDropdown",name:"Base",route:"/base",icon:"cil-puzzle",items:[{name:"Breadcrumbs",to:"/base/breadcrumbs"},{name:"Cards",to:"/base/cards"},{name:"Carousels",to:"/base/carousels"},{name:"Collapses",to:"/base/collapses"},{name:"Jumbotrons",to:"/base/jumbotrons"},{name:"List Groups",to:"/base/list-groups"},{name:"Navs",to:"/base/navs"},{name:"Navbars",to:"/base/navbars"},{name:"Paginations",to:"/base/paginations"},{name:"Popovers",to:"/base/popovers"},{name:"Progress Bars",to:"/base/progress-bars"},{name:"Switches",to:"/base/switches"},{name:"Tabs",to:"/base/tabs"},{name:"Tooltips",to:"/base/tooltips"}]},{_name:"CSidebarNavDropdown",name:"Buttons",route:"/buttons",icon:"cil-cursor",items:[{name:"Buttons",to:"/buttons/standard-buttons"},{name:"Button Dropdowns",to:"/buttons/dropdowns"},{name:"Button Groups",to:"/buttons/button-groups"},{name:"Brand Buttons",to:"/buttons/brand-buttons"}]},{_name:"CSidebarNavItem",name:"Charts",to:"/charts",icon:"cil-chart-pie"},{_name:"CSidebarNavDropdown",name:"Editors",route:"/editors",icon:"cil-code",items:[{name:"Code editors",to:"/editors/code-editors",icon:"cil-code",badge:{color:"danger",text:"PRO"}},{name:"Text editors",to:"/editors/text-editors",icon:"cil-justify-left"}]},{_name:"CSidebarNavDropdown",name:"Forms",route:"/forms",icon:"cil-notes",items:[{name:"Basic forms",to:"/forms/basic-forms"},{name:"Advanced forms",to:"/forms/advanced-forms",badge:{color:"danger",text:"PRO"}},{name:"Validation forms",to:"/forms/validation-forms",badge:{color:"danger",text:"PRO"}}]},{_name:"CSidebarNavItem",name:"Google Maps",to:"/google-maps",icon:"cil-map",badge:{color:"danger",text:"PRO"}},{_name:"CSidebarNavDropdown",name:"Icons",route:"/icons",icon:"cil-star",items:[{name:"CoreUI Icons",to:"/icons/coreui-icons",badge:{color:"info",text:"NEW"}},{name:"Brands",to:"/icons/brands"},{name:"Flags",to:"/icons/flags"}]},{_name:"CSidebarNavDropdown",name:"Notifications",route:"/notifications",icon:"cil-bell",items:[{name:"Alerts",to:"/notifications/alerts"},{name:"Badges",to:"/notifications/badges"},{name:"Modals",to:"/notifications/modals"},{name:"Toaster",to:"/notifications/toaster",badge:{color:"danger",text:"PRO"}}]},{_name:"CSidebarNavDropdown",name:"Plugins",route:"/plugins",icon:"cil-input-power",items:[{name:"Draggable",to:"/plugins/draggable",icon:"cil-cursor-move",badge:{color:"danger",text:"PRO"}},{name:"Calendar",to:"/plugins/calendar",icon:"cil-calendar",badge:{color:"danger",text:"PRO"}},{name:"Spinners",to:"/plugins/spinners",icon:"cil-circle",badge:{color:"danger",text:"PRO"}}]},{_name:"CSidebarNavDropdown",name:"Tables",route:"/tables",icon:"cil-list",items:[{name:"Basic Tables",to:"/tables/tables",icon:"cil-list"},{name:"Advanced tables",to:"/tables/advanced-tables",icon:"cil-list-rich"}]},{_name:"CSidebarNavItem",name:"Widgets",to:"/widgets",icon:"cil-calculator",badge:{color:"primary",text:"NEW",shape:"pill"}},{_name:"CSidebarNavDivider"},{_name:"CSidebarNavTitle",_children:["Extras"]},{_name:"CSidebarNavDropdown",name:"Pages",route:"/pages",icon:"cil-star",items:[{name:"Login",to:"/pages/login"},{name:"Register",to:"/pages/register"},{name:"Error 404",to:"/pages/404"},{name:"Error 500",to:"/pages/500"}]},{_name:"CSidebarNavDropdown",name:"Apps",route:"/apps",icon:"cil-layers",_children:[{_name:"CSidebarNavDropdown",name:"Invoicing",route:"/apps/invoicing",icon:"cil-spreadsheet",items:[{name:"Invoice",to:"/apps/invoicing/invoice",badge:{color:"danger",text:"PRO"}}]},{_name:"CSidebarNavDropdown",name:"Email",route:"/apps/email",icon:"cil-envelope-closed",items:[{name:"Inbox",to:"/apps/email/inbox",icon:"cil-envelope-closed",badge:{color:"danger",text:"PRO"}},{name:"Message",to:"/apps/email/message",icon:"cil-envelope-open",badge:{color:"danger",text:"PRO"}},{name:"Compose",to:"/apps/email/compose",icon:"cil-envelope-letter",badge:{color:"danger",text:"PRO"}}]}]},{_name:"CSidebarNavDivider",_class:"m-2"},{_name:"CSidebarNavTitle",_children:["Labels"]},{_name:"CSidebarNavItem",name:"Label danger",icon:{name:"cil-star",class:"text-danger"},label:!0},{_name:"CSidebarNavItem",name:"Label info",icon:{name:"cil-star",class:"text-info"},label:!0},{_name:"CSidebarNavItem",name:"Label warning",icon:{name:"cil-star",class:"text-warning"},label:!0}]}],n={name:"TheSidebar",nav:l,computed:{show:function(){return this.$store.state.sidebarShow},minimize:function(){return this.$store.state.sidebarMinimize}}},c=n,m=s("2877"),d=Object(m["a"])(c,r,o,!1,null,null,null),v=d.exports,C=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("CHeader",{attrs:{"with-subheader":""}},[s("CToggler",{staticClass:"ml-3 d-lg-none",attrs:{"in-header":""},on:{click:function(a){return t.$store.commit("toggleSidebarMobile")}}}),s("CToggler",{staticClass:"ml-3 d-md-down-none",attrs:{"in-header":""},on:{click:function(a){return t.$store.commit("toggleSidebarDesktop")}}}),s("CHeaderBrand",{staticClass:"mx-auto d-lg-none",attrs:{to:"/"}},[s("CIcon",{attrs:{name:"logo",height:"48",alt:"Logo"}})],1),s("CHeaderNav",{staticClass:"d-md-down-none mr-auto"},[s("CHeaderNavItem",{staticClass:"px-3"},[s("CHeaderNavLink",{attrs:{to:"/dashboard"}},[t._v(" Dashboard ")])],1),s("CHeaderNavItem",{staticClass:"px-3"},[s("CHeaderNavLink",{attrs:{to:"/users",exact:""}},[t._v(" Users ")])],1),s("CHeaderNavItem",{staticClass:"px-3"},[s("CHeaderNavLink",[t._v(" Settings ")])],1)],1),s("CHeaderNav",[s("CHeaderNavItem",{staticClass:"px-3"},[s("button",{staticClass:"c-header-nav-btn",on:{click:function(){return t.$store.commit("toggle","darkMode")}}},[t.$store.state.darkMode?s("CIcon",{attrs:{name:"cil-sun"}}):s("CIcon",{attrs:{name:"cil-moon"}})],1)]),s("TheHeaderDropdownNotif"),s("TheHeaderDropdownTasks"),s("TheHeaderDropdownMssgs"),s("TheHeaderDropdownAccnt"),s("CHeaderNavItem",{staticClass:"px-3"},[s("button",{staticClass:"c-header-nav-btn",attrs:{"in-header":""},on:{click:function(a){return t.$store.commit("toggle","asideShow")}}},[s("CIcon",{staticClass:"mr-2",attrs:{size:"lg",name:"cil-applications-settings"}})],1)])],1),s("CSubheader",{staticClass:"px-3"},[s("CBreadcrumbRouter",{staticClass:"border-0 mb-0"})],1)],1)},g=[],p=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("CDropdown",{staticClass:"c-header-nav-items",attrs:{inNav:"",placement:"bottom-end","add-menu-classes":"pt-0"},scopedSlots:t._u([{key:"toggler",fn:function(){return[s("CHeaderNavLink",[s("div",{staticClass:"c-avatar"},[s("img",{staticClass:"c-avatar-img ",attrs:{src:"img/avatars/6.jpg"}})])])]},proxy:!0}])},[s("CDropdownHeader",{staticClass:"text-center",attrs:{tag:"div",color:"light"}},[s("strong",[t._v("Account")])]),s("CDropdownItem",[s("CIcon",{attrs:{name:"cil-bell"}}),t._v(" Updates "),s("CBadge",{staticClass:"ml-auto",attrs:{color:"info"}},[t._v(t._s(t.itemsCount))])],1),s("CDropdownItem",[s("CIcon",{attrs:{name:"cil-envelope-open"}}),t._v(" Messages "),s("CBadge",{staticClass:"ml-auto",attrs:{color:"success"}},[t._v(t._s(t.itemsCount))])],1),s("CDropdownItem",[s("CIcon",{attrs:{name:"cil-task"}}),t._v(" Tasks "),s("CBadge",{staticClass:"ml-auto",attrs:{color:"danger"}},[t._v(t._s(t.itemsCount))])],1),s("CDropdownItem",[s("CIcon",{attrs:{name:"cil-comment-square"}}),t._v(" Comments "),s("CBadge",{staticClass:"ml-auto",attrs:{color:"warning"}},[t._v(t._s(t.itemsCount))])],1),s("CDropdownHeader",{staticClass:"text-center",attrs:{tag:"div",color:"light"}},[s("strong",[t._v("Settings")])]),s("CDropdownItem",[s("CIcon",{attrs:{name:"cil-user"}}),t._v(" Profile ")],1),s("CDropdownItem",[s("CIcon",{attrs:{name:"cil-settings"}}),t._v(" Settings ")],1),s("CDropdownItem",[s("CIcon",{attrs:{name:"cil-dollar"}}),t._v(" Payments "),s("CBadge",{staticClass:"ml-auto",attrs:{color:"secondary"}},[t._v(t._s(t.itemsCount))])],1),s("CDropdownItem",[s("CIcon",{attrs:{name:"cil-file"}}),t._v(" Projects "),s("CBadge",{staticClass:"ml-auto",attrs:{color:"primary"}},[t._v(t._s(t.itemsCount))])],1),s("CDropdownDivider"),s("CDropdownItem",[s("CIcon",{attrs:{name:"cil-shield-alt"}}),t._v(" Lock Account ")],1),s("CDropdownItem",[s("CIcon",{attrs:{name:"cil-lock-locked"}}),t._v(" Logout ")],1)],1)},u=[],b={name:"TheHeaderDropdownAccnt",data:function(){return{itemsCount:42}}},_=b,f=(s("ff0d"),Object(m["a"])(_,p,u,!1,null,"86915c1a",null)),h=f.exports,x=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("CDropdown",{staticClass:"c-header-nav-item d-md-down-none mx-2",attrs:{placement:"bottom-end",caret:!1,"in-nav":"","add-menu-classes":"pt-0"},scopedSlots:t._u([{key:"toggler",fn:function(){return[s("CHeaderNavLink",[s("CIcon",{attrs:{name:"cil-bell"}}),s("CBadge",{attrs:{shape:"pill",color:"danger"}},[t._v(t._s(t.itemsCount))])],1)]},proxy:!0}])},[s("CDropdownHeader",{staticClass:"text-center bg-light",attrs:{tag:"div"}},[s("strong",[t._v("You have "+t._s(t.itemsCount)+" notifications")])]),s("CDropdownItem",[s("CIcon",{staticClass:"text-success",attrs:{name:"cil-user-follow"}}),t._v(" New user registered ")],1),s("CDropdownItem",[s("CIcon",{staticClass:"text-danger",attrs:{name:"cil-user-unfollow"}}),t._v(" User deleted ")],1),s("CDropdownItem",[s("CIcon",{staticClass:"text-info",attrs:{name:"cil-chart-pie"}}),t._v(" Sales report is ready ")],1),s("CDropdownItem",[s("CIcon",{staticClass:"text-primary",attrs:{name:"cil-basket"}}),t._v(" New client ")],1),s("CDropdownItem",[s("CIcon",{staticClass:"text-warning",attrs:{name:"cil-speedometer"}}),t._v(" Server overloaded ")],1),s("CDropdownHeader",{staticClass:"text-center bg-light",attrs:{tag:"div"}},[s("strong",[t._v("Server")])]),s("CDropdownItem",{staticClass:"d-block"},[s("div",{staticClass:"text-uppercase mb-1"},[s("small",[s("b",[t._v("CPU Usage")])])]),s("CProgress",{staticClass:"progress-xs",attrs:{color:"info",value:25}}),s("small",{staticClass:"text-muted"},[t._v("348 Processes. 1/4 Cores.")])],1),s("CDropdownItem",{staticClass:"d-block"},[s("div",{staticClass:"text-uppercase mb-1"},[s("small",[s("b",[t._v("Memory Usage")])])]),s("CProgress",{staticClass:"progress-xs",attrs:{color:"warning",value:70}}),s("small",{staticClass:"text-muted"},[t._v("11444GB/16384MB")])],1),s("CDropdownItem",{staticClass:"d-block"},[s("div",{staticClass:"text-uppercase mb-1"},[s("small",[s("b",[t._v("SSD 1 Usage")])])]),s("CProgress",{staticClass:"progress-xs",attrs:{color:"danger",value:90}}),s("small",{staticClass:"text-muted"},[t._v("243GB/256GB")])],1)],1)},w=[],I={name:"TheHeaderDropdownNotif",data:function(){return{itemsCount:5}}},D=I,S=(s("78eb"),Object(m["a"])(D,x,w,!1,null,"72a5e5af",null)),k=S.exports,N=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("CDropdown",{staticClass:"c-header-nav-item d-md-down-none mx-2",attrs:{caret:!1,placement:"bottom-end","in-nav":"","add-menu-classes":"pt-0"},scopedSlots:t._u([{key:"toggler",fn:function(){return[s("CHeaderNavLink",[s("CIcon",{attrs:{name:"cil-list-rich"}}),s("CBadge",{attrs:{shape:"pill",color:"warning"}},[t._v(t._s(t.itemsCount))])],1)]},proxy:!0}])},[s("CDropdownHeader",{staticClass:"text-center bg-light",attrs:{tag:"div"}},[s("strong",[t._v("You have "+t._s(t.itemsCount)+" pending tasks")])]),s("CDropdownItem",{staticClass:"d-block"},[s("div",{staticClass:"small mb-1"},[t._v(" Upgrade NPM & Bower "),s("span",{staticClass:"float-right"},[s("strong",[t._v("0%")])])]),s("CProgress",{staticClass:"progress-xs",attrs:{color:"info"}})],1),s("CDropdownItem",{staticClass:"d-block"},[s("div",{staticClass:"small mb-1"},[t._v(" ReactJS Version "),s("span",{staticClass:"float-right"},[s("strong",[t._v("25%")])])]),s("CProgress",{staticClass:"progress-xs",attrs:{color:"danger",value:25}})],1),s("CDropdownItem",{staticClass:"d-block"},[s("div",{staticClass:"small mb-1"},[t._v(" VueJS Version "),s("span",{staticClass:"float-right"},[s("strong",[t._v("50%")])])]),s("CProgress",{staticClass:"progress-xs",attrs:{color:"warning",value:50}})],1),s("CDropdownItem",{staticClass:"d-block"},[s("div",{staticClass:"small mb-1"},[t._v(" Add new layouts "),s("span",{staticClass:"float-right"},[s("strong",[t._v("75%")])])]),s("CProgress",{staticClass:"progress-xs",attrs:{color:"info",value:75}})],1),s("CDropdownItem",{staticClass:"d-block"},[s("div",{staticClass:"small mb-1"},[t._v(" Angular 2 Cli Version "),s("span",{staticClass:"float-right"},[s("strong",[t._v("100%")])])]),s("CProgress",{staticClass:"progress-xs",attrs:{color:"success",value:100}})],1),s("CDropdownItem",{staticClass:"text-center border-top"},[s("strong",[t._v("View all tasks")])])],1)},T=[],P={name:"TheHeaderDropdownTasks",data:function(){return{itemsCount:15}}},L=P,H=Object(m["a"])(L,N,T,!1,null,null,null),O=H.exports,y=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("CDropdown",{staticClass:"c-header-nav-item mx-2 d-md-down-none",attrs:{caret:!1,placement:"bottom-end","in-nav":"","add-menu-classes":"pt-0"},scopedSlots:t._u([{key:"toggler",fn:function(){return[s("CHeaderNavLink",[s("CIcon",{attrs:{name:"cil-envelope-closed"}}),s("CBadge",{attrs:{shape:"pill",color:"info"}},[t._v(t._s(t.itemsCount))])],1)]},proxy:!0}])},[s("CDropdownHeader",{staticClass:"text-center bg-light",attrs:{tag:"div"}},[s("strong",[t._v("You have "+t._s(t.itemsCount)+" messages")])]),s("CDropdownItem",[s("div",{staticClass:"message"},[s("div",{staticClass:"pt-3 mr-3 float-left"},[s("div",{staticClass:"c-avatar"},[s("img",{staticClass:"c-avatar-img",attrs:{src:"img/avatars/7.jpg",alt:"admin@bootstrapmaster.com"}}),s("span",{staticClass:"avatar-status bg-success"})])]),s("div",[s("small",{staticClass:"text-muted"},[t._v("John Doe")]),s("small",{staticClass:"text-muted float-right mt-1"},[t._v("Just now")])]),s("div",{staticClass:"text-truncate font-weight-bold"},[s("CIcon",{staticClass:"text-danger",attrs:{name:"cil-warning"}}),t._v(" Important message ")],1),s("div",{staticClass:"small text-muted text-truncate"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")])])]),s("CDropdownItem",{attrs:{href:"#"}},[s("div",{staticClass:"message"},[s("div",{staticClass:"pt-3 mr-3 float-left"},[s("div",{staticClass:"c-avatar"},[s("img",{staticClass:"c-avatar-img",attrs:{src:"img/avatars/6.jpg",alt:"admin@bootstrapmaster.com"}}),s("span",{staticClass:"avatar-status bg-warning"})])]),s("div",[s("small",{staticClass:"text-muted"},[t._v("Jane Doe")]),s("small",{staticClass:"text-muted float-right mt-1"},[t._v("5 minutes ago")])]),s("div",{staticClass:"text-truncate font-weight-bold"},[t._v("Lorem ipsum dolor sit amet")]),s("div",{staticClass:"small text-muted text-truncate"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")])])]),s("CDropdownItem",{attrs:{href:"#"}},[s("div",{staticClass:"message"},[s("div",{staticClass:"pt-3 mr-3 float-left"},[s("div",{staticClass:"c-avatar"},[s("img",{staticClass:"c-avatar-img",attrs:{src:"img/avatars/5.jpg",alt:"admin@bootstrapmaster.com"}}),s("span",{staticClass:"avatar-status bg-danger"})])]),s("div",[s("small",{staticClass:"text-muted"},[t._v("Janet Doe")]),s("small",{staticClass:"text-muted float-right mt-1"},[t._v("1:52 PM")])]),s("div",{staticClass:"text-truncate font-weight-bold"},[t._v("Lorem ipsum dolor sit amet")]),s("div",{staticClass:"small text-muted text-truncate"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")])])]),s("CDropdownItem",{attrs:{href:"#"}},[s("div",{staticClass:"message"},[s("div",{staticClass:"pt-3 mr-3 float-left"},[s("div",{staticClass:"c-avatar"},[s("img",{staticClass:"c-avatar-img",attrs:{src:"img/avatars/4.jpg",alt:"admin@bootstrapmaster.com"}}),s("span",{staticClass:"avatar-status bg-info"})])]),s("div",[s("small",{staticClass:"text-muted"},[t._v("Joe Doe")]),s("small",{staticClass:"text-muted float-right mt-1"},[t._v("4:03 AM")])]),s("div",{staticClass:"text-truncate font-weight-bold"},[t._v("Lorem ipsum dolor sit amet")]),s("div",{staticClass:"small text-muted text-truncate"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")])])]),s("CDropdownItem",{staticClass:"border-top text-center",attrs:{href:"#"}},[s("strong",[t._v("View all messages")])])],1)},B=[],j={name:"TheHeaderDropdownMssgs",data:function(){return{itemsCount:7}}},z=j,M=Object(m["a"])(z,y,B,!1,null,null,null),$=M.exports,A={name:"TheHeader",components:{TheHeaderDropdownAccnt:h,TheHeaderDropdownNotif:k,TheHeaderDropdownTasks:O,TheHeaderDropdownMssgs:$}},G=A,U=Object(m["a"])(G,C,g,!1,null,null,null),E=U.exports,R=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("CFooter",{attrs:{fixed:!1}},[s("div",[s("a",{attrs:{href:"https://coreui.io",target:"_blank"}},[t._v("CoreUI")]),s("span",{staticClass:"ml-1"},[t._v("© "+t._s((new Date).getFullYear())+" creativeLabs.")])]),s("div",{staticClass:"ml-auto"},[s("span",{staticClass:"mr-1",attrs:{target:"_blank"}},[t._v("Powered by")]),s("a",{attrs:{href:"https://coreui.io/vue"}},[t._v("CoreUI for Vue")])])])},J=[],F={name:"TheFooter"},V=F,W=Object(m["a"])(V,R,J,!1,null,null,null),Y=W.exports,q=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("CSidebar",{attrs:{aside:"",show:t.$store.state.asideShow,colorScheme:"light",overlaid:"",size:"lg"},on:{"update:show":function(a){return t.$store.commit("set",["asideShow",a])}}},[s("CSidebarClose",{nativeOn:{click:function(a){return t.$store.commit("toggle","asideShow")}}}),s("CTabs",{staticClass:"nav-underline nav-underline-primary",attrs:{tabs:""}},[s("CTab",{attrs:{active:""}},[s("template",{slot:"title"},[s("CIcon",{attrs:{name:"cil-list"}})],1),s("CListGroup",{staticClass:"list-group-accent"},[s("CListGroupItem",{staticClass:"list-group-item-accent-secondary bg-light text-center \n          font-weight-bold text-muted text-uppercase small"},[t._v(" Today ")]),s("CListGroupItem",{staticClass:"list-group-item-accent-warning list-group-item-divider",attrs:{href:"#"}},[s("div",{staticClass:"c-avatar float-right"},[s("img",{staticClass:"c-avatar-img",attrs:{src:"img/avatars/7.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",[t._v("Meeting with "),s("strong",[t._v("Lucas")])]),s("small",{staticClass:"text-muted mr-3"},[s("CIcon",{attrs:{name:"cil-calendar"}}),t._v(" 1 - 3pm ")],1),s("small",{staticClass:"text-muted"},[s("CIcon",{attrs:{name:"cil-location-pin"}}),t._v(" Palo Alto, CA ")],1)]),s("CListGroupItem",{staticClass:"list-group-item-accent-info",attrs:{href:"#"}},[s("div",{staticClass:"c-avatar float-right"},[s("img",{staticClass:"c-avatar-img",attrs:{src:"img/avatars/4.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",[t._v("Skype with "),s("strong",[t._v("Megan")])]),s("small",{staticClass:"text-muted mr-3"},[s("CIcon",{attrs:{name:"cil-calendar"}}),t._v(" 4 - 5pm ")],1),s("small",{staticClass:"text-muted"},[s("CIcon",{attrs:{name:"cib-skype"}}),t._v(" On-line ")],1)]),s("hr",{staticClass:"transparent mx-3 my-0"}),s("CListGroupItem",{staticClass:"list-group-item-accent-secondary bg-light text-center \n          font-weight-bold text-muted text-uppercase small"},[t._v(" Tomorrow ")]),s("CListGroupItem",{staticClass:"list-group-item-accent-danger list-group-item-divider",attrs:{href:"#"}},[s("div",[t._v("New UI Project - "),s("strong",[t._v("deadline")])]),s("small",{staticClass:"text-muted mr-3"},[s("CIcon",{attrs:{name:"cil-calendar"}}),t._v(" 10 - 11pm ")],1),s("small",{staticClass:"text-muted"},[s("CIcon",{attrs:{name:"cil-home"}}),t._v(" creativeLabs HQ ")],1),s("div",{staticClass:"c-avatars-stack mt-2"},[s("div",{staticClass:"c-avatar c-avatar-xs"},[s("img",{staticClass:"c-avatar-img",attrs:{src:"img/avatars/2.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"c-avatar c-avatar-xs"},[s("img",{staticClass:"c-avatar-img",attrs:{src:"img/avatars/3.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"c-avatar c-avatar-xs"},[s("img",{staticClass:"c-avatar-img",attrs:{src:"img/avatars/4.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"c-avatar c-avatar-xs"},[s("img",{staticClass:"c-avatar-img",attrs:{src:"img/avatars/5.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"c-avatar c-avatar-xs"},[s("img",{staticClass:"c-avatar-img",attrs:{src:"img/avatars/6.jpg",alt:"admin@bootstrapmaster.com"}})])])]),s("CListGroupItem",{staticClass:"list-group-item-accent-success list-group-item-divider",attrs:{href:"#"}},[s("div",[s("strong",[t._v("#10 Startups.Garden")]),t._v(" Meetup")]),s("small",{staticClass:"text-muted mr-3"},[s("CIcon",{attrs:{name:"cil-calendar"}}),t._v(" 1 - 3pm ")],1),s("small",{staticClass:"text-muted"},[s("CIcon",{attrs:{name:"cil-location-pin"}}),t._v(" Palo Alto, CA ")],1)]),s("CListGroupItem",{staticClass:"list-group-item-accent-primary list-group-item-divider",attrs:{href:"#"}},[s("div",[s("strong",[t._v("Team meeting")])]),s("small",{staticClass:"text-muted mr-3"},[s("CIcon",{attrs:{name:"cil-calendar"}}),t._v(" 4 - 6pm ")],1),s("small",{staticClass:"text-muted"},[s("CIcon",{attrs:{name:"cil-home"}}),t._v(" creativeLabs HQ ")],1),s("div",{staticClass:"c-avatars-stack mt-2"},[s("div",{staticClass:"c-avatar c-avatar-xs"},[s("img",{staticClass:"c-avatar-img",attrs:{src:"img/avatars/2.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"c-avatar c-avatar-xs"},[s("img",{staticClass:"c-avatar-img",attrs:{src:"img/avatars/3.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"c-avatar c-avatar-xs"},[s("img",{staticClass:"c-avatar-img",attrs:{src:"img/avatars/4.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"c-avatar c-avatar-xs"},[s("img",{staticClass:"c-avatar-img",attrs:{src:"img/avatars/5.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"c-avatar c-avatar-xs"},[s("img",{staticClass:"c-avatar-img",attrs:{src:"img/avatars/6.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"c-avatar c-avatar-xs"},[s("img",{staticClass:"c-avatar-img",attrs:{src:"img/avatars/7.jpg",alt:"admin@bootstrapmaster.com"}})]),s("div",{staticClass:"c-avatar c-avatar-xs"},[s("img",{staticClass:"c-avatar-img",attrs:{src:"img/avatars/8.jpg",alt:"admin@bootstrapmaster.com"}})])])])],1)],2),s("CTab",[s("template",{slot:"title"},[s("CIcon",{attrs:{name:"cil-speech"}})],1),s("div",{staticClass:"p-3"},[s("div",{staticClass:"message"},[s("div",{staticClass:"py-3 pb-5 mr-3 float-left"},[s("div",{staticClass:"c-avatar"},[s("img",{staticClass:"c-avatar-img",attrs:{src:"img/avatars/7.jpg",alt:"admin@bootstrapmaster.com"}}),s("span",{staticClass:"bg-success c-avatar-status"})])]),s("div",[s("small",{staticClass:"text-muted"},[t._v("Lukasz Holeczek")]),s("small",{staticClass:"text-muted float-right mt-1"},[t._v("1:52 PM")])]),s("div",{staticClass:"text-truncate font-weight-bold"},[t._v(" Lorem ipsum dolor sit amet ")]),s("small",{staticClass:"text-muted"},[t._v(t._s(t.lorem))])]),s("hr"),s("div",{staticClass:"message"},[s("div",{staticClass:"py-3 pb-5 mr-3 float-left"},[s("div",{staticClass:"c-avatar"},[s("img",{staticClass:"c-avatar-img",attrs:{src:"img/avatars/7.jpg",alt:"admin@bootstrapmaster.com"}}),s("span",{staticClass:"bg-success c-avatar-status"})])]),s("div",[s("small",{staticClass:"text-muted"},[t._v("Lukasz Holeczek")]),s("small",{staticClass:"text-muted float-right mt-1"},[t._v("1:52 PM")])]),s("div",{staticClass:"text-truncate font-weight-bold"},[t._v(" Lorem ipsum dolor sit amet ")]),s("small",{staticClass:"text-muted"},[t._v(t._s(t.lorem))])]),s("hr"),s("div",{staticClass:"message"},[s("div",{staticClass:"py-3 pb-5 mr-3 float-left"},[s("div",{staticClass:"c-avatar"},[s("img",{staticClass:"c-avatar-img",attrs:{src:"img/avatars/7.jpg",alt:"admin@bootstrapmaster.com"}}),s("span",{staticClass:"bg-success c-avatar-status"})])]),s("div",[s("small",{staticClass:"text-muted"},[t._v("Lukasz Holeczek")]),s("small",{staticClass:"text-muted float-right mt-1"},[t._v("1:52 PM")])]),s("div",{staticClass:"text-truncate font-weight-bold"},[t._v(" Lorem ipsum dolor sit amet ")]),s("small",{staticClass:"text-muted"},[t._v(t._s(t.lorem))])]),s("hr"),s("div",{staticClass:"message"},[s("div",{staticClass:"py-3 pb-5 mr-3 float-left"},[s("div",{staticClass:"c-avatar"},[s("img",{staticClass:"c-avatar-img",attrs:{src:"img/avatars/7.jpg",alt:"admin@bootstrapmaster.com"}}),s("span",{staticClass:"bg-success c-avatar-status"})])]),s("div",[s("small",{staticClass:"text-muted"},[t._v("Lukasz Holeczek")]),s("small",{staticClass:"text-muted float-right mt-1"},[t._v("1:52 PM")])]),s("div",{staticClass:"text-truncate font-weight-bold"},[t._v(" Lorem ipsum dolor sit amet ")]),s("small",{staticClass:"text-muted"},[t._v(t._s(t.lorem))])]),s("hr"),s("div",{staticClass:"message"},[s("div",{staticClass:"py-3 pb-5 mr-3 float-left"},[s("div",{staticClass:"c-avatar"},[s("img",{staticClass:"c-avatar-img",attrs:{src:"img/avatars/7.jpg",alt:"admin@bootstrapmaster.com"}}),s("span",{staticClass:"bg-success c-avatar-status"})])]),s("div",[s("small",{staticClass:"text-muted"},[t._v("Lukasz Holeczek")]),s("small",{staticClass:"text-muted float-right mt-1"},[t._v("1:52 PM")])]),s("div",{staticClass:"text-truncate font-weight-bold"},[t._v(" Lorem ipsum dolor sit amet ")]),s("small",{staticClass:"text-muted"},[t._v(t._s(t.lorem))])])])],2),s("CTab",[s("template",{slot:"title"},[s("CIcon",{attrs:{name:"cil-settings"}})],1),s("div",{staticClass:"p-3"},[s("h6",[t._v("Settings")]),s("div",[s("div",{staticClass:"clearfix mt-4"},[s("small",[s("b",[t._v("Option 1")])]),s("CSwitch",{staticClass:"float-right",attrs:{color:"success",labelOn:"On",labelOff:"Off",shape:"pill",size:"sm",checked:""}})],1),s("div",[s("small",{staticClass:"text-muted"})])]),s("div",[s("div",{staticClass:"clearfix mt-3"},[s("small",[s("b",[t._v("Option 2")])]),s("CSwitch",{staticClass:"float-right",attrs:{color:"success",labelOn:"On",labelOff:"Off",shape:"pill",size:"sm"}})],1),s("div",[s("small",{staticClass:"text-muted"},[t._v(t._s(t.lorem))])])]),s("div",[s("div",{staticClass:"clearfix mt-3"},[s("small",[s("b",[t._v("Option 3")])]),s("CSwitch",{staticClass:"float-right",attrs:{color:"success",labelOn:"On",labelOff:"Off",shape:"pill",size:"sm",disabled:"",checked:""}})],1),s("div",[s("small",{staticClass:"text-muted"},[t._v("Disabled option.")])])]),s("div",[s("div",{staticClass:"clearfix mt-3"},[s("small",[s("b",[t._v("Option 4")])]),s("CSwitch",{staticClass:"float-right",attrs:{color:"success",labelOn:"On",labelOff:"Off",shape:"pill",size:"sm",checked:""}})],1)]),s("hr"),s("h6",[t._v("System Utilization")]),s("div",{staticClass:"text-uppercase mb-1 mt-4"},[s("small",[s("b",[t._v("CPU Usage")])])]),s("CProgress",{staticClass:"progress-xs",attrs:{color:"info",value:25}}),s("small",{staticClass:"text-muted"},[t._v("348 Processes. 1/4 Cores.")]),s("div",{staticClass:"text-uppercase mb-1 mt-2"},[s("small",[s("b",[t._v("Memory Usage")])])]),s("CProgress",{staticClass:"progress-xs",attrs:{color:"warning",value:70}}),s("small",{staticClass:"text-muted"},[t._v("11444MB/16384MB")]),s("div",{staticClass:"text-uppercase mb-1 mt-2"},[s("small",[s("b",[t._v("SSD 1 Usage")])])]),s("CProgress",{staticClass:"progress-xs",attrs:{color:"danger",value:95}}),s("small",{staticClass:"text-muted"},[t._v("243GB/256GB")]),s("div",{staticClass:"text-uppercase mb-1 mt-2"},[s("small",[s("b",[t._v("SSD 2 Usage")])])]),s("CProgress",{staticClass:"progress-xs",attrs:{color:"success",value:10}}),s("small",{staticClass:"text-muted"},[t._v("25GB/256GB")])],1)],2)],1)],1)},Q=[],K={name:"TheAside",data:function(){return{lorem:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}}},X=K,Z=Object(m["a"])(X,q,Q,!1,null,null,null),tt=Z.exports,at={name:"TheContainer",components:{TheSidebar:v,TheHeader:E,TheFooter:Y,TheAside:tt}},st=at,et=(s("de16"),Object(m["a"])(st,e,i,!1,null,"f29d5d2a",null));a["default"]=et.exports},ff0d:function(t,a,s){"use strict";var e=s("0cd0"),i=s.n(e);i.a}}]);
//# sourceMappingURL=chunk-476dbec6.4945e054.js.map
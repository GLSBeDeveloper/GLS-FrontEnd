(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{q8ba:function(l,n,a){"use strict";a.r(n);var e=a("CcnG"),u=function(){},t=a("Qm6G"),i=a("NcP4"),o=a("t68o"),r=a("xYTU"),s=a("zbXB"),c=a("CQVA"),b=a("pMnS"),d=a("fiJ/"),m=a("k10Q"),p=a("0G9l"),g=a("7jv/"),h=a("JsB9"),f=a("44rI"),Z=a("MXbC"),v=a("O7jx"),R=a("0/Q6"),k=a("Mr+X"),j=a("SMsm"),_=a("TtEo"),y=a("LC5p"),M=a("Ip0R"),Q=a("6UMx"),x=a("Wf4p"),w=a("lzlj"),I=a("FVSy"),D=a("bujt"),T=a("UodH"),C=a("dWZg"),L=a("lLAP"),B=a("wFw1"),U=a("g/GL"),O=a("iLfO"),P=a("ZYCi"),A=a("Euyf"),N=a("SJHx"),S=a("Cmri"),z=a("v9Dh"),E=a("eDkP"),Y=a("qAlS"),q=a("Fzqc"),G=a("qfoL"),$=a("gIcY"),J=a("bo59"),V=a("mVsa"),W=a("2Q+G"),F=a("GW0G"),X=a("4v8u"),H=a("yHON"),K=a("cPJV"),ll=a("/Tkk"),nl=a("cmJY"),al=a("BCsM"),el=a("D8hx"),ul=a("bri6"),tl=function(){function l(l,n,a,e){this._plannerData=l,this._messageRest=n,this._dialog=a,this._toast=e,this._subscriptions=[],this.sidebarTitle="0 new",this.messages=[],this.filteredMessages=[],this.selectedIndex=0,this.groupBy="date",this._dataTableService=new F.h,this._plannerData.addListeners(["Message"])}return l.prototype.ngOnInit=function(){var l=this,n=this._plannerData.Message;this.jobQuery={startDate:X(new Date,7),endDate:new Date},this._plannerData.setMessageCachedObject(this.jobQuery,!0),this._subscriptions=[n.data$.subscribe(function(n){console.log("PlannerMessageBoxComponent -> ngOnInit -> Message:get",n),l.messages=n,l.filter(),l._updateVariables()},function(n){return l._dialog.errorResponse(n)}),n.update$.subscribe(function(n){console.log("PlannerMessageBoxComponent -> ngOnInit -> Message:update",n),n.data.forEach(function(n){var a=l.messages.find(function(l){return l.job.Id===n.job.Id});a?Object.assign(a,n):l.messages.push(n)}),l.filter(),console.log("PlannerMessageBoxComponent -> ngOnInit -> this.messages",l.messages),l._updateVariables()})]},l.prototype.ngOnDestroy=function(){this._subscriptions.forEach(function(l){return l.unsubscribe()}),this._plannerData.removeAllListeners()},l.prototype.onDateRangeChange=function(l){this._plannerData.setMessageCachedObject(l,!0)},l.prototype.refresh=function(){this._plannerData.Message.refresh()},l.prototype.filter=function(l){var n=this;void 0===l&&(l=void 0);var a=this.messages.filter(function(l){return n._plannerData.Message.shouldDataBeUpdated(l)});console.log("PlannerMessageBoxComponent -> filter -> tt",a),this.filteredMessages=nl.a.filterArrayBySearchTerm(l,this.messages,["driverRemarks","fromUser.username","fromUser.username","job.DeliveryMasterId","job.ContactName","job.Postal"]).sort(function(l,a){return"date"===n.groupBy?H(l.modified_date,a.modified_date):l.fromUsername!==a.fromUsername?l.fromUsername<a.fromUsername?-1:1:H(l.modified_date,a.modified_date)}),this.groupHeaders=this.filteredMessages.map(function(l,a){var e=a>0?n.filteredMessages[a-1]:void 0;return"date"===n.groupBy?0!==a&&ll(l.modified_date,e.modified_date)?void 0:K(l.modified_date,"MMM DD, YYYY"):0===a||l.fromUsername!==e.fromUsername?l.fromUser.fullname||l.fromUsername:void 0})},l.prototype.openOrderDialog=function(l){this._dialog.openOrderDetailById(l)},l.prototype.processMessage=function(l){var n=this;this._messageRest.process(l).subscribe(function(l){n.filter(),n._toast.shortAlert("Message has been acknowledged")},function(l){return n._dialog.errorResponse(l)})},l.prototype._updateVariables=function(){var l=this;this.selected=this.messages[this.selectedIndex]||this.messages[0];var n=this.messages.filter(function(l){return!l.processedByUsername}).length;this.sidebarTitle=n+" new",this._messageRest.getUnprocessedMessagesCount().subscribe(function(a){return l.sidebarTitle=n+" new, "+(a-n)+" overdue"})},l}(),il=e.Pa({encapsulation:0,styles:[[".sidebar-title[_ngcontent-%COMP%]{padding-left:16px}.valign-center[_ngcontent-%COMP%]{vertical-align:middle;align-items:center}"]],data:{}});function ol(l){return e.lb(0,[(l()(),e.Ra(0,0,null,null,2,"h3",[["class","mat-subheader"],["matSubheader",""]],null,null,null,null,null)),e.Qa(1,16384,null,0,R.g,[],null,null),(l()(),e.jb(2,null,["",""]))],null,function(l,n){l(n,2,0,n.component.groupHeaders[n.parent.context.index])})}function rl(l){return e.lb(0,[(l()(),e.Ra(0,0,null,null,2,"mat-icon",[["class","tc-amber-800 mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,k.b,k.a)),e.Qa(1,638976,null,0,j.a,[e.k,j.c,[8,null]],null,null),(l()(),e.jb(-1,0,["fiber_new"]))],function(l,n){l(n,1,0)},function(l,n){l(n,0,0,e.bb(n,1).inline)})}function sl(l){return e.lb(0,[(l()(),e.Ra(0,0,null,null,2,"mat-icon",[["class","tc-green-800 mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,k.b,k.a)),e.Qa(1,638976,null,0,j.a,[e.k,j.c,[8,null]],null,null),(l()(),e.jb(-1,0,["done_all"]))],function(l,n){l(n,1,0)},function(l,n){l(n,0,0,e.bb(n,1).inline)})}function cl(l){return e.lb(0,[(l()(),e.Ra(0,0,null,null,1,"mat-divider",[["class","mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-horizontal",null],[2,"mat-divider-inset",null]],null,null,_.b,_.a)),e.Qa(1,49152,null,0,y.a,[],null,null)],null,function(l,n){l(n,0,0,e.bb(n,1).vertical?"vertical":"horizontal",e.bb(n,1).vertical,!e.bb(n,1).vertical,e.bb(n,1).inset)})}function bl(l){return e.lb(0,[(l()(),e.Ia(16777216,null,null,1,null,ol)),e.Qa(1,16384,null,0,M.m,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(l()(),e.Ra(2,0,null,null,18,"mat-list-item",[["class","mat-list-item"]],[[4,"background",null],[2,"mat-list-item-avatar",null],[2,"mat-list-item-with-avatar",null]],[[null,"click"],[null,"focus"],[null,"blur"]],function(l,n,a){var u=!0,t=l.component;return"focus"===n&&(u=!1!==e.bb(l,3)._handleFocus()&&u),"blur"===n&&(u=!1!==e.bb(l,3)._handleBlur()&&u),"click"===n&&(u=!1!==(t.selected=l.context.$implicit)&&u),u},Q.d,Q.b)),e.Qa(3,1097728,null,3,R.d,[e.k,[2,R.h]],null,null),e.hb(603979776,1,{_lines:1}),e.hb(335544320,2,{_avatar:0}),e.hb(335544320,3,{_icon:0}),(l()(),e.Ra(7,0,null,1,2,"h3",[["class","mat-line"],["matLine",""]],null,null,null,null,null)),e.Qa(8,16384,[[1,4]],0,x.o,[],null,null),(l()(),e.jb(9,null,["Order ",""])),(l()(),e.Ra(10,0,null,1,2,"h3",[["class","mat-line"],["matLine",""]],null,null,null,null,null)),e.Qa(11,16384,[[1,4]],0,x.o,[],null,null),(l()(),e.jb(12,null,["expected to be LATE by ",""])),(l()(),e.Ra(13,0,null,1,3,"p",[["class","mat-line"],["matLine",""]],null,null,null,null,null)),e.Qa(14,16384,[[1,4]],0,x.o,[],null,null),(l()(),e.jb(15,null,[" reported by "," at "," "])),e.fb(16,2),(l()(),e.Ia(16777216,null,2,1,null,rl)),e.Qa(18,16384,null,0,M.m,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(l()(),e.Ia(16777216,null,2,1,null,sl)),e.Qa(20,16384,null,0,M.m,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(l()(),e.Ia(16777216,null,null,1,null,cl)),e.Qa(22,16384,null,0,M.m,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(l()(),e.Ia(0,null,null,0))],function(l,n){l(n,1,0,n.component.groupHeaders[n.context.index]),l(n,18,0,!n.context.$implicit.processedAt),l(n,20,0,n.context.$implicit.processedAt),l(n,22,0,!n.context.last)},function(l,n){l(n,2,0,n.component.selected===n.context.$implicit?"lightgray ":"white",e.bb(n,3)._avatar||e.bb(n,3)._icon,e.bb(n,3)._avatar||e.bb(n,3)._icon),l(n,9,0,n.context.$implicit.job.DeliveryMasterId),l(n,12,0,n.context.$implicit.lateBy),l(n,15,0,(null==n.context.$implicit.fromUser?null:n.context.$implicit.fromUser.fullname)||n.context.$implicit.fromUsername,e.kb(n,15,1,l(n,16,0,e.bb(n.parent,0),n.context.$implicit.modified_date,"shortTime")))})}function dl(l){return e.lb(0,[(l()(),e.Ra(0,0,null,null,69,"mat-card",[["class","mat-card"]],null,null,null,w.d,w.a)),e.Qa(1,49152,null,0,I.a,[],null,null),(l()(),e.Ra(2,0,null,0,10,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),e.Qa(3,16384,null,0,I.f,[],null,null),(l()(),e.Ra(4,0,null,null,8,"div",[["layout","row"]],null,null,null,null,null)),(l()(),e.jb(5,null,[" Order "," "])),(l()(),e.Ra(6,0,null,null,0,"span",[["flex",""]],null,null,null,null,null)),(l()(),e.Ra(7,0,null,null,5,"button",[["mat-button",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,a){var e=!0,u=l.component;return"click"===n&&(e=!1!==u.processMessage(u.selected)&&e),e},D.d,D.b)),e.Qa(8,180224,null,0,T.b,[e.k,C.a,L.h,[2,B.a]],{disabled:[0,"disabled"]},null),(l()(),e.Ra(9,0,null,0,2,"mat-icon",[["class","mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,k.b,k.a)),e.Qa(10,638976,null,0,j.a,[e.k,j.c,[8,null]],null,null),(l()(),e.jb(-1,0,["reply"])),(l()(),e.jb(-1,0,[" Acknowledge "])),(l()(),e.Ra(13,0,null,0,1,"mat-divider",[["class","mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-horizontal",null],[2,"mat-divider-inset",null]],null,null,_.b,_.a)),e.Qa(14,49152,null,0,y.a,[],null,null),(l()(),e.Ra(15,0,null,0,54,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),e.Qa(16,16384,null,0,I.b,[],null,null),(l()(),e.Ra(17,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.Ra(18,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.jb(-1,null,["Reported At: "])),(l()(),e.jb(20,null,[" "," "])),e.fb(21,2),(l()(),e.Ra(22,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.Ra(23,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.jb(-1,null,["Last Updated At: "])),(l()(),e.jb(25,null,[" "," "])),e.fb(26,2),(l()(),e.Ra(27,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.Ra(28,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.jb(-1,null,["Last Updated By: "])),(l()(),e.jb(30,null,[" "," "])),(l()(),e.Ra(31,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.Ra(32,0,null,null,2,"b",[],null,null,null,null,null)),(l()(),e.Ra(33,0,null,null,1,"u",[],null,null,null,null,null)),(l()(),e.jb(34,null,["The below order expected to be late by ",""])),(l()(),e.Ra(35,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.Ra(36,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.jb(-1,null,["Order No: "])),(l()(),e.Ra(38,0,null,null,1,"a",[["href","javascript:;"]],null,[[null,"click"]],function(l,n,a){var e=!0,u=l.component;return"click"===n&&(e=!1!==u.openOrderDialog(u.selected.job.DeliveryMasterId)&&e),e},null,null)),(l()(),e.jb(39,null,[" "," "])),(l()(),e.Ra(40,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.Ra(41,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.jb(-1,null,["Job Type: "])),(l()(),e.jb(43,null,[" "," "])),(l()(),e.Ra(44,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),e.Ra(45,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.jb(-1,null,["Time Slot: "])),(l()(),e.jb(47,null,[" "," - "," "])),e.fb(48,2),e.fb(49,2),(l()(),e.Ra(50,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.Ra(51,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.jb(-1,null,["Postal Code: "])),(l()(),e.jb(53,null,[" "," "])),(l()(),e.Ra(54,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.Ra(55,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.jb(-1,null,["Contact Phone: "])),(l()(),e.jb(57,null,[" "," "])),(l()(),e.Ra(58,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.Ra(59,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.jb(-1,null,["Driver Name: "])),(l()(),e.jb(61,null,[" "," "])),(l()(),e.Ra(62,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.Ra(63,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.jb(-1,null,["Driver Phone: "])),(l()(),e.jb(65,null,[" "," "])),(l()(),e.Ra(66,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.Ra(67,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.jb(-1,null,["Driver Remark: "])),(l()(),e.jb(69,null,[" "," "]))],function(l,n){l(n,8,0,n.component.selected.processedByUsername),l(n,10,0)},function(l,n){var a=n.component;l(n,5,0,a.selected.job.DeliveryMasterId),l(n,7,0,e.bb(n,8).disabled||null,"NoopAnimations"===e.bb(n,8)._animationMode),l(n,9,0,e.bb(n,10).inline),l(n,13,0,e.bb(n,14).vertical?"vertical":"horizontal",e.bb(n,14).vertical,!e.bb(n,14).vertical,e.bb(n,14).inset),l(n,20,0,e.kb(n,20,0,l(n,21,0,e.bb(n.parent,0),a.selected.modified_date,"medium"))),l(n,25,0,e.kb(n,25,0,l(n,26,0,e.bb(n.parent,0),a.selected.processedAt,"medium"))),l(n,30,0,(null==a.selected.processedBy?null:a.selected.processedBy.fullname)||a.selected.processedByUsername||"N.A."),l(n,34,0,a.selected.lateBy),l(n,39,0,a.selected.job.DeliveryMasterId),l(n,43,0,a.selected.job.JobType),l(n,47,0,e.kb(n,47,0,l(n,48,0,e.bb(n.parent,0),a.selected.job.StartTimeWindow,"shortTime")),e.kb(n,47,1,l(n,49,0,e.bb(n.parent,0),a.selected.job.EndTimeWindow,"shortTime"))),l(n,53,0,a.selected.job.Postal),l(n,57,0,a.selected.job.ContactPhone),l(n,61,0,(null==a.selected.fromUser?null:a.selected.fromUser.fullname)||a.selected.fromUsername),l(n,65,0,null==a.selected.fromUser?null:a.selected.fromUser.phone),l(n,69,0,a.selected.driverRemarks)})}function ml(l){return e.lb(0,[e.db(0,M.e,[e.t]),(l()(),e.Ra(1,0,null,null,48,"td-layout-nav-list",[["mode","side"],["navigationRoute","/"],["sidenavWidth","320px"],["toolbarTitle"," Message"]],null,null,null,U.g,U.c)),e.Qa(2,49152,[["navList",4]],0,O.g,[[2,P.o]],{toolbarTitle:[0,"toolbarTitle"],mode:[1,"mode"],sidenavWidth:[2,"sidenavWidth"],navigationRoute:[3,"navigationRoute"]},null),(l()(),e.Ra(3,0,null,0,5,"button",[["mat-icon-button",""],["td-menu-button",""],["tdLayoutToggle",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,a){var u=!0;return"click"===n&&(u=!1!==e.bb(l,5).clickListener(a)&&u),u},D.d,D.b)),e.Qa(4,180224,null,0,T.b,[e.k,C.a,L.h,[2,B.a]],null,null),e.Qa(5,4341760,null,0,O.i,[O.c,e.E,e.k],{tdLayoutToggle:[0,"tdLayoutToggle"]},null),(l()(),e.Ra(6,0,null,0,2,"mat-icon",[["class","mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,k.b,k.a)),e.Qa(7,638976,null,0,j.a,[e.k,j.c,[8,null]],null,null),(l()(),e.jb(-1,0,["menu"])),(l()(),e.Ra(9,0,null,3,15,"div",[["flex",""],["layout","row"],["layout-align","start center"],["td-toolbar-content",""]],null,null,null,null,null)),(l()(),e.Ra(10,0,null,null,5,"button",[["mat-icon-button",""],["tdLayoutNavListOpen",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,a){var u=!0;return"click"===n&&(u=!1!==e.bb(l,12).clickListener(a)&&u),u},D.d,D.b)),e.Qa(11,180224,null,0,T.b,[e.k,C.a,L.h,[2,B.a]],null,null),e.Qa(12,4341760,null,0,O.h,[O.g,e.E,e.k],{hideWhenOpened:[0,"hideWhenOpened"],tdLayoutNavListOpen:[1,"tdLayoutNavListOpen"]},null),(l()(),e.Ra(13,0,null,0,2,"mat-icon",[["class","mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,k.b,k.a)),e.Qa(14,638976,null,0,j.a,[e.k,j.c,[8,null]],null,null),(l()(),e.jb(-1,0,["arrow_back"])),(l()(),e.Ra(16,0,null,null,1,"vrp-planner-date-range-selection",[["class","pad-left"]],null,[[null,"rangeChange"]],function(l,n,a){var e=!0;return"rangeChange"===n&&(e=!1!==l.component.onDateRangeChange(a)&&e),e},A.b,A.a)),e.Qa(17,49152,null,0,N.a,[S.a],{range:[0,"range"]},{rangeChange:"rangeChange"}),(l()(),e.Ra(18,0,null,null,0,"span",[["flex",""]],null,null,null,null,null)),(l()(),e.Ra(19,16777216,null,null,5,"button",[["mat-icon-button",""],["matTooltip","Reload"]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"],[null,"longpress"],[null,"keydown"],[null,"touchend"]],function(l,n,a){var u=!0,t=l.component;return"longpress"===n&&(u=!1!==e.bb(l,20).show()&&u),"keydown"===n&&(u=!1!==e.bb(l,20)._handleKeydown(a)&&u),"touchend"===n&&(u=!1!==e.bb(l,20)._handleTouchend()&&u),"click"===n&&(u=!1!==t.refresh()&&u),u},D.d,D.b)),e.Qa(20,147456,null,0,z.d,[E.c,e.k,Y.c,e.P,e.y,C.a,L.c,L.h,z.b,[2,q.c],[2,z.a]],{message:[0,"message"]},null),e.Qa(21,180224,null,0,T.b,[e.k,C.a,L.h,[2,B.a]],null,null),(l()(),e.Ra(22,0,null,0,2,"mat-icon",[["class","mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,k.b,k.a)),e.Qa(23,638976,null,0,j.a,[e.k,j.c,[8,null]],null,null),(l()(),e.jb(-1,0,["refresh"])),(l()(),e.Ra(25,0,null,2,22,"div",[["td-sidenav-content",""]],null,null,null,null,null)),(l()(),e.Ra(26,0,null,null,9,"div",[["class","valign-center"],["layout","row"]],null,null,null,null,null)),(l()(),e.Ra(27,0,null,null,2,"td-search-box",[["alwaysVisible","true"],["backIcon","arrow_back"],["flex",""]],null,[[null,"searchDebounce"]],function(l,n,a){var e=!0;return"searchDebounce"===n&&(e=!1!==l.component.filter(a)&&e),e},G.b,G.a)),e.gb(5120,null,$.p,function(l){return[l]},[J.b]),e.Qa(29,49152,[["searchBox",4]],0,J.b,[e.h],{backIcon:[0,"backIcon"],alwaysVisible:[1,"alwaysVisible"],placeholder:[2,"placeholder"]},{onSearchDebounce:"searchDebounce"}),(l()(),e.Ra(30,16777216,null,null,5,"button",[["aria-haspopup","true"],["mat-icon-button",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null],[1,"aria-expanded",0]],[[null,"mousedown"],[null,"keydown"],[null,"click"]],function(l,n,a){var u=!0;return"mousedown"===n&&(u=!1!==e.bb(l,32)._handleMousedown(a)&&u),"keydown"===n&&(u=!1!==e.bb(l,32)._handleKeydown(a)&&u),"click"===n&&(u=!1!==e.bb(l,32)._handleClick(a)&&u),u},D.d,D.b)),e.Qa(31,180224,null,0,T.b,[e.k,C.a,L.h,[2,B.a]],null,null),e.Qa(32,1196032,null,0,V.f,[E.c,e.k,e.P,V.b,[2,V.c],[8,null],[2,q.c],L.h],{menu:[0,"menu"]},null),(l()(),e.Ra(33,0,null,0,2,"mat-icon",[["class","mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,k.b,k.a)),e.Qa(34,638976,null,0,j.a,[e.k,j.c,[8,null]],null,null),(l()(),e.jb(-1,0,["reorder"])),(l()(),e.Ra(36,0,null,null,1,"mat-divider",[["class","mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-horizontal",null],[2,"mat-divider-inset",null]],null,null,_.b,_.a)),e.Qa(37,49152,null,0,y.a,[],null,null),(l()(),e.Ra(38,0,null,null,3,"div",[["layout","row"]],null,null,null,null,null)),(l()(),e.Ra(39,0,null,null,2,"h3",[["class","sidebar-title mat-line"],["matLine",""]],null,null,null,null,null)),e.Qa(40,16384,null,0,x.o,[],null,null),(l()(),e.jb(41,null,["",""])),(l()(),e.Ra(42,0,null,null,1,"mat-divider",[["class","mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-horizontal",null],[2,"mat-divider-inset",null]],null,null,_.b,_.a)),e.Qa(43,49152,null,0,y.a,[],null,null),(l()(),e.Ra(44,0,null,null,3,"mat-nav-list",[["class","vrp-planner-message-list mat-nav-list"],["role","navigation"]],null,null,null,Q.f,Q.c)),e.Qa(45,49152,null,0,R.h,[],null,null),(l()(),e.Ia(16777216,null,0,1,null,bl)),e.Qa(47,278528,null,0,M.l,[e.P,e.M,e.r],{ngForOf:[0,"ngForOf"]},null),(l()(),e.Ia(16777216,null,4,1,null,dl)),e.Qa(49,16384,null,0,M.m,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(l()(),e.Ra(50,0,null,null,10,"mat-menu",[],null,null,null,W.d,W.a)),e.Qa(51,1294336,[["groupByMenu",4]],2,V.c,[e.k,e.y,V.a],{overlapTrigger:[0,"overlapTrigger"]},null),e.hb(603979776,4,{items:1}),e.hb(335544320,5,{lazyContent:0}),e.gb(2048,null,V.h,null,[V.c]),(l()(),e.Ra(55,0,null,0,2,"a",[["class","mat-menu-item"],["mat-menu-item",""],["role","menuitem"]],[[2,"mat-menu-item-highlighted",null],[2,"mat-menu-item-submenu-trigger",null],[1,"tabindex",0],[1,"aria-disabled",0],[1,"disabled",0]],[[null,"click"],[null,"mouseenter"]],function(l,n,a){var u=!0,t=l.component;return"click"===n&&(u=!1!==e.bb(l,56)._checkDisabled(a)&&u),"mouseenter"===n&&(u=!1!==e.bb(l,56)._handleMouseEnter()&&u),"click"===n&&(t.groupBy="date",u=!1!==t.filter()&&u),u},W.c,W.b)),e.Qa(56,180224,[[4,4]],0,V.d,[e.k,M.d,L.h,[2,V.h]],null,null),(l()(),e.jb(-1,0,[" Group by Date "])),(l()(),e.Ra(58,0,null,0,2,"a",[["class","mat-menu-item"],["mat-menu-item",""],["role","menuitem"]],[[2,"mat-menu-item-highlighted",null],[2,"mat-menu-item-submenu-trigger",null],[1,"tabindex",0],[1,"aria-disabled",0],[1,"disabled",0]],[[null,"click"],[null,"mouseenter"]],function(l,n,a){var u=!0,t=l.component;return"click"===n&&(u=!1!==e.bb(l,59)._checkDisabled(a)&&u),"mouseenter"===n&&(u=!1!==e.bb(l,59)._handleMouseEnter()&&u),"click"===n&&(t.groupBy="sender",u=!1!==t.filter()&&u),u},W.c,W.b)),e.Qa(59,180224,[[4,4]],0,V.d,[e.k,M.d,L.h,[2,V.h]],null,null),(l()(),e.jb(-1,0,[" Group by Sender "]))],function(l,n){var a=n.component;l(n,2,0," Message","side","320px","/"),l(n,5,0,""),l(n,7,0),l(n,12,0,!0,""),l(n,14,0),l(n,17,0,a.jobQuery),l(n,20,0,"Reload"),l(n,23,0),l(n,29,0,"arrow_back","true","Search here ("+a.filteredMessages.length+" total)"),l(n,32,0,e.bb(n,51)),l(n,34,0),l(n,47,0,a.filteredMessages),l(n,49,0,a.selected),l(n,51,0,!1)},function(l,n){var a=n.component;l(n,3,0,e.bb(n,4).disabled||null,"NoopAnimations"===e.bb(n,4)._animationMode),l(n,6,0,e.bb(n,7).inline),l(n,10,0,e.bb(n,11).disabled||null,"NoopAnimations"===e.bb(n,11)._animationMode),l(n,13,0,e.bb(n,14).inline),l(n,19,0,e.bb(n,21).disabled||null,"NoopAnimations"===e.bb(n,21)._animationMode),l(n,22,0,e.bb(n,23).inline),l(n,30,0,e.bb(n,31).disabled||null,"NoopAnimations"===e.bb(n,31)._animationMode,e.bb(n,32).menuOpen||null),l(n,33,0,e.bb(n,34).inline),l(n,36,0,e.bb(n,37).vertical?"vertical":"horizontal",e.bb(n,37).vertical,!e.bb(n,37).vertical,e.bb(n,37).inset),l(n,41,0,a.sidebarTitle),l(n,42,0,e.bb(n,43).vertical?"vertical":"horizontal",e.bb(n,43).vertical,!e.bb(n,43).vertical,e.bb(n,43).inset),l(n,55,0,e.bb(n,56)._highlighted,e.bb(n,56)._triggersSubmenu,e.bb(n,56)._getTabIndex(),e.bb(n,56).disabled.toString(),e.bb(n,56).disabled||null),l(n,58,0,e.bb(n,59)._highlighted,e.bb(n,59)._triggersSubmenu,e.bb(n,59)._getTabIndex(),e.bb(n,59).disabled.toString(),e.bb(n,59).disabled||null)})}var pl=e.Na("vrp-planner-message-box",tl,function(l){return e.lb(0,[(l()(),e.Ra(0,0,null,null,1,"vrp-planner-message-box",[],null,null,null,ml,il)),e.Qa(1,245760,null,0,tl,[al.a,ul.a,S.a,el.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),gl=a("M2Lx"),hl=a("uGex"),fl=a("4epT"),Zl=a("ZYjt"),vl=a("o3x0"),Rl=a("jQLj"),kl=a("wmQ5"),jl=a("4tE/"),_l=a("+dGY"),yl=a("r8Is"),Ml=a("t/Na"),Ql=a("+gH2"),xl=a("wm4d"),wl=a("vARd"),Il=a("A7o+"),Dl=a("SN/6"),Tl=a("YXNw"),Cl=a("lf6A"),Ll=a("/VYK"),Bl=a("seP3"),Ul=a("b716"),Ol=a("YhbO"),Pl=a("4c35"),Al=a("jlZm"),Nl=a("de3e"),Sl=a("kWGw"),zl=a("Z+uX"),El=a("Blfk"),Yl=a("8mMr"),ql=a("Lwpp"),Gl=a("La40"),$l=a("Nsh5"),Jl=a("r43C"),Vl=a("hjRe"),Wl=a("uK2o"),Fl=a("6q6f"),Xl=a("rxZL"),Hl=a("Ps+U"),Kl=a("GSLX"),ln=a("6w6d"),nn=a("m5n6"),an=a("hIJP"),en=a("zrK0"),un=a("36nB"),tn=a("qkDU"),on=a("x0yz"),rn=a("gUJA"),sn=function(){};a.d(n,"PlannerMessageBoxModuleNgFactory",function(){return cn});var cn=e.Oa(u,[],function(l){return e.Ya([e.Za(512,e.j,e.Ca,[[8,[t.c,i.a,o.a,r.a,r.b,s.b,s.a,c.a,b.a,d.a,m.a,p.a,g.a,h.a,f.a,Z.a,v.a,pl]],[3,e.j],e.w]),e.Za(4608,M.o,M.n,[e.t,[2,M.C]]),e.Za(4608,$.C,$.C,[]),e.Za(4608,$.f,$.f,[]),e.Za(4608,gl.c,gl.c,[]),e.Za(4608,x.d,x.d,[]),e.Za(4608,E.c,E.c,[E.i,E.e,e.j,E.h,E.f,e.q,e.y,M.d,q.c]),e.Za(5120,E.j,E.k,[E.c]),e.Za(5120,z.b,z.c,[E.c]),e.Za(5120,V.b,V.g,[E.c]),e.Za(5120,hl.a,hl.b,[E.c]),e.Za(5120,fl.b,fl.a,[[3,fl.b]]),e.Za(4608,Zl.f,x.e,[[2,x.i],[2,x.n]]),e.Za(5120,vl.c,vl.d,[E.c]),e.Za(4608,vl.e,vl.e,[E.c,e.q,[2,M.i],[2,vl.b],vl.c,[3,vl.e],E.e]),e.Za(4608,x.c,x.A,[[2,x.h],C.a]),e.Za(4608,Rl.i,Rl.i,[]),e.Za(5120,Rl.a,Rl.b,[E.c]),e.Za(4608,kl.f,kl.f,[]),e.Za(5120,jl.b,jl.c,[E.c]),e.Za(5120,_l.h,_l.b,[[3,_l.h],e.j,E.c,e.q]),e.Za(5120,_l.i,_l.c,[[3,_l.i],_l.h]),e.Za(5120,F.h,F.b,[[3,F.h]]),e.Za(4608,yl.e,yl.e,[P.o]),e.Za(4608,yl.f,yl.f,[]),e.Za(4608,Ml.j,Ml.p,[M.d,e.A,Ml.n]),e.Za(4608,Ml.q,Ml.q,[Ml.j,Ml.o]),e.Za(5120,Ml.a,function(l){return[l]},[Ml.q]),e.Za(4608,Ml.m,Ml.m,[]),e.Za(6144,Ml.k,null,[Ml.m]),e.Za(4608,Ml.i,Ml.i,[Ml.k]),e.Za(6144,Ml.b,null,[Ml.i]),e.Za(4608,Ml.g,Ml.l,[Ml.b,e.q]),e.Za(4608,Ml.c,Ml.c,[Ml.g]),e.Za(4608,Ql.a,Ql.a,[Ml.c,"MAP_BASE_URL"]),e.Za(4608,xl.a,xl.a,[vl.e,wl.b,Il.k]),e.Za(1073742336,M.c,M.c,[]),e.Za(1073742336,$.z,$.z,[]),e.Za(1073742336,$.l,$.l,[]),e.Za(1073742336,$.w,$.w,[]),e.Za(1073742336,Il.h,Il.h,[]),e.Za(1073742336,Dl.a,Dl.a,[]),e.Za(1073742336,Tl.a,Tl.a,[]),e.Za(1073742336,Dl.g,Dl.g,[]),e.Za(1073742336,Cl.b,Cl.b,[]),e.Za(1073742336,Dl.j,Dl.j,[]),e.Za(1073742336,Dl.c,Dl.c,[]),e.Za(1073742336,Dl.f,Dl.f,[]),e.Za(1073742336,C.b,C.b,[]),e.Za(1073742336,Ll.c,Ll.c,[]),e.Za(1073742336,gl.d,gl.d,[]),e.Za(1073742336,Bl.e,Bl.e,[]),e.Za(1073742336,Ul.c,Ul.c,[]),e.Za(1073742336,Ol.c,Ol.c,[]),e.Za(1073742336,Pl.g,Pl.g,[]),e.Za(1073742336,Al.b,Al.b,[]),e.Za(1073742336,q.a,q.a,[]),e.Za(1073742336,x.n,x.n,[[2,x.f]]),e.Za(1073742336,I.d,I.d,[]),e.Za(1073742336,x.p,x.p,[]),e.Za(1073742336,x.z,x.z,[]),e.Za(1073742336,x.x,x.x,[]),e.Za(1073742336,y.b,y.b,[]),e.Za(1073742336,R.e,R.e,[]),e.Za(1073742336,j.b,j.b,[]),e.Za(1073742336,L.a,L.a,[]),e.Za(1073742336,Y.b,Y.b,[]),e.Za(1073742336,E.g,E.g,[]),e.Za(1073742336,z.e,z.e,[]),e.Za(1073742336,T.c,T.c,[]),e.Za(1073742336,V.e,V.e,[]),e.Za(1073742336,x.u,x.u,[]),e.Za(1073742336,hl.d,hl.d,[]),e.Za(1073742336,fl.c,fl.c,[]),e.Za(1073742336,Nl.c,Nl.c,[]),e.Za(1073742336,Sl.c,Sl.c,[]),e.Za(1073742336,vl.k,vl.k,[]),e.Za(1073742336,zl.b,zl.b,[]),e.Za(1073742336,El.c,El.c,[]),e.Za(1073742336,wl.e,wl.e,[]),e.Za(1073742336,x.B,x.B,[]),e.Za(1073742336,x.r,x.r,[]),e.Za(1073742336,Rl.j,Rl.j,[]),e.Za(1073742336,Yl.b,Yl.b,[]),e.Za(1073742336,ql.d,ql.d,[]),e.Za(1073742336,kl.g,kl.g,[]),e.Za(1073742336,Gl.a,Gl.a,[]),e.Za(1073742336,$l.h,$l.h,[]),e.Za(1073742336,jl.e,jl.e,[]),e.Za(1073742336,Jl.a,Jl.a,[]),e.Za(1073742336,_l.a,_l.a,[]),e.Za(1073742336,O.a,O.a,[]),e.Za(1073742336,Vl.a,Vl.a,[]),e.Za(1073742336,Wl.a,Wl.a,[]),e.Za(1073742336,J.a,J.a,[]),e.Za(1073742336,F.a,F.a,[]),e.Za(1073742336,yl.a,yl.a,[]),e.Za(1073742336,Fl.a,Fl.a,[]),e.Za(1073742336,Ml.e,Ml.e,[]),e.Za(1073742336,Ml.d,Ml.d,[]),e.Za(1073742336,Xl.a,Xl.a,[]),e.Za(1073742336,Hl.a,Hl.a,[]),e.Za(1073742336,Kl.a,Kl.a,[]),e.Za(1073742336,P.r,P.r,[[2,P.y],[2,P.o]]),e.Za(1073742336,ln.a,ln.a,[]),e.Za(1073742336,nn.a,nn.a,[]),e.Za(1073742336,an.a,an.a,[]),e.Za(1073742336,en.a,en.a,[]),e.Za(1073742336,un.b,un.b,[]),e.Za(1073742336,tn.a,tn.a,[]),e.Za(1073742336,on.a,on.a,[]),e.Za(1073742336,rn.a,rn.a,[]),e.Za(1073742336,sn,sn,[]),e.Za(1073742336,u,u,[]),e.Za(256,x.g,x.k,[]),e.Za(256,Ml.n,"XSRF-TOKEN",[]),e.Za(256,Ml.o,"X-XSRF-TOKEN",[]),e.Za(1024,P.m,function(){return[[{path:"",component:tl}]]},[])])})}}]);
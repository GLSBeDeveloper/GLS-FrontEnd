(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{PVOQ:function(e,a,t){"use strict";var i=t("UTJH"),n=t("mCK3"),s=t("IlA0"),r=t("K160"),o=t("Tjpy"),c=Object(o.a)(function(e,a){return null==e?{}:function(e,a){return function(e,a,t){for(var r=-1,o=a.length,c={};++r<o;){var l=a[r],d=Object(i.a)(e,l);t(0,l)&&Object(n.a)(c,Object(s.a)(l,e),d)}return c}(e,a,function(a,t){return Object(r.a)(e,t)})}(e,a)}),l=t("crfB"),d=t("cPJV"),h=t("sA4U"),u=t("GgTk");t.d(a,"a",function(){return Z});var Z=function(){function e(e,a){var t=this;this._dialogRef=e,this._data=a,this._preserveInitialRoutes=!1,this.vehicles=[],this.selectedVehicles=[],this.requiredVehicles=[],this.orders=[],this.selectedOrders=[],this.title="Optimization",this.elements=[[]],this.form={},this.tableOrderActions=[{label:"Due Time Filter",menuTemplateRef:function(){return t._timeFilterMenu}}],this.selectedIndex=0,this.tableHeight=window.innerHeight-110}return e.prototype.ngOnInit=function(){var e=this;if(console.log("VrpOptimizationSettingsDialogComponent -> ngOnInit -> this._data",this._data),this.vehicleColumns=this._data.config.vehicleColumns||u.e.vehicles,this.orderColumns=this._data.config.orderColumns||u.c,this._optimizationConfig=this._data.config.optimizationConfig||u.b,this.orders=this._data.selectableOrders,this.vehicles=this._data.selectableVehicles,this._data.initialSol){var a=this._data.turnOverTime,t=this._data.initialSol;isNaN(a)?this._preserveInitialRoutes=!0:this.title="Optimization - Vehicle Start Time derived from Solution "+t.id;var i=[],n=[];t.routes.forEach(function(t){var s=e.vehicles.find(function(e){return e.id===t.vehicle_id});s&&(isNaN(a)||(s.earliest_start=d(l(t.end_time,a),"YYYY-MM-DDTHH:mm:ssZ")),i.push(s.id)),n.push.apply(n,t.act.map(function(e){return e.job_id}))}),this.orders=this._data.selectableOrders.filter(function(e){return!n.includes(e.id)}),this._preserveInitialRoutes&&(this.requiredVehicles=this._data.selectableVehicles.filter(function(e){return i.includes(e.id)}))}this._selectAllOrdersAndVehicles(),this._initSettingsForm()},e.prototype.onResize=function(e){void 0===e&&(e=void 0),this.tableHeight=window.innerHeight-205},e.prototype.close=function(){var e=this,a=this._optimizationConfig.filter(function(a){return e.form[a.name]}),t=c(this.form,a.filter(function(e){return!e.isConstraint}).map(function(e){return e.name}));t.constraints=a.filter(function(e){return e.isConstraint}).map(function(e){return e.name}).join("_"),t.problem=this._createAbstractInstance(),this._preserveInitialRoutes&&(t.dynamicSettings="siwei"===t.engine?{initialSolIndex:0,mode:3}:{initialSolId:this._data.initialSol.id}),console.log("VrpOptimizationSettingsDialogComponent -> close -> options",t),this._dialogRef.close(t)},e.prototype.cancel=function(){this._dialogRef.close()},e.prototype.applyDueTimeFilter=function(e){this.selectedOrders=h.c.applyFilterToDateColumn(this.orders,"dueTime",e),this._orderTable.filter(this.selectedOrders),this.tableOrderActions[0].label="Filtered ("+e.start+" to  "+e.end+") "},e.prototype._selectAllOrdersAndVehicles=function(){this.selectedOrders=this.orders.slice(),this.selectedVehicles=this.vehicles.slice()},e.prototype._initSettingsForm=function(){var e=this,a=!(!this._data.initialSol&&!this._data.turnOverTime),t=[[]];if(this._optimizationConfig.forEach(function(i){var n=Object.assign({},i);if(!a||!n.hideForDynamic){e.form[n.name]=n.default;var s=i.rowIndex&&i.rowIndex>0?i.rowIndex:0;t[s]||(t[s]=[]),t[s].push(n)}}),!this.form.solutionId){var i=new Date;this.form.solutionId="s_"+i.YYMMDD()+"_"+i.HHmmss("")}this.elements=t},e.prototype._createAbstractInstance=function(){var e=this._data.problem,a=this.selectedOrders.map(function(e){return e.id}),t=this.selectedVehicles.map(function(e){return e.id}),i=Object.assign({vehicles:this.vehicles.filter(function(e){return t.includes(e.id)}),services:e.services.filter(function(e){return e&&a.includes(e.id)}),shipments:e.shipments.filter(function(e){return e&&a.includes(e.id)})},c(this._data.problem,["_id","coord_mode","fleet_size","items","username"])),n=i.vehicles.map(function(e){return e.type_id});i.vehicle_types=e.vehicle_types.filter(function(e){return n.includes(e.id)});var s=[];return i.vehicles.concat(i.services,i.shipments).forEach(function(e){["start_address","end_address","address","pickup_address"].forEach(function(a){e[a]&&e[a].id&&s.push(e[a].id)})}),i.addresses=e.addresses.filter(function(e){return e&&s.includes(e.id)}),this._preserveInitialRoutes&&(i.solutions=[this._data.initialSol]),console.log(" VrpOptimizationSettingsDialogComponent -> private_createAbstractInstance -> _p",i),i},e}()},Tjpy:function(e,a,t){"use strict";var i=t("uT1x"),n=function(e){return null!=e&&e.length?Object(i.a)(e,1):[]},s=t("UA7w"),r=t("xhnO");a.a=function(e){return Object(r.a)(Object(s.a)(e,void 0,n),e+"")}},YdAn:function(e,a,t){"use strict";t.r(a),t.d(a,"VrpBasicModuleNgFactory",function(){return xe});var i=t("CcnG"),n=t("6ACT"),s=t("Qm6G"),r=t("NcP4"),o=t("t68o"),c=t("xYTU"),l=t("zbXB"),d=t("CQVA"),h=t("pMnS"),u=t("fiJ/"),Z=t("k10Q"),f=t("0G9l"),p=t("7jv/"),m=t("JsB9"),b=t("44rI"),_=t("MXbC"),g=t("O7jx"),v=t("/ll8"),O=t("Ip0R"),j=t("gIcY"),C=t("M2Lx"),w=t("Wf4p"),I=t("eDkP"),A=t("Fzqc"),S=t("v9Dh"),y=t("mVsa"),V=t("uGex"),T=t("4epT"),z=t("ZYjt"),k=t("o3x0"),D=t("dWZg"),x=t("jQLj"),R=t("wmQ5"),Y=t("4tE/"),q=t("+dGY"),F=t("GW0G"),M=t("r8Is"),N=t("ZYCi"),H=t("t/Na"),G=t("+gH2"),L=t("wm4d"),P=t("vARd"),B=t("A7o+"),E=t("giEZ"),U=t("q7FI"),X=t("SN/6"),J=t("YXNw"),K=t("lf6A"),Q=t("/VYK"),W=t("seP3"),$=t("b716"),ee=t("YhbO"),ae=t("4c35"),te=t("jlZm"),ie=t("FVSy"),ne=t("LC5p"),se=t("0/Q6"),re=t("SMsm"),oe=t("lLAP"),ce=t("qAlS"),le=t("UodH"),de=t("de3e"),he=t("kWGw"),ue=t("Z+uX"),Ze=t("Blfk"),fe=t("8mMr"),pe=t("Lwpp"),me=t("La40"),be=t("Nsh5"),_e=t("r43C"),ge=t("iLfO"),ve=t("hjRe"),Oe=t("uK2o"),je=t("bo59"),Ce=t("6q6f"),we=t("rxZL"),Ie=t("Ps+U"),Ae=t("GSLX"),Se=t("6w6d"),ye=t("m5n6"),Ve=t("hIJP"),Te=t("zrK0"),ze=t("36nB"),ke=t("qkDU"),De=t("x0yz"),xe=i.Oa(n.a,[],function(e){return i.Ya([i.Za(512,i.j,i.Ca,[[8,[s.c,r.a,o.a,c.a,c.b,l.b,l.a,d.a,h.a,u.a,Z.a,f.a,p.a,m.a,b.a,_.a,g.a,v.a]],[3,i.j],i.w]),i.Za(4608,O.o,O.n,[i.t,[2,O.C]]),i.Za(4608,j.C,j.C,[]),i.Za(4608,j.f,j.f,[]),i.Za(4608,C.c,C.c,[]),i.Za(4608,w.d,w.d,[]),i.Za(4608,I.c,I.c,[I.i,I.e,i.j,I.h,I.f,i.q,i.y,O.d,A.c]),i.Za(5120,I.j,I.k,[I.c]),i.Za(5120,S.b,S.c,[I.c]),i.Za(5120,y.b,y.g,[I.c]),i.Za(5120,V.a,V.b,[I.c]),i.Za(5120,T.b,T.a,[[3,T.b]]),i.Za(4608,z.f,w.e,[[2,w.i],[2,w.n]]),i.Za(5120,k.c,k.d,[I.c]),i.Za(4608,k.e,k.e,[I.c,i.q,[2,O.i],[2,k.b],k.c,[3,k.e],I.e]),i.Za(4608,w.c,w.A,[[2,w.h],D.a]),i.Za(4608,x.i,x.i,[]),i.Za(5120,x.a,x.b,[I.c]),i.Za(4608,R.f,R.f,[]),i.Za(5120,Y.b,Y.c,[I.c]),i.Za(5120,q.h,q.b,[[3,q.h],i.j,I.c,i.q]),i.Za(5120,q.i,q.c,[[3,q.i],q.h]),i.Za(5120,F.h,F.b,[[3,F.h]]),i.Za(4608,M.e,M.e,[N.o]),i.Za(4608,M.f,M.f,[]),i.Za(4608,H.j,H.p,[O.d,i.A,H.n]),i.Za(4608,H.q,H.q,[H.j,H.o]),i.Za(5120,H.a,function(e){return[e]},[H.q]),i.Za(4608,H.m,H.m,[]),i.Za(6144,H.k,null,[H.m]),i.Za(4608,H.i,H.i,[H.k]),i.Za(6144,H.b,null,[H.i]),i.Za(4608,H.g,H.l,[H.b,i.q]),i.Za(4608,H.c,H.c,[H.g]),i.Za(4608,G.a,G.a,[H.c,"MAP_BASE_URL"]),i.Za(4608,L.a,L.a,[k.e,P.b,B.k]),i.Za(4608,E.a,E.a,[k.e,P.b,B.k]),i.Za(4608,U.a,U.a,[]),i.Za(1073742336,O.c,O.c,[]),i.Za(1073742336,j.z,j.z,[]),i.Za(1073742336,j.l,j.l,[]),i.Za(1073742336,j.w,j.w,[]),i.Za(1073742336,B.h,B.h,[]),i.Za(1073742336,X.a,X.a,[]),i.Za(1073742336,J.a,J.a,[]),i.Za(1073742336,X.g,X.g,[]),i.Za(1073742336,K.b,K.b,[]),i.Za(1073742336,X.j,X.j,[]),i.Za(1073742336,X.c,X.c,[]),i.Za(1073742336,X.f,X.f,[]),i.Za(1073742336,D.b,D.b,[]),i.Za(1073742336,Q.c,Q.c,[]),i.Za(1073742336,C.d,C.d,[]),i.Za(1073742336,W.e,W.e,[]),i.Za(1073742336,$.c,$.c,[]),i.Za(1073742336,ee.c,ee.c,[]),i.Za(1073742336,ae.g,ae.g,[]),i.Za(1073742336,te.b,te.b,[]),i.Za(1073742336,A.a,A.a,[]),i.Za(1073742336,w.n,w.n,[[2,w.f]]),i.Za(1073742336,ie.d,ie.d,[]),i.Za(1073742336,w.p,w.p,[]),i.Za(1073742336,w.z,w.z,[]),i.Za(1073742336,w.x,w.x,[]),i.Za(1073742336,ne.b,ne.b,[]),i.Za(1073742336,se.e,se.e,[]),i.Za(1073742336,re.b,re.b,[]),i.Za(1073742336,oe.a,oe.a,[]),i.Za(1073742336,ce.b,ce.b,[]),i.Za(1073742336,I.g,I.g,[]),i.Za(1073742336,S.e,S.e,[]),i.Za(1073742336,le.c,le.c,[]),i.Za(1073742336,y.e,y.e,[]),i.Za(1073742336,w.u,w.u,[]),i.Za(1073742336,V.d,V.d,[]),i.Za(1073742336,T.c,T.c,[]),i.Za(1073742336,de.c,de.c,[]),i.Za(1073742336,he.c,he.c,[]),i.Za(1073742336,k.k,k.k,[]),i.Za(1073742336,ue.b,ue.b,[]),i.Za(1073742336,Ze.c,Ze.c,[]),i.Za(1073742336,P.e,P.e,[]),i.Za(1073742336,w.B,w.B,[]),i.Za(1073742336,w.r,w.r,[]),i.Za(1073742336,x.j,x.j,[]),i.Za(1073742336,fe.b,fe.b,[]),i.Za(1073742336,pe.d,pe.d,[]),i.Za(1073742336,R.g,R.g,[]),i.Za(1073742336,me.a,me.a,[]),i.Za(1073742336,be.h,be.h,[]),i.Za(1073742336,Y.e,Y.e,[]),i.Za(1073742336,_e.a,_e.a,[]),i.Za(1073742336,q.a,q.a,[]),i.Za(1073742336,ge.a,ge.a,[]),i.Za(1073742336,ve.a,ve.a,[]),i.Za(1073742336,Oe.a,Oe.a,[]),i.Za(1073742336,je.a,je.a,[]),i.Za(1073742336,F.a,F.a,[]),i.Za(1073742336,M.a,M.a,[]),i.Za(1073742336,Ce.a,Ce.a,[]),i.Za(1073742336,H.e,H.e,[]),i.Za(1073742336,H.d,H.d,[]),i.Za(1073742336,we.a,we.a,[]),i.Za(1073742336,Ie.a,Ie.a,[]),i.Za(1073742336,Ae.a,Ae.a,[]),i.Za(1073742336,N.r,N.r,[[2,N.y],[2,N.o]]),i.Za(1073742336,Se.a,Se.a,[]),i.Za(1073742336,ye.a,ye.a,[]),i.Za(1073742336,Ve.a,Ve.a,[]),i.Za(1073742336,Te.a,Te.a,[]),i.Za(1073742336,ze.b,ze.b,[]),i.Za(1073742336,ke.a,ke.a,[]),i.Za(1073742336,De.a,De.a,[]),i.Za(1073742336,n.a,n.a,[]),i.Za(256,w.g,w.k,[]),i.Za(256,H.n,"XSRF-TOKEN",[]),i.Za(256,H.o,"X-XSRF-TOKEN",[]),i.Za(1024,N.m,function(){return[[{path:"",redirectTo:"dashboard"},{path:"dashboard",loadChildren:"@app/vrp-basic/pages/dashboard/dashboard.module#VrpDashboardModule"},{path:"problem-detail",loadChildren:"@app/vrp-basic/pages/problem-detail/vrp-problem-detail.module#VrpProblemDetailModule"}]]},[])])})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,n){e.exports=n(252)},252:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(49),o=n.n(i),c=n(16),l=n(10),u=n(31),d=n(12),s=n(13),p=n(27),b=n.n(p),f=function(e){return function(t,n){var a=n().activeBoard,r=b()();t({type:h.ADD_LIST,payload:{title:e,boardID:a,id:r}})}},v=function(e,t){return{payload:{text:t,listID:e,id:b()()}}},h={ADD_CARD:"ADD_CARD",ADD_LIST:"ADD_LIST",DRAG_HAPPENED:"DRAG_HAPPENED",EDIT_CARD:"EDIT_CARD",DELETE_CARD:"DELETE_CARD",EDIT_LIST_TITLE:"EDIT_LIST_TITLE",DELETE_LIST:"DELETE_LIST",SET_ACTIVE_BOARD:"SET_ACTIVE_BOARD",ADD_BOARD:"ADD_BOARD"},m={"list-0":{id:"list-0",cards:["card-0"],title:"myList",board:"board-0"}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.ADD_LIST:var n=t.payload,a=n.title,r=n.id,i={title:a,id:"list-".concat(r),cards:[]};return Object(s.a)({},e,Object(d.a)({},"list-".concat(r),i));case h.ADD_CARD:var o=t.payload,c=o.listID,l=o.id,p=e[c];return p.cards.push("card-".concat(l)),Object(s.a)({},e,Object(d.a)({},c,p));case h.DRAG_HAPPENED:var b=t.payload,f=b.droppableIdStart,v=b.droppableIdEnd,E=b.droppableIndexEnd,O=b.droppableIndexStart;if("list"===b.type)return e;if(f===v){var D,x=e[f],g=x.cards.splice(O,1);return(D=x.cards).splice.apply(D,[E,0].concat(Object(u.a)(g))),Object(s.a)({},e,Object(d.a)({},f,x))}if(f!==v){var j,y,I=e[f],A=I.cards.splice(O,1),w=e[v];return(j=w.cards).splice.apply(j,[E,0].concat(Object(u.a)(A))),Object(s.a)({},e,(y={},Object(d.a)(y,f,I),Object(d.a)(y,v,w),y))}return e;case h.DELETE_CARD:var T=t.payload,_=T.listID,C=T.id,S=e[_],k=S.cards.filter(function(e){return e!==C});return Object(s.a)({},e,Object(d.a)({},_,Object(s.a)({},S,{cards:k})));case h.EDIT_LIST_TITLE:var L=t.payload,R=L.listID,B=L.newTitle,P=e[R];return P.title=B,Object(s.a)({},e,Object(d.a)({},R,P));case h.DELETE_LIST:var F=e;return delete F[t.payload.listID],F;default:return e}},O={"card-0":{text:"Last Episode",id:"card-0",list:"list-0"}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.ADD_CARD:var n=t.payload,a=n.text,r=n.listID,i=n.id,o={text:a,id:"card-".concat(i),list:r};return Object(s.a)({},e,Object(d.a)({},"card-".concat(i),o));case h.EDIT_CARD:var c=t.payload,l=c.id,u=c.newText,p=e[l];return p.text=u,Object(s.a)({},e,Object(d.a)({},"card-".concat(l),p));case h.DELETE_CARD:var b=e;return delete b[t.payload.id],b;default:return e}},x={"board-0":{id:"board-0",lists:["list-0"],title:"Trello board"}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.ADD_LIST:var n=t.payload,a=n.boardID,r=n.id,i=e[a],o="list-".concat(r),c=[].concat(Object(u.a)(i.lists),[o]);return i.lists=c,Object(s.a)({},e,Object(d.a)({},a,i));case h.DRAG_HAPPENED:var l=t.payload.boardID,p=e[l],b=p.lists,f=t.payload,v=f.droppableIndexEnd,m=f.droppableIndexStart;if("list"===f.type){var E=b.splice(m,1);return b.splice.apply(b,[v,0].concat(Object(u.a)(E))),p.lists=b,Object(s.a)({},e,Object(d.a)({},l,p))}return e;case h.DELETE_LIST:var O=t.payload,D=O.listID,g=O.boardID,j=e[g],y=j.lists.filter(function(e){return e!==D});return j.lists=y,Object(s.a)({},e,Object(d.a)({},g,j));case h.ADD_BOARD:var I=t.payload,A=I.title,w=I.id,T="board-".concat(w),_={id:T,title:A,lists:[]};return Object(s.a)({},e,Object(d.a)({},T,_));default:return e}};console.log(b()());var j=["board-0"],y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.ADD_BOARD:return[].concat(Object(u.a)(e),["board-".concat(t.payload.id)]);default:return e}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.SET_ACTIVE_BOARD:return t.payload;default:return e}},A=Object(l.c)({lists:E,cards:D,boards:g,boardOrder:y,activeBoard:I}),w=n(104),T=n(76),_=n(105),C={key:"root",storage:n.n(_).a},S=Object(T.a)(C,A),k=n(37),L=n(38),R=n(41),B=n(39),P=n(42),F=n(40),z=n(32),H=n(5),G=n(30),M=n(61),N=n.n(M),V=n(114),J=n.n(V),Y=n(113),q=n.n(Y),K=n(29),Q=n(6),U=n(19),W=n.n(U),X=n(108);function Z(){var e=Object(H.a)(["\n  margin-left: 8px;\n  cursor: pointer;\n"]);return Z=function(){return e},e}function $(){var e=Object(H.a)(["\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  margin-left: 8px;\n"]);return $=function(){return e},e}function ee(){var e=Object(H.a)(["\n  resize: none;\n  width: 100%;\n  overflow: hidden;\n  outline: none;\n  border: none;\n"]);return ee=function(){return e},e}function te(){var e=Object(H.a)(["\n  min-height: 85px;\n  padding: 6px 8px 2px;\n"]);return te=function(){return e},e}function ne(){var e=Object(H.a)(["\n  width: 284px;\n  margin-bottom: 8px;\n"]);return ne=function(){return e},e}var ae=Q.a.div(ne()),re=Object(Q.a)(N.a)(te()),ie=Object(Q.a)(X.a)(ee()),oe=Q.a.div($()),ce=Object(Q.a)(W.a)(Z()),le=r.a.memo(function(e){var t=e.list,n=e.text,a=void 0===n?"":n,i=e.onChange,o=e.closeForm,c=e.children,l=t?"Enter list title...":"Enter a title for this card...";return r.a.createElement(ae,null,r.a.createElement(re,null,r.a.createElement(ie,{placeholder:l,autoFocus:!0,value:a,onChange:function(e){return i(e)},onBlur:o})),r.a.createElement(oe,null,c,r.a.createElement(ce,{onMouseDown:o},"close")))}),ue=n(109),de=n.n(ue);function se(){var e=Object(H.a)(["\n  && {\n    color: white;\n    background: #5aac44;\n  }\n"]);return se=function(){return e},e}var pe=Object(Q.a)(de.a)(se()),be=function(e){var t=e.children,n=e.onClick;return r.a.createElement(pe,{variant:"contained",onMouseDown:n},t)};function fe(){var e=Object(H.a)(["\n  position: absolute;\n  display: none;\n  right: 5px;\n  bottom: 5px;\n  opacity: 0.5;\n  ",":hover & {\n    display: block;\n    cursor: pointer;\n  }\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return fe=function(){return e},e}function ve(){var e=Object(H.a)(["\n  position: absolute;\n  display: none;\n  right: 5px;\n  top: 5px;\n  opacity: 0.5;\n  ",":hover & {\n    display: block;\n    cursor: pointer;\n  }\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return ve=function(){return e},e}function he(){var e=Object(H.a)(["\n  margin: 0 0 8px 0;\n  position: relative;\n  max-width: 100%;\n  word-wrap: break-word;\n"]);return he=function(){return e},e}var me=Q.a.div(he()),Ee=Object(Q.a)(W.a)(ve(),me),Oe=Object(Q.a)(W.a)(fe(),me),De=r.a.memo(function(e){var t=e.text,n=e.id,i=e.listID,o=e.index,c=e.dispatch,l=Object(a.useState)(!1),u=Object(G.a)(l,2),d=u[0],s=u[1],p=Object(a.useState)(t),b=Object(G.a)(p,2),f=b[0],v=b[1],h=function(e){s(!1)},m=function(e){v(e.target.value)},E=function(e){e.preventDefault(),c(function(e,t,n){return{payload:{id:e,listID:t,newText:n}}}(n,i,f)),s(!1)},O=function(e){console.log(i),c(function(e,t){return{payload:{id:e,listID:t}}}(n,i))};return d?r.a.createElement(le,{text:f,onChange:m,closeForm:h},r.a.createElement(be,{onClick:E},"Save")):r.a.createElement(K.b,{draggableId:String(n),index:o},function(e){return r.a.createElement(me,Object.assign({},e.draggableProps,e.dragHandleProps,{ref:e.innerRef,onDoubleClick:function(){return s(!0)}}),r.a.createElement(N.a,null,r.a.createElement(Ee,{onMouseDown:function(){return s(!0)},fontSize:"small"},"edit"),r.a.createElement(Oe,{fontSize:"small",onMouseDown:O},"delete"),r.a.createElement(q.a,null,r.a.createElement(J.a,null,t))))})}),xe=Object(c.b)()(De);function ge(){var e=Object(H.a)(["\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    border-radius: 3px;\n    height: 36px;\n    margin-left: 8px;\n    width: 300px;\n    padding-left: 10px;\n    padding-right: 10px;\n    opacity: ",";\n    color: ",";\n    background-color: ",";\n  "]);return ge=function(){return e},e}var je=function(e){var t=e.list,n=e.children,a=e.onClick,i=t?1:.5,o=t?"white":"inherit",c=t?"rgba(0,0,0,.15)":"inherit",l=Q.a.div(ge(),i,o,c);return r.a.createElement(l,{onClick:a},r.a.createElement(W.a,null,"add"),r.a.createElement("p",{style:{flexShrink:0}},n))};function ye(){var e=Object(H.a)(["\n      display: flex;\n      align-items: center;\n      cursor: pointer;\n      border-radius: 3px;\n      height: 36px;\n      margin-left: 8px;\n      width: 300px;\n      padding-left: 10px;\n      padding-right: 10px;\n      opacity: ",";\n      color: ",";\n      background-color: ",";\n    "]);return ye=function(){return e},e}var Ie=function(e){function t(){var e,n;Object(k.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(R.a)(this,(e=Object(B.a)(t)).call.apply(e,[this].concat(i)))).state={formOpen:!1,text:""},n.openForm=function(){n.setState({formOpen:!0})},n.closeForm=function(e){n.setState({formOpen:!1})},n.handleInputChange=function(e){n.setState({text:e.target.value})},n.handleAddList=function(){var e=n.props.dispatch,t=n.state.text;t&&(n.setState({text:""}),e(f(t)))},n.handleAddCard=function(){var e=n.props,t=e.dispatch,a=e.listID,r=n.state.text;r&&(n.setState({text:""}),t(v(a,r)))},n.renderOpenForm=function(){var e=n.props.list,t=e?"Add another list":"Add another card",a=e?1:.5,i=e?"white":"inherit",o=e?"rgba(0,0,0,.15)":"inherit",c=Q.a.div(ye(),a,i,o);return r.a.createElement(c,{onClick:n.openForm},r.a.createElement(W.a,null,"add"),r.a.createElement("p",{style:{flexShrink:0}},t))},n}return Object(P.a)(t,e),Object(L.a)(t,[{key:"render",value:function(){var e=this.state.text,t=this.props.list;return this.state.formOpen?r.a.createElement(le,{text:e,onChange:this.handleInputChange,closeForm:this.closeForm},r.a.createElement(be,{onClick:t?this.handleAddList:this.handleAddCard},t?"Add List":"Add Card")):r.a.createElement(je,{list:t,onClick:this.openForm},t?"Add another list":"Add another card")}}]),t}(r.a.PureComponent),Ae=Object(c.b)()(Ie);function we(){var e=Object(H.a)(["\n  transition: background 0.3s ease-in;\n  ",":hover & {\n    background: #ccc;\n  }\n"]);return we=function(){return e},e}function Te(){var e=Object(H.a)(["\n  cursor: pointer;\n  transition: opacity 0.3s ease-in-out;\n  opacity: 0.4;\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return Te=function(){return e},e}function _e(){var e=Object(H.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n"]);return _e=function(){return e},e}function Ce(){var e=Object(H.a)(["\n  width: 100%;\n  border: none;\n  outline-color: blue;\n  border-radius: 3px;\n  margin-bottom: 3px;\n  padding: 5px;\n"]);return Ce=function(){return e},e}function Se(){var e=Object(H.a)(["\n  background-color: #dfe3e6;\n  border-radius: 3px;\n  width: 300px;\n  padding: 8px;\n  height: 100%;\n  margin: 0 8px 0 0;\n"]);return Se=function(){return e},e}var ke=Q.a.div(Se()),Le=Q.a.input(Ce()),Re=Q.a.div(_e()),Be=Object(Q.a)(W.a)(Te()),Pe=Q.a.h4(we(),Re),Fe=Object(c.b)()(function(e){var t=e.title,n=e.cards,i=e.listID,o=e.index,c=e.dispatch,l=Object(a.useState)(!1),u=Object(G.a)(l,2),d=u[0],s=u[1],p=Object(a.useState)(t),b=Object(G.a)(p,2),f=b[0],v=b[1],h=function(e){e.target.select()},m=function(e){e.preventDefault(),v(e.target.value)},E=function(e){s(!1),c(function(e,t){return{payload:{listID:e,newTitle:t}}}(i,f))},O=function(){c(function(e){return function(t,n){var a=n().activeBoard;return t({payload:{listID:e,boardID:a}})}}(i))};return r.a.createElement(K.b,{draggableId:String(i),index:o},function(e){return r.a.createElement(ke,Object.assign({},e.draggableProps,e.dragHandleProps,{ref:e.innerRef}),r.a.createElement(K.c,{droppableId:String(i),type:"card"},function(e){return r.a.createElement("div",null,r.a.createElement("div",null,d?r.a.createElement("form",{onSubmit:E},r.a.createElement(Le,{type:"text",value:f,onChange:m,autoFocus:!0,onFocus:h,onBlur:E})):r.a.createElement(Re,{onClick:function(){return s(!0)}},r.a.createElement(Pe,null,f),r.a.createElement(Be,{onClick:O},"delete"))),r.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef}),n.map(function(e,t){return r.a.createElement(xe,{key:e.id,text:e.text,id:e.id,index:t,listID:i})}),e.placeholder,r.a.createElement(Ae,{listID:i})))}))})});function ze(){var e=Object(H.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return ze=function(){return e},e}var He=Q.a.div(ze()),Ge=function(e){function t(){var e,n;Object(k.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(R.a)(this,(e=Object(B.a)(t)).call.apply(e,[this].concat(r)))).onDragEnd=function(e){e.destination},n}return Object(P.a)(t,e),Object(L.a)(t,[{key:"componentDidMount",value:function(){var e,t=this.props.match.params.boardID;this.props.dispatch((e=t,{type:h.SET_ACTIVE_BOARD,payload:e}))}},{key:"render",value:function(){var e=this.props,t=e.lists,n=e.cards,a=e.match,i=e.boards[a.params.boardID];if(!i)return r.a.createElement("p",null,"Board not found");var o=i.lists;return r.a.createElement(K.a,{onDragEnd:this.onDragEnd},r.a.createElement(F.b,{to:"/"},"Go Back"),r.a.createElement("h2",null,i.title),r.a.createElement(K.c,{droppableId:"all-lists",direction:"horizontal",type:"list"},function(e){return r.a.createElement(He,Object.assign({},e.droppableProps,{ref:e.innerRef}),o.map(function(e,a){var i=t[e];if(i){var o=i.cards.map(function(e){return n[e]});return r.a.createElement(Fe,{listID:i.id,key:i.id,title:i.title,cards:o,index:a})}}),e.placeholder,r.a.createElement(Ae,{list:!0}))}))}}]),t}(a.PureComponent),Me=Object(c.b)(function(e){return{lists:e.lists,cards:e.cards,boards:e.boards}})(Ge);function Ne(){var e=Object(H.a)(["\n  color: red;\n  text-decoration: none;\n"]);return Ne=function(){return e},e}function Ve(){var e=Object(H.a)(["\n  height: 280px;\n  width: 280px;\n  background: blue;\n  padding: 10px;\n  margin: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border-radius: 3px;\n  box-shadow: 0 2px 4px grey;\n"]);return Ve=function(){return e},e}var Je=Q.a.div(Ve()),Ye=Q.a.h4(Ne()),qe=function(e){var t=e.title;return console.log(t),r.a.createElement(Je,null,r.a.createElement(Ye,null,t))};function Ke(){var e=Object(H.a)(["\n  width: 400px;\n  height: 80px;\n  font-size: 22px;\n  padding: 10px;\n  box-sizing: border-box;\n  border-radius: 3px;\n  border: none;\n  outline-color: blue;\n  box-shadow: 0 2px 4px grey;\n  align-self: center;\n"]);return Ke=function(){return e},e}function Qe(){var e=Object(H.a)(["\n  font-size: 48px;\n  color: white;\n  font-weight: bold;\n  font-family: Arial, Helvetica, sans-serif;\n"]);return Qe=function(){return e},e}function Ue(){var e=Object(H.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-sizing: border-box;\n"]);return Ue=function(){return e},e}function We(){var e=Object(H.a)(["\n  flex: 1;\n  height: 50%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return We=function(){return e},e}var Xe=Q.a.div(We()),Ze=Q.a.div(Ue()),$e=Q.a.h3(Qe()),et=Q.a.input(Ke()),tt=Object(c.b)(function(e){return{boards:e.boards,boardOrder:e.boardOrder}})(function(e){var t=e.boards,n=e.boardOrder,i=e.dispatch,o=Object(a.useState)(""),c=Object(G.a)(o,2),l=c[0],u=c[1],d=function(e){u(e.target.value)},s=function(e){e.preventDefault(),i(function(e){var t=b()();return{type:h.ADD_BOARD,payload:{title:e,id:t}}}(l))};return r.a.createElement(Ze,null,r.a.createElement(Xe,null,n.map(function(e){var n=t[e];return r.a.createElement(F.b,{key:e,to:"/".concat(n.id),style:{textDecoration:"none"}},r.a.createElement(qe,n))})),r.a.createElement("form",{onSubmit:s,style:{textAlign:"center"}},r.a.createElement($e,null,"Create a new Board"),r.a.createElement(et,{onChange:d,value:l,placeholder:"Your boards title...",type:"text"})))}),nt=function(){return r.a.createElement(F.a,null,r.a.createElement("div",null,r.a.createElement(z.a,{path:"/",exact:!0,component:tt}),r.a.createElement(z.a,{path:"/:boardID",component:Me})))},at=function(e){function t(){return Object(k.a)(this,t),Object(R.a)(this,Object(B.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(L.a)(t,[{key:"render",value:function(){return r.a.createElement(nt,null)}}]),t}(a.PureComponent),rt=n(116),it=function(){var e=Object(l.e)(S,Object(l.a)(w.a));return{store:e,persistor:Object(T.b)(e)}}(),ot=it.persistor,ct=it.store;o.a.render(r.a.createElement(c.a,{store:ct},r.a.createElement(rt.a,{loading:null,persistor:ot},r.a.createElement(at,null))),document.getElementById("root"))}},[[119,1,2]]]);
//# sourceMappingURL=main.0f434fa7.chunk.js.map
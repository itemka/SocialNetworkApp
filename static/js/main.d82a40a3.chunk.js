(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,n){e.exports={CoverWithProfileInfo:"CoverWithProfileInfo_CoverWithProfileInfo__kg5Iv"}},128:function(e,t,n){e.exports=n.p+"static/media/Preloader.0cfb3a5f.svg"},132:function(e,t,n){e.exports=n.p+"static/media/manBeard.55bb4191.jpg"},133:function(e,t,n){e.exports={SiteBarRight:"SiteBarRight_SiteBarRight__1FqDg"}},134:function(e,t,n){e.exports={Login:"Login_Login__1ujut"}},135:function(e,t,n){e.exports={Dialogues:"Dialogues_Dialogues__B3KI5"}},136:function(e,t,n){e.exports={Messages:"Messages_Messages__2qRhx"}},138:function(e,t,n){e.exports=n(264)},143:function(e,t,n){},18:function(e,t,n){e.exports={BlockUsers:"Users_BlockUsers__2cwij",User:"Users_User__3lIQE",UserInfo:"Users_UserInfo__nLoDO",buttonUserFollowed:"Users_buttonUserFollowed__2_xb2",nameUser:"Users_nameUser__2Onub",buttons:"Users_buttons__wZICl",buttonNoActive:"Users_buttonNoActive__18YMs",center:"Users_center__3BFyQ",requestLoad:"Users_requestLoad__2zU2X",followOK:"Users_followOK__2rsgo",followNOTOK:"Users_followNOTOK__MK2uD"}},264:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(56),s=n.n(o),i=(n(143),n(8)),c=n(9),l=n(11),u=n(10),f=n(12),m=(n(30),n(29)),d=n(4),p=n(85),h=n.n(p),_=n(127),g=n.n(_),E=n(45),b=n.n(E),v=n(86),P=n.n(v),S=n(128),O=n.n(S),k=function(e){return r.a.createElement("div",{className:P.a.PreloaderContainer},r.a.createElement("img",{className:P.a.Preloader,src:O.a,alt:""}))},N=n(35),U=n.n(N),w=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={isMode:!1,statusText:n.props.status},n.changeStatus=function(e){n.setState({statusText:e.currentTarget.value}),n.props.UpdateStatusProfilePageThunkCreator(n.state.statusText)},n.activateEditMode=function(){return n.setState({isMode:!0})},n.deactivateEditMode=function(){return n.setState({isMode:!1})},n}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,t,n){e.status!==this.props.status&&this.setState({statusText:this.props.status})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:b.a.ProfileInfo},this.props.profile?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("img",{src:null!==this.props.profile.photos.large?this.props.profile.photos.large:U.a})),r.a.createElement("div",{className:b.a.listProfileInfo},r.a.createElement("div",{className:b.a.nameProfile},this.props.profile.fullName),r.a.createElement("div",null,r.a.createElement("div",null,"userId: ".concat(this.props.profile.userId)),r.a.createElement("div",null,"aboutMe: ".concat(this.props.profile.aboutMe)),r.a.createElement("div",null,"lookingForAJob: ".concat(this.props.profile.lookingForAJob)),r.a.createElement("div",null,"lookingForAJobDescription: ".concat(this.props.profile.lookingForAJobDescription)),r.a.createElement("div",null,r.a.createElement("div",null,"facebook: ".concat(this.props.profile.contacts.facebook)),r.a.createElement("div",null,"website: ".concat(this.props.profile.contacts.website)),r.a.createElement("div",null,"vk: ".concat(this.props.profile.contacts.vk)),r.a.createElement("div",null,"instagram: ".concat(this.props.profile.contacts.instagram)),r.a.createElement("div",null,"github: ".concat(this.props.profile.contacts.github)),r.a.createElement("div",null,"mainLink: ".concat(this.props.profile.contacts.mainLink)),r.a.createElement("div",null),r.a.createElement("div",null,"Web Site: ",r.a.createElement("a",{href:this.props.webSite},"\u041f\u043e\u0441\u0435\u0442\u0438\u0442\u044c")))),r.a.createElement("div",{className:b.a.status},"Status: ",this.state.isMode?r.a.createElement("input",{type:"text",autoFocus:!0,onChange:function(t){return e.changeStatus(t)},onBlur:this.deactivateEditMode,value:this.state.statusText}):r.a.createElement("span",{onClick:this.activateEditMode},"".concat(this.props.status?this.props.status:" _empty_"))))):r.a.createElement(k,null)))}}]),t}(r.a.Component),x=n(38),C=n(5),T=n(129),j=n.n(T).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"326adc8b-48be-4905-a33d-14875af1c491"}}),F=function(e,t){return j.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},M=function(e){return j.post("follow/".concat(e),{}).then(function(e){return e.data})},B=function(e){return j.delete("follow/".concat(e)).then(function(e){return e.data})},A=function(){return j.get("users").then(function(e){return e.data})},y=function(e){return j.get("users?count=".concat(e)).then(function(e){return e.data})},D=function(){return j.get("auth/me").then(function(e){return e.data})},I=function(e){return j.get("profile/".concat(e)).then(function(e){return e.data})},R=function(e){return j.get("profile/".concat(e)).then(function(e){return e.data})},L=function(e){return j.get("profile/status/".concat(e)).then(function(e){return e.data})},W=function(e){return j.put("profile/status",{status:e}).then(function(e){return e.data})},z=function(e){return{type:"SN/PROFILE/STATUS",statusText:e}},H={profiles:[{id:1,name:"Artem",dataOfBirth:"25 March",education:"BNTU",city:"Minsk",webSite:"https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks",photoProfile:"https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/67071798_1347581085404664_4338724534480797696_n.jpg?_nc_cat=104&_nc_oc=AQkLJZo7F7N4zFgH_evtuV3zhiWh_KxB-k9Ib239OP25fZyBICBKvdlzxWTM1S4WNDg&_nc_ht=scontent-frt3-1.xx&oh=099871eeb3564e3835a5ef8654af7f68&oe=5DEA59B7"},{id:1,name:"Artem",dataOfBirth:"25 March",education:"BNTU",city:"Minsk",webSite:"https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks",photoProfile:"https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/67071798_1347581085404664_4338724534480797696_n.jpg?_nc_cat=104&_nc_oc=AQkLJZo7F7N4zFgH_evtuV3zhiWh_KxB-k9Ib239OP25fZyBICBKvdlzxWTM1S4WNDg&_nc_ht=scontent-frt3-1.xx&oh=099871eeb3564e3835a5ef8654af7f68&oe=5DEA59B7"},{id:1,name:"Artem",dataOfBirth:"25 March",education:"BNTU",city:"Minsk",webSite:"https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks",photoProfile:"https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/67071798_1347581085404664_4338724534480797696_n.jpg?_nc_cat=104&_nc_oc=AQkLJZo7F7N4zFgH_evtuV3zhiWh_KxB-k9Ib239OP25fZyBICBKvdlzxWTM1S4WNDg&_nc_ht=scontent-frt3-1.xx&oh=099871eeb3564e3835a5ef8654af7f68&oe=5DEA59B7"},{id:1,name:"Artem",dataOfBirth:"25 March",education:"BNTU",city:"Minsk",webSite:"https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks",photoProfile:"https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/67071798_1347581085404664_4338724534480797696_n.jpg?_nc_cat=104&_nc_oc=AQkLJZo7F7N4zFgH_evtuV3zhiWh_KxB-k9Ib239OP25fZyBICBKvdlzxWTM1S4WNDg&_nc_ht=scontent-frt3-1.xx&oh=099871eeb3564e3835a5ef8654af7f68&oe=5DEA59B7"},{id:1,name:"Artem",dataOfBirth:"25 March",education:"BNTU",city:"Minsk",webSite:"https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks",photoProfile:"https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/67071798_1347581085404664_4338724534480797696_n.jpg?_nc_cat=104&_nc_oc=AQkLJZo7F7N4zFgH_evtuV3zhiWh_KxB-k9Ib239OP25fZyBICBKvdlzxWTM1S4WNDg&_nc_ht=scontent-frt3-1.xx&oh=099871eeb3564e3835a5ef8654af7f68&oe=5DEA59B7"},{id:1,name:"Artem",dataOfBirth:"25 March",education:"BNTU",city:"Minsk",webSite:"https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks",photoProfile:"https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/67071798_1347581085404664_4338724534480797696_n.jpg?_nc_cat=104&_nc_oc=AQkLJZo7F7N4zFgH_evtuV3zhiWh_KxB-k9Ib239OP25fZyBICBKvdlzxWTM1S4WNDg&_nc_ht=scontent-frt3-1.xx&oh=099871eeb3564e3835a5ef8654af7f68&oe=5DEA59B7"},{id:1,name:"Artem",dataOfBirth:"25 March",education:"BNTU",city:"Minsk",webSite:"https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks",photoProfile:"https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/67071798_1347581085404664_4338724534480797696_n.jpg?_nc_cat=104&_nc_oc=AQkLJZo7F7N4zFgH_evtuV3zhiWh_KxB-k9Ib239OP25fZyBICBKvdlzxWTM1S4WNDg&_nc_ht=scontent-frt3-1.xx&oh=099871eeb3564e3835a5ef8654af7f68&oe=5DEA59B7"},{id:1,name:"Artem",dataOfBirth:"25 March",education:"BNTU",city:"Minsk",webSite:"https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks",photoProfile:"https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/67071798_1347581085404664_4338724534480797696_n.jpg?_nc_cat=104&_nc_oc=AQkLJZo7F7N4zFgH_evtuV3zhiWh_KxB-k9Ib239OP25fZyBICBKvdlzxWTM1S4WNDg&_nc_ht=scontent-frt3-1.xx&oh=099871eeb3564e3835a5ef8654af7f68&oe=5DEA59B7"},{id:1,name:"Artem",dataOfBirth:"25 March",education:"BNTU",city:"Minsk",webSite:"https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks",photoProfile:"https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/67071798_1347581085404664_4338724534480797696_n.jpg?_nc_cat=104&_nc_oc=AQkLJZo7F7N4zFgH_evtuV3zhiWh_KxB-k9Ib239OP25fZyBICBKvdlzxWTM1S4WNDg&_nc_ht=scontent-frt3-1.xx&oh=099871eeb3564e3835a5ef8654af7f68&oe=5DEA59B7"},{id:1,name:"Artem",dataOfBirth:"25 March",education:"BNTU",city:"Minsk",webSite:"https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks",photoProfile:"https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/67071798_1347581085404664_4338724534480797696_n.jpg?_nc_cat=104&_nc_oc=AQkLJZo7F7N4zFgH_evtuV3zhiWh_KxB-k9Ib239OP25fZyBICBKvdlzxWTM1S4WNDg&_nc_ht=scontent-frt3-1.xx&oh=099871eeb3564e3835a5ef8654af7f68&oe=5DEA59B7"},{id:1,name:"Artem",dataOfBirth:"25 March",education:"BNTU",city:"Minsk",webSite:"https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks",photoProfile:"https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/67071798_1347581085404664_4338724534480797696_n.jpg?_nc_cat=104&_nc_oc=AQkLJZo7F7N4zFgH_evtuV3zhiWh_KxB-k9Ib239OP25fZyBICBKvdlzxWTM1S4WNDg&_nc_ht=scontent-frt3-1.xx&oh=099871eeb3564e3835a5ef8654af7f68&oe=5DEA59B7"}],typing:"",posts:[{id:2,text:"It is new Application!",like:"2"},{id:1,text:"hi",like:"1"}],profile:null,status:null},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/PROFILE/STATUS":return Object(C.a)({},e,{status:t.statusText});case"SN/PROFILE/ADD_POST":var n=Object(C.a)({},e,{posts:e.posts.map(function(e){return Object(C.a)({},e)})});if(""!==t.message){var a=[{id:n.posts.length+1,text:t.message,like:"".concat(n.posts.length+1)}].concat(Object(x.a)(n.posts));n.posts=a,n.typing=""}return n;case"SN/PROFILE/SET_USER_PROFILE":return Object(C.a)({},e,{profile:t.profile});default:return e}},G=Object(d.b)(function(e){return{profile:e.pageProfile.profile,status:e.pageProfile.status}},{UpdateStatusProfilePageThunkCreator:function(e){return function(t){W(e).then(function(n){0===n.resultCode&&t(z(e))})}}})(w),Z=function(){return r.a.createElement("div",{className:g.a.CoverWithProfileInfo},r.a.createElement(G,null))},J=n(60),V=n.n(J),Q=n(14),q=function(e){var t=e.siteBarLeft.listPages.map(function(e){return r.a.createElement(Q.b,{key:e.id,to:"/".concat(e.path),activeClassName:V.a.active},r.a.createElement("div",{className:V.a.item}," ","(idPage=".concat(e.id,") ").concat(e.page)," "))});return r.a.createElement("div",{className:V.a.SiteBarLeft},r.a.createElement("nav",null,t))},X=Object(d.b)(function(e){return{siteBarLeft:e.siteBarLeft}},{})(q),Y=n(61),$=n.n(Y),ee=n(62),te=n.n(ee),ne=function(e){return r.a.createElement("div",{className:"".concat(te.a.Post," clearFix")},r.a.createElement("div",null,r.a.createElement("img",{src:e.photoProfile,alt:""})),r.a.createElement("div",{className:te.a.dataPost},r.a.createElement("div",null,"(idPost=".concat(e.id,") ").concat(e.text))),r.a.createElement("br",null),r.a.createElement("div",{className:te.a.likePost},"Like: ".concat(e.like)))},ae=n(2),re=n.n(ae),oe=n(63),se=n.n(oe),ie=n(266),ce=n(265),le=function(e){return e?void 0:"Field is required"},ue=function(e){return function(t){return t&&t.length>e?"Max length is ".concat(e," symbols"):void 0}},fe=n(64),me=n(88),de=n.n(me),pe=function(e){e.input;var t=e.meta,n=Object(fe.a)(e,["input","meta"]),a=t.touched&&t.error;return r.a.createElement("div",{className:"".concat(de.a.formControl," ").concat(a&&de.a.error)},n.children,a&&r.a.createElement("span",null,t.error))},he=function(e){var t=e.input,n=(e.meta,e.child,Object(fe.a)(e,["input","meta","child"]));return r.a.createElement(pe,e,r.a.createElement("textarea",Object.assign({},t,n)))},_e=function(e){var t=e.input,n=(e.meta,e.child,Object(fe.a)(e,["input","meta","child"]));return r.a.createElement(pe,e,r.a.createElement("input",Object.assign({},t,n)))},ge=ue(10),Ee=Object(ce.a)({form:"PostForm"})(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:"".concat(se.a.PublishPost," clearFix")},r.a.createElement(ie.a,{component:he,rows:2,name:"textareaText",className:se.a.inputPost,placeholder:"your news!",validate:[le,ge]}),r.a.createElement("div",null,e.typing),r.a.createElement("button",{className:se.a.buttonSendPost},"Send post"))}),be=function(e){return r.a.createElement(Ee,Object.assign({onSubmit:function(t){console.log(t.textareaText),e.onClickAddPost(t.textareaText)}},e))},ve=Object(d.b)(function(e){return{newPost:e.pageProfile.newPost,typing:e.pageProfile.typing}},function(e){return{onClickAddPost:function(t){return e(function(e){return{type:"SN/PROFILE/ADD_POST",message:e}}(t))}}})(be),Pe=n(132),Se=n.n(Pe),Oe=function(e){var t=e.posts.map(function(e){return r.a.createElement(ne,{key:e.id,id:e.id,text:e.text,like:e.like,photoProfile:Se.a})});return r.a.createElement("div",{className:$.a.Posts},r.a.createElement(ve,null),r.a.createElement("div",{className:$.a.listPosts},r.a.createElement("div",{className:$.a.nameListPosts},"My posts"),r.a.createElement("div",null,t)))};Oe.protoTypes={posts:re.a.arrayOf(re.a.shape({id:re.a.number.isRequired,text:re.a.string.isRequired,like:re.a.string.isRequired}).isRequired).isRequired,profiles:re.a.arrayOf({photoProfile:re.a.string.isRequired}).isRequired};var ke=Oe,Ne=Object(d.b)(function(e){return{posts:e.pageProfile.posts,profile:e.pageProfile.profile}},{})(ke),Ue=n(133),we=n.n(Ue),xe=n(39),Ce=n.n(xe),Te=n(91),je=n.n(Te),Fe=function(e){var t=e.users.map(function(e){return r.a.createElement("div",{key:e.id,className:je.a.Friend},r.a.createElement(Q.b,{to:"/profile/"+e.id},r.a.createElement("img",{src:e.photos.small?e.photos.small:U.a,alt:""})),r.a.createElement("div",{className:je.a.friendName},e.name))});return r.a.createElement("div",{className:"clearFix"}," ",t," ")},Me=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(Fe,this.props)}}]),t}(r.a.Component),Be=Object(d.b)(function(e){return{users:e.siteBarRight.users}},{})(Me),Ae=function(e){return r.a.createElement("div",{className:Ce.a.WindowFriends},r.a.createElement("div",{className:Ce.a.titleFriends},"\u0414\u0440\u0443\u0437\u044c\u044f ".concat(e.totalUsersCount)),r.a.createElement("div",{className:Ce.a.Friends},r.a.createElement(Be,null)),r.a.createElement("div",{className:Ce.a.titleFriendsOnline},"\u0414\u0440\u0443\u0437\u044c\u044f online ".concat(e.totalUsersCount)),r.a.createElement("div",{className:Ce.a.Friends},r.a.createElement(Be,null)))},ye={users:[],totalUsersCount:0,countUsers:100},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/SITE_BAR_RIGHT/SET_USERS":return Object(C.a)({},e,{users:t.users});case"SN/SITE_BAR_RIGHT/SET_TOTAL_COUNT":return Object(C.a)({},e,{totalUsersCount:t.totalUsersCount});case"SN/SITE_BAR_RIGHT/SET_COUNT_USERS":return Object(C.a)({},e,{countUsers:t.countUsers});default:return e}},Ie=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.SetUsersSiteBarRightThunkCreator(this.props.countUsers)}},{key:"render",value:function(){return r.a.createElement(Ae,this.props)}}]),t}(r.a.Component),Re=Object(d.b)(function(e){return{countUsers:e.siteBarRight.countUsers,totalUsersCount:e.siteBarRight.totalUsersCount}},{SetUsersSiteBarRightThunkCreator:function(e){return function(t){y(e).then(function(e){t({type:"SN/SITE_BAR_RIGHT/SET_USERS",users:e.items})})}}})(Ie),Le=function(){return r.a.createElement("div",{className:we.a.SiteBarRight},r.a.createElement(Re,null))},We=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.SetCountUsersThuncCreator()}},{key:"render",value:function(){return r.a.createElement(Le,null)}}]),t}(r.a.Component),ze=Object(d.b)(null,{SetCountUsersThuncCreator:function(){return function(e){A().then(function(t){e({type:"SN/SITE_BAR_RIGHT/SET_TOTAL_COUNT",totalUsersCount:t.totalCount})})}}})(We),He=function(){return r.a.createElement("div",{className:h.a.PageProfile},r.a.createElement(Z,null),r.a.createElement("div",{className:h.a.AfterCover},r.a.createElement(X,null),r.a.createElement(Ne,null),r.a.createElement(ze,null)))},Ke=function(e){return{isAuth:e.authUserData.isAuth}},Ge=function(e){var t=function(t){function n(){return Object(i.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(f.a)(n,t),Object(c.a)(n,[{key:"render",value:function(){return!1===this.props.isAuth?r.a.createElement(m.a,{to:"/login"}):r.a.createElement(e,this.props)}}]),n}(r.a.Component);return Object(d.b)(Ke,null)(t)},Ze=n(7),Je=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=1579),this.props.GetUserProfileThunkCreator(e),this.props.SetStatusProfilePageThunkCreator(e)}},{key:"render",value:function(){return r.a.createElement(He,null)}}]),t}(r.a.Component),Ve=Object(Ze.d)(Object(d.b)(null,{GetUserProfileThunkCreator:function(e){return function(t){R(e).then(function(e){return t({type:"SN/PROFILE/SET_USER_PROFILE",profile:e})})}},SetStatusProfilePageThunkCreator:function(e){return function(t){L(e).then(function(e){return t(z(e))})}}}),m.f,Ge)(Je),Qe=n(66),qe=n.n(Qe),Xe=n(18),Ye=n.n(Xe),$e=n(92),et=n.n($e),tt=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],a=1;a<=t;a++)n.push(a);var o=function(t){return e.checkFollow.some(function(e){return e===t})?"".concat(Ye.a.requestLoad):""},s=e.users.map(function(t){return r.a.createElement("div",{key:t.id,className:Ye.a.User},r.a.createElement(Q.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:null===t.photos.small?U.a:t.photos.small,alt:""})),r.a.createElement("div",{className:Ye.a.UserInfo},r.a.createElement("div",{className:Ye.a.nameUser},t.name),r.a.createElement("div",null,"id: ",t.id),r.a.createElement("div",null,"status: ",t.status?t.status:"no status :("),r.a.createElement("div",{className:t.followed?Ye.a.followOK:Ye.a.followNOTOK},"followed: ",t.followed?"Yes!!!":"No :("),t.followed?e.checkFollow.some(function(e){return e===t.id})?r.a.createElement("img",{src:et.a,width:"10px",alt:""}):r.a.createElement("button",{disabled:e.checkFollow.some(function(e){return e===t.id}),className:"".concat(Ye.a.buttonUserFollowed," ")+o(t.id),onClick:function(){return e.setUnFollow(t.id)}},"unFollowed"):e.checkFollow.some(function(e){return e===t.id})?r.a.createElement("img",{src:et.a,width:"10px",alt:""}):r.a.createElement("button",{disabled:e.checkFollow.some(function(e){return e===t.id}),className:"".concat(Ye.a.buttonUserFollowed," ")+o(t.id),onClick:function(){return e.setFollow(t.id)}},"setFollowed")))});return r.a.createElement("div",{className:Ye.a.BlockUsers},e.users.length?null:r.a.createElement("div",null,"Users note found"),r.a.createElement("div",{className:Ye.a.center},n.map(function(t){if(t>=e.currentPage-1&&t<=e.currentPage+1||t===e.currentPage)return r.a.createElement("span",{className:"".concat(Ye.a.buttons)},r.a.createElement("button",{onClick:function(){return e.setCurrentPageMethod(t)},className:e.currentPage===t?Ye.a.buttonUserFollowed:"".concat(Ye.a.buttonNoActive)},t))})),r.a.createElement("br",null),r.a.createElement("br",null),s)},nt="NOT_INITIALIZED",at="INPROGRESS",rt="SUCCESS",ot=function(e){return{type:"SN/USERS/SET_USERS",users:e}},st=function(e){return{type:"SN/USERS/SET_STATUS",status:e}},it=function(e){return{type:"SET_FETCHING",loading:e}},ct=function(e,t){return{type:"SET_CHECK_FOLLOW",checked:e,userId:t}},lt={status:nt,users:[],totalUsersCount:0,pageSize:10,currentPage:1,isFetching:!0,checkFollow:[]},ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/USERS/SET_STATUS":return Object(C.a)({},e,{users:e.users.map(function(e){return Object(C.a)({},e)}),status:t.status});case"SN/USERS/SET_USERS":return Object(C.a)({},e,{users:t.users});case"SN/USERS/SET_CURRENT_PAGE":return Object(C.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(C.a)({},e,{totalUsersCount:t.totalUsersCount});case"FOLLOW":return Object(C.a)({},e,{users:e.users.map(function(e){return e.id===t.userId?Object(C.a)({},e,{followed:!0}):e})});case"UNFOLLOW":return Object(C.a)({},e,{users:e.users.map(function(e){return e.id===t.userId?Object(C.a)({},e,{followed:!1}):e})});case"SET_FETCHING":return Object(C.a)({},e,{isFetching:t.loading});case"SET_CHECK_FOLLOW":return Object(C.a)({},e,{checkFollow:t.checked?[].concat(Object(x.a)(e.checkFollow),[t.userId]):e.checkFollow.filter(function(e){return e!==t.userId})});default:return e}},ft=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).setCurrentPageMethod=function(e){return n.props.SetCurrentPageMethodThunkCreator(e,n.props.pageSize)},n.setFollow=function(e){return n.props.SetFollowThunkCreator(e)},n.setUnFollow=function(e){return n.props.SetUnFollowThunkCreator(e)},n}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.GetUserThunkCreator(this.props.currentPage,this.props.pageSize,this.props.status)}},{key:"render",value:function(){return r.a.createElement("div",null,!0===this.props.isFetching?r.a.createElement(k,null):null,r.a.createElement(tt,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,users:this.props.users,setUnFollow:this.setUnFollow,setFollow:this.setFollow,setCurrentPageMethod:this.setCurrentPageMethod,currentPage:this.props.currentPage,checkFollow:this.props.checkFollow}))}}]),t}(r.a.Component),mt=Object(Ze.d)(Object(d.b)(function(e){return{users:e.pageUsers.users,status:e.pageUsers.status,pageSize:e.pageUsers.pageSize,totalUsersCount:e.pageUsers.totalUsersCount,currentPage:e.pageUsers.currentPage,isFetching:e.pageUsers.isFetching,checkFollow:e.pageUsers.checkFollow}},{GetUserThunkCreator:function(e,t,n){return function(a){n===nt&&(a(st(at)),a(it(!0)),F(e,t).then(function(e){a(st(rt)),a(ot(e.items)),a({type:"SET_TOTAL_USERS_COUNT",totalUsersCount:e.totalCount}),a(it(!1))}))}},SetCurrentPageMethodThunkCreator:function(e,t){return function(n){n(it(!0)),n(function(e){return{type:"SN/USERS/SET_CURRENT_PAGE",currentPage:e}}(e)),F(e,t).then(function(e){n(st(rt)),n(ot(e.items)),n(it(!1))})}},SetFollowThunkCreator:function(e){return function(t){t(ct(!0,e)),M(e).then(function(n){0===n.resultCode&&(t(function(e){return{type:"FOLLOW",userId:e}}(e)),t(ct(!1,e)))})}},SetUnFollowThunkCreator:function(e){return function(t){t(ct(!0,e)),B(e).then(function(n){0===n.resultCode&&(t(function(e){return{type:"UNFOLLOW",userId:e}}(e)),t(ct(!1,e)))})}}}),Ge)(ft),dt=function(){return r.a.createElement("div",{className:qe.a.PageUsers},r.a.createElement("div",null,r.a.createElement(X,null)),r.a.createElement("div",{className:qe.a.UsersContainer},r.a.createElement(mt,null)),r.a.createElement("div",{className:qe.a.SiteBarRight},r.a.createElement(ze,null)))},pt=n(93),ht=n.n(pt),_t=function(e){return r.a.createElement("div",{className:ht.a.Header},r.a.createElement("img",{src:"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",alt:"logo"}),r.a.createElement(Q.b,{to:"/profile/"},"Home"),r.a.createElement("div",{className:ht.a.textLogin},e.isAuth?r.a.createElement("div",null,"".concat(e.userPhoto?"".concat(e.userPhoto," ").concat(e.login):r.a.createElement("img",{src:k,alt:""})," ").concat(e.login)):r.a.createElement(Q.b,{to:"/login"},"Login")))},gt={id:null,login:null,isAuth:!1,userPhoto:null,email:null,password:null,rememberMe:null},Et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:gt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/HEADER/SET_USER_DATA":return Object(C.a)({},e,t.data,{isAuth:!0});case"SN/HEADER/SET_USER_PHOTO":return Object(C.a)({},e,{userPhoto:t.userPhoto});case"SN/HEADER/LOG_IN":return Object(C.a)({},e,{email:t.email});default:return e}},bt=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){return n.props.checkUserDataThunkCreator(n.props.isAuth)},n}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(_t,this.props)}}]),t}(r.a.Component),vt=Object(d.b)(function(e){return{isAuth:e.authUserData.isAuth,login:e.authUserData.login,userPhoto:e.authUserData.userPhoto}},{checkUserDataThunkCreator:function(e){return function(t){D().then(function(n){if(0===n.resultCode){var a=n.data,r=a.id,o=a.email,s=a.login;t(function(e,t,n){return{type:"SN/HEADER/SET_USER_DATA",data:{userId:e,email:t,login:n}}}(r,o,s)),e&&I(r).then(function(e){t({type:"SN/HEADER/SET_USER_PHOTO",userPhoto:e.photos.small})})}})}}})(bt),Pt=n(134),St=n.n(Pt),Ot=ue(20),kt=Object(ce.a)({form:"login"})(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(ie.a,{component:_e,validate:[le,Ot],name:"Login",placeholder:"Login"})),r.a.createElement("div",null,r.a.createElement(ie.a,{component:_e,validate:[le,Ot],name:"Password",placeholder:"Password"})),r.a.createElement("div",null,r.a.createElement(ie.a,{component:"input",name:"Remember",type:"checkbox"})," remember me"),r.a.createElement("div",null,r.a.createElement("button",null,"Log in")))}),Nt=function(e){return r.a.createElement("div",null,r.a.createElement("h1",{className:St.a.Login},"Login"),r.a.createElement(kt,{onSubmit:function(e){console.log(e)}}))},Ut=n(33),wt=n.n(Ut),xt=n(135),Ct=n.n(xt),Tt=n(94),jt=n.n(Tt),Ft=function(e){return r.a.createElement("div",null,r.a.createElement(Q.b,{to:"/messages/".concat(e.idProfile)},r.a.createElement("div",{className:"".concat(jt.a.oneDialogue," clearFix")},r.a.createElement("div",null,r.a.createElement("img",{src:e.photoProfile,alt:""})),r.a.createElement("div",{className:jt.a.nameFriends},"(idProf=".concat(e.idProfile,") ").concat(e.nameProfile)))))},Mt=function(e){var t=e.profiles.map(function(e){return r.a.createElement(Ft,{idProfile:e.id,nameProfile:e.name,photoProfile:e.photoProfile})});return r.a.createElement("div",{className:Ct.a.Dialogues},t)},Bt=Object(d.b)(function(e){return{profiles:e.pageProfile.profiles}},function(){return{}})(Mt),At=n(136),yt=n.n(At),Dt=n(46),It=n.n(Dt),Rt=function(e){return r.a.createElement("div",{className:"".concat(It.a.Message," clearFix")},r.a.createElement("div",null,r.a.createElement("img",{src:e.photoProfile,alt:""})),r.a.createElement("div",{className:It.a.dataMessage},r.a.createElement("div",{className:It.a.nameMenMessage}," ","(idProf=".concat(e.idProfile,") ").concat(e.nameProfile)," "),r.a.createElement("div",{className:It.a.textMessage}," ","(idMess=".concat(e.id,") ").concat(e.message)," ")))},Lt=function(e){var t=e.messages.map(function(t){return r.a.createElement(Rt,{message:t.message,id:t.id,idProfile:e.profiles[0].id,nameProfile:e.profiles[0].name,photoProfile:e.profiles[0].photoProfile})});return r.a.createElement("div",{className:yt.a.Messages},t)},Wt=Object(d.b)(function(e){return{messages:e.pageDialogue.messages,profiles:e.pageProfile.profiles}},function(){return{}})(Lt),zt={messages:[]},Ht=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:zt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/DIALOGUES/ADD_MESSAGE":var n=Object(C.a)({},e,{messages:e.messages.map(function(e){return Object(C.a)({},e)})});if(""!==t.message){var a=[].concat(Object(x.a)(n.messages),[{id:n.messages.length+1,message:t.message}]);n.messages=a}return n;default:return e}},Kt=n(67),Gt=n.n(Kt),Zt=ue(10),Jt=Object(ce.a)({form:"AddMessageDialogue"})(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:"".concat(Gt.a.SendMessages," clearFix")},r.a.createElement(ie.a,{component:he,className:"".concat(Gt.a.inputMessages),name:"newMessage",rows:2,placeholder:"Enter Messages Text...",validate:[le,Zt]}),r.a.createElement("button",{className:Gt.a.buttonSendMessages},"Send"))}),Vt=function(e){return r.a.createElement(Jt,{onSubmit:function(t){console.log(t.newMessage),e.onClickAddMessageActionCreator(t.newMessage)}})},Qt=Object(d.b)(null,{onClickAddMessageActionCreator:function(e){return{type:"SN/DIALOGUES/ADD_MESSAGE",message:e}}})(Vt),qt=function(){return r.a.createElement("div",{className:wt.a.PageDialogue},r.a.createElement(X,null),r.a.createElement("div",{className:wt.a.Chat},r.a.createElement("div",{className:wt.a.titleChat},"Chat"),r.a.createElement("div",{className:wt.a.DialoguesWithMessages},r.a.createElement("div",{className:wt.a.DialoguesContainer},r.a.createElement(Bt,null)),r.a.createElement("div",{className:wt.a.MessagesContainer},r.a.createElement(Wt,null),r.a.createElement(Qt,null)))))},Xt=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(qt,null)}}]),t}(r.a.Component),Yt=Object(Ze.d)(Ge)(Xt),$t=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app_wrapper"},r.a.createElement(vt,null),r.a.createElement("div",{className:"Content"},r.a.createElement(m.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(Ve,null)}}),r.a.createElement(m.b,{path:"/messages",render:function(){return r.a.createElement(Yt,null)}}),r.a.createElement(m.b,{path:"/users",render:function(){return r.a.createElement(dt,null)}}),r.a.createElement(m.b,{path:"/login",render:function(){return r.a.createElement(Nt,null)}})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var en={listPages:[{id:1,page:"My Page",path:"profile"},{id:2,page:"Messages",path:"messages"},{id:3,page:"News",path:"news"},{id:4,page:"Music",path:"music"},{id:5,page:"Settings",path:"settings"},{id:6,page:"Users",path:"users"}]},tn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:en,t=arguments.length>1?arguments[1]:void 0,n=Object(C.a)({},e,{listPage:e.listPages.map(function(e){return Object(C.a)({},e)})});return t.type,n},nn=n(137),an=n(267),rn=Object(Ze.c)({pageDialogue:Ht,pageProfile:K,siteBarLeft:tn,pageUsers:ut,authUserData:Et,siteBarRight:De,form:an.a}),on=Object(Ze.e)(rn,Object(Ze.a)(nn.a));window.store=on,s.a.render(r.a.createElement(d.a,{store:on},r.a.createElement(Q.a,null,r.a.createElement($t,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},30:function(e,t,n){},33:function(e,t,n){e.exports={PageDialogue:"PageDialogue_PageDialogue__27cXP",Chat:"PageDialogue_Chat__2iF99",titleChat:"PageDialogue_titleChat__VMb6U",DialoguesWithMessages:"PageDialogue_DialoguesWithMessages__17aD4",DialoguesContainer:"PageDialogue_DialoguesContainer__2s29w",MessagesContainer:"PageDialogue_MessagesContainer__2uQQm"}},35:function(e,t,n){e.exports=n.p+"static/media/manBeard.728ca8a3.png"},39:function(e,t,n){e.exports={WindowFriends:"WindowFriends_WindowFriends__3k1f9",titleFriends:"WindowFriends_titleFriends__3GqXq",Friends:"WindowFriends_Friends__1Cla1",titleFriendsOnline:"WindowFriends_titleFriendsOnline__2JXdN"}},45:function(e,t,n){e.exports={ProfileInfo:"ProfileInfo_ProfileInfo__1ztMr",listProfileInfo:"ProfileInfo_listProfileInfo__3lwVB",nameProfile:"ProfileInfo_nameProfile__2UG8f",status:"ProfileInfo_status__25zTF"}},46:function(e,t,n){e.exports={Message:"Message_Message__bpSx_",dataMessage:"Message_dataMessage__fyxdV",nameMenMessage:"Message_nameMenMessage__1942s",textMessage:"Message_textMessage__3Osbn"}},60:function(e,t,n){e.exports={SiteBarLeft:"SiteBarLeft_SiteBarLeft__2lIze",item:"SiteBarLeft_item__3Zloi",active:"SiteBarLeft_active__2fCqO"}},61:function(e,t,n){e.exports={Posts:"Posts_Posts__1Jg7t",nameListPosts:"Posts_nameListPosts__QSSV1",listPosts:"Posts_listPosts__7hjRd"}},62:function(e,t,n){e.exports={Post:"Post_Post__2Wz__",dataPost:"Post_dataPost__1ClAY",likePost:"Post_likePost__GHnDT"}},63:function(e,t,n){e.exports={PublishPost:"PublishPost_PublishPost__aCXEt",inputPost:"PublishPost_inputPost__30xva",buttonSendPost:"PublishPost_buttonSendPost__1N5VU"}},66:function(e,t,n){e.exports={PageUsers:"PageUsers_PageUsers__S-lZG",UsersContainer:"PageUsers_UsersContainer__2X09V",SiteBarRight:"PageUsers_SiteBarRight__P8yI0"}},67:function(e,t,n){e.exports={SendMessages:"SendMessages_SendMessages__2k-tG",inputMessages:"SendMessages_inputMessages__2E3yb",buttonSendMessages:"SendMessages_buttonSendMessages__2AD-p",errorSend:"SendMessages_errorSend__1TDWy"}},85:function(e,t,n){e.exports={PageProfile:"PageProfile_PageProfile__3DU6_",AfterCover:"PageProfile_AfterCover__2JaKm"}},86:function(e,t,n){e.exports={PreloaderContainer:"Preloader_PreloaderContainer__3jldo",Preloader:"Preloader_Preloader__2OP4-"}},88:function(e,t,n){e.exports={formControl:"FormsControls_formControl__ajVyF",error:"FormsControls_error__35B8G"}},91:function(e,t,n){e.exports={Friend:"Friend_Friend__3la5Q",friendName:"Friend_friendName__35unG"}},92:function(e,t,n){e.exports=n.p+"static/media/Spinner42px.a1652bca.svg"},93:function(e,t,n){e.exports={Header:"Header_Header__2C_Ub",textLogin:"Header_textLogin__3bDme"}},94:function(e,t,n){e.exports={oneDialogue:"Dialogue_oneDialogue__1AUs9",nameFriends:"Dialogue_nameFriends__OSohu"}}},[[138,1,2]]]);
//# sourceMappingURL=main.d82a40a3.chunk.js.map
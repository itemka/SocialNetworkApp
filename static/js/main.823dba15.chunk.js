(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,t,n){e.exports={CoverWithProfileInfo:"CoverWithProfileInfo_CoverWithProfileInfo__kg5Iv"}},126:function(e,t,n){e.exports=n.p+"static/media/Preloader.0cfb3a5f.svg"},130:function(e,t,n){e.exports=n.p+"static/media/manBeard.55bb4191.jpg"},131:function(e,t,n){e.exports={SiteBarRight:"SiteBarRight_SiteBarRight__1FqDg"}},132:function(e,t,n){e.exports={Login:"Login_Login__1ujut"}},133:function(e,t,n){e.exports={Dialogues:"Dialogues_Dialogues__B3KI5"}},134:function(e,t,n){e.exports={Messages:"Messages_Messages__2qRhx"}},136:function(e,t,n){e.exports=n(262)},141:function(e,t,n){},18:function(e,t,n){e.exports={BlockUsers:"Users_BlockUsers__2cwij",User:"Users_User__3lIQE",UserInfo:"Users_UserInfo__nLoDO",buttonUserFollowed:"Users_buttonUserFollowed__2_xb2",nameUser:"Users_nameUser__2Onub",buttons:"Users_buttons__wZICl",buttonNoActive:"Users_buttonNoActive__18YMs",center:"Users_center__3BFyQ",requestLoad:"Users_requestLoad__2zU2X",followOK:"Users_followOK__2rsgo",followNOTOK:"Users_followNOTOK__MK2uD"}},262:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(56),s=n.n(o),i=(n(141),n(8)),c=n(9),l=n(11),u=n(10),f=n(12),d=(n(29),n(28)),p=n(4),m=n(84),h=n.n(m),_=n(125),g=n.n(_),b=n(45),E=n.n(b),P=n(85),v=n.n(P),S=n(126),O=n.n(S),k=function(e){return r.a.createElement("div",{className:v.a.PreloaderContainer},r.a.createElement("img",{className:v.a.Preloader,src:O.a,alt:""}))},N=n(34),U=n.n(N),w=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={isMode:!1,statusText:n.props.status},n.changeStatus=function(e){n.setState({statusText:e.currentTarget.value}),n.props.UpdateStatusProfilePageThunkCreator(n.state.statusText)},n.activateEditMode=function(){return n.setState({isMode:!0})},n.deactivateEditMode=function(){return n.setState({isMode:!1})},n}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,t,n){e.status!==this.props.status&&this.setState({statusText:this.props.status})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:E.a.ProfileInfo},this.props.profile?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("img",{src:null!==this.props.profile.photos.large?this.props.profile.photos.large:U.a})),r.a.createElement("div",{className:E.a.listProfileInfo},r.a.createElement("div",{className:E.a.nameProfile},this.props.profile.fullName),r.a.createElement("div",null,r.a.createElement("div",null,"userId: ".concat(this.props.profile.userId)),r.a.createElement("div",null,"aboutMe: ".concat(this.props.profile.aboutMe)),r.a.createElement("div",null,"lookingForAJob: ".concat(this.props.profile.lookingForAJob)),r.a.createElement("div",null,"lookingForAJobDescription: ".concat(this.props.profile.lookingForAJobDescription)),r.a.createElement("div",null,r.a.createElement("div",null,"facebook: ".concat(this.props.profile.contacts.facebook)),r.a.createElement("div",null,"website: ".concat(this.props.profile.contacts.website)),r.a.createElement("div",null,"vk: ".concat(this.props.profile.contacts.vk)),r.a.createElement("div",null,"instagram: ".concat(this.props.profile.contacts.instagram)),r.a.createElement("div",null,"github: ".concat(this.props.profile.contacts.github)),r.a.createElement("div",null,"mainLink: ".concat(this.props.profile.contacts.mainLink)),r.a.createElement("div",null),r.a.createElement("div",null,"Web Site: ",r.a.createElement("a",{href:this.props.webSite},"\u041f\u043e\u0441\u0435\u0442\u0438\u0442\u044c")))),r.a.createElement("div",{className:E.a.status},"Status: ",this.state.isMode?r.a.createElement("input",{type:"text",autoFocus:!0,onChange:function(t){return e.changeStatus(t)},onBlur:this.deactivateEditMode,value:this.state.statusText}):r.a.createElement("span",{onClick:this.activateEditMode},"".concat(this.props.status?this.props.status:" _empty_"))))):r.a.createElement(k,null)))}}]),t}(r.a.Component),x=n(37),C=n(5),T=n(127),j=n.n(T).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"326adc8b-48be-4905-a33d-14875af1c491"}}),F=function(e,t){return j.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},M=function(e){return j.post("follow/".concat(e),{}).then(function(e){return e.data})},B=function(e){return j.delete("follow/".concat(e)).then(function(e){return e.data})},A=function(){return j.get("users").then(function(e){return e.data})},y=function(e){return j.get("users?count=".concat(e)).then(function(e){return e.data})},D=function(){return j.get("auth/me").then(function(e){return e.data})},I=function(e){return j.get("profile/".concat(e)).then(function(e){return e.data})},R=function(e){return j.get("profile/".concat(e)).then(function(e){return e.data})},L=function(e){return j.get("profile/status/".concat(e)).then(function(e){return e.data})},W=function(e){return j.put("profile/status",{status:e}).then(function(e){return e.data})},z=function(e){return{type:"SN/PROFILE/STATUS",statusText:e}},H={profiles:[{id:1,name:"Artem",dataOfBirth:"25 March",education:"BNTU",city:"Minsk",webSite:"https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks",photoProfile:"https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/67071798_1347581085404664_4338724534480797696_n.jpg?_nc_cat=104&_nc_oc=AQkLJZo7F7N4zFgH_evtuV3zhiWh_KxB-k9Ib239OP25fZyBICBKvdlzxWTM1S4WNDg&_nc_ht=scontent-frt3-1.xx&oh=099871eeb3564e3835a5ef8654af7f68&oe=5DEA59B7"},{id:1,name:"Artem",dataOfBirth:"25 March",education:"BNTU",city:"Minsk",webSite:"https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks",photoProfile:"https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/67071798_1347581085404664_4338724534480797696_n.jpg?_nc_cat=104&_nc_oc=AQkLJZo7F7N4zFgH_evtuV3zhiWh_KxB-k9Ib239OP25fZyBICBKvdlzxWTM1S4WNDg&_nc_ht=scontent-frt3-1.xx&oh=099871eeb3564e3835a5ef8654af7f68&oe=5DEA59B7"},{id:1,name:"Artem",dataOfBirth:"25 March",education:"BNTU",city:"Minsk",webSite:"https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks",photoProfile:"https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/67071798_1347581085404664_4338724534480797696_n.jpg?_nc_cat=104&_nc_oc=AQkLJZo7F7N4zFgH_evtuV3zhiWh_KxB-k9Ib239OP25fZyBICBKvdlzxWTM1S4WNDg&_nc_ht=scontent-frt3-1.xx&oh=099871eeb3564e3835a5ef8654af7f68&oe=5DEA59B7"},{id:1,name:"Artem",dataOfBirth:"25 March",education:"BNTU",city:"Minsk",webSite:"https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks",photoProfile:"https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/67071798_1347581085404664_4338724534480797696_n.jpg?_nc_cat=104&_nc_oc=AQkLJZo7F7N4zFgH_evtuV3zhiWh_KxB-k9Ib239OP25fZyBICBKvdlzxWTM1S4WNDg&_nc_ht=scontent-frt3-1.xx&oh=099871eeb3564e3835a5ef8654af7f68&oe=5DEA59B7"},{id:1,name:"Artem",dataOfBirth:"25 March",education:"BNTU",city:"Minsk",webSite:"https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks",photoProfile:"https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/67071798_1347581085404664_4338724534480797696_n.jpg?_nc_cat=104&_nc_oc=AQkLJZo7F7N4zFgH_evtuV3zhiWh_KxB-k9Ib239OP25fZyBICBKvdlzxWTM1S4WNDg&_nc_ht=scontent-frt3-1.xx&oh=099871eeb3564e3835a5ef8654af7f68&oe=5DEA59B7"},{id:1,name:"Artem",dataOfBirth:"25 March",education:"BNTU",city:"Minsk",webSite:"https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks",photoProfile:"https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/67071798_1347581085404664_4338724534480797696_n.jpg?_nc_cat=104&_nc_oc=AQkLJZo7F7N4zFgH_evtuV3zhiWh_KxB-k9Ib239OP25fZyBICBKvdlzxWTM1S4WNDg&_nc_ht=scontent-frt3-1.xx&oh=099871eeb3564e3835a5ef8654af7f68&oe=5DEA59B7"},{id:1,name:"Artem",dataOfBirth:"25 March",education:"BNTU",city:"Minsk",webSite:"https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks",photoProfile:"https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/67071798_1347581085404664_4338724534480797696_n.jpg?_nc_cat=104&_nc_oc=AQkLJZo7F7N4zFgH_evtuV3zhiWh_KxB-k9Ib239OP25fZyBICBKvdlzxWTM1S4WNDg&_nc_ht=scontent-frt3-1.xx&oh=099871eeb3564e3835a5ef8654af7f68&oe=5DEA59B7"},{id:1,name:"Artem",dataOfBirth:"25 March",education:"BNTU",city:"Minsk",webSite:"https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks",photoProfile:"https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/67071798_1347581085404664_4338724534480797696_n.jpg?_nc_cat=104&_nc_oc=AQkLJZo7F7N4zFgH_evtuV3zhiWh_KxB-k9Ib239OP25fZyBICBKvdlzxWTM1S4WNDg&_nc_ht=scontent-frt3-1.xx&oh=099871eeb3564e3835a5ef8654af7f68&oe=5DEA59B7"},{id:1,name:"Artem",dataOfBirth:"25 March",education:"BNTU",city:"Minsk",webSite:"https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks",photoProfile:"https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/67071798_1347581085404664_4338724534480797696_n.jpg?_nc_cat=104&_nc_oc=AQkLJZo7F7N4zFgH_evtuV3zhiWh_KxB-k9Ib239OP25fZyBICBKvdlzxWTM1S4WNDg&_nc_ht=scontent-frt3-1.xx&oh=099871eeb3564e3835a5ef8654af7f68&oe=5DEA59B7"},{id:1,name:"Artem",dataOfBirth:"25 March",education:"BNTU",city:"Minsk",webSite:"https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks",photoProfile:"https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/67071798_1347581085404664_4338724534480797696_n.jpg?_nc_cat=104&_nc_oc=AQkLJZo7F7N4zFgH_evtuV3zhiWh_KxB-k9Ib239OP25fZyBICBKvdlzxWTM1S4WNDg&_nc_ht=scontent-frt3-1.xx&oh=099871eeb3564e3835a5ef8654af7f68&oe=5DEA59B7"},{id:1,name:"Artem",dataOfBirth:"25 March",education:"BNTU",city:"Minsk",webSite:"https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks",photoProfile:"https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/67071798_1347581085404664_4338724534480797696_n.jpg?_nc_cat=104&_nc_oc=AQkLJZo7F7N4zFgH_evtuV3zhiWh_KxB-k9Ib239OP25fZyBICBKvdlzxWTM1S4WNDg&_nc_ht=scontent-frt3-1.xx&oh=099871eeb3564e3835a5ef8654af7f68&oe=5DEA59B7"}],typing:"",posts:[{id:2,text:"It is new Application!",like:"2"},{id:1,text:"hi",like:"1"}],profile:null,status:null},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/PROFILE/STATUS":return Object(C.a)({},e,{status:t.statusText});case"SN/PROFILE/ADD_POST":var n=Object(C.a)({},e,{posts:e.posts.map(function(e){return Object(C.a)({},e)})});if(""!==t.message){var a=[{id:n.posts.length+1,text:t.message,like:"".concat(n.posts.length+1)}].concat(Object(x.a)(n.posts));n.posts=a,n.typing=""}return n;case"SN/PROFILE/SET_USER_PROFILE":return Object(C.a)({},e,{profile:t.profile});default:return e}},Z=Object(p.b)(function(e){return{profile:e.pageProfile.profile,status:e.pageProfile.status}},{UpdateStatusProfilePageThunkCreator:function(e){return function(t){W(e).then(function(n){0===n.resultCode&&t(z(e))})}}})(w),G=function(){return r.a.createElement("div",{className:g.a.CoverWithProfileInfo},r.a.createElement(Z,null))},J=n(60),Q=n.n(J),V=n(14),q=function(e){var t=e.siteBarLeft.listPages.map(function(e){return r.a.createElement(V.b,{key:e.id,to:"/".concat(e.path),activeClassName:Q.a.active},r.a.createElement("div",{className:Q.a.item}," ","(idPage=".concat(e.id,") ").concat(e.page)," "))});return r.a.createElement("div",{className:Q.a.SiteBarLeft},r.a.createElement("nav",null,t))},X=Object(p.b)(function(e){return{siteBarLeft:e.siteBarLeft}},{})(q),Y=n(61),$=n.n(Y),ee=n(62),te=n.n(ee),ne=function(e){return r.a.createElement("div",{className:"".concat(te.a.Post," clearFix")},r.a.createElement("div",null,r.a.createElement("img",{src:e.photoProfile,alt:""})),r.a.createElement("div",{className:te.a.dataPost},r.a.createElement("div",null,"(idPost=".concat(e.id,") ").concat(e.text))),r.a.createElement("br",null),r.a.createElement("div",{className:te.a.likePost},"Like: ".concat(e.like)))},ae=n(2),re=n.n(ae),oe=n(63),se=n.n(oe),ie=n(264),ce=n(263),le=function(e){return e?void 0:"Field is required"},ue=function(e){return e&&e.leading>30&&void 0!==e?"Max lenght is ".concat(e," symbols"):void 0},fe=Object(ce.a)({form:"PostForm"})(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:"".concat(se.a.PublishPost," clearFix")},r.a.createElement(ie.a,{component:"textarea",rows:2,name:"textareaText",className:se.a.inputPost,placeholder:"your news!",validate:[le,ue]}),r.a.createElement("div",null,e.typing),r.a.createElement("button",{className:se.a.buttonSendPost},"Send post"))}),de=function(e){return r.a.createElement(fe,Object.assign({onSubmit:function(t){console.log(t.textareaText),e.onClickAddPost(t.textareaText)}},e))},pe=Object(p.b)(function(e){return{newPost:e.pageProfile.newPost,typing:e.pageProfile.typing}},function(e){return{onClickAddPost:function(t){return e(function(e){return{type:"SN/PROFILE/ADD_POST",message:e}}(t))}}})(de),me=n(130),he=n.n(me),_e=function(e){var t=e.posts.map(function(e){return r.a.createElement(ne,{key:e.id,id:e.id,text:e.text,like:e.like,photoProfile:he.a})});return r.a.createElement("div",{className:$.a.Posts},r.a.createElement(pe,null),r.a.createElement("div",{className:$.a.listPosts},r.a.createElement("div",{className:$.a.nameListPosts},"My posts"),r.a.createElement("div",null,t)))};_e.protoTypes={posts:re.a.arrayOf(re.a.shape({id:re.a.number.isRequired,text:re.a.string.isRequired,like:re.a.string.isRequired}).isRequired).isRequired,profiles:re.a.arrayOf({photoProfile:re.a.string.isRequired}).isRequired};var ge=_e,be=Object(p.b)(function(e){return{posts:e.pageProfile.posts,profile:e.pageProfile.profile}},{})(ge),Ee=n(131),Pe=n.n(Ee),ve=n(39),Se=n.n(ve),Oe=n(89),ke=n.n(Oe),Ne=function(e){var t=e.users.map(function(e){return r.a.createElement("div",{key:e.id,className:ke.a.Friend},r.a.createElement(V.b,{to:"/profile/"+e.id},r.a.createElement("img",{src:e.photos.small?e.photos.small:U.a,alt:""})),r.a.createElement("div",{className:ke.a.friendName},e.name))});return r.a.createElement("div",{className:"clearFix"}," ",t," ")},Ue=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(Ne,this.props)}}]),t}(r.a.Component),we=Object(p.b)(function(e){return{users:e.siteBarRight.users}},{})(Ue),xe=function(e){return r.a.createElement("div",{className:Se.a.WindowFriends},r.a.createElement("div",{className:Se.a.titleFriends},"\u0414\u0440\u0443\u0437\u044c\u044f ".concat(e.totalUsersCount)),r.a.createElement("div",{className:Se.a.Friends},r.a.createElement(we,null)),r.a.createElement("div",{className:Se.a.titleFriendsOnline},"\u0414\u0440\u0443\u0437\u044c\u044f online ".concat(e.totalUsersCount)),r.a.createElement("div",{className:Se.a.Friends},r.a.createElement(we,null)))},Ce={users:[],totalUsersCount:0,countUsers:100},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/SITE_BAR_RIGHT/SET_USERS":return Object(C.a)({},e,{users:t.users});case"SN/SITE_BAR_RIGHT/SET_TOTAL_COUNT":return Object(C.a)({},e,{totalUsersCount:t.totalUsersCount});case"SN/SITE_BAR_RIGHT/SET_COUNT_USERS":return Object(C.a)({},e,{countUsers:t.countUsers});default:return e}},je=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.SetUsersSiteBarRightThunkCreator(this.props.countUsers)}},{key:"render",value:function(){return r.a.createElement(xe,this.props)}}]),t}(r.a.Component),Fe=Object(p.b)(function(e){return{countUsers:e.siteBarRight.countUsers,totalUsersCount:e.siteBarRight.totalUsersCount}},{SetUsersSiteBarRightThunkCreator:function(e){return function(t){y(e).then(function(e){t({type:"SN/SITE_BAR_RIGHT/SET_USERS",users:e.items})})}}})(je),Me=function(){return r.a.createElement("div",{className:Pe.a.SiteBarRight},r.a.createElement(Fe,null))},Be=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.SetCountUsersThuncCreator()}},{key:"render",value:function(){return r.a.createElement(Me,null)}}]),t}(r.a.Component),Ae=Object(p.b)(null,{SetCountUsersThuncCreator:function(){return function(e){A().then(function(t){e({type:"SN/SITE_BAR_RIGHT/SET_TOTAL_COUNT",totalUsersCount:t.totalCount})})}}})(Be),ye=function(){return r.a.createElement("div",{className:h.a.PageProfile},r.a.createElement(G,null),r.a.createElement("div",{className:h.a.AfterCover},r.a.createElement(X,null),r.a.createElement(be,null),r.a.createElement(Ae,null)))},De=function(e){return{isAuth:e.authUserData.isAuth}},Ie=function(e){var t=function(t){function n(){return Object(i.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(f.a)(n,t),Object(c.a)(n,[{key:"render",value:function(){return!1===this.props.isAuth?r.a.createElement(d.a,{to:"/login"}):r.a.createElement(e,this.props)}}]),n}(r.a.Component);return Object(p.b)(De,null)(t)},Re=n(7),Le=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=1579),this.props.GetUserProfileThunkCreator(e),this.props.SetStatusProfilePageThunkCreator(e)}},{key:"render",value:function(){return r.a.createElement(ye,null)}}]),t}(r.a.Component),We=Object(Re.d)(Object(p.b)(null,{GetUserProfileThunkCreator:function(e){return function(t){R(e).then(function(e){return t({type:"SN/PROFILE/SET_USER_PROFILE",profile:e})})}},SetStatusProfilePageThunkCreator:function(e){return function(t){L(e).then(function(e){return t(z(e))})}}}),d.f,Ie)(Le),ze=n(65),He=n.n(ze),Ke=n(18),Ze=n.n(Ke),Ge=n(90),Je=n.n(Ge),Qe=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],a=1;a<=t;a++)n.push(a);var o=function(t){return e.checkFollow.some(function(e){return e===t})?"".concat(Ze.a.requestLoad):""},s=e.users.map(function(t){return r.a.createElement("div",{key:t.id,className:Ze.a.User},r.a.createElement(V.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:null===t.photos.small?U.a:t.photos.small,alt:""})),r.a.createElement("div",{className:Ze.a.UserInfo},r.a.createElement("div",{className:Ze.a.nameUser},t.name),r.a.createElement("div",null,"id: ",t.id),r.a.createElement("div",null,"status: ",t.status?t.status:"no status :("),r.a.createElement("div",{className:t.followed?Ze.a.followOK:Ze.a.followNOTOK},"followed: ",t.followed?"Yes!!!":"No :("),t.followed?e.checkFollow.some(function(e){return e===t.id})?r.a.createElement("img",{src:Je.a,width:"10px",alt:""}):r.a.createElement("button",{disabled:e.checkFollow.some(function(e){return e===t.id}),className:"".concat(Ze.a.buttonUserFollowed," ")+o(t.id),onClick:function(){return e.setUnFollow(t.id)}},"unFollowed"):e.checkFollow.some(function(e){return e===t.id})?r.a.createElement("img",{src:Je.a,width:"10px",alt:""}):r.a.createElement("button",{disabled:e.checkFollow.some(function(e){return e===t.id}),className:"".concat(Ze.a.buttonUserFollowed," ")+o(t.id),onClick:function(){return e.setFollow(t.id)}},"setFollowed")))});return r.a.createElement("div",{className:Ze.a.BlockUsers},e.users.length?null:r.a.createElement("div",null,"Users note found"),r.a.createElement("div",{className:Ze.a.center},n.map(function(t){if(t>=e.currentPage-1&&t<=e.currentPage+1||t===e.currentPage)return r.a.createElement("span",{className:"".concat(Ze.a.buttons)},r.a.createElement("button",{onClick:function(){return e.setCurrentPageMethod(t)},className:e.currentPage===t?Ze.a.buttonUserFollowed:"".concat(Ze.a.buttonNoActive)},t))})),r.a.createElement("br",null),r.a.createElement("br",null),s)},Ve="NOT_INITIALIZED",qe="INPROGRESS",Xe="SUCCESS",Ye=function(e){return{type:"SN/USERS/SET_USERS",users:e}},$e=function(e){return{type:"SN/USERS/SET_STATUS",status:e}},et=function(e){return{type:"SET_FETCHING",loading:e}},tt=function(e,t){return{type:"SET_CHECK_FOLLOW",checked:e,userId:t}},nt={status:Ve,users:[],totalUsersCount:0,pageSize:10,currentPage:1,isFetching:!0,checkFollow:[]},at=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/USERS/SET_STATUS":return Object(C.a)({},e,{users:e.users.map(function(e){return Object(C.a)({},e)}),status:t.status});case"SN/USERS/SET_USERS":return Object(C.a)({},e,{users:t.users});case"SN/USERS/SET_CURRENT_PAGE":return Object(C.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(C.a)({},e,{totalUsersCount:t.totalUsersCount});case"FOLLOW":return Object(C.a)({},e,{users:e.users.map(function(e){return e.id===t.userId?Object(C.a)({},e,{followed:!0}):e})});case"UNFOLLOW":return Object(C.a)({},e,{users:e.users.map(function(e){return e.id===t.userId?Object(C.a)({},e,{followed:!1}):e})});case"SET_FETCHING":return Object(C.a)({},e,{isFetching:t.loading});case"SET_CHECK_FOLLOW":return Object(C.a)({},e,{checkFollow:t.checked?[].concat(Object(x.a)(e.checkFollow),[t.userId]):e.checkFollow.filter(function(e){return e!==t.userId})});default:return e}},rt=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).setCurrentPageMethod=function(e){return n.props.SetCurrentPageMethodThunkCreator(e,n.props.pageSize)},n.setFollow=function(e){return n.props.SetFollowThunkCreator(e)},n.setUnFollow=function(e){return n.props.SetUnFollowThunkCreator(e)},n}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.GetUserThunkCreator(this.props.currentPage,this.props.pageSize,this.props.status)}},{key:"render",value:function(){return r.a.createElement("div",null,!0===this.props.isFetching?r.a.createElement(k,null):null,r.a.createElement(Qe,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,users:this.props.users,setUnFollow:this.setUnFollow,setFollow:this.setFollow,setCurrentPageMethod:this.setCurrentPageMethod,currentPage:this.props.currentPage,checkFollow:this.props.checkFollow}))}}]),t}(r.a.Component),ot=Object(Re.d)(Object(p.b)(function(e){return{users:e.pageUsers.users,status:e.pageUsers.status,pageSize:e.pageUsers.pageSize,totalUsersCount:e.pageUsers.totalUsersCount,currentPage:e.pageUsers.currentPage,isFetching:e.pageUsers.isFetching,checkFollow:e.pageUsers.checkFollow}},{GetUserThunkCreator:function(e,t,n){return function(a){n===Ve&&(a($e(qe)),a(et(!0)),F(e,t).then(function(e){a($e(Xe)),a(Ye(e.items)),a({type:"SET_TOTAL_USERS_COUNT",totalUsersCount:e.totalCount}),a(et(!1))}))}},SetCurrentPageMethodThunkCreator:function(e,t){return function(n){n(et(!0)),n(function(e){return{type:"SN/USERS/SET_CURRENT_PAGE",currentPage:e}}(e)),F(e,t).then(function(e){n($e(Xe)),n(Ye(e.items)),n(et(!1))})}},SetFollowThunkCreator:function(e){return function(t){t(tt(!0,e)),M(e).then(function(n){0===n.resultCode&&(t(function(e){return{type:"FOLLOW",userId:e}}(e)),t(tt(!1,e)))})}},SetUnFollowThunkCreator:function(e){return function(t){t(tt(!0,e)),B(e).then(function(n){0===n.resultCode&&(t(function(e){return{type:"UNFOLLOW",userId:e}}(e)),t(tt(!1,e)))})}}}),Ie)(rt),st=function(){return r.a.createElement("div",{className:He.a.PageUsers},r.a.createElement("div",null,r.a.createElement(X,null)),r.a.createElement("div",{className:He.a.UsersContainer},r.a.createElement(ot,null)),r.a.createElement("div",{className:He.a.SiteBarRight},r.a.createElement(Ae,null)))},it=n(91),ct=n.n(it),lt=function(e){return r.a.createElement("div",{className:ct.a.Header},r.a.createElement("img",{src:"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",alt:"logo"}),r.a.createElement(V.b,{to:"/profile/"},"Home"),r.a.createElement("div",{className:ct.a.textLogin},e.isAuth?r.a.createElement("div",null,"".concat(e.userPhoto?"".concat(e.userPhoto," ").concat(e.login):r.a.createElement("img",{src:k,alt:""})," ").concat(e.login)):r.a.createElement(V.b,{to:"/login"},"Login")))},ut={id:null,login:null,isAuth:!1,userPhoto:null,email:null,password:null,rememberMe:null},ft=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/HEADER/SET_USER_DATA":return Object(C.a)({},e,t.data,{isAuth:!0});case"SN/HEADER/SET_USER_PHOTO":return Object(C.a)({},e,{userPhoto:t.userPhoto});case"SN/HEADER/LOG_IN":return Object(C.a)({},e,{email:t.email});default:return e}},dt=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){return n.props.checkUserDataThunkCreator(n.props.isAuth)},n}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(lt,this.props)}}]),t}(r.a.Component),pt=Object(p.b)(function(e){return{isAuth:e.authUserData.isAuth,login:e.authUserData.login,userPhoto:e.authUserData.userPhoto}},{checkUserDataThunkCreator:function(e){return function(t){D().then(function(n){if(0===n.resultCode){var a=n.data,r=a.id,o=a.email,s=a.login;t(function(e,t,n){return{type:"SN/HEADER/SET_USER_DATA",data:{userId:e,email:t,login:n}}}(r,o,s)),e&&I(r).then(function(e){t({type:"SN/HEADER/SET_USER_PHOTO",userPhoto:e.photos.small})})}})}}})(dt),mt=(n(132),Object(ce.a)({form:"login"})(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(ie.a,{component:"input",name:"Login",placeholder:"Login"})),r.a.createElement("div",null,r.a.createElement(ie.a,{component:"input",name:"Password",placeholder:"Password"})),r.a.createElement("div",null,r.a.createElement(ie.a,{component:"input",name:"Remember",type:"checkbox"})," remember me"),r.a.createElement("div",null,r.a.createElement("button",null,"Log in")))}),n(32)),ht=n.n(mt),_t=n(133),gt=n.n(_t),bt=n(92),Et=n.n(bt),Pt=function(e){return r.a.createElement("div",null,r.a.createElement(V.b,{to:"/messages/".concat(e.idProfile)},r.a.createElement("div",{className:"".concat(Et.a.oneDialogue," clearFix")},r.a.createElement("div",null,r.a.createElement("img",{src:e.photoProfile,alt:""})),r.a.createElement("div",{className:Et.a.nameFriends},"(idProf=".concat(e.idProfile,") ").concat(e.nameProfile)))))},vt=function(e){var t=e.profiles.map(function(e){return r.a.createElement(Pt,{idProfile:e.id,nameProfile:e.name,photoProfile:e.photoProfile})});return r.a.createElement("div",{className:gt.a.Dialogues},t)},St=Object(p.b)(function(e){return{profiles:e.pageProfile.profiles}},function(){return{}})(vt),Ot=n(134),kt=n.n(Ot),Nt=n(46),Ut=n.n(Nt),wt=function(e){return r.a.createElement("div",{className:"".concat(Ut.a.Message," clearFix")},r.a.createElement("div",null,r.a.createElement("img",{src:e.photoProfile,alt:""})),r.a.createElement("div",{className:Ut.a.dataMessage},r.a.createElement("div",{className:Ut.a.nameMenMessage}," ","(idProf=".concat(e.idProfile,") ").concat(e.nameProfile)," "),r.a.createElement("div",{className:Ut.a.textMessage}," ","(idMess=".concat(e.id,") ").concat(e.message)," ")))},xt=function(e){var t=e.messages.map(function(t){return r.a.createElement(wt,{message:t.message,id:t.id,idProfile:e.profiles[0].id,nameProfile:e.profiles[0].name,photoProfile:e.profiles[0].photoProfile})});return r.a.createElement("div",{className:kt.a.Messages},t)},Ct=Object(p.b)(function(e){return{messages:e.pageDialogue.messages,profiles:e.pageProfile.profiles}},function(){return{}})(xt),Tt={messages:[]},jt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/DIALOGUES/ADD_MESSAGE":var n=Object(C.a)({},e,{messages:e.messages.map(function(e){return Object(C.a)({},e)})});if(""!==t.message){var a=[].concat(Object(x.a)(n.messages),[{id:n.messages.length+1,message:t.message}]);n.messages=a}return n;default:return e}},Ft=n(66),Mt=n.n(Ft),Bt=Object(ce.a)({form:"AddMessageDialogue"})(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:"".concat(Mt.a.SendMessages," clearFix")},r.a.createElement(ie.a,{component:"textarea",className:"".concat(Mt.a.inputMessages),name:"newMessage",rows:2,placeholder:"Enter Messages Text..."}),r.a.createElement("button",{className:Mt.a.buttonSendMessages},"Send"))}),At=function(e){return r.a.createElement(Bt,{onSubmit:function(t){console.log(t.newMessage),e.onClickAddMessageActionCreator(t.newMessage)}})},yt=Object(p.b)(null,{onClickAddMessageActionCreator:function(e){return{type:"SN/DIALOGUES/ADD_MESSAGE",message:e}}})(At),Dt=function(){return r.a.createElement("div",{className:ht.a.PageDialogue},r.a.createElement(X,null),r.a.createElement("div",{className:ht.a.Chat},r.a.createElement("div",{className:ht.a.titleChat},"Chat"),r.a.createElement("div",{className:ht.a.DialoguesWithMessages},r.a.createElement("div",{className:ht.a.DialoguesContainer},r.a.createElement(St,null)),r.a.createElement("div",{className:ht.a.MessagesContainer},r.a.createElement(Ct,null),r.a.createElement(yt,null)))))},It=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(Dt,null)}}]),t}(r.a.Component),Rt=Object(Re.d)(Ie)(It),Lt=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"app_wrapper"},r.a.createElement(pt,null),r.a.createElement("div",{className:"Content"},r.a.createElement(d.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(We,null)}}),r.a.createElement(d.b,{path:"/messages",render:function(){return r.a.createElement(Rt,null)}}),r.a.createElement(d.b,{path:"/users",render:function(){return r.a.createElement(st,null)}})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Wt={listPages:[{id:1,page:"My Page",path:"profile"},{id:2,page:"Messages",path:"messages"},{id:3,page:"News",path:"news"},{id:4,page:"Music",path:"music"},{id:5,page:"Settings",path:"settings"},{id:6,page:"Users",path:"users"}]},zt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Wt,t=arguments.length>1?arguments[1]:void 0,n=Object(C.a)({},e,{listPage:e.listPages.map(function(e){return Object(C.a)({},e)})});return t.type,n},Ht=n(135),Kt=n(265),Zt=Object(Re.c)({pageDialogue:jt,pageProfile:K,siteBarLeft:zt,pageUsers:at,authUserData:ft,siteBarRight:Te,form:Kt.a}),Gt=Object(Re.e)(Zt,Object(Re.a)(Ht.a));window.store=Gt,s.a.render(r.a.createElement(p.a,{store:Gt},r.a.createElement(V.a,null,r.a.createElement(Lt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},29:function(e,t,n){},32:function(e,t,n){e.exports={PageDialogue:"PageDialogue_PageDialogue__27cXP",Chat:"PageDialogue_Chat__2iF99",titleChat:"PageDialogue_titleChat__VMb6U",DialoguesWithMessages:"PageDialogue_DialoguesWithMessages__17aD4",DialoguesContainer:"PageDialogue_DialoguesContainer__2s29w",MessagesContainer:"PageDialogue_MessagesContainer__2uQQm"}},34:function(e,t,n){e.exports=n.p+"static/media/manBeard.728ca8a3.png"},39:function(e,t,n){e.exports={WindowFriends:"WindowFriends_WindowFriends__3k1f9",titleFriends:"WindowFriends_titleFriends__3GqXq",Friends:"WindowFriends_Friends__1Cla1",titleFriendsOnline:"WindowFriends_titleFriendsOnline__2JXdN"}},45:function(e,t,n){e.exports={ProfileInfo:"ProfileInfo_ProfileInfo__1ztMr",listProfileInfo:"ProfileInfo_listProfileInfo__3lwVB",nameProfile:"ProfileInfo_nameProfile__2UG8f",status:"ProfileInfo_status__25zTF"}},46:function(e,t,n){e.exports={Message:"Message_Message__bpSx_",dataMessage:"Message_dataMessage__fyxdV",nameMenMessage:"Message_nameMenMessage__1942s",textMessage:"Message_textMessage__3Osbn"}},60:function(e,t,n){e.exports={SiteBarLeft:"SiteBarLeft_SiteBarLeft__2lIze",item:"SiteBarLeft_item__3Zloi",active:"SiteBarLeft_active__2fCqO"}},61:function(e,t,n){e.exports={Posts:"Posts_Posts__1Jg7t",nameListPosts:"Posts_nameListPosts__QSSV1",listPosts:"Posts_listPosts__7hjRd"}},62:function(e,t,n){e.exports={Post:"Post_Post__2Wz__",dataPost:"Post_dataPost__1ClAY",likePost:"Post_likePost__GHnDT"}},63:function(e,t,n){e.exports={PublishPost:"PublishPost_PublishPost__aCXEt",inputPost:"PublishPost_inputPost__30xva",buttonSendPost:"PublishPost_buttonSendPost__1N5VU"}},65:function(e,t,n){e.exports={PageUsers:"PageUsers_PageUsers__S-lZG",UsersContainer:"PageUsers_UsersContainer__2X09V",SiteBarRight:"PageUsers_SiteBarRight__P8yI0"}},66:function(e,t,n){e.exports={SendMessages:"SendMessages_SendMessages__2k-tG",inputMessages:"SendMessages_inputMessages__2E3yb",buttonSendMessages:"SendMessages_buttonSendMessages__2AD-p",errorSend:"SendMessages_errorSend__1TDWy"}},84:function(e,t,n){e.exports={PageProfile:"PageProfile_PageProfile__3DU6_",AfterCover:"PageProfile_AfterCover__2JaKm"}},85:function(e,t,n){e.exports={PreloaderContainer:"Preloader_PreloaderContainer__3jldo",Preloader:"Preloader_Preloader__2OP4-"}},89:function(e,t,n){e.exports={Friend:"Friend_Friend__3la5Q",friendName:"Friend_friendName__35unG"}},90:function(e,t,n){e.exports=n.p+"static/media/Spinner42px.a1652bca.svg"},91:function(e,t,n){e.exports={Header:"Header_Header__2C_Ub",textLogin:"Header_textLogin__3bDme"}},92:function(e,t,n){e.exports={oneDialogue:"Dialogue_oneDialogue__1AUs9",nameFriends:"Dialogue_nameFriends__OSohu"}}},[[136,1,2]]]);
//# sourceMappingURL=main.823dba15.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,t,n){e.exports={CoverWithProfileInfo:"CoverWithProfileInfo_CoverWithProfileInfo__kg5Iv"}},126:function(e,t,n){e.exports=n.p+"static/media/Preloader.0cfb3a5f.svg"},130:function(e,t,n){e.exports=n.p+"static/media/manBeard.55bb4191.jpg"},131:function(e,t,n){e.exports={SiteBarRight:"SiteBarRight_SiteBarRight__1FqDg"}},132:function(e,t,n){e.exports={Login:"Login_Login__1ujut"}},133:function(e,t,n){e.exports={Dialogues:"Dialogues_Dialogues__B3KI5"}},134:function(e,t,n){e.exports={Messages:"Messages_Messages__2qRhx"}},136:function(e,t,n){e.exports=n(262)},141:function(e,t,n){},18:function(e,t,n){e.exports={BlockUsers:"Users_BlockUsers__2cwij",User:"Users_User__3lIQE",UserInfo:"Users_UserInfo__nLoDO",buttonUserFollowed:"Users_buttonUserFollowed__2_xb2",nameUser:"Users_nameUser__2Onub",buttons:"Users_buttons__wZICl",buttonNoActive:"Users_buttonNoActive__18YMs",center:"Users_center__3BFyQ",requestLoad:"Users_requestLoad__2zU2X",followOK:"Users_followOK__2rsgo",followNOTOK:"Users_followNOTOK__MK2uD"}},262:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(56),o=n.n(s),i=(n(141),n(8)),c=n(9),l=n(11),u=n(10),m=n(12),f=(n(29),n(28)),d=n(4),p=n(84),g=n.n(p),h=n(125),E=n.n(h),_=n(45),b=n.n(_),P=n(85),S=n.n(P),v=n(126),O=n.n(v),U=function(e){return r.a.createElement("div",{className:S.a.PreloaderContainer},r.a.createElement("img",{className:S.a.Preloader,src:O.a,alt:""}))},C=n(34),N=n.n(C),j=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={isMode:!1,statusText:n.props.status},n.changeStatus=function(e){n.setState({statusText:e.currentTarget.value}),n.props.UpdateStatusProfilePageThunkCreator(n.state.statusText)},n.activateEditMode=function(){return n.setState({isMode:!0})},n.deactivateEditMode=function(){return n.setState({isMode:!1})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,t,n){e.status!==this.props.status&&this.setState({statusText:this.props.status})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:b.a.ProfileInfo},this.props.profile?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("img",{src:null!==this.props.profile.photos.large?this.props.profile.photos.large:N.a})),r.a.createElement("div",{className:b.a.listProfileInfo},r.a.createElement("div",{className:b.a.nameProfile},this.props.profile.fullName),r.a.createElement("div",null,r.a.createElement("div",null,"userId: ".concat(this.props.profile.userId)),r.a.createElement("div",null,"aboutMe: ".concat(this.props.profile.aboutMe)),r.a.createElement("div",null,"lookingForAJob: ".concat(this.props.profile.lookingForAJob)),r.a.createElement("div",null,"lookingForAJobDescription: ".concat(this.props.profile.lookingForAJobDescription)),r.a.createElement("div",null,r.a.createElement("div",null,"facebook: ".concat(this.props.profile.contacts.facebook)),r.a.createElement("div",null,"website: ".concat(this.props.profile.contacts.website)),r.a.createElement("div",null,"vk: ".concat(this.props.profile.contacts.vk)),r.a.createElement("div",null,"instagram: ".concat(this.props.profile.contacts.instagram)),r.a.createElement("div",null,"github: ".concat(this.props.profile.contacts.github)),r.a.createElement("div",null,"mainLink: ".concat(this.props.profile.contacts.mainLink)),r.a.createElement("div",null),r.a.createElement("div",null,"Web Site: ",r.a.createElement("a",{href:this.props.webSite},"\u041f\u043e\u0441\u0435\u0442\u0438\u0442\u044c")))),r.a.createElement("div",{className:b.a.status},"Status: ",this.state.isMode?r.a.createElement("input",{type:"text",autoFocus:!0,onChange:function(t){return e.changeStatus(t)},onBlur:this.deactivateEditMode,value:this.state.statusText}):r.a.createElement("span",{onClick:this.activateEditMode},"".concat(this.props.status?this.props.status:" _empty_"))))):r.a.createElement(U,null)))}}]),t}(r.a.Component),T=n(37),w=n(5),k=n(127),F=n.n(k).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"326adc8b-48be-4905-a33d-14875af1c491"}}),M=function(e,t){return F.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},y=function(e){return F.post("follow/".concat(e),{}).then(function(e){return e.data})},R=function(e){return F.delete("follow/".concat(e)).then(function(e){return e.data})},x=function(){return F.get("users").then(function(e){return e.data})},D=function(e){return F.get("users?count=".concat(e)).then(function(e){return e.data})},I=function(){return F.get("auth/me").then(function(e){return e.data})},A=function(e){return F.get("profile/".concat(e)).then(function(e){return e.data})},L=function(e){return F.get("profile/".concat(e)).then(function(e){return e.data})},B=function(e){return F.get("profile/status/".concat(e)).then(function(e){return e.data})},G=function(e){return F.put("profile/status",{status:e}).then(function(e){return e.data})},W=function(e){return{type:"SN/PROFILE/STATUS",statusText:e}},H={profiles:[],typing:"",posts:[{id:2,text:"It is new Application!",like:"2"},{id:1,text:"hi",like:"1"}],profile:null,status:null},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/PROFILE/STATUS":return Object(w.a)({},e,{status:t.statusText});case"SN/PROFILE/ADD_POST":var n=Object(w.a)({},e,{posts:e.posts.map(function(e){return Object(w.a)({},e)})});if(""!==t.message){var a=[{id:n.posts.length+1,text:t.message,like:"".concat(n.posts.length+1)}].concat(Object(T.a)(n.posts));n.posts=a,n.typing=""}return n;case"SN/PROFILE/SET_USER_PROFILE":return Object(w.a)({},e,{profile:t.profile});default:return e}},z=Object(d.b)(function(e){return{profile:e.pageProfile.profile,status:e.pageProfile.status}},{UpdateStatusProfilePageThunkCreator:function(e){return function(t){G(e).then(function(n){0===n.resultCode&&t(W(e))})}}})(j),K=function(){return r.a.createElement("div",{className:E.a.CoverWithProfileInfo},r.a.createElement(z,null))},J=n(60),Q=n.n(J),V=n(14),X=function(e){var t=e.siteBarLeft.listPages.map(function(e){return r.a.createElement(V.b,{key:e.id,to:"/".concat(e.path),activeClassName:Q.a.active},r.a.createElement("div",{className:Q.a.item}," ","(idPage=".concat(e.id,") ").concat(e.page)," "))});return r.a.createElement("div",{className:Q.a.SiteBarLeft},r.a.createElement("nav",null,t))},Y=Object(d.b)(function(e){return{siteBarLeft:e.siteBarLeft}},{})(X),Z=n(61),$=n.n(Z),ee=n(62),te=n.n(ee),ne=function(e){return r.a.createElement("div",{className:"".concat(te.a.Post," clearFix")},r.a.createElement("div",null,r.a.createElement("img",{src:e.photoProfile,alt:""})),r.a.createElement("div",{className:te.a.dataPost},r.a.createElement("div",null,"(idPost=".concat(e.id,") ").concat(e.text))),r.a.createElement("br",null),r.a.createElement("div",{className:te.a.likePost},"Like: ".concat(e.like)))},ae=n(2),re=n.n(ae),se=n(63),oe=n.n(se),ie=n(264),ce=n(263),le=Object(ce.a)({form:"PostForm"})(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:"".concat(oe.a.PublishPost," clearFix")},r.a.createElement(ie.a,{component:"textarea",rows:2,name:"textareaText",className:oe.a.inputPost,placeholder:"your news!"}),r.a.createElement("div",null,e.typing),r.a.createElement("button",{className:oe.a.buttonSendPost},"Send post"))}),ue=function(e){return r.a.createElement(le,Object.assign({onSubmit:function(t){console.log(t.textareaText),e.onClickAddPost(t.textareaText)}},e))},me=Object(d.b)(function(e){return{newPost:e.pageProfile.newPost,typing:e.pageProfile.typing}},function(e){return{onClickAddPost:function(t){return e(function(e){return{type:"SN/PROFILE/ADD_POST",message:e}}(t))}}})(ue),fe=n(130),de=n.n(fe),pe=function(e){var t=e.posts.map(function(e){return r.a.createElement(ne,{key:e.id,id:e.id,text:e.text,like:e.like,photoProfile:de.a})});return r.a.createElement("div",{className:$.a.Posts},r.a.createElement(me,null),r.a.createElement("div",{className:$.a.listPosts},r.a.createElement("div",{className:$.a.nameListPosts},"My posts"),r.a.createElement("div",null,t)))};pe.protoTypes={posts:re.a.arrayOf(re.a.shape({id:re.a.number.isRequired,text:re.a.string.isRequired,like:re.a.string.isRequired}).isRequired).isRequired,profiles:re.a.arrayOf({photoProfile:re.a.string.isRequired}).isRequired};var ge=pe,he=Object(d.b)(function(e){return{posts:e.pageProfile.posts,profile:e.pageProfile.profile}},{})(ge),Ee=n(131),_e=n.n(Ee),be=n(39),Pe=n.n(be),Se=n(89),ve=n.n(Se),Oe=function(e){var t=e.users.map(function(e){return r.a.createElement("div",{key:e.id,className:ve.a.Friend},r.a.createElement(V.b,{to:"/profile/"+e.id},r.a.createElement("img",{src:e.photos.small?e.photos.small:N.a,alt:""})),r.a.createElement("div",{className:ve.a.friendName},e.name))});return r.a.createElement("div",{className:"clearFix"}," ",t," ")},Ue=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(Oe,this.props)}}]),t}(r.a.Component),Ce=Object(d.b)(function(e){return{users:e.siteBarRight.users}},{})(Ue),Ne=function(e){return r.a.createElement("div",{className:Pe.a.WindowFriends},r.a.createElement("div",{className:Pe.a.titleFriends},"\u0414\u0440\u0443\u0437\u044c\u044f ".concat(e.totalUsersCount)),r.a.createElement("div",{className:Pe.a.Friends},r.a.createElement(Ce,null)),r.a.createElement("div",{className:Pe.a.titleFriendsOnline},"\u0414\u0440\u0443\u0437\u044c\u044f online ".concat(e.totalUsersCount)),r.a.createElement("div",{className:Pe.a.Friends},r.a.createElement(Ce,null)))},je={users:[],totalUsersCount:0,countUsers:100},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/SITE_BAR_RIGHT/SET_USERS":return Object(w.a)({},e,{users:t.users});case"SN/SITE_BAR_RIGHT/SET_TOTAL_COUNT":return Object(w.a)({},e,{totalUsersCount:t.totalUsersCount});case"SN/SITE_BAR_RIGHT/SET_COUNT_USERS":return Object(w.a)({},e,{countUsers:t.countUsers});default:return e}},we=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.SetUsersSiteBarRightThunkCreator(this.props.countUsers)}},{key:"render",value:function(){return r.a.createElement(Ne,this.props)}}]),t}(r.a.Component),ke=Object(d.b)(function(e){return{countUsers:e.siteBarRight.countUsers,totalUsersCount:e.siteBarRight.totalUsersCount}},{SetUsersSiteBarRightThunkCreator:function(e){return function(t){D(e).then(function(e){t({type:"SN/SITE_BAR_RIGHT/SET_USERS",users:e.items})})}}})(we),Fe=function(){return r.a.createElement("div",{className:_e.a.SiteBarRight},r.a.createElement(ke,null))},Me=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.SetCountUsersThuncCreator()}},{key:"render",value:function(){return r.a.createElement(Fe,null)}}]),t}(r.a.Component),ye=Object(d.b)(null,{SetCountUsersThuncCreator:function(){return function(e){x().then(function(t){e({type:"SN/SITE_BAR_RIGHT/SET_TOTAL_COUNT",totalUsersCount:t.totalCount})})}}})(Me),Re=function(){return r.a.createElement("div",{className:g.a.PageProfile},r.a.createElement(K,null),r.a.createElement("div",{className:g.a.AfterCover},r.a.createElement(Y,null),r.a.createElement(he,null),r.a.createElement(ye,null)))},xe=function(e){return{isAuth:e.authUserData.isAuth}},De=function(e){var t=function(t){function n(){return Object(i.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,t),Object(c.a)(n,[{key:"render",value:function(){return!1===this.props.isAuth?r.a.createElement(f.a,{to:"/login"}):r.a.createElement(e,this.props)}}]),n}(r.a.Component);return Object(d.b)(xe,null)(t)},Ie=n(7),Ae=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=1579),this.props.GetUserProfileThunkCreator(e),this.props.SetStatusProfilePageThunkCreator(e)}},{key:"render",value:function(){return r.a.createElement(Re,null)}}]),t}(r.a.Component),Le=Object(Ie.d)(Object(d.b)(null,{GetUserProfileThunkCreator:function(e){return function(t){L(e).then(function(e){return t({type:"SN/PROFILE/SET_USER_PROFILE",profile:e})})}},SetStatusProfilePageThunkCreator:function(e){return function(t){B(e).then(function(e){return t(W(e))})}}}),f.f,De)(Ae),Be=n(65),Ge=n.n(Be),We=n(18),He=n.n(We),qe=n(90),ze=n.n(qe),Ke=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],a=1;a<=t;a++)n.push(a);var s=function(t){return e.checkFollow.some(function(e){return e===t})?"".concat(He.a.requestLoad):""},o=e.users.map(function(t){return r.a.createElement("div",{key:t.id,className:He.a.User},r.a.createElement(V.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:null===t.photos.small?N.a:t.photos.small,alt:""})),r.a.createElement("div",{className:He.a.UserInfo},r.a.createElement("div",{className:He.a.nameUser},t.name),r.a.createElement("div",null,"id: ",t.id),r.a.createElement("div",null,"status: ",t.status?t.status:"no status :("),r.a.createElement("div",{className:t.followed?He.a.followOK:He.a.followNOTOK},"followed: ",t.followed?"Yes!!!":"No :("),t.followed?e.checkFollow.some(function(e){return e===t.id})?r.a.createElement("img",{src:ze.a,width:"10px",alt:""}):r.a.createElement("button",{disabled:e.checkFollow.some(function(e){return e===t.id}),className:"".concat(He.a.buttonUserFollowed," ")+s(t.id),onClick:function(){return e.setUnFollow(t.id)}},"unFollowed"):e.checkFollow.some(function(e){return e===t.id})?r.a.createElement("img",{src:ze.a,width:"10px",alt:""}):r.a.createElement("button",{disabled:e.checkFollow.some(function(e){return e===t.id}),className:"".concat(He.a.buttonUserFollowed," ")+s(t.id),onClick:function(){return e.setFollow(t.id)}},"setFollowed")))});return r.a.createElement("div",{className:He.a.BlockUsers},e.users.length?null:r.a.createElement("div",null,"Users note found"),r.a.createElement("div",{className:He.a.center},n.map(function(t){if(t>=e.currentPage-1&&t<=e.currentPage+1||t===e.currentPage)return r.a.createElement("span",{className:"".concat(He.a.buttons)},r.a.createElement("button",{onClick:function(){return e.setCurrentPageMethod(t)},className:e.currentPage===t?He.a.buttonUserFollowed:"".concat(He.a.buttonNoActive)},t))})),r.a.createElement("br",null),r.a.createElement("br",null),o)},Je="NOT_INITIALIZED",Qe="INPROGRESS",Ve="SUCCESS",Xe=function(e){return{type:"SN/USERS/SET_USERS",users:e}},Ye=function(e){return{type:"SN/USERS/SET_STATUS",status:e}},Ze=function(e){return{type:"SET_FETCHING",loading:e}},$e=function(e,t){return{type:"SET_CHECK_FOLLOW",checked:e,userId:t}},et={status:Je,users:[],totalUsersCount:0,pageSize:10,currentPage:1,isFetching:!0,checkFollow:[]},tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/USERS/SET_STATUS":return Object(w.a)({},e,{users:e.users.map(function(e){return Object(w.a)({},e)}),status:t.status});case"SN/USERS/SET_USERS":return Object(w.a)({},e,{users:t.users});case"SN/USERS/SET_CURRENT_PAGE":return Object(w.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(w.a)({},e,{totalUsersCount:t.totalUsersCount});case"FOLLOW":return Object(w.a)({},e,{users:e.users.map(function(e){return e.id===t.userId?Object(w.a)({},e,{followed:!0}):e})});case"UNFOLLOW":return Object(w.a)({},e,{users:e.users.map(function(e){return e.id===t.userId?Object(w.a)({},e,{followed:!1}):e})});case"SET_FETCHING":return Object(w.a)({},e,{isFetching:t.loading});case"SET_CHECK_FOLLOW":return Object(w.a)({},e,{checkFollow:t.checked?[].concat(Object(T.a)(e.checkFollow),[t.userId]):e.checkFollow.filter(function(e){return e!==t.userId})});default:return e}},nt=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).setCurrentPageMethod=function(e){return n.props.SetCurrentPageMethodThunkCreator(e,n.props.pageSize)},n.setFollow=function(e){return n.props.SetFollowThunkCreator(e)},n.setUnFollow=function(e){return n.props.SetUnFollowThunkCreator(e)},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.GetUserThunkCreator(this.props.currentPage,this.props.pageSize,this.props.status)}},{key:"render",value:function(){return r.a.createElement("div",null,!0===this.props.isFetching?r.a.createElement(U,null):null,r.a.createElement(Ke,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,users:this.props.users,setUnFollow:this.setUnFollow,setFollow:this.setFollow,setCurrentPageMethod:this.setCurrentPageMethod,currentPage:this.props.currentPage,checkFollow:this.props.checkFollow}))}}]),t}(r.a.Component),at=Object(Ie.d)(Object(d.b)(function(e){return{users:e.pageUsers.users,status:e.pageUsers.status,pageSize:e.pageUsers.pageSize,totalUsersCount:e.pageUsers.totalUsersCount,currentPage:e.pageUsers.currentPage,isFetching:e.pageUsers.isFetching,checkFollow:e.pageUsers.checkFollow}},{GetUserThunkCreator:function(e,t,n){return function(a){n===Je&&(a(Ye(Qe)),a(Ze(!0)),M(e,t).then(function(e){a(Ye(Ve)),a(Xe(e.items)),a({type:"SET_TOTAL_USERS_COUNT",totalUsersCount:e.totalCount}),a(Ze(!1))}))}},SetCurrentPageMethodThunkCreator:function(e,t){return function(n){n(Ze(!0)),n(function(e){return{type:"SN/USERS/SET_CURRENT_PAGE",currentPage:e}}(e)),M(e,t).then(function(e){n(Ye(Ve)),n(Xe(e.items)),n(Ze(!1))})}},SetFollowThunkCreator:function(e){return function(t){t($e(!0,e)),y(e).then(function(n){0===n.resultCode&&(t(function(e){return{type:"FOLLOW",userId:e}}(e)),t($e(!1,e)))})}},SetUnFollowThunkCreator:function(e){return function(t){t($e(!0,e)),R(e).then(function(n){0===n.resultCode&&(t(function(e){return{type:"UNFOLLOW",userId:e}}(e)),t($e(!1,e)))})}}}),De)(nt),rt=function(){return r.a.createElement("div",{className:Ge.a.PageUsers},r.a.createElement("div",null,r.a.createElement(Y,null)),r.a.createElement("div",{className:Ge.a.UsersContainer},r.a.createElement(at,null)),r.a.createElement("div",{className:Ge.a.SiteBarRight},r.a.createElement(ye,null)))},st=n(91),ot=n.n(st),it=function(e){return r.a.createElement("div",{className:ot.a.Header},r.a.createElement("img",{src:"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",alt:"logo"}),r.a.createElement(V.b,{to:"/profile/"},"Home"),r.a.createElement("div",{className:ot.a.textLogin},e.isAuth?r.a.createElement("div",null,"".concat(e.userPhoto?"".concat(e.userPhoto," ").concat(e.login):r.a.createElement("img",{src:U,alt:""})," ").concat(e.login)):r.a.createElement(V.b,{to:"/login"},"Login")))},ct={id:null,login:null,isAuth:!1,userPhoto:null,email:null,password:null,rememberMe:null},lt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/HEADER/SET_USER_DATA":return Object(w.a)({},e,t.data,{isAuth:!0});case"SN/HEADER/SET_USER_PHOTO":return Object(w.a)({},e,{userPhoto:t.userPhoto});case"SN/HEADER/LOG_IN":return Object(w.a)({},e,{email:t.email});default:return e}},ut=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){return n.props.checkUserDataThunkCreator(n.props.isAuth)},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(it,this.props)}}]),t}(r.a.Component),mt=Object(d.b)(function(e){return{isAuth:e.authUserData.isAuth,login:e.authUserData.login,userPhoto:e.authUserData.userPhoto}},{checkUserDataThunkCreator:function(e){return function(t){I().then(function(n){if(0===n.resultCode){var a=n.data,r=a.id,s=a.email,o=a.login;t(function(e,t,n){return{type:"SN/HEADER/SET_USER_DATA",data:{userId:e,email:t,login:n}}}(r,s,o)),e&&A(r).then(function(e){t({type:"SN/HEADER/SET_USER_PHOTO",userPhoto:e.photos.small})})}})}}})(ut),ft=n(132),dt=n.n(ft),pt=Object(ce.a)({form:"login"})(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(ie.a,{component:"input",name:"Login",placeholder:"Login"})),r.a.createElement("div",null,r.a.createElement(ie.a,{component:"input",name:"Password",placeholder:"Password"})),r.a.createElement("div",null,r.a.createElement(ie.a,{component:"input",name:"Remember",type:"checkbox"})," remember me"),r.a.createElement("div",null,r.a.createElement("button",null,"Log in")))}),gt=function(e){return r.a.createElement("div",null,r.a.createElement("h1",{className:dt.a.Login},"Login"),r.a.createElement(pt,{onSubmit:function(t){console.log(t),e.logInThunkCreator(t.Login,t.Password,t.Remember)}}))},ht=n(32),Et=n.n(ht),_t=n(133),bt=n.n(_t),Pt=n(92),St=n.n(Pt),vt=function(e){return r.a.createElement("div",null,r.a.createElement(V.b,{to:"/messages/".concat(e.idProfile)},r.a.createElement("div",{className:"".concat(St.a.oneDialogue," clearFix")},r.a.createElement("div",null,r.a.createElement("img",{src:e.photoProfile,alt:""})),r.a.createElement("div",{className:St.a.nameFriends},"(idProf=".concat(e.idProfile,") ").concat(e.nameProfile)))))},Ot=function(e){var t=e.profiles.map(function(e){return r.a.createElement(vt,{idProfile:e.id,nameProfile:e.name,photoProfile:e.photoProfile})});return r.a.createElement("div",{className:bt.a.Dialogues},t)},Ut=Object(d.b)(function(e){return{profiles:e.pageProfile.profiles}},function(){return{}})(Ot),Ct=n(134),Nt=n.n(Ct),jt=n(46),Tt=n.n(jt),wt=function(e){return r.a.createElement("div",{className:"".concat(Tt.a.Message," clearFix")},r.a.createElement("div",null,r.a.createElement("img",{src:e.photoProfile,alt:""})),r.a.createElement("div",{className:Tt.a.dataMessage},r.a.createElement("div",{className:Tt.a.nameMenMessage}," ","(idProf=".concat(e.idProfile,") ").concat(e.nameProfile)," "),r.a.createElement("div",{className:Tt.a.textMessage}," ","(idMess=".concat(e.id,") ").concat(e.message)," ")))},kt=function(e){var t=e.messages.map(function(t){return r.a.createElement(wt,{message:t.message,id:t.id,idProfile:e.profiles[0].id,nameProfile:e.profiles[0].name,photoProfile:e.profiles[0].photoProfile})});return r.a.createElement("div",{className:Nt.a.Messages},t)},Ft=Object(d.b)(function(e){return{messages:e.pageDialogue.messages,profiles:e.pageProfile.profiles}},function(){return{}})(kt),Mt={messages:[]},yt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Mt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/DIALOGUES/ADD_MESSAGE":var n=Object(w.a)({},e,{messages:e.messages.map(function(e){return Object(w.a)({},e)})});if(""!==t.message){var a=[].concat(Object(T.a)(n.messages),[{id:n.messages.length+1,message:t.message}]);n.messages=a}return n;default:return e}},Rt=n(66),xt=n.n(Rt),Dt=Object(ce.a)({form:"AddMessageDialogue"})(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:"".concat(xt.a.SendMessages," clearFix")},r.a.createElement(ie.a,{component:"textarea",className:"".concat(xt.a.inputMessages),name:"newMessage",rows:2,placeholder:"Enter Messages Text..."}),r.a.createElement("button",{className:xt.a.buttonSendMessages},"Send"))}),It=function(e){return r.a.createElement(Dt,{onSubmit:function(t){console.log(t.newMessage),e.onClickAddMessageActionCreator(t.newMessage)}})},At=Object(d.b)(null,{onClickAddMessageActionCreator:function(e){return{type:"SN/DIALOGUES/ADD_MESSAGE",message:e}}})(It),Lt=function(){return r.a.createElement("div",{className:Et.a.PageDialogue},r.a.createElement(Y,null),r.a.createElement("div",{className:Et.a.Chat},r.a.createElement("div",{className:Et.a.titleChat},"Chat"),r.a.createElement("div",{className:Et.a.DialoguesWithMessages},r.a.createElement("div",{className:Et.a.DialoguesContainer},r.a.createElement(Ut,null)),r.a.createElement("div",{className:Et.a.MessagesContainer},r.a.createElement(Ft,null),r.a.createElement(At,null)))))},Bt=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(Lt,null)}}]),t}(r.a.Component),Gt=Object(Ie.d)(De)(Bt),Wt=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"app_wrapper"},r.a.createElement(mt,null),r.a.createElement("div",{className:"Content"},r.a.createElement(f.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(Le,null)}}),r.a.createElement(f.b,{path:"/messages",render:function(){return r.a.createElement(Gt,null)}}),r.a.createElement(f.b,{path:"/users",render:function(){return r.a.createElement(rt,null)}}),r.a.createElement(f.b,{path:"/login",render:function(){return r.a.createElement(gt,null)}})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ht={listPages:[{id:1,page:"My Page",path:"profile"},{id:2,page:"Messages",path:"messages"},{id:3,page:"News",path:"news"},{id:4,page:"Music",path:"music"},{id:5,page:"Settings",path:"settings"},{id:6,page:"Users",path:"users"}]},qt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ht,t=arguments.length>1?arguments[1]:void 0,n=Object(w.a)({},e,{listPage:e.listPages.map(function(e){return Object(w.a)({},e)})});return t.type,n},zt=n(135),Kt=n(265),Jt=Object(Ie.c)({pageDialogue:yt,pageProfile:q,siteBarLeft:qt,pageUsers:tt,authUserData:lt,siteBarRight:Te,form:Kt.a}),Qt=Object(Ie.e)(Jt,Object(Ie.a)(zt.a));window.store=Qt,o.a.render(r.a.createElement(d.a,{store:Qt},r.a.createElement(V.a,null,r.a.createElement(Wt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},29:function(e,t,n){},32:function(e,t,n){e.exports={PageDialogue:"PageDialogue_PageDialogue__27cXP",Chat:"PageDialogue_Chat__2iF99",titleChat:"PageDialogue_titleChat__VMb6U",DialoguesWithMessages:"PageDialogue_DialoguesWithMessages__17aD4",DialoguesContainer:"PageDialogue_DialoguesContainer__2s29w",MessagesContainer:"PageDialogue_MessagesContainer__2uQQm"}},34:function(e,t,n){e.exports=n.p+"static/media/manBeard.728ca8a3.png"},39:function(e,t,n){e.exports={WindowFriends:"WindowFriends_WindowFriends__3k1f9",titleFriends:"WindowFriends_titleFriends__3GqXq",Friends:"WindowFriends_Friends__1Cla1",titleFriendsOnline:"WindowFriends_titleFriendsOnline__2JXdN"}},45:function(e,t,n){e.exports={ProfileInfo:"ProfileInfo_ProfileInfo__1ztMr",listProfileInfo:"ProfileInfo_listProfileInfo__3lwVB",nameProfile:"ProfileInfo_nameProfile__2UG8f",status:"ProfileInfo_status__25zTF"}},46:function(e,t,n){e.exports={Message:"Message_Message__bpSx_",dataMessage:"Message_dataMessage__fyxdV",nameMenMessage:"Message_nameMenMessage__1942s",textMessage:"Message_textMessage__3Osbn"}},60:function(e,t,n){e.exports={SiteBarLeft:"SiteBarLeft_SiteBarLeft__2lIze",item:"SiteBarLeft_item__3Zloi",active:"SiteBarLeft_active__2fCqO"}},61:function(e,t,n){e.exports={Posts:"Posts_Posts__1Jg7t",nameListPosts:"Posts_nameListPosts__QSSV1",listPosts:"Posts_listPosts__7hjRd"}},62:function(e,t,n){e.exports={Post:"Post_Post__2Wz__",dataPost:"Post_dataPost__1ClAY",likePost:"Post_likePost__GHnDT"}},63:function(e,t,n){e.exports={PublishPost:"PublishPost_PublishPost__aCXEt",inputPost:"PublishPost_inputPost__30xva",buttonSendPost:"PublishPost_buttonSendPost__1N5VU"}},65:function(e,t,n){e.exports={PageUsers:"PageUsers_PageUsers__S-lZG",UsersContainer:"PageUsers_UsersContainer__2X09V",SiteBarRight:"PageUsers_SiteBarRight__P8yI0"}},66:function(e,t,n){e.exports={SendMessages:"SendMessages_SendMessages__2k-tG",inputMessages:"SendMessages_inputMessages__2E3yb",buttonSendMessages:"SendMessages_buttonSendMessages__2AD-p",errorSend:"SendMessages_errorSend__1TDWy"}},84:function(e,t,n){e.exports={PageProfile:"PageProfile_PageProfile__3DU6_",AfterCover:"PageProfile_AfterCover__2JaKm"}},85:function(e,t,n){e.exports={PreloaderContainer:"Preloader_PreloaderContainer__3jldo",Preloader:"Preloader_Preloader__2OP4-"}},89:function(e,t,n){e.exports={Friend:"Friend_Friend__3la5Q",friendName:"Friend_friendName__35unG"}},90:function(e,t,n){e.exports=n.p+"static/media/Spinner42px.a1652bca.svg"},91:function(e,t,n){e.exports={Header:"Header_Header__2C_Ub",textLogin:"Header_textLogin__3bDme"}},92:function(e,t,n){e.exports={oneDialogue:"Dialogue_oneDialogue__1AUs9",nameFriends:"Dialogue_nameFriends__OSohu"}}},[[136,1,2]]]);
//# sourceMappingURL=main.d6ba287f.chunk.js.map
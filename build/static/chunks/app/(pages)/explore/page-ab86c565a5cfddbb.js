(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[752],{6889:function(t,o,s){Promise.resolve().then(s.bind(s,1075))},1075:function(t,o,s){"use strict";s.r(o),s.d(o,{default:function(){return explore_page}});var a=s(7437),i=s(2265),c=s(4031);let RecenterControl=class RecenterControl{constructor(t,o,s){let a=document.createElement("div");a.style.backgroundColor="#fff",a.style.marginRight="0px",a.style.margin="10px",a.style.marginTop="20px",a.style.border="1px solid #ccc",a.style.borderRadius="3px",a.style.boxShadow="0 2px 6px rgba(0, 0, 0, 0.3)",a.style.cursor="pointer",a.style.textAlign="center",a.title="Click to recenter the map",t.appendChild(a);let i=document.createElement("div");i.style.color="rgb(25,25,25)",i.style.fontFamily="Roboto,Arial,sans-serif",i.style.fontSize="12px",i.style.lineHeight="29px",i.style.paddingLeft="5px",i.style.paddingRight="5px",i.innerHTML="Recenter",a.appendChild(i),a.addEventListener("click",()=>{o.setCenter(s)})}};let g=[{elementType:"geometry",stylers:[{color:"#1d2c4d"}]},{elementType:"labels.text.fill",stylers:[{color:"#8ec3b9"}]},{elementType:"labels.text.stroke",stylers:[{color:"#1a3646"}]},{featureType:"administrative.country",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"administrative.land_parcel",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#64779e"}]},{featureType:"administrative.province",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"landscape.man_made",elementType:"geometry.stroke",stylers:[{color:"#334e87"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#023e58"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#283d6a"}]},{featureType:"poi",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#6f9ba5"}]},{featureType:"poi",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"poi.business",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#023e58"}]},{featureType:"poi.park",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#3C7680"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#304a7d"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#2c6675"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#255763"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#b0d5ce"}]},{featureType:"road.highway",elementType:"labels.text.stroke",stylers:[{color:"#023e58"}]},{featureType:"road.local",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"transit",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"transit.line",elementType:"geometry.fill",stylers:[{color:"#283d6a"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#3a4762"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#0e1626"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#4e6d70"}]}];var x=s(6085),w=s(4086);function deg2rad(t){return t*(Math.PI/180)}var k=s(171);s(4193);let FilterControl=class FilterControl{constructor(t,o,s,a){let i=document.createElement("div");i.style.backgroundColor="#fff",i.style.border="1px solid #ccc",i.style.borderRadius="3px",i.style.boxShadow="0 2px 6px rgba(0, 0, 0, 0.3)",i.style.cursor="pointer",i.style.textAlign="center",i.style.margin="10px",i.style.marginTop="20px",i.style.width="100px",i.style.height="29px",i.title="Click to set the circle radius",t.appendChild(i);let c=document.createElement("select");c.style.width="100%",c.style.height="100%",c.style.fontSize="12px",c.style.border="none",["1","2","5","10","20","30"].forEach(t=>{let o=document.createElement("option");o.value=t,o.text=t+" km",c.appendChild(o)}),i.appendChild(c),c.value=a.toString(),c.addEventListener("change",()=>{s(Number(c.value))})}};let PriceControl=class PriceControl{createInput(t,o){let s=document.createElement("input");s.type="number",s.placeholder=t,s.style.width="50px",s.style.height="30px",s.style.fontSize="12px",s.style.border="1px solid #ddd",s.style.borderRadius="3px",s.style.padding="5px",s.style.marginRight="5px",s.style.marginTop="5px",s.style.appearance="none",s.value=o.toString();let a=document.createElement("style");return a.innerHTML='\n        input[type="number"]::-webkit-inner-spin-button { \n            display: none;\n        }',document.head.appendChild(a),s}constructor(t,o,s,a){let i=document.createElement("div");i.style.backgroundColor="#f8f8f8",i.style.border="1px solid #ddd",i.style.borderRadius="5px",i.style.boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)",i.style.padding="10px",i.style.display="flex",i.style.flexDirection="column",i.innerHTML="Enter the price range",i.style.marginTop="60px",t.appendChild(i);let c=document.createElement("div");c.style.display="flex",c.style.marginBottom="10px",i.appendChild(c);let g=this.createInput("Min Price",s),x=this.createInput("Max Price",a);c.appendChild(g),c.appendChild(x);let w=document.createElement("button");w.innerText="Apply",w.style.width="105px",w.style.fontSize="12px",w.style.border="none",w.style.cursor="pointer",w.style.backgroundColor="#007bff",w.style.color="#fff",w.style.padding="8px",w.style.borderRadius="3px",i.appendChild(w),w.addEventListener("click",()=>{let t=Number(g.value),s=Number(x.value);o(t,s)})}};let{v4:P}=s(4916);var explore_page=()=>{let t;let{user:o}=(0,c._)(),[s,R]=(0,i.useState)({lat:49.273282,lng:-123.104274}),[j,B]=(0,i.useState)(5),[A,U]=(0,i.useState)(0),[D,z]=(0,i.useState)(100),F=P(),[J,$]=i.useState(null),[V,W]=(0,i.useState)(null),[G,K]=(0,i.useState)(!1),[Y,Z]=(0,i.useState)("na"),[X,ee]=(0,i.useState)([]),getSelecedUser=async t=>{console.log("selectedUid => ",t);let o=(0,w.IO)((0,w.hJ)(x.db,"users"),(0,w.ar)("uid","==",t));try{let t=await (0,w.PL)(o);console.log(t),t.empty?$(null):(t.forEach(t=>{$(t.data()),console.log(t.id," DOCC => ",t.data())}),console.log("Nuser => ",J))}catch(t){console.log(t)}};(0,i.useEffect)(()=>{console.log("Nuser => ",J);let createChat=async()=>{if(console.log("searching for Nuser with username: ",null==J?void 0:J.displayName.trim()),J){let t=o.uid>J.uid?o.uid+J.uid:J.uid+o.uid;console.log("combineId => ",t);let s=await (0,w.QT)((0,w.JU)(x.db,"chats",t)),a=await (0,w.QT)((0,w.JU)(x.db,"userChats",o.uid)),i=await (0,w.QT)((0,w.JU)(x.db,"userChats",J.uid));s.exists()?(await (0,w.r7)((0,w.JU)(x.db,"chats",t),{messages:(0,w.vr)({id:F,text:Y,senderId:o.uid,date:w.EK.now()})}),k.Am.info("Chat already exists, message has been sent!",{position:"bottom-left",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})):(await (0,w.pl)((0,w.JU)(x.db,"chats",t),{messages:(0,w.vr)({id:F,text:Y,senderId:o.uid,date:w.EK.now()})}),a.exists()||await (0,w.pl)((0,w.JU)(x.db,"userChats",o.uid),{[t]:{userInfo:{uid:J.uid,displayName:J.displayName},date:(0,w.Bt)()}}),i.exists()||await (0,w.pl)((0,w.JU)(x.db,"userChats",J.uid),{[t]:{userInfo:{uid:o.uid,displayName:o.displayName},date:(0,w.Bt)()}}),await (0,w.r7)((0,w.JU)(x.db,"userChats",o.uid),{[t+".userInfo"]:{uid:J.uid,displayName:J.displayName},[t+".date"]:(0,w.Bt)()}),await (0,w.r7)((0,w.JU)(x.db,"userChats",J.uid),{[t+".userInfo"]:{uid:o.uid,displayName:o.displayName},[t+".date"]:(0,w.Bt)()}),k.Am.success("Connection Created, Go to chat page to talk",{position:"bottom-left",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}))}$(null)};J&&createChat()},[J,Y]);let handleSelect=async t=>{await getSelecedUser(t)},handleReport=async(t,s)=>{let a=(0,w.IO)((0,w.hJ)(x.db,"posts"),(0,w.ar)("postId","==",t)),i=await (0,w.QT)((0,w.JU)(x.db,"reportedPosts",t));try{let R=await (0,w.PL)(a);if(console.log(R),R.empty)k.Am.error("Error Reporting Post, Please try again.",{position:"bottom-left",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"});else{if(i.exists()){var c,g,P;let a=null===(c=i.data())||void 0===c?void 0:c.reportedBy.includes(o.uid);if(a){k.Am.error("You have already reported this post.",{position:"bottom-left",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"});return}await (0,w.r7)((0,w.JU)(x.db,"reportedPosts",t),{reportedBy:[...null===(g=i.data())||void 0===g?void 0:g.reportedBy,o.uid],reason:[...null===(P=i.data())||void 0===P?void 0:P.reason,s]})}else await (0,w.pl)((0,w.JU)(x.db,"reportedPosts",t),{reportedBy:[o.uid],reason:[s],postDetails:R.docs[0].data()});k.Am.success("Post Reported, Thank you for your feedback.",{position:"bottom-left",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})}}catch(t){console.log(t)}};return(0,i.useEffect)(()=>{let t;let o=document.getElementById("map");if(o){if(t=new google.maps.Map(o,{zoom:G?15:12,center:s,styles:g,minZoom:2,gestureHandling:"cooperative",mapTypeControl:!1,disableDefaultUI:!0,streetViewControl:!0}),G){let o={path:google.maps.SymbolPath.CIRCLE,fillColor:"#269bf3",fillOpacity:1,scale:6,strokeColor:"white",strokeWeight:1};new google.maps.Marker({position:s,icon:o,map:t})}let a=document.createElement("div");new RecenterControl(a,t,s),t.controls[google.maps.ControlPosition.TOP_CENTER].push(a);let i=new google.maps.Circle({strokeColor:"#00FF00",strokeOpacity:.1,strokeWeight:2,fillColor:"#00FF00",fillOpacity:.1,map:t,center:s,radius:1e3*j,zIndex:1}),c=document.createElement("div"),x=document.createElement("div");new FilterControl(c,t,t=>{B(t),i.setRadius(1e3*t)},j),new PriceControl(x,(t,o)=>{U(t),z(o)},A,D),t.controls[google.maps.ControlPosition.TOP_CENTER].push(c),x.style.display="none",t.controls[google.maps.ControlPosition.TOP_CENTER].push(x);let w=document.createElement("div");w.innerHTML="more ▼",w.style.backgroundColor="#fff",w.style.color="#000",w.style.padding="8px 16px",w.style.border="none",w.style.borderRadius="4px",w.style.cursor="pointer",w.style.margin="10px",w.style.marginTop="20px",w.addEventListener("click",()=>{w.textContent="more ▼"===w.textContent?"less ▲":"more ▼",x.style.display="none"===x.style.display?"block":"none"}),t.controls[google.maps.ControlPosition.TOP_CENTER].push(w);let k=null;X.forEach((o,s)=>{let a=new google.maps.Marker({position:{lat:o.coords.lat,lng:o.coords.lng},map:t});a.addListener("click",()=>{k&&k.close();let i=new google.maps.InfoWindow({content:'\n              <div style="max-width: 300px; margin: 0 auto; background-color: #ffffff; padding: 16px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); font-family: Arial, sans-serif;">\n              <h2 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 8px; color: #0e1626; overflow: auto; height: 32px;">'.concat(o.title,'</h2>\n              <hr style="border: none; border-top: 1px solid #ddd; margin: 8px 0;">\n              <p>Description:</p>\n              <div style="background-color: #f0f0f0; padding: 10px; overflow: auto; height: 50px; border-radius: 4px; margin-top: 10px; margin-bottom: 10px">\n              <p style="font-size: 0.8rem; color: black; margin-bottom: 8px;">\n                ').concat(o.description,'\n              </p>\n            </div>\n            \n              <div style="white-space: nowrap; overflow-x: auto; margin-bottom: 8px;">\n              ').concat(o.images.map(t=>'<div style="display: inline-block; width: 100px; height: 100px; overflow: hidden; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); margin-right:15px">\n                      <img src="'.concat(t,'" alt="Post image" style="width: 100%; height: 100%; object-fit: cover; object-position: center;"/>\n                    </div>')).join(""),'\n            </div>\n            \n            <p style="font-size: 1rem; color: green; margin-top: 10px; margin-bottom:10px ">$ ').concat(o.price,'</p>   \n\n                <p style="font-size: 0.6rem; color: #555; margin-bottom: 8px; overflow: auto;">Location: ').concat(o.location,'</p>\n\n                <div style="display: flex; gap: 8px;">\n                  <button style="background-color: #3498db; color: #fff; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); transition: background-color 0.3s ease;" id="selectButton').concat(s,'" value="').concat(o.user,'" onmouseover="this.style.backgroundColor=\'#2980b9\';" onmouseout="this.style.backgroundColor=\'#3498db\';">Message</button>\n          \n                  <button style="background-color: #e74c3c; color: #fff; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); transition: background-color 0.3s ease;" id="reportButton').concat(s,'" value="').concat(o.postId,'" onmouseover="this.style.backgroundColor=\'#c0392b\';" onmouseout="this.style.backgroundColor=\'#e74c3c\';">Report</button>\n                </div>\n              </div>\n            ')});google.maps.event.addListenerOnce(i,"domready",()=>{let t=document.getElementById("selectButton".concat(s));t&&t.addEventListener("click",()=>{console.log("selectButton clicked");let s=null==t?void 0:t.getAttribute("value");console.log("selectedUid => ",s);let a=prompt("Please enter your message:","Hi, I am interested in your post!");a&&(handleSelect(s),Z("Title - "+o.title+"\nDescription - "+o.description+"\nPrice - $ "+o.price+"\n-------------\n\n"+a)),i.close()})}),google.maps.event.addListenerOnce(i,"domready",()=>{let t=document.getElementById("reportButton".concat(s));t&&t.addEventListener("click",()=>{console.log("reportButton clicked");let o=null==t?void 0:t.getAttribute("value");if(console.log("selectedPostValue => ",o),o){let t=prompt("Please enter the reason for reporting:");t&&handleReport(o,t)}i.close()})}),i.open(t,a),k=i})})}},[s,G,X]),(0,i.useEffect)(()=>("geolocation"in navigator?(G||void 0!=t||(t=(0,k.Am)("Fetching user location...",{position:"bottom-left",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})),navigator.geolocation.getCurrentPosition(o=>{let{latitude:s,longitude:a}=o.coords;R({lat:s,lng:a}),G||k.Am.dismiss(t),K(!0)},t=>{console.error("Error getting location:",t)})):(K(!1),console.error("Geolocation is not supported")),()=>{K(!1)}),[]),(0,i.useEffect)(()=>{if(G){let fetchData=async()=>{let t=(0,w.ad)(),a=(0,w.hJ)(t,"posts"),i=await (0,w.PL)(a),c=[];i.forEach(t=>{let a=t.data(),i=function(t,o,s,a){let i=deg2rad(s-t),c=deg2rad(a-o),g=Math.sin(i/2)*Math.sin(i/2)+Math.cos(deg2rad(t))*Math.cos(deg2rad(s))*Math.sin(c/2)*Math.sin(c/2);return 6371*(2*Math.atan2(Math.sqrt(g),Math.sqrt(1-g)))}(s.lat,s.lng,a.coords.lat,a.coords.lng);i<=j&&a.user!=o.uid&&a.price>=A&&a.price<=D&&c.push(a)}),ee(c),console.log("nearbyPosts => ",c)};fetchData()}},[s,j,A,D]),(0,a.jsx)("div",{className:"flex flex-1 items-center justify-center",children:(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsx)(k.Ix,{}),(0,a.jsx)("div",{className:"",children:(0,a.jsx)("div",{id:"map",style:{width:"100%",height:"91vh"}})})]})})}},2209:function(t,o,s){"use strict";s.d(o,{Z:function(){return components_Chat}});var a=s(7437),i=s(2265),c=s(4031),g=s(9213),components_ChatMessage=t=>{let{message:o}=t,s=!1,{user:x}=(0,c._)(),{data:w}=(0,g.Q)(),k=(0,i.useRef)(null);(0,i.useEffect)(()=>{var t;null===(t=k.current)||void 0===t||t.scrollIntoView({behavior:"smooth"})},[o]);let P=new Date(1e3*o.date.seconds);return s=!!x&&o.senderId===x.uid,(0,a.jsxs)("div",{ref:k,className:"flex ".concat(s?"justify-end":"justify-start"," items-center mb-4 ml-2 mr-2"),children:[s&&(0,a.jsx)("p",{className:"text-xs text-gray-400 ml-2 mr-2",children:P.toLocaleString()}),(0,a.jsxs)("div",{className:"max-w-[70%] p-3 rounded-lg ".concat(s?"bg-gray-800 text-white shadow-lg":"bg-gray-400 text-black shadow-lg"," ").concat(s?"float-right":"float-left"),children:[o.text.split("\n").map((t,o)=>(0,a.jsx)("p",{children:t},o)),o.image&&(0,a.jsx)("img",{src:null==o?void 0:o.image,alt:"",className:"mt-2 rounded-md w-full h-auto"})]}),!s&&(0,a.jsx)("p",{className:"text-xs text-gray-500 ml-2 mr-2",children:P.toLocaleString()})]})},x=s(4086),w=s(6085),components_ChatMessages=()=>{let[t,o]=(0,i.useState)([]),{data:s}=(0,g.Q)();return(0,i.useEffect)(()=>{let t=(0,x.cf)((0,x.JU)(w.db,"chats",s.chatId),t=>{t.exists()&&o(t.data().messages)});return()=>{t()}},[s.chatId]),console.log("messages => ",t),(0,a.jsx)("div",{children:t.map(t=>(0,a.jsx)(components_ChatMessage,{message:t},t.id))})},k=s(9584);let{v4:P}=s(4916);var components_ChatInput=()=>{let t=P(),[o,s]=(0,i.useState)(" "),[R,j]=(0,i.useState)(null),[B,A]=(0,i.useState)(!1),{user:U}=(0,c._)(),{data:D}=(0,g.Q)(),handleSend=async()=>{if(R){let s=(0,k.iH)(w.tO,"chats/"+t),a=(0,k.B0)(s,R);a.on("state_changed",t=>{},t=>{console.error(t)},()=>{(0,k.Jt)(a.snapshot.ref).then(async s=>{await (0,x.r7)((0,x.JU)(w.db,"chats",D.chatId),{messages:(0,x.vr)({id:t,text:o,senderId:U.uid,date:x.EK.now(),image:s})})})})}else await (0,x.r7)((0,x.JU)(w.db,"chats",D.chatId),{messages:(0,x.vr)({id:t,text:o,senderId:U.uid,date:x.EK.now()})});await (0,x.r7)((0,x.JU)(w.db,"userChats",U.uid),{[D.chatId+".lastMessage"]:{text:o},[D.chatId+".date"]:(0,x.Bt)()}),await (0,x.r7)((0,x.JU)(w.db,"userChats",D.Nuser.uid),{[D.chatId+".lastMessage"]:{text:o},[D.chatId+".date"]:(0,x.Bt)()}),s(""),j(null),A(!1)},handleImageChange=t=>{var o;let s=(null===(o=t.target.files)||void 0===o?void 0:o[0])||null;j(s)};return(0,a.jsxs)("div",{className:"bottom-0 left-0 w-full bg-gray-700 flex items-center ",children:[(0,a.jsx)("input",{type:"text",placeholder:"Enter your message...",className:"w-full border border-gray-800 p-4 mr-2 rounded focus:outline-none focus:border-gray-500 text-white bg-gray-800",onChange:t=>s(t.target.value),onKeyDown:t=>{"Enter"===t.key&&handleSend()},value:o}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("label",{htmlFor:"file",className:"cursor-pointer",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-800 hover:text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})})}),(0,a.jsx)("input",{type:"file",style:{display:"none"},id:"file",onChange:t=>{handleImageChange(t),A(!0)}})]}),R&&(0,a.jsx)("div",{className:"mr-2",children:(0,a.jsx)("button",{className:"text-blue-500 underline cursor-pointer",onClick:()=>A(!0)})}),B&&(0,a.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50",children:(0,a.jsxs)("div",{className:"bg-gray-800 p-4 rounded text-white",children:[(0,a.jsx)("p",{className:"justify-center",children:"Image Selected"}),(0,a.jsx)("button",{className:"bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2",onClick:handleSend,children:"Send"}),(0,a.jsx)("button",{className:"bg-gray-700 text-white font-bold py-2 px-4 rounded",onClick:()=>{j(null),A(!1)},children:"Cancel"})]})}),(0,a.jsx)("div",{className:"bg-gray-800 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded cursor-pointer",onClick:handleSend,children:"Send"})]})};let capitalizeFirstLetter=t=>t.replace(/\b\w/g,t=>t.toUpperCase());var components_Chat=()=>{var t;let{data:o}=(0,g.Q)();console.log("data Latest => ",o);let s=(null===(t=o.Nuser)||void 0===t?void 0:t.displayName)||"",i=s?capitalizeFirstLetter(s):"Chat Window";return(0,a.jsxs)("div",{className:"w-596 overflow-hidden flex flex-col bg-gray-200",style:{height:"43rem"},children:[(0,a.jsxs)("div",{className:"p-4 bg-gray-700",children:[(0,a.jsx)("span",{className:"font-semibold text-lg text-white",children:i}),(0,a.jsx)("hr",{className:"border-t border-white mt-2"})]}),(0,a.jsx)("div",{className:"flex-grow overflow-y-auto bg-gray-700",children:(0,a.jsx)(components_ChatMessages,{})}),(0,a.jsx)(components_ChatInput,{})]})}},4031:function(t,o,s){"use strict";s.d(o,{H:function(){return AuthContextProvider},_:function(){return UserAuth}});var a=s(7437),i=s(2265),c=s(3085),g=s(6085),x=s(4086),w=s(9213);let k=(0,i.createContext)(),AuthContextProvider=t=>{let{children:o}=t,[s,P]=(0,i.useState)(null),[R,j]=(0,i.useState)(!1),handleSendEmailLink=async t=>{let o=(0,c.v0)(),s={url:window.location.origin,handleCodeInApp:!0};try{console.log("dropping mail",s),(0,c.oo)(o,t,s).then(()=>{window.localStorage.setItem("emailForSignIn",t),console.log("Email link sent. Check your email to sign in.")}).catch(t=>{t.code,t.message,console.error("Error sending email link:",t)})}catch(t){console.error("Error sending email link - :",t)}};(0,i.useEffect)(()=>{let t=(0,c.Aj)(g.I8,t=>{P(t)});return t},[s]);let saveUserDetails=async t=>{console.log({user:t}),t.displayName||(t.displayName=t.email.split("@")[0]);let o={displayName:t.displayName.toLowerCase(),email:t.email,uid:t.uid},s=(0,x.JU)(g.db,"users",t.uid),a=(0,x.JU)(g.db,"userChats",t.uid);try{let t=await (0,x.QT)(s);t.exists()?console.log("User document already exists. Skipping creation."):(await (0,x.pl)(s,o),console.log("User document written successfully."));let i=await (0,x.QT)(a);i.exists()?console.log("UserChats document already exists. Skipping creation."):(await (0,x.pl)(a,{}),console.log("UserChats document written successfully."))}catch(t){console.error("Error adding document: ",t)}};return(0,a.jsx)(k.Provider,{value:{user:s,isAdmin:R,setIsAdmin:j,googleSignIn:()=>{let t=new c.hJ;(0,c.rh)(g.I8,t).then(t=>{saveUserDetails(t.user)}).catch(t=>{console.error(t)})},logOut:()=>{(0,c.w7)(g.I8)},handleSendEmailLink,saveUserDetails},children:(0,a.jsx)(w.R,{children:o})})},UserAuth=()=>(0,i.useContext)(k)},9213:function(t,o,s){"use strict";s.d(o,{Q:function(){return ChatAuth},R:function(){return ChatContextProvider}});var a=s(7437),i=s(2265);s(3085),s(6085),s(4086),s(2209);var c=s(4031);let g=(0,i.createContext)(),ChatContextProvider=t=>{let{children:o}=t,{user:s}=(0,c._)(),[x,w]=(0,i.useReducer)((t,o)=>"CHANGE_USER"===o.type?{Nuser:o.payload,chatId:s.uid>o.payload.uid?s.uid+o.payload.uid:o.payload.uid+s.uid}:t,{chatId:"null",Nuser:{}});return(0,a.jsx)(g.Provider,{value:{data:x,dispatch:w},children:o})},ChatAuth=()=>(0,i.useContext)(g)},6085:function(t,o,s){"use strict";s.d(o,{I8:function(){return k},db:function(){return P},tO:function(){return R}});var a=s(3085),i=s(994),c=s(5073),g=s(4086),x=s(9584);let w=(0,i.ZF)({apiKey:"AIzaSyBuAHsQuDml9p5BZpM8qhmUh4r893hXzA8",authDomain:"trademate-ccec1.firebaseapp.com",projectId:"trademate-ccec1",storageBucket:"trademate-ccec1.appspot.com",messagingSenderId:"579948238014",appId:"1:579948238014:web:531bb2e2b28cafe6a2baef",measurementId:"G-ZWJ9YVY5T8"});(0,c.Gb)().then(t=>t?(0,c.IH)(w):null);let k=(0,a.v0)(w),P=(0,g.ad)(w),R=(0,x.cF)(w)},4193:function(){},171:function(t,o,s){"use strict";s.d(o,{Ix:function(){return x},Am:function(){return Q}});var a=s(2265),clsx_m=function(){for(var t,o,s=0,a="";s<arguments.length;)(t=arguments[s++])&&(o=function r(t){var o,s,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t){if(Array.isArray(t))for(o=0;o<t.length;o++)t[o]&&(s=r(t[o]))&&(a&&(a+=" "),a+=s);else for(o in t)t[o]&&(a&&(a+=" "),a+=o)}return a}(t))&&(a&&(a+=" "),a+=o);return a};let u=t=>"number"==typeof t&&!isNaN(t),d=t=>"string"==typeof t,p=t=>"function"==typeof t,m=t=>d(t)||p(t)?t:null,f=t=>(0,a.isValidElement)(t)||d(t)||p(t)||u(t);function h(t){let{enter:o,exit:s,appendPosition:i=!1,collapse:c=!0,collapseDuration:g=300}=t;return function(t){let{children:x,position:w,preventExitTransition:k,done:P,nodeRef:R,isIn:j}=t,B=i?`${o}--${w}`:o,A=i?`${s}--${w}`:s,U=(0,a.useRef)(0);return(0,a.useLayoutEffect)(()=>{let t=R.current,o=B.split(" "),n=s=>{s.target===R.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",n),t.removeEventListener("animationcancel",n),0===U.current&&"animationcancel"!==s.type&&t.classList.remove(...o))};t.classList.add(...o),t.addEventListener("animationend",n),t.addEventListener("animationcancel",n)},[]),(0,a.useEffect)(()=>{let t=R.current,e=()=>{t.removeEventListener("animationend",e),c?function(t,o,s){void 0===s&&(s=300);let{scrollHeight:a,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=a+"px",i.transition=`all ${s}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(o,s)})})}(t,P,g):P()};j||(k?e():(U.current=1,t.className+=` ${A}`,t.addEventListener("animationend",e)))},[j]),a.createElement(a.Fragment,null,x)}}function y(t,o){return null!=t?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:o}:{}}let i={list:new Map,emitQueue:new Map,on(t,o){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(o),this},off(t,o){if(o){let s=this.list.get(t).filter(t=>t!==o);return this.list.set(t,s),this}return this.list.delete(t),this},cancelEmit(t){let o=this.emitQueue.get(t);return o&&(o.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(o=>{let s=setTimeout(()=>{o(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(s)})}},T=t=>{let{theme:o,type:s,...i}=t;return a.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===o?"currentColor":`var(--toastify-icon-color-${s})`,...i})},c={info:function(t){return a.createElement(T,{...t},a.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return a.createElement(T,{...t},a.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return a.createElement(T,{...t},a.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return a.createElement(T,{...t},a.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return a.createElement("div",{className:"Toastify__spinner"})}};function b(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function I(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function L(t){let{closeToast:o,theme:s,ariaLabel:i="close"}=t;return a.createElement("button",{className:`Toastify__close-button Toastify__close-button--${s}`,type:"button",onClick:t=>{t.stopPropagation(),o(t)},"aria-label":i},a.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function O(t){let{delay:o,isRunning:s,closeToast:i,type:c="default",hide:g,className:x,style:w,controlledProgress:k,progress:P,rtl:R,isIn:j,theme:B}=t,A=g||k&&0===P,U={...w,animationDuration:`${o}ms`,animationPlayState:s?"running":"paused",opacity:A?0:1};k&&(U.transform=`scaleX(${P})`);let D=clsx_m("Toastify__progress-bar",k?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${B}`,`Toastify__progress-bar--${c}`,{"Toastify__progress-bar--rtl":R}),z=p(x)?x({rtl:R,type:c,defaultClassName:D}):clsx_m(D,x);return a.createElement("div",{role:"progressbar","aria-hidden":A?"true":"false","aria-label":"notification timer",className:z,style:U,[k&&P>=1?"onTransitionEnd":"onAnimationEnd"]:k&&P<1?null:()=>{j&&i()}})}let N=t=>{let{isRunning:o,preventExitTransition:s,toastRef:i,eventHandlers:c}=function(t){let[o,s]=(0,a.useState)(!1),[i,c]=(0,a.useState)(!1),g=(0,a.useRef)(null),x=(0,a.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,w=(0,a.useRef)(t),{autoClose:k,pauseOnHover:P,closeToast:R,onClick:j,closeOnClick:B}=t;function v(o){if(t.draggable){"touchstart"===o.nativeEvent.type&&o.nativeEvent.preventDefault(),x.didMove=!1,document.addEventListener("mousemove",_),document.addEventListener("mouseup",L),document.addEventListener("touchmove",_),document.addEventListener("touchend",L);let s=g.current;x.canCloseOnClick=!0,x.canDrag=!0,x.boundingRect=s.getBoundingClientRect(),s.style.transition="",x.x=b(o.nativeEvent),x.y=I(o.nativeEvent),"x"===t.draggableDirection?(x.start=x.x,x.removalDistance=s.offsetWidth*(t.draggablePercent/100)):(x.start=x.y,x.removalDistance=s.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent/100))}}function T(o){if(x.boundingRect){let{top:s,bottom:a,left:i,right:c}=x.boundingRect;"touchend"!==o.nativeEvent.type&&t.pauseOnHover&&x.x>=i&&x.x<=c&&x.y>=s&&x.y<=a?C():E()}}function E(){s(!0)}function C(){s(!1)}function _(s){let a=g.current;x.canDrag&&a&&(x.didMove=!0,o&&C(),x.x=b(s),x.y=I(s),x.delta="x"===t.draggableDirection?x.x-x.start:x.y-x.start,x.start!==x.x&&(x.canCloseOnClick=!1),a.style.transform=`translate${t.draggableDirection}(${x.delta}px)`,a.style.opacity=""+(1-Math.abs(x.delta/x.removalDistance)))}function L(){document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",L),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",L);let o=g.current;if(x.canDrag&&x.didMove&&o){if(x.canDrag=!1,Math.abs(x.delta)>x.removalDistance)return c(!0),void t.closeToast();o.style.transition="transform 0.2s, opacity 0.2s",o.style.transform=`translate${t.draggableDirection}(0)`,o.style.opacity="1"}}(0,a.useEffect)(()=>{w.current=t}),(0,a.useEffect)(()=>(g.current&&g.current.addEventListener("d",E,{once:!0}),p(t.onOpen)&&t.onOpen((0,a.isValidElement)(t.children)&&t.children.props),()=>{let t=w.current;p(t.onClose)&&t.onClose((0,a.isValidElement)(t.children)&&t.children.props)}),[]),(0,a.useEffect)(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||C(),window.addEventListener("focus",E),window.addEventListener("blur",C)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",C))}),[t.pauseOnFocusLoss]);let A={onMouseDown:v,onTouchStart:v,onMouseUp:T,onTouchEnd:T};return k&&P&&(A.onMouseEnter=C,A.onMouseLeave=E),B&&(A.onClick=t=>{j&&j(t),x.canCloseOnClick&&R()}),{playToast:E,pauseToast:C,isRunning:o,preventExitTransition:i,toastRef:g,eventHandlers:A}}(t),{closeButton:g,children:x,autoClose:w,onClick:k,type:P,hideProgressBar:R,closeToast:j,transition:B,position:A,className:U,style:D,bodyClassName:z,bodyStyle:F,progressClassName:J,progressStyle:$,updateId:V,role:W,progress:G,rtl:K,toastId:Y,deleteToast:Z,isIn:X,isLoading:ee,iconOut:et,closeOnClick:eo,theme:en}=t,es=clsx_m("Toastify__toast",`Toastify__toast-theme--${en}`,`Toastify__toast--${P}`,{"Toastify__toast--rtl":K},{"Toastify__toast--close-on-click":eo}),ea=p(U)?U({rtl:K,position:A,type:P,defaultClassName:es}):clsx_m(es,U),er=!!G||!w,el={closeToast:j,type:P,theme:en},ei=null;return!1===g||(ei=p(g)?g(el):(0,a.isValidElement)(g)?(0,a.cloneElement)(g,el):L(el)),a.createElement(B,{isIn:X,done:Z,position:A,preventExitTransition:s,nodeRef:i},a.createElement("div",{id:Y,onClick:k,className:ea,...c,style:D,ref:i},a.createElement("div",{...X&&{role:W},className:p(z)?z({type:P}):clsx_m("Toastify__toast-body",z),style:F},null!=et&&a.createElement("div",{className:clsx_m("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!ee})},et),a.createElement("div",null,x)),ei,a.createElement(O,{...V&&!er?{key:`pb-${V}`}:{},rtl:K,theme:en,delay:w,isRunning:o,isIn:X,closeToast:j,hide:R,type:P,style:$,className:J,controlledProgress:er,progress:G||0})))},M=function(t,o){return void 0===o&&(o=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:o}},g=h(M("bounce",!0)),x=(h(M("slide",!0)),h(M("zoom")),h(M("flip")),(0,a.forwardRef)((t,o)=>{let{getToastToRender:s,containerRef:g,isToastActive:x}=function(t){let[,o]=(0,a.useReducer)(t=>t+1,0),[s,g]=(0,a.useState)([]),x=(0,a.useRef)(null),w=(0,a.useRef)(new Map).current,T=t=>-1!==s.indexOf(t),k=(0,a.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:T,getToast:t=>w.get(t)}).current;function b(t){let{containerId:o}=t,{limit:s}=k.props;!s||o&&k.containerId!==o||(k.count-=k.queue.length,k.queue=[])}function I(t){g(o=>null==t?[]:o.filter(o=>o!==t))}function _(){let{toastContent:t,toastProps:o,staleId:s}=k.queue.shift();O(t,o,s)}function L(t,s){var g,P;let{delay:R,staleId:j,...B}=s;if(!f(t)||!x.current||k.props.enableMultiContainer&&B.containerId!==k.props.containerId||w.has(B.toastId)&&null==B.updateId)return;let{toastId:A,updateId:U,data:D}=B,{props:z}=k,L=()=>I(A),F=null==U;F&&k.count++;let J={...z,style:z.toastStyle,key:k.toastKey++,...Object.fromEntries(Object.entries(B).filter(t=>{let[o,s]=t;return null!=s})),toastId:A,updateId:U,data:D,closeToast:L,isIn:!1,className:m(B.className||z.toastClassName),bodyClassName:m(B.bodyClassName||z.bodyClassName),progressClassName:m(B.progressClassName||z.progressClassName),autoClose:!B.isLoading&&(g=B.autoClose,P=z.autoClose,!1===g||u(g)&&g>0?g:P),deleteToast(){let t=y(w.get(A),"removed");w.delete(A),i.emit(4,t);let s=k.queue.length;if(k.count=null==A?k.count-k.displayedToast:k.count-1,k.count<0&&(k.count=0),s>0){let t=null==A?k.props.limit:1;if(1===s||1===t)k.displayedToast++,_();else{let o=t>s?s:t;k.displayedToast=o;for(let t=0;t<o;t++)_()}}else o()}};J.iconOut=function(t){let{theme:o,type:s,isLoading:i,icon:g}=t,x=null,w={theme:o,type:s};return!1===g||(p(g)?x=g(w):(0,a.isValidElement)(g)?x=(0,a.cloneElement)(g,w):d(g)||u(g)?x=g:i?x=c.spinner():s in c&&(x=c[s](w))),x}(J),p(B.onOpen)&&(J.onOpen=B.onOpen),p(B.onClose)&&(J.onClose=B.onClose),J.closeButton=z.closeButton,!1===B.closeButton||f(B.closeButton)?J.closeButton=B.closeButton:!0===B.closeButton&&(J.closeButton=!f(z.closeButton)||z.closeButton);let $=t;(0,a.isValidElement)(t)&&!d(t.type)?$=(0,a.cloneElement)(t,{closeToast:L,toastProps:J,data:D}):p(t)&&($=t({closeToast:L,toastProps:J,data:D})),z.limit&&z.limit>0&&k.count>z.limit&&F?k.queue.push({toastContent:$,toastProps:J,staleId:j}):u(R)?setTimeout(()=>{O($,J,j)},R):O($,J,j)}function O(t,o,s){let{toastId:a}=o;s&&w.delete(s);let c={content:t,props:o};w.set(a,c),g(t=>[...t,a].filter(t=>t!==s)),i.emit(4,y(c,null==c.props.updateId?"added":"updated"))}return(0,a.useEffect)(()=>(k.containerId=t.containerId,i.cancelEmit(3).on(0,L).on(1,t=>x.current&&I(t)).on(5,b).emit(2,k),()=>{w.clear(),i.emit(3,k)}),[]),(0,a.useEffect)(()=>{k.props=t,k.isToastActive=T,k.displayedToast=s.length}),{getToastToRender:function(o){let s=new Map,a=Array.from(w.values());return t.newestOnTop&&a.reverse(),a.forEach(t=>{let{position:o}=t.props;s.has(o)||s.set(o,[]),s.get(o).push(t)}),Array.from(s,t=>o(t[0],t[1]))},containerRef:x,isToastActive:T}}(t),{className:w,style:k,rtl:P,containerId:R}=t;return(0,a.useEffect)(()=>{o&&(o.current=g.current)},[]),a.createElement("div",{ref:g,className:"Toastify",id:R},s((t,o)=>{let s=o.length?{...k}:{...k,pointerEvents:"none"};return a.createElement("div",{className:function(t){let o=clsx_m("Toastify__toast-container",`Toastify__toast-container--${t}`,{"Toastify__toast-container--rtl":P});return p(w)?w({position:t,rtl:P,defaultClassName:o}):clsx_m(o,m(w))}(t),style:s,key:`container-${t}`},o.map((t,s)=>{let{content:i,props:c}=t;return a.createElement(N,{...c,isIn:x(c.toastId),style:{...c.style,"--nth":s+1,"--len":o.length},key:`toast-${c.key}`},i)}))}))}));x.displayName="ToastContainer",x.defaultProps={position:"top-right",transition:g,autoClose:5e3,closeButton:L,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let w,k=new Map,P=[],R=1;function H(t,o){return k.size>0?i.emit(0,t,o):P.push({content:t,options:o}),o.toastId}function S(t,o){return{...o,type:o&&o.type||t,toastId:o&&(d(o.toastId)||u(o.toastId))?o.toastId:""+R++}}function q(t){return(o,s)=>H(o,S(t,s))}function Q(t,o){return H(t,S("default",o))}Q.loading=(t,o)=>H(t,S("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...o})),Q.promise=function(t,o,s){let a,{pending:i,error:c,success:g}=o;i&&(a=d(i)?Q.loading(i,s):Q.loading(i.render,{...s,...i}));let x={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(t,o,i)=>{if(null==o)return void Q.dismiss(a);let c={type:t,...x,...s,data:i},g=d(o)?{render:o}:o;return a?Q.update(a,{...c,...g}):Q(g.render,{...c,...g}),i},w=p(t)?t():t;return w.then(t=>l("success",g,t)).catch(t=>l("error",c,t)),w},Q.success=q("success"),Q.info=q("info"),Q.error=q("error"),Q.warning=q("warning"),Q.warn=Q.warning,Q.dark=(t,o)=>H(t,S("default",{theme:"dark",...o})),Q.dismiss=t=>{k.size>0?i.emit(1,t):P=P.filter(o=>null!=t&&o.options.toastId!==t)},Q.clearWaitingQueue=function(t){return void 0===t&&(t={}),i.emit(5,t)},Q.isActive=t=>{let o=!1;return k.forEach(s=>{s.isToastActive&&s.isToastActive(t)&&(o=!0)}),o},Q.update=function(t,o){void 0===o&&(o={}),setTimeout(()=>{let s=function(t,o){let{containerId:s}=o,a=k.get(s||w);return a&&a.getToast(t)}(t,o);if(s){let{props:a,content:i}=s,c={delay:100,...a,...o,toastId:o.toastId||t,updateId:""+R++};c.toastId!==t&&(c.staleId=t);let g=c.render||i;delete c.render,H(g,c)}},0)},Q.done=t=>{Q.update(t,{progress:1})},Q.onChange=t=>(i.on(4,t),()=>{i.off(4,t)}),Q.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Q.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},i.on(2,t=>{w=t.containerId||t,k.set(w,t),P.forEach(t=>{i.emit(0,t.content,t.options)}),P=[]}).on(3,t=>{k.delete(t.containerId||t),0===k.size&&i.off(0).off(1).off(5)})}},function(t){t.O(0,[358,214,564,971,864,744],function(){return t(t.s=6889)}),_N_E=t.O()}]);
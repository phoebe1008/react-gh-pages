(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{226:function(t,e,a){t.exports=a(389)},231:function(t,e,a){},389:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),r=a(3),c=a.n(r),o=(a(231),a(28)),d=a(29),l=a(31),p=a(30),m=a(130),u=a(22),s=a(179),h=a(37),x=a(79),g=a(15),f=a(45),b=a(40),w="BUY_PRODUCT",y="UPDATE_CART",j="DELETE_CART";function v(t){return{type:w,data:t}}function O(t){return{type:y,data:t}}function E(t){return{type:j,data:t}}var C={wrapper:{width:"18%",margin:"0 1% 3% 1%",display:"flex",flexFlow:"wrap","@media (max-width: 1100px)":{width:"23%"},"@media (max-width: 860px)":{width:"31.3%"},"@media (max-width: 580px)":{width:"48%"}},proItem:{display:"flex",width:"100%",height:"auto",padding:0,margin:0,flexDirection:"column"},img:{width:"100%"},origtext:{textDecoration:"line-through",color:"#757575",fontSize:"16px",textAlign:"right",flex:"1 1 30%",display:"flex",justifyContent:"flex-end","@media (max-width: 1023px)":{fontSize:"14px"},"@media (max-width: 414px)":{fontSize:"12px"},"@media (max-width: 375px)":{order:"2",justifyContent:"flex-start"}},selltext:{color:"rgb(234, 47, 121)",fontSize:"18px",flex:"1 1 30%",display:"flex",justifyContent:"flex-end",margin:"10px 0","@media (max-width: 1023px)":{fontSize:"14px"},"@media (max-width: 414px)":{fontSize:"12px"},"@media (max-width: 375px)":{order:"3",margin:"0",justifyContent:"flex-start"}},smalltext:{fontSize:"60%",verticalAlign:"super"},nametext:{fontSize:"16px",color:"#333",flex:"1 1 70%",display:"flex","@media (max-width: 1023px)":{fontSize:"14px"},"@media (max-width: 414px)":{fontSize:"12px"},"@media (max-width: 375px)":{order:"1",flex:"1 1 100%"}},button:{flex:"1 1 50%",display:"flex",margin:"10px 5px 15px","@media (max-width: 375px)":{order:"4",justifyContent:"center"}},protext:{width:"100%",display:"flex",flexFlow:"wrap",padding:"3%"}},S=function(t){Object(l.a)(a,t);var e=Object(p.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"addShopCart",value:function(t){(0,this.props.buyProduct)({name:t.name,accountName:"phoebe",discount:t.distcount,quantity:1,size:"M",image:t.image})}},{key:"render",value:function(){var t=this,e=this.props.product;return i.a.createElement("div",{style:C.wrapper},i.a.createElement("div",{style:C.proItem},i.a.createElement("img",{alt:"\u8f09\u5165\u5931\u6557",src:e.image,style:C.img}),i.a.createElement("div",{style:C.protext},i.a.createElement("div",{style:C.nametext},e.name),i.a.createElement("div",{style:C.origtext},i.a.createElement("span",{style:C.smalltext},"NT$"),e.price),i.a.createElement("div",{style:C.button},i.a.createElement(f.a,{onClick:function(){return t.addShopCart(e)}},"\u52a0\u5165\u8cfc\u7269\u8eca")),i.a.createElement("div",{style:C.selltext},i.a.createElement("span",{style:C.smalltext},"NT$"),e.distcount))))}}]),a}(n.Component),k=Object(h.b)(function(t){return{cartDate:t.ShopCar.cartDate}},function(t){return Object(u.b)({buyProduct:v},t)})(Object(b.a)(S)),D={wrapper:{width:"100%",padding:0,margin:0},title:{width:"100%",display:"flex"},titleText:{width:"30%",textAlign:"center",fontSize:28,lineHeight:"86px","@media (max-width: 860px)":{width:"40%"},"@media (max-width: 640px)":{width:"50%"},"@media (max-width: 450px)":{width:"60%"},"@media (max-width: 414px)":{width:"60%",fontSize:24},"@media (max-width: 321px)":{width:"56%",fontSize:20}},line:{width:"35%",padding:"35px 0","@media (max-width: 860px)":{width:"30%"},"@media (max-width: 640px)":{width:"25%"},"@media (max-width: 450px)":{width:"20%"},"@media (max-width: 321px)":{width:"22%"}},proItem:{display:"flex",width:"100%",height:"auto",flexDirection:"row",padding:0,margin:0,flexFlow:"wrap"}},A=function(t){Object(l.a)(a,t);var e=Object(p.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var t=this.props.productListDate;return i.a.createElement("div",{style:D.wrapper},i.a.createElement("div",{style:D.title},i.a.createElement("div",{style:D.line},i.a.createElement("hr",null)),i.a.createElement("p",{style:D.titleText},"YOU MUST HAVE!"),i.a.createElement("div",{style:D.line},i.a.createElement("hr",null))),i.a.createElement("div",{style:D.proItem},t&&t.map(function(t){return i.a.createElement(k,{key:t.name,product:t})})))}}]),a}(n.Component),z=Object(h.b)(function(t){return{productListDate:t.Product.productDate}},function(t){return Object(u.b)({},t)})(Object(b.a)(A)),B={Header:{width:"100%",display:"flex",justifyContent:"flex-end",alignItems:"flex-end",padding:"2% 3% 10px 1%","@media (max-width: 768px)":{padding:"4% 3% 1%"}},logo:{display:"flex",width:"170px",height:"68px",backgroundImage:"url('https://www.obdesign.com.tw/images/logo.png')",backgroundSize:"cover",marginRight:"20px","@media (max-width: 768px)":{width:"130px",height:"50px",marginRight:"10px"},"@media (max-width: 414px)":{width:"100px",height:"38px",marginRight:"5px"}},shopcar:{position:"relative",display:"flex",fontSize:"18px"},shopcarIcon:{display:"flex",width:"34px",height:"28px",color:"#757575",backgroundImage:"url('https://www.obdesign.com.tw/images/cart-icon.png')",marginRight:"5px",lineHeight:"29px"},ShowCart_TotalCount:{display:"flex",fontSize:"18px",marginBottom:0}},I=function(t){Object(l.a)(a,t);var e=Object(p.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var t=this.props.cartDate.reduce(function(t,e){return t+e.quantity},0);return i.a.createElement("div",{style:B.Header},i.a.createElement(x.b,{to:"/",key:"0"},i.a.createElement("span",{style:B.logo})),i.a.createElement("div",{style:B.shopcar},i.a.createElement(x.b,{to:"/SHOPCAR",key:"1",style:B.shopcarIcon}),i.a.createElement("p",{style:B.ShowCart_TotalCount},"(",t||0,")")))}}]),a}(n.Component),N=Object(h.b)(function(t){return{cartDate:t.ShopCar.cartDate}},function(t){return Object(u.b)({},t)})(Object(b.a)(I)),T=a(135),q=a(136);function _(){var t=Object(T.a)(["\n  width: 100%;\n  height: 600px;\n  padding: 0px;\n  background-size: cover;\n  background-position: top center;\n  animation: "," 20s ease-in-out infinite;\n  @media (max-width: 1440px) {\n    height: 500px;\n  }\n  @media (max-width: 1024px) {\n    height: 400px;\n  }\n  @media (max-width: 930px) {\n    height: 380px;\n  }\n  @media (max-width: 768px) {\n    height: 340px;\n  }\n  @media (max-width: 450px) {\n    height: 200px;\n  }\n  @media (max-width: 375px) {\n    height: 180px;\n  }\n  @media (max-width: 320px) {\n    height: 150px;\n  }   \n"]);return _=function(){return t},t}function P(){var t=Object(T.a)(['\n  0% {\n    background-image: url("https://obcdn4.obdesign.com.tw/images/ObdesignBanner/WOMEN/images/190516-EA2688-1920x820-03.jpg");\n  }\n  40% {\n    background-image: url("https://obcdn4.obdesign.com.tw/images/ObdesignBanner/WOMEN/images/190516-EA2688-1920x820-03.jpg");\n  }\n  50% {\n    background-image: url("https://obcdn4.obdesign.com.tw/images/ObdesignBanner/WOMEN/images/190524-AB6701-1920x820_v1.jpg");\n  }\n  90% {\n    background-image: url("https://obcdn4.obdesign.com.tw/images/ObdesignBanner/WOMEN/images/190524-AB6701-1920x820_v1.jpg");\n  }\n  100% {\n    background-image: url("https://obcdn4.obdesign.com.tw/images/ObdesignBanner/WOMEN/images/190516-EA2688-1920x820-03.jpg");\n  }\n  ']);return P=function(){return t},t}var M=Object(q.b)(P()),R=q.a.div(_(),M),W=function(t){Object(l.a)(a,t);var e=Object(p.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return i.a.createElement(R,null)}}]),a}(n.Component),H=Object(b.a)(W),F=a(391),U=a(390),L={table:{maxWidth:"1400px",width:"90%",margin:"0 auto"},antTablePlaceholder:{marginTop:"10px"},changenumblock:{display:"flex",alignItems:"center",justifyContent:"center"},nobuyicon:{fontSize:"25px",cursor:"pointer",color:"#bdbdbd"},changenumicon:{fontSize:"20px",cursor:"pointer",color:"#f79db4"},numtext:{display:"flex",justifyContent:"flex-end"},img:{maxWidth:"200px",width:"100%"},titletext:{fontSize:"12px",color:"#424242"},nametext:{fontSize:"15px",color:"#424242"}},$=[{title:"\u5546\u54c1\u540d\u7a31",dataIndex:"name",sorter:function(t,e){return t.productName>e.productName}},{title:"\u5546\u54c1\u5716\u7247",dataIndex:"image",align:"center",width:"210px"},{title:"\u55ae\u50f9",dataIndex:"price",align:"center",width:"70px"},{title:"\u6578\u91cf",dataIndex:"prdquantity",align:"center",width:"75px"},{title:"\u5c0f\u8a08",dataIndex:"prdsubtotal",align:"center",width:"85px"},{title:"\u522a\u9664",dataIndex:"prdnobuy",align:"center",width:"65px"}],J=function(t){Object(l.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={visible:!1,currentProduct:{}},t.showModal=function(){t.setState({visible:!0})},t.handleOk=function(e){var a=t.state.currentProduct,n=t.props.deleteCart;t.setState({visible:!1}),n(a)},t.handleCancel=function(e){t.setState({visible:!1})},t}return Object(d.a)(a,[{key:"updateShopCart",value:function(t,e){var a=this.props.updateCart;"min"===e&&1===t.quantity?(this.showModal(t),this.setState({currentProduct:t})):a({idCart:t.idCart,name:t.name,accountName:t.accountName,discount:t.discount,quantity:"add"===e?t.quantity+1:t.quantity-1,size:t.size,image:t.image})}},{key:"deleteShopCart",value:function(t){(0,this.props.deleteCart)(t)}},{key:"render",value:function(){var t=this,e=[],a=0;return this.props.cartDate&&this.props.cartDate.map(function(n,r){var c={},o=parseInt(n.discount)*parseInt(n.quantity);c.key=r,c.name=i.a.createElement("div",null,i.a.createElement("div",{style:L.nametext},n.name)),c.image=i.a.createElement("img",{style:L.img,src:n.image,alt:"\u5716\u7247\u8f09\u5165\u5931\u6557"}),c.price=i.a.createElement("div",null,n.discount),c.prdquantity=i.a.createElement("div",{style:L.changenumblock},i.a.createElement("i",{style:L.changenumicon,className:"far fa-minus-square",onClick:function(){return t.updateShopCart(n,"min")}}),i.a.createElement("div",{style:{margin:"0 5px"}},n.quantity),i.a.createElement("i",{style:L.changenumicon,className:"far fa-plus-square",onClick:function(){return t.updateShopCart(n,"add")}})),c.prdsubtotal=i.a.createElement("div",null,o),c.prdnobuy=i.a.createElement("i",{style:L.nobuyicon,className:"fas fa-trash-alt",onClick:function(){return t.deleteShopCart(n)}}),a+=o,e.push(c)}),i.a.createElement(i.a.Fragment,null,i.a.createElement(F.a,{title:"\u8cbc\u5fc3\u63d0\u793a",visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel},i.a.createElement("p",null,"\u78ba\u5b9a\u8981\u522a\u9664\u6b64\u7522\u54c1\uff1f")),i.a.createElement(U.a,{columns:$,dataSource:e,bordered:!0,scroll:{x:800},footer:function(){return i.a.createElement("div",{style:L.numtext},"\u7e3d\u8a08\uff1a".concat(a))},style:L.table}))}}]),a}(n.Component),V=Object(h.b)(function(t){return{cartDate:t.ShopCar.cartDate}},function(t){return Object(u.b)({updateCart:O,deleteCart:E},t)})(J),Y={productDate:[{image:"https://image.obdesign.com.tw/catalog/products/AB12653/AB12653@1_50.jpg",name:"\u7387\u6027\u7d14\u8272\u7570\u6750\u8cea\u62fc\u63a5\u9577\u7248\u4e0a\u8863",price:"349",distcount:"329"},{image:"https://image.obdesign.com.tw/catalog/products/FA1969/FA1969@1_50.jpg",name:"\u591a\u8272V\u9818\u9577\u8896\u7d30\u91dd\u7e54\u7f69\u886b/\u5c0f\u5916\u5957",price:"399",distcount:"379"},{image:"https://image.obdesign.com.tw/catalog/products/BA2962/BA2962@1_50.jpg",name:"\u9ad8\u542b\u68c9\u8170\u9b06\u7dca\u62bd\u7e69\u4fee\u8eab\u7e2e\u53e3\u54c8\u502b\u8932",price:"419",distcount:"399"},{image:"https://image.obdesign.com.tw/catalog/products/EA2252/EA2252@1_50.jpg",name:"\u67d4\u548c\u8272\u8abf\u958b\u895f\u5782\u589c\u611f\u4e03\u5206\u8896\u7f69\u886b\u5916\u5957",price:"349",distcount:"299"},{image:"https://image.obdesign.com.tw/catalog/products/BA4768/BA4768@1_50.jpg",name:"3D\u7acb\u9ad4\u5851\u578b\u8996\u89ba\u986f\u7626\u7d93\u5178\u725b\u4ed4\u7a84\u7ba1\u8932",price:"549",distcount:"499"},{image:"https://image.obdesign.com.tw/catalog/products/BA4887/BA4887@1_50.jpg",name:"\u6c34\u6d17\u5f48\u529b\u725b\u4ed4\u8170\u9b06\u7dca\u7834\u640d\u7a84\u7ba1\u8932",price:"449",distcount:"429"},{image:"https://image.obdesign.com.tw/catalog/products/AB12780/AB12780@1_50.jpg",name:"\u9ad8\u542b\u68c9\u7d14\u8272\u70ab\u5f69\u7f8e\u5f0f\u82f1\u5b57\u5370\u82b1T\u6064\u4e0a\u8863",price:"299",distcount:"279"}]},G=a(219),K=a(24),Q={cartDate:[]},X=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case w:return t.cartDate.find(function(t){return t.name===e.data.name})?Object(K.a)(Object(K.a)({},t),{},{cartDate:t.cartDate.map(function(t){return t.name===e.data.name?Object(K.a)(Object(K.a)({},t),{},{quantity:t.quantity+1}):Object(K.a)({},t)})}):Object(K.a)(Object(K.a)({},t),{},{cartDate:[].concat(Object(G.a)(t.cartDate),[e.data])});case y:return Object(K.a)(Object(K.a)({},t),{},{cartDate:t.cartDate.map(function(t){return t.name===e.data.name?Object(K.a)({},e.data):Object(K.a)({},t)})});case j:return Object(K.a)(Object(K.a)({},t),{},{cartDate:t.cartDate.filter(function(t){return t.name!==e.data.name})});default:return t}},Z=Object(u.c)({Product:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y;return(arguments.length>1?arguments[1]:void 0).type,t},ShopCar:X}),tt=(a(388),Object(u.d)(Z,Object(u.a)(s.a))),et=function(t){Object(l.a)(a,t);var e=Object(p.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return i.a.createElement(h.a,{store:tt},i.a.createElement(m.a,null,i.a.createElement(x.a,null,i.a.createElement(g.a,{path:"/",render:function(){return i.a.createElement(N,null)}}),i.a.createElement(g.a,{exact:!0,path:"/",render:function(){return i.a.createElement(H,null)}}),i.a.createElement(g.a,{exact:!0,path:"/",render:function(){return i.a.createElement(z,null)}}),i.a.createElement(g.a,{exact:!0,path:"/SHOPCAR",render:function(){return i.a.createElement(V,null)}}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(et,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[226,1,2]]]);
//# sourceMappingURL=main.276587dc.chunk.js.map
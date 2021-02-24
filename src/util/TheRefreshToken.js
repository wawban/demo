var i=0;
var Thetimer=null;
export const timerMethod=(e)=>{
    clearInterval(Thetimer);//停止定时器
    Thetimer = null;//定时器清空
    if(e==1){
        Thetimer=setInterval(()=>{
            
        })
    }
}


// var i = 0;
// let dsq = null;
// import $ from "jquery";
// export const thetimer = (n) => {
//     clearInterval(dsq);
//     dsq = null;
//     if (n == 1) { //登陆和强刷成功过来
//         // 启动定时器
//         dsq = setInterval(() => {
//             if (!sessionStorage.getItem("updatatoken")) {
//                 clearInterval(dsq);
//                 dsq = null;
//                 return;
//             }
//             i = Number(sessionStorage.getItem("numshijian"));
//             i += 1;
//             if (i > 900) {
//                 fuunctoken();
//             } else {
//                 sessionStorage.setItem("numshijian", i);
//             }
//         }, 1000)
//     } else if (n == 2) { //进入登陆页
//         clearInterval(dsq);
//         dsq = null;
//         sessionStorage.setItem("numshijian", 1);
//     }
// };







// var fuunctoken = function () {
//     let objr = {
//         token: sessionStorage.getItem("updatatoken")
//     };
//     $.ajax({
//         type: "post",
//         dataType: "json",
//         contentType: "application/json",
//         url: baseUrl + "/sys/auth/token",
//         headers: {
//             "Token": sessionStorage.getItem("zstoken")
//         },
//         data: JSON.stringify(objr),
//         success: function (res) {
//             if (res) {
//                 console.log("res有值")
//             } else {
//                 console.log("res无值")
//             }
//             if (res.code == 200) {
//                 if (res.data && res.data.token) {
//                     sessionStorage.setItem("zstoken", res.data.token);
//                     sessionStorage.setItem("numshijian", 1);

//                     sessionStorage.setItem("sjxxx", res.data.timeout);
//                     sessionStorage.setItem("hqxxx", new Date());
//                 } else {
//                     setTimeout(() => {
//                         fuunctoken();
//                     }, 3000);
//                     console.log("token无值")
//                 }
//             } else {
//                 window.app.user = undefined;
//                 if (localStorage.tokflagj == 1) {
//                     alert('用户未登录或已过期, 请先登录2');
//                 }
//                 localStorage.setItem("tokflagj", 2);
//                 window.app.$router.replace('/login');
//             }
//         },
//         error: function (err) {

//             setTimeout(() => {
//                 fuunctoken();
//             }, 3000);
//             console.log("请求token失败");
//         }
//     });
//     sessionStorage.setItem("numshijian", 1);
// };
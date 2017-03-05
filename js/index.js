(function(){

            var mask = document.getElementById("mask");
            var box = document.getElementById("box");
            var close_all = document.getElementById("close_all");
            var login = document.getElementById("login");
            login.onclick = function(){
// 一定要选对事件源，这个事件源是 login   这次是打开 登录框
                mask.style.display = "block";
                box.style.display = "block";
            };
            close_all.onclick = function(){
//  一定要选对事件源，这个事件源是  close_all 这次是关闭登录框
                mask.style.display = "none";
                box.style.display = "none";
            };

            var close_topbanner = document.getElementById("close_topbanner");
            var close_banner = document.getElementById("close_banner");
            close_banner.onclick = function(){
                    close_topbanner.style.display = "none";
            };

})();

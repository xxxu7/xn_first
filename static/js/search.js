function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

function sendRequest() {
    let req = new XMLHttpRequest();
    let word = document.getElementsByName('word')[0].value;
    console.log(word);
    let params = new URLSearchParams({ input: word }).toString();
    /*window.location.href = 'http://127.0.0.1:5000/quick-search?' + params;*/
    window.location.href = './search_result_page.html?' + params;

    /*let word = document.getElementsByName('word')[0].value;
    console.log(word);
    let params = new URLSearchParams({ input: word }).toString();
    req.open("GET", 'http://127.0.0.1:5000/quick-search?' + params);
    req.send();*/
}
/***************************************************************************/
    let req = new XMLHttpRequest();
    /*req.onreadystatechange = function () {
        if (req.readyState == 4) {
            var Request = new Object();
            Request = GetRequest();
            var input;
            input = Request['input'];
            let params = new URLSearchParams({ input: input }).toString();
            window.location.href = 'http://127.0.0.1:5000/quick-search?' + params;
       
        }
    }*/
    var Request = new Object();
    Request = GetRequest();
    var input;
    input = Request['input'];
    let params = new URLSearchParams({ input: input }).toString();


    var xhr = new XMLHttpRequest()

                xhr.open("GET", 'http://127.0.0.1:5000/quick-search?' + params);

                xhr.send();

                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        var data = JSON.parse(xhr.responseText);


                        var rows = [];
                        for (var i = 0; i < data.length; i++) {
                            var str = '<tr onclick="location.href=\'./details.html?id='+data[i].id+'\';"><th scope="row">' + (i + 1) + '</th><td><img src="' + data[i].pic_link + '" width="200px"></td><td>' + data[i].name
                                + '</td><td>' + data[i].categories + '</td></tr>'
                            rows.push(str);
                        }

                        var div1 = document.getElementById("div1");
                        div1.innerHTML = '<table class="table table-dark table-striped table-hover" style="width: 95%; height: auto;><thead class="table-secondary"><tr><th scope="col" width="1%">#</th><th scope="col" width="5%">图片</th><th scope="col" width="65%">电影名</th><th scope="col" >类型</th></tr></thead><tbody>'
                            + rows.join("") + '</tbody></table>';
                    }
                }


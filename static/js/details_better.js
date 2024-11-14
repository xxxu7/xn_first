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
    console.log(theRequest)
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
req.onreadystatechange = function () {
    if (req.readyState == 4) {
        var Request = new Object();
        Request = GetRequest();
        console.log(Request)
        var input;
        input = Request['input'];
        let params = new URLSearchParams({ input: input }).toString();
        window.location.href = 'http://127.0.0.1:5000/search?' + params;
   
    }
}
var Request = new Object();
Request = GetRequest();
var id=[];
id.push(parseInt (Request['id']));
const payload={'id':id}
console.log(payload)
const xhr = new XMLHttpRequest()

xhr.open("POST", 'http://127.0.0.1:5000/movie-info');
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(JSON.stringify(payload));
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200 ) {
        var data = JSON.parse(xhr.responseText);

     /*var str = '<tr onclick="location.href=\'./bettersearchoutcome.html?id=' + data[i].id + '\';"><th scope="row">' + (i + 1) + '</th><td><img src="' + data[i].pic_link + '" width="200px"></td><td>' + data[i].name
                + '</td><td>' + data[i].categories + '</td></tr>'*/
        var div2 = document.getElementById("div2");
        div2.innerHTML =
            '<div style = "position: absolute; width: 40%; height: 30%; top: 20%; left: 19%; color:aliceblue;" >'+
        '<h1>' + data[0].name+'<small>(1999)</small></h1>'+
            '<img src="' + data[0].pic_link +'" />' +
            '</div>' +
            '<div style="position: absolute; width: 40%; height: 30%; top: 20%; left: 39%; color:aliceblue;">' +
        '<br><br>' +
        '<h5>豆瓣评分:   ' + data[0].rating + '</h5>' +
        '<br>' +
        '<h5>标签:<small>' + data[0].tags + '</small></h5>' +
            '<br>' +
        '<h5>总评分:<small>' + data[0].total_score +'</small></h5>' +
            '<br>' +
        '<h5>评论数:<small>' + data[0].view_count +'</small></h5>' +
            '<br>' +
            '<h5>剧情简介：</h5>' +
        '<p>' + data[0].summary +'</p>' +
            '</div>';
    }
}


function GetRequest_object() {
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

function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    console.log(url)
    var result=url.substring(1,url.length)
    console.log(result)
    return result;
}
function getImage(url){
	console.log(url);
	// 把现在的图片连接传进来，返回一个不受限制的路径
	if(url !== undefined){
		return url.replace(/^(http)[s]*(\:\/\/)/,'https://images.weserv.nl/?url=');
	}
}



function sendRequest() {
    let req = new XMLHttpRequest();
    let word = document.getElementsByName('word')[0].value;
    console.log(word);
    let params = new URLSearchParams({ input: word }).toString();
    window.location.href = './search_result_page.html?' + params;

}

    rre=[]
    let req = new XMLHttpRequest();
    var key = GetRequest();
    var temp=GetRequest_object()
    const payload={}

    if('director' in temp) 
    {
        var directors=[]
        directors.push(temp['director'])
        payload['directors']=directors
    }
    if('actor' in temp) 
    {
        var actors=[]
        actors.push(temp['actor'])
        payload['actors']=actors
    }
    if('country' in temp) 
    {
        var countries=[]
        countris.push(temp['country'])
        payload['countries'].push(temp['country'])
    }
    if('category' in temp) 
    {
        var categories=[]
        categories.push(temp['category'])
        payload['categories']=categories
    }
    if('start_year' in temp) 
    {
        payload['begin_year']=parseInt(temp['start_year'])
    }
    if('end_year' in temp) 
    {
        payload['end_year']=parseInt(temp['end_year'])
    }
    
    console.log(payload)
            xhr1 = new XMLHttpRequest()
            xhr1.open("POST", 'http://127.0.0.1:5000/better_movie_info');
            xhr1.setRequestHeader("Content-Type", "application/json");

            xhr1.send(JSON.stringify(payload));
            
            xhr1.onreadystatechange = function () {
                if (xhr1.readyState === 4 && xhr1.status === 200) {
                    const data = JSON.parse(xhr1.responseText);
                    console.log(data)
                    
            var rows = [];
            for (var i = 0; i < data.length; i++) {
                var str = '<tr onclick="location.href=\'./bettersearch_details.html?id='+data[i].id+'\';"><th scope="row">' + (i + 1) + '</th><td><img src="' + data[i].pic_link + '" width="200px"></td><td>' + data[i].name
                    + '</td><td>' + data[i].rating + '</td></tr>'
                rows.push(str);
            }

            var div1 = document.getElementById("div1");
            div1.innerHTML = '<table class="table table-dark table-striped table-hover" style="width: 95%; height: auto;><thead class="table-secondary"><tr><th scope="col" width="1%">#</th><th scope="col" width="5%">图片</th><th scope="col" width="65%">电影名</th><th scope="col" >评分</th></tr></thead><tbody>'
                + rows.join("") + '</tbody></table>';
                }
            }

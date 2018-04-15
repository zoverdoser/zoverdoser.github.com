//import query from "../libs/query.js";

module.exports = {
	serverPath:window.webPath?window.webPath:"http://160307fg0004.itg.site",
	jssdkURL:window.webPath?window.webPath+"/wx/jsticket":"http://160307fg0004.intonead.com/wx/jsticket",
	apiPath:"/api/",
	apiVersion:"1.0",
	isTest:false,
	isAllJsonp: false,
	testUser:{
		'FromUserName': 'o2N5jt7vJEHdKQehf03z1JnODRYg',
        'secret':'77e6980cfbde88011ae3b2f16c105410',
        'test':'1',
        'FromOpenid':'orBuIjh7jshxdr-vP_T_uVXajRwA',
	}

}
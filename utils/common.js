function commonTestTest(){
    console.log("common test");
}
function post(url,data,contentType){
    wx.request({
        url: url,
        data: data,
        header: {
            'Content-Type': contentType
        },
        method:"post",
        success: function(res) {
            console.log(res.data);
        },
        fail:function(error){
            console.log(error);
        }
    })
}
module.exports={
    commonTest: commonTestTest
}
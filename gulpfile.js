/**
 * Created by SXDELL on 2017/9/28.
 */
var gulp = require('gulp');
var url = require('url');
var fs = require('fs');
var path = require('path');
var webserver = require('gulp-webserver');
gulp.task('webserver',function(){
    gulp.src('./')
        .pipe(webserver({
            port:8989,
            host:"localhost",
            livereload:true,
            directoryListing:{
                path:'./',
                enable:true
            },
            middleware:function(req,res,next){
                var urlObj = url.parse(req.url,true).search.split('?')[1];
                console.log(urlObj);
                var mockDataFile = path.join(__dirname,'Data', urlObj+".json");
                console.log(mockDataFile);
                fs.exists(mockDataFile,function(exist){
                    if(!exist){
                        res.writeHead(404,{"Content-Type":"text/json;charset=UTF-8"})
                        var data = {
                            isSuccess:false,
                            error:"not File"
                        };
                        res.end(JSON.stringify(data));
                    }else{
                        fs.readFile(mockDataFile,function(err,result){
                            var data = {
                                isSuccess:true
                            };
                            res.writeHead(200,{
                                "Content-Type":"text/json;charset=UTF-8",
                                "Access-Control-Allow-Origin":"http://localhost:63342"
                            });
                            res.end(result.toString());
                        })
                    }
                })
            }
        }))
})
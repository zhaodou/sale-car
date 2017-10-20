/**
 * Created by SXDELL on 2017/10/12.
 */
app.factory('baseServer',function($http,$q){
    return {
        getData:function(type,url){
            var def = $q.defer();
            if(type === "jsonp" || type === "JSONP"){
                $.ajax({
                    url:url,
                    dataType:type,
                    success:function(data){
                        def.resolve(data);
                    },
                    error:function(result){
                        def.reject(result);
                    }
                })
            }else{
                $http({
                    method:'get',
                    url:url,
                }).then(function(data){
                    console.log(data)
                    def.resolve(data);
                },function(err){
                    def.reject(err);
                })
            }
            return def.promise;
        }
    }
})
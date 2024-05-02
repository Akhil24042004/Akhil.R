var arr=[1,2,3,4,5]
var Sum=0
for(var i=0;i<arr.length;i++){
    Sum+=arr[i]
}
console.log(Sum)



var arr=[1,2,3,4,4,5]
var result=[]
for(var i=0;i<arr.length;i++){
    if(arr[i]!=arr[i+1]){
        result+=arr[i]
    }
}
console.log(result)


var a="1,2,3,"
var b="4,5"
var c=a+b
console.log(c)




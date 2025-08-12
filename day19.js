//map function
const f=new Map(
    [
        ["a",500],
        ["b",600],
        ["c",700],
    ]
);
console.log(f.get("a"))
console.log(f.has("d"))
f.delete("c")
console.log(f.has("c"))
console.log (f.has("a"))
//arrow function
let a=5;
let b=15;
let sum=function(x,y){
    return x+y
}
let sum1=(x,y)=>x+y;
let g=(x,y)=>x>y?x:y
console.log(sum(a,b));
console.log(g(a,b));
console.log(sum1(a,b));

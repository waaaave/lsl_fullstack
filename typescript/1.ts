let a:number=1;

const getUserInfo =(user:{name:string,age:number}):string=>{
    return `name: ${user.name} age: ${user.age}`
}
getUserInfo({name:"wave",age:22})
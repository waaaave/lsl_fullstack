// 不严格
type User = {
    name:string;
    age:number;
    occupation:string;
}
const users:User[] = [
    {
        name:"wave",
        age:17,
        occupation:"Chimney sweep"
    },
    {
        name:"刘印",
        age:18,
        occupation:"Astronaut"
    }
]

users.map(user =>`
    
<li>
${user.name}-${user.age}-${user.occupation}
</li>
`
    )
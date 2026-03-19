let fuckData = vueData;

console.log("fuck data: ", fuckData);

app.component('te-le-le', {
    props: ['data', 'ttt'],
    template: `<div><div>Hello from te-le-le </div>
        <div>{{ ttt }}</div>
        <div>{{ JSON.stringify(data) }}</div>
    </div>`
});

app.component('out-app', {
    template: `
    <div>
        <div>{{ email }}</div>
        <div>{{ user.name }} - {{ user.email }}</div>
    </div>
    `,
    data() {
        return {
            email: 'vueData.user.Email',
            user: fuckData?.user?.UserID ? {name: fuckData?.user?.UserName, email: fuckData?.user?.Email } : { name: "xxx", email: 'yyy' }
        }
    },
    created(){
        console.log("created: ", fuckData.user)
    }
})
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
        <div>{{ user.email }}</div>
    </div>
    `,
    data() {
        return {
            email: 'vueData.user.Email',
            user: fuckData.user ?? { name: "xxx", email: 'yyy' }
        }
    }
})
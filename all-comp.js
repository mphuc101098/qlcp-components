app.component('te-le-le', {
    props: ['data', 'ttt'],
    template: `<div><div>Hello from te-le-le </div>
        <div>{{ ttt }}</div>
        <div>{{ JSON.stringify(data) }}</div>
    </div>`
});

app.component('out-app', {
    template: `<div>{{ email }}</div>`,
    data() {
        return {
            email: 'vueData.user.Email'
        }
    }
})
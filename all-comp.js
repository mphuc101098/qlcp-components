app.component('te-le-le', {
  template: `<div>Hello from te-le-le</div>`
});

app.component('out-app', {
    template: `<div>{{ email }}</div>`,
    data(){
        return {
            email: vueData.user.Email
        }
    }
})
app.component('te-le-le', {
  template: `<div>Hello from te-le-le</div>`
});

app.component('out-app', {
    template: `<div>{{JSON.stringify(window.vueData)}}</div>`
})
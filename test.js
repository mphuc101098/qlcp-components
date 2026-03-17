Vue({
  el: '#xxx-test-p',
  template: `<h1>xxx-test-p ne</h1>`,
})

Vue.component('phuc-test', {
  template: `<h1>asdg agdkagdk gasd {{message}}</h1>`,
  data(){
    return {
        message: 'leu lue uê'
    }
  }
});

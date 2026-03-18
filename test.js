console.log("from test");

Vue.component('phuc-test', {
        template: `
    <div style="border:1px solid #ccc;padding:10px">
        <h2>Phuc Test Component from test file</h2>
        <div>{{ message }}</div>
    </div>
  `,
        data: function () {
            return {
                message: "Hello from GitHub component"
            }
        }
    });

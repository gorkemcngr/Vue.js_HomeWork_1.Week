const app = Vue.createApp({
  data() {
      return {
        value: "",
      }
  },
  methods: {
    showAlert(){
      alert("Alert");
    },
    keymonitor(e){
      value=e.target.value;
    },
    keymonitorEnter(e){
      console.log(e.target.value);
      this.value=e.target.value;
    }
  }
});
app.mount("#exercise")

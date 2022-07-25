const app = Vue.createApp({
  data() {
    return {
      setFarbe1: 0,
      setFarbe2: 0,
      setFarbe3: 0,
    };
  },

  methods: {
    changeColor() {
      document.getElementById("box").style.background =
        "rgb(" +
        this.setFarbe1 +
        "," +
        this.setFarbe2 +
        "," +
        this.setFarbe3 +
        ")";
    },
  },
});

app.mount("#app");

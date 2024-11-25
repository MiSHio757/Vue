Vue.createApp({
  data() {
    return {
      title: "Maksymilians Calculator in Vue",
      display: "",
      buttons: [
        "7",
        "8",
        "9",
        "/",
        "4",
        "5",
        "6",
        "*",
        "1",
        "2",
        "3",
        "-",
        "0",
        ".",
        "=",
        "+",
      ],
    };
  },
  methods: {
    handleClick(button) {
      if (button === "=") {
        try {
          this.display = eval(this.display);
        } catch (error) {
          this.display = "Error";
        }
      } else {
        this.display += button;
      }
    },
    clear() {
      this.display = "";
    },
  },
}).mount("#app");

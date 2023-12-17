const app = Vue.createApp({
  data() {
    return {
      rotateX: 0,
      perspective: 100,
      rotateY: 0,
      rotateZ: 0,
    };
  },
  computed: {
    boxStyles() {
      return {
        transform: `perspective(${this.perspective}px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`,
      };
    },
  },
  methods: {
    reset() {
      (this.rotateX = 0),
        (this.perspective = 100),
        (this.rotateY = 0),
        (this.rotateZ = 0);
    },
    async copy() {
      const text = `transform: ${this.boxStyles.transform}`;
      await navigator.clipboard.writeText(text);

      alert("CSS copied to clipboard!");
    },
  },
});

app.mount("#app");

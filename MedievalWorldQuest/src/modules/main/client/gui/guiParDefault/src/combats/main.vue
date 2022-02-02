<template>
  <div>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <div style="margin-top: 500px">
      <div id="playerhealthbar">
        <div id="playerhealthcounter">
          {{ hp }} / {{ maxHp }}
        </div>
      </div>
      <div id="enemiehealthbar">
        <div id="enemiehealthcounter">
          {{ hp }} / {{ maxHp }}
        </div>
      </div>
      <div>
        <button @click="attack">Attaque</button>
        <button>Magie</button>
      </div>
      <div>
        <button>Defense</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Combat",
  inject: ["rpgCurrentPlayer"],

   data() {
        return {
            hp: 0,
            maxHp: 0,
            enemiehealthcounter: document.getElementById("enemiehealthcounter"),
    };
    },
    mounted() {
        this.obsCurrentPlayer = this.rpgCurrentPlayer
            .subscribe(({ object }) => {
                this.hp = object.hp
                this.maxHp = object.param.maxHp
            })
    },
    computed: {
        width() {
            return ((this.hp / this.maxHp) * 100) + '%'
        }
    },
    unmounted() { 
        this.obsCurrentPlayer.unsubscribe()
    },
  methods: {
    attack() {
      this.joueur.attaque(this.enemie);
      this.enemiehealthcounter.style.width =
        (this.enemie.vie / this.enemie.vieMax) * 100 + "%";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  width: 200px;
  height: 100px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#playerhealthbar {
  position: relative;
  height: 30px;
  width: 250px;
  border: black 3px solid;
  border-radius: 3px;
  display: inline-block;
}
#playerhealthcounter {
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: green;
}
#enemiehealthbar {
  text-align: center;
  position: relative;
  height: 30px;
  width: 250px;
  border: black 3px solid;
  border-radius: 3px;
  display: inline-block;
}
#enemiehealthcounter {
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: red;
}
</style>

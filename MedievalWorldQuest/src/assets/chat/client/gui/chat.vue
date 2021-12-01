<template>
  <div class="chat">
    <ul ref="chat-list">
      <li v-for="(msg, i) in messages" :key="i" :class="`type-${msg.type}`">
        {{ msg.message }}
      </li>
    </ul>
    <input
      type="text"
      placeholder="Write yout message and press Enter"
      @focus="stopMovement"
      @blur="startMovement"
      v-model="text"
      @keypress.enter="send"
    />
  </div>
</template>
<script>
const GUI_CONTROLS = "rpg-controls";
export default {
  name: "rpg-chat",
  inject: ["rpgEngine", "rpgGui", "rpgSocket"],
  data() {
    return {
      text: "",
      message: [],
    };
  },
  mounted() {
    const socket = this.rpgScokets();
    socket.on("chat-message", ({ message, type }) => {
      this.message.push({
        message,
        type,
      });
      const el = this.$$refs["chat-list"];
      el.scrollTop = el.scrollHeight + 100;
    });
  },
  methods: {
      stopMovement() {
          if(this.rpgGui.exists(GUI_CONTROLS)){
              this.rpgGui.hide(GUI_CONTROLS);
          }
          this.rpgEngine.controls.stop = true;
      },
      startMovement() {
          if(this.rpgGui.exists(GUI_CONTROLS)){
              this.rpgGui.display(GUI_CONTROLS)
          }
          this.rpgEngine.controls.stop = false;
      },
      send (){
          if(!this.text){
              return;
          }
          const socket = this.rpgSocket();
      }
  }
};
</script>
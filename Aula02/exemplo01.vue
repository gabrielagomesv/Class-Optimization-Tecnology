<template>
  <div>
    <h1>Tarefas</h1>
    <input type="text" v-model="txtNovaTarefa"/>
    <button v-on:click="adiciona" >Click!</button>
    <ul>
      <li v-for="(item, idx) in tarefas" :key = "idx">
        {{item.texto}} <a href="#" v-on:click="deleta(idx)">Done</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    var txtJson = localStorage["tarefas"] || "[]";
    var tarefas = JSON.parse(txtJson);

    return {
      tarefas,
      txtNovaTarefa: ""
    }
  },
  methods: {
    adiciona() {
      this.tarefas.push({texto: this.txtNovaTarefa});
      localStorage["tarefas"] = JSON.stringify(this.tarefas);
      this.txtNovaTarefa = "";
    },
    deleta(indice) {
      this.tarefas.splice(indice, 1);
      localStorage["tarefas"] = JSON.stringify(this.tarefas);
    }
  }
}
</script>

<style>
</style>
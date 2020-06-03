<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a href="#" class="navbar-brand">Idham</a>
      <div class="navbar-nav ml-auto">
        <a href="/blogs" class="nav-item nav-link">Blogs</a>
        <a href="/add" class="nav-item nav-link">Add</a>
      </div>
    </nav>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>

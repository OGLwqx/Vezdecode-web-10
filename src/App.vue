<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="header">
    <div class="container">
      <ul class="nav-links">
        <li>
          <router-link :to="{name: 'products-list'}">Товары</router-link>
        </li>
      </ul>
    </div>
  </header>

  <div class="container">
    <RouterView />
  </div>
</template>

<style>
@import '@/assets/base.scss';
</style>

<style scoped>

.header {
  height: 50px;
  background-color: rgb(37, 37, 37);
  margin-bottom: 10px;
}

.nav-links {
  list-style: none;
  padding: 0;
  display: flex;
  height: 100%;
}

.nav-links li {
  height: 100%;
}

.nav-links a {
  display: block;
  color: var(--vt-c-text-dark-2);
  text-decoration: none;
  height: 100%;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
</style>

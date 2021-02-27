<template>
  <div class="inner-container">
    <h1 class="h1">
      <strong>This is</strong> home
    </h1>
    <ul>
      <li>
        <router-link to="/unit">Units</router-link>
      </li>
      <li>
        <router-link to="/ingredient">Ingredients</router-link>
      </li>
      <li>
        <router-link to="/recipe">Recipe</router-link>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

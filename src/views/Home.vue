<template>
  <div>
    <h1>This is home</h1>

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

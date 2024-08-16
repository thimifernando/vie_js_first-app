<script setup>
import Module from './components/Module.vue';
import Images from './components/Images.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <Module/>
    </div>
  </header>
 
  <div class="image-container">
    <RouterView />
   
  </div>
  <div> <Footer/></div>
 

</template>

<style scoped>
body, html {
  margin: 0; /* Remove default margin */
  padding: 0; /* Remove default padding */
}

.wrapper {
  position: fixed; /* Keep the module fixed */
  top: 15px; /* Adjust as needed */
  left: 50%;
  transform: translateX(-50%);
  z-index: 10; /* Ensure it's in front of the image */
  width: 90%;
  background-color: #fff; /* Ensure background color is applied */
}

.image-container {
  margin-top: 80px; /* Adjust based on the height of the Module + top margin */
  position: relative;
  z-index: 1; /* Ensure the image is behind the module */
}

.custom-navbar {
  width: 80%;
  margin: 0 auto;
  height: 80px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  border-radius: 10px;
  overflow: hidden;
}

.custom-navbar .navbar-brand img {
  max-height: 100%;
}

.custom-navbar .navbar-nav .nav-link {
  line-height: 80px;
  font-size: 1.4em;
}
</style>

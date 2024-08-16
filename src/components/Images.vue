<template>
  
</template>

<script setup>
// No additional JavaScript is needed
</script>

<style scoped>
.image-grid-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px; /* Space around the entire grid */
}

.page-title {
  font-size: 2rem;
  margin-bottom: 20px; /* Space below the title */
  text-align: center;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5 columns */
  gap: 20px; /* Spacing between images */
  max-width: 1200px; /* Adjust this value as needed */
  width: 100%;
  margin: 0 auto; /* Center the grid horizontally */
}

.image-grid-item {
  display: flex;
  justify-content: center;
}

.hover-image {
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: transform 0.9s ease, opacity 0.9s ease;
}

.image-grid-item:hover .hover-image {
  transform: scale(1.1);
  opacity: 0.9;
}

.hover-image {
  width: 100%;
  height: 22rem; /* Adjust height if needed */
}
</style>

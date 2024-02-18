<template>
  <div class="bg-gradient">
    <main class="container mx-auto max-w-5xl">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.bg-gradient {
  background: linear-gradient(220.55deg, #1c0036 0%, #636fa4 100%);
  background-size: 600% 600%;

  -webkit-animation: anime-gradient 12s ease infinite;
  -moz-animation: anime-gradient 12s ease infinite;
  animation: anime-gradient 12s ease infinite;
}

@-webkit-keyframes anime-gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@-moz-keyframes anime-gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes anime-gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>

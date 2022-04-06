<template>
  <div
    class="bg-blur rounded-2xl border border-slate-300/20 bg-slate-500/20 shadow-2xl shadow-cyan-600/30"
  >
    <slot />
  </div>
</template>

<style scoped>
.bg-blur {
  backdrop-filter: blur(8px);
}
</style>

<template>
    <div class="w-full flex flex-row flex-wrap items-center">
        <Menor></Menor>
            <p class="flex flex-row flex-nowrap texto text-azul_escuro mr-5" translate="no">div</p>
            <p class="flex flex-row flex-nowrap texto text-azul_claro" translate="no">class<span  class="texto text-branco">=</span> <span class="texto text-marrom">"{{ props.classe }}"</span></p>
            <p class="hidden sm:flex sm:flex-row sm:flex-nowrap sm:texto sm:text-azul_claro sm:ml-8" translate="no">id<span  class="hidden sm:flex sm:texto sm:text-branco">=</span> <span class="hidden sm:flex sm:texto sm:text-marrom">"{{ props.ident }}"</span></p>
        <Maior></Maior>
    </div>
</template>

<script setup>
    import Menor from './menor.vue'
    import Maior from './maior.vue'

    const props = defineProps(['classe','ident'])

</script>

<style scoped>

</style>
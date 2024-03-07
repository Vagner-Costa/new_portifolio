<template>
    <div class="w-full flex flex-row flex-wrap items-center">
        <Menor></Menor>

        <p class="flex flex-row flex-nowrap texto text-azul_escuro" translate="no">header</p>
        
        <p class="flex flex-row flex-nowrap texto text-azul_claro ml-8" translate="no">class <span class="text-branco">=</span> <span class="text-marrom">"cont_header"</span></p>

        <p class="hidden md:flex md:flex-row md:flex-nowrap  md:texto md:text-azul_claro ml-8" translate="no">id<span  class="hidden md:flex md:texto md:text-branco">=</span> <span class="hidden md:flex md:texto md:text-marrom">"header"</span></p>

        <Maior></Maior>
    </div>
</template>

<script setup>
    import Menor from './menor.vue'
    import Maior from './maior.vue'

</script>

<style lang="scss" scoped>

</style>
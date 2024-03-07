<template>
    <div class="w-full flex flex-row flex-wrap break-all items-center">
        <Menor></Menor>
            <p class="flex flex-row flex-nowrap texto text-azul_escuro mr-5" translate="no">template</p>
            <p class="flex flex-row flex-wrap break-all texto text-roxo ml-8" translate="no">v-for<span  class="texto text-branco">="</span>  <span class="texto text-azul_claro">{{props.un}}</span> <span class="texto text-azul_escuro mx-8">in</span> <span class="texto text-azul_claro">{{props.lista}}</span> <span class="texto text-branco">"</span></p>
        <Maior></Maior>
    </div>
</template>

<script setup>
    import Menor from './menor.vue'
    import Maior from './maior.vue'

    const props = defineProps(['un','lista'])

</script>

<style scoped>

</style>
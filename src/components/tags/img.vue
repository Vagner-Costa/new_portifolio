<template>
    <div class="w-full flex flex-row items-center flex-wrap">
        <Menor></Menor>
            <p class="flex flex-row flex-nowrap texto text-azul_escuro" translate="no">img</p>
            <p class=" hidden md:flex md:flex-row md:flex-nowrap md:texto md:text-azul_claro md:ml-8" v-if="props.classe" translate="no">class <span class="hidden md:flex md:text-branco">=</span> <span class="hidden md:flex md:text-marrom">"{{ props.classe }}"</span></p>
            <p class="flex flex-row flex-nowrap texto text-azul_claro ml-8" v-if="props.source" translate="no">src <span class="text-branco">=</span> <span class="text-marrom">"{{ props.source }}"</span></p>
            <p class=" flex flex-row flex-nowrap texto text-branco ml-8" v-if="props.src" translate="no">: <span class="texto text-azul_claro">src</span>  <span class="texto text-branco">="</span> <span class="texto text-azul_claro">{{ props.src }}</span> <span class="texto text-branco">"</span></p>
            <p class="hidden sm:flex sm:flex-row sm:flex-nowrap sm:texto sm:text-azul_claro ml-8" v-if="props.txt_alt" translate="no">alt <span class="hidden sm:flex sm:text-branco">=</span> <span class="hidden sm:flex sm:text-marrom">"{{ props.txt_alt }}"</span></p>
            <p class=" flex flex-row flex-nowrap texto text-branco ml-8" v-if="props.chave" translate="no">: <span class="texto text-azul_claro">key</span>  <span class="texto text-branco">="</span> <span class="texto text-azul_claro">{{ props.chave }}</span> <span class="texto text-branco">"</span></p>
            <p class="flex flex-row flex-nowrap texto text-cinza_claro mr-2">/</p>
        <Maior></Maior>

    </div>
</template>

<script setup>
    import Menor from './menor.vue'
    import Maior from './maior.vue'

    const props = defineProps(['classe','txt_alt','source','src','chave'])

</script>

<style scoped>

</style>
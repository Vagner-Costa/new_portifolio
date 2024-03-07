<template>
    <div class="w-full flex flex-row flex-wrap items-center">
        <Menor></Menor>
            <p class="texto flex flex-row flex-nowrap text-azul_escuro mr-5" translate="no">a</p>
            <p class="flex flex-row flex-nowrap texto text-azul_claro" v-if="!props.url" translate="no">class<span  class="texto text-branco">=</span> <span class="texto text-marrom">"{{ props.classe }}"</span></p>
            <p class="texto flex flex-row flex-nowrap text-branco ml-8" v-if="props.link" translate="no">:<span class="texto text-azul_claro">href</span> <span  class="texto text-branco">="</span> <span class="texto text-azul_claro">{{ props.link }}</span>"</p>
            <p class="hidden sm:flex sm:flex-row sm:flex-nowrap sm:texto sm:text-branco sm:ml-8" v-if="props.chave" translate="no">:<span class="hidden sm:flex sm:texto sm:text-azul_claro">key</span> <span  class="hidden sm:flex sm:texto sm:text-branco">="</span> <span class="hidden sm:flex sm:texto sm:text-azul_claro">{{ props.chave }}</span>"</p>
            <p class="flex flex-row flex-wrap break-all texto text-azul_claro ml-8" v-if="props.url" translate="no">href <span class="texto texto-branco">=</span> <span class="texto text-marrom">"{{ props.url }}"</span></p>
            <p class="hidden lg:flex lg:flex-row lg:flex-nowrap lg:texto lg:text-azul_claro lg:ml-8" v-if="props.target" translate="no">target <span class="hidden lg:flex lg:texto lg:texto-branco">=</span> <span class="hidden lg:flex lg:texto lg:text-marrom">"{{ props.target }}"</span></p>
        <Maior></Maior>
    </div>
</template>

<script setup>
    import Menor from './menor.vue'
    import Maior from './maior.vue'

    const props = defineProps(['classe','link','chave','url','target'])

</script>

<style scoped>

</style>
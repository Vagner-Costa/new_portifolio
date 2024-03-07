<template>
    <div class="w-full flex flex-row flex-wrap items-center">
        <Menor></Menor>
        
        <p class="flex flex-row flex-nowraptexto text-cinza_claro" translate-no>/</p>
        <p class="flex flex-row flex-nowrap texto text-azul_escuro" translate="no">{{ props.titulo }}</p>

        <Maior></Maior>
    </div>
</template>

<script setup>
    import Menor from '../../components/tags/menor.vue'
    import Maior from '../../components/tags/maior.vue'

    const props = defineProps(['titulo'])

</script>

<style lang="scss" scoped>

</style>
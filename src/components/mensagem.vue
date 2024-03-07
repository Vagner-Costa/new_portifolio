<template>
    <section class="w-full h-screen justify-center 
        items-center px-10 sm:px-10 md:px-30 lg:px-50 xl:px-[150px] flex flex-col" 
    >
        <p class="texto text-branco mb-30 sm:mb-20 text-center" translate="no">
            É um enorme prazer para mim ter você por aqui, muito obrigado por 
            visitar meu site.
        </p>
        <p class="texto text-branco text-center" translate="no">Para continuar navegando em minha página click aqui 
            <button class="underline hover:text-url_clicado underline-offset-4" @click="voltar('Home')">Home</button> ou na barra lateral 
            click no arquivo:
        </p>

        <figure class="h-50 mt-20">
            <img class="object-cover" src="../assets/imagens/btn_home.png" alt="botn_home">
        </figure>
        
         
    </section>
</template>

<script setup>
    const emits  = defineEmits(['voltarHome'])

    const voltar = (payload)=>{
        emits('voltarHome', payload)
    }
</script>

<style scoped>

</style>
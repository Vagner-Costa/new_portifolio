<template>
    <section class="w-full bg-[url('./assets/banner/teclado.jpg')] bg-cover bg-bottom pt-15">
        <!-- Tag abertura header -->
        <div class="w-full flex flex-row">
            <p class="box_numero">1</p>
            <Header class="mgm1"></Header>
        </div>
        
        <!-- Tag image -->
        <div class="w-full flex flex-row">
            <p class="box_numero">2</p>
            <Image class="mgm2" classe="banner" txt_alt="banner" source="../assets/fundo.png"></Image>
        </div>

        <!-- Tag abertura H1 -->
        <div class="w-full flex flex-row mb-30">
            <p class="box_numero">3</p>
            <H1 class="mgm2" classe="titulo" ident="titulo"></H1>
        </div>

            <div class="w-full flex flex-row mb-15 items-end">
                <p class="box_numero">4</p>
                <h1 class="text-branco text-[52px] font-titulo sombra font-semibold
                    leading-[27px] ml-20
                    sm:text-[70px] sm:leading-[40px] sm:ml-[50px]
                    md:text-[85px] md:leading-[50px] md:ml-[60px]
                    lg:text-[90px] lg:leading-[55px] 
                    xl:text-[120px] xl:leading-[80px] xl:ml-[90px]"
                >
                    VAGNER COSTA
                </h1>
                <p class="hidden sm:flex sm:texto sm:text-cinza_claro sm:ml-20 sm:leading-[25px]">&#60; / <span class="texto text-azul_escuro">br</span> &#62;</p>
            </div>
                    
            <div class="w-full flex flex-row mb-15 items-end">
                <p class="box_numero">5</p>
                <h1 class="text-branco text-[52px] font-titulo sombra font-semibold
                    leading-[27px] ml-20
                    sm:text-[70px] sm:leading-[40px] sm:ml-[50px]
                    md:text-[85px] md:leading-[50px] md:ml-[60px]
                    lg:text-[90px] lg:leading-[55px] 
                    xl:text-[120px] xl:leading-[80px] xl:ml-[90px]"
                >
                    DESENVOLVEDOR
                </h1>
                <p class="hidden sm:flex sm:texto sm:text-cinza_claro sm:ml-20 sm:leading-[25px]">&#60; / <span class="texto text-azul_escuro">br</span> &#62;</p>
            </div>

            <div class="w-full flex flex-row mb-15 items-end">
                <p class="box_numero">6</p>
                <h1 class="text-branco text-[52px] font-titulo sombra font-semibold
                    leading-[27px] ml-20
                    sm:text-[70px] sm:leading-[40px] sm:ml-[50px]
                    md:text-[85px] md:leading-[50px] md:ml-[60px]
                    lg:text-[90px] lg:leading-[55px] 
                    xl:text-[120px] xl:leading-[80px] xl:ml-[90px]"
                >
                    FRONT-END
                </h1>
                <p class="hidden sm:flex sm:texto sm:text-cinza_claro sm:ml-20 sm:leading-[25px]">&#60; / <span class="texto text-azul_escuro">br</span> &#62;</p>
            </div>

        <!-- Tag fechamento h1 -->
        <div class="w-full flex flex-row mt-30">
            <p class="box_numero">7</p>
            <fechamento class="mgm2" titulo="h1"></fechamento>
        </div>
        
        <!-- Tag fechamento  header -->
        <div class="w-full flex flex-row">
            <p class="box_numero">8</p>
            <fechamento class="mgm1" titulo="header"></fechamento>
        </div>
    </section>
</template>

<script setup>
    import Header from '../components/tags/header.vue'
    import Image from '../components/tags/img.vue'
    import Fechamento from '../components/tags/fechamento.vue'
    import H1 from './tags/h1.vue'

</script>

<style scoped>

    .sombra{text-shadow:8px 8px 0px #000}

</style>
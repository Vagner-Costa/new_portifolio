<template>
    <section class="w-full pt-5">
        <!-- Tag Section abertura -->
        <div class="w-full flex flex-row">
            <p class="box_numero">38</p>
            <Section class="mgm1" classe="cont_projetos" ident="projetos"></Section>
        </div>

            <!-- Tag h3 subtitulo abertura -->
            <div class="w-full flex flex-row">
                <p class="box_numero">39</p>
                <H3 class="mgm2" classe="subtitulo" ident="txt_projetos"></H3>
            </div>

            <!-- Titulo Projetos -->
            <div class="w-full flex flex-row items-end my-10">  
                <p class="box_numero">40</p>
                <div class="w-full flex flex-row justify-center items-end">
                    <h1 class="subtitulo leading-[40px]">MEUS PROJETOS</h1>
                </div>
            </div>

            <!-- Tag h3 subtitulo fechamento -->
            <div class="w-full flex flex-row">
                <p class="box_numero">41</p>
                <Fechamento class="mgm2" titulo="h3"></Fechamento>
            </div>
            
            <!-- Tag template abertura -->
            <div class="w-full flex flex-row">
                <p class="box_numero">42</p>
                <Template class="mgm2" un="proj" lista="projetos"></Template>
            </div>

            <!-- Tag A abertura -->
            <div class="w-full flex flex-row">
                <p class="box_numero">43</p>
                <A class="mgm3" classe="link" link="proj.link" chave="proj.id"></A>
            </div>

                <!-- Tag image  -->
                <div class="w-full flex flex-row">
                    <p class="box_numero">44</p>
                    <Img class="mgm4" classe="img_tecs" src="proj.file" chave="proj.id"></Img>
                </div>

                <!-- container das imagens links -->
                <div class="w-full flex flex-row flex-wrap justify-center my-20">
                    <div class="w-[145px] h-[145px] m-5 overflow-hidden flex flex-col 
                        justify-start items-center p-5 bg-cinza_escuro  
                        sm:w-[150px] sm:h-[150px] sm:m-10"
                    >
                        <a class="text-[17px] text-branco underline hover:text-url_clicado" href="https://minhas-apostas.netlify.app" target="_blank">minhas-apostas</a>
                        <img class="w-100 h-100 mt-10 rotate-45" src="../assets/imagens/mega2.png" alt="">
                    </div>

                    <div class="w-[145px] h-[145px] m-5 overflow-hidden flex flex-col 
                        justify-start items-center p-5 bg-cinza_escuro
                        sm:w-[150px] sm:h-[150px] sm:m-10"  
                    >
                        <a class="text-[17px] text-branco underline hover:text-url_clicado" href="https://nature-natureza.netlify.app" target="_blank" translate="no">nature-natureza</a>
                        <img class="w-[150px] h-[150px] mt-[-10px]" src="../assets/imagens/nature.png" alt="">
                    </div>

                    <div class="w-[145px] h-[145px] m-5 overflow-hidden flex flex-col 
                        justify-start items-center p-5 bg-cinza_escuro
                        sm:w-[150px] sm:h-[150px] sm:m-10"                        
                    >
                        <a class="text-[17px] text-branco underline hover:text-url_clicado" href="https://consultando-fipe.netlify.app" target="_blank">consultando-fipe</a>
                        <img class="w-100 h-100 mt-5" src="../assets/imagens/carro.png" alt="">
                    </div>
                </div>

            <!-- Tag A fechamento -->
            <div class="w-full flex flex-row">
                <p class="box_numero">45</p>
                <Fechamento class="mgm3" titulo="a"></Fechamento>
            </div>

            <!-- Tag template fechamento -->
            <div class="w-full flex flex-row">
                <p class="box_numero">46</p>
                <Fechamento class="mgm2" titulo="template"></Fechamento>
            </div>

        <!-- Tag section fechamento -->
        <div class="w-full flex flex-row">
            <p class="box_numero">47</p>
            <Fechamento class="mgm1" titulo="section"></Fechamento>
        </div>
    </section>
</template>

<script setup>
    import Section from './tags/section.vue'
    import Fechamento from './tags/fechamento.vue'
    import H3 from './tags/h3.vue'
    import Div from './tags/div.vue'
    import Template from './tags/template.vue'
    import A from './tags/a.vue'
    import Img from './tags/img.vue'
</script>

<style lang="scss" scoped>
    
</style>
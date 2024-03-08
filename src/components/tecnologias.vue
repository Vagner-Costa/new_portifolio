<template>
    <section class="w-full pt-5">
        <!-- Tag Section abertura -->
        <div class="w-full flex flex-row">
            <p class="box_numero">26</p>
            <Section class="mgm1" classe="cont_tecnologias" ident="tecnologias"></Section>
        </div>

            <!-- Tag div abertura -->
            <div class="w-full flex flex-row">
                <p class="box_numero">27</p>
                <Div class="mgm2" classe="box_subtitulo" ident="box_subtitulo"></Div>
            </div>

                <!-- Tag h3 abertura -->
                <div class="w-full flex flex-row">
                    <p class="box_numero">28</p>
                    <H3 class="mgm3" classe="subtitulo" ident="txt_tecnologia"></H3>
                </div>

                    <!-- Titulo SOBRE MIM -->
                    <div class="w-full flex flex-row items-end my-10">
                        <p class="box_numero">29</p>
                        <div class="w-full flex flex-row justify-center items-end">
                            <h1 class="subtitulo leading-[40px]">TECNOLOGIAS</h1>
                        </div>
                    </div>

                <!-- Tag h3 fechamento -->
                <div class="w-full flex flex-row">
                    <p class="box_numero">30</p>
                    <Fechamento class="mgm3" titulo="h3"></Fechamento>
                </div>

            <!-- Tag div fechamento -->
            <div class="w-full flex flex-row">
                <p class="box_numero">31</p>
                <Fechamento class="mgm2" titulo="div"></Fechamento>
            </div>

            <!-- Tag div abertura -->
            <div class="w-full flex flex-row">
                <p class="box_numero">32</p>
                <Div class="mgm2" classe="img_tecno" ident="img_tecnologias"></Div>
            </div>

            <!-- Tag template abertura -->
            <div class="w-full flex flex-row">
                <p class="box_numero">33</p>
                <Template class="mgm3" un="tec" lista="tecnos"></Template>
            </div>

            <!-- Tag image  -->
            <div class="w-full flex flex-row">
                <p class="box_numero">34</p>
                <Img class="mgm4" classe="img_tecs" src="tec.logo" chave="tec.id"></Img>
            </div>

            <!-- Imagens das tecnologias -->
            <div class="w-full flex flex-row flex-wrap justify-center sm:px-20 md:px-20 lg:px-80 xl:px-[110px] 2xl:px-[120px] my-10">
                <div class="box_tecnologias">
                    <p class="text-[16px] text-verde" translate="no">
                        &#60; !-- HTML5 -- &#62;
                    </p>
                    <figure class="w-100 h-100 flex justify-center items-center p-10 bg-cinza_escuro">
                        <img class="object-contain w-full h-full" src="../../src/assets/logos/html5.svg" alt="logo" />
                    </figure>
                </div>

                <div class="box_tecnologias">
                    <p class="text-[16px] text-verde" translate="no">
                        &#60; !-- CSS3 -- &#62;
                    </p>
                    <figure class="w-100 h-100 flex justify-center items-center p-10 bg-cinza_escuro">
                        <img class="object-contain w-full h-full" src="../../src/assets/logos/css3.svg" alt="logo" />
                    </figure>
                </div>

                <div class="box_tecnologias">
                    <p class="text-[16px] text-verde" translate="no">
                        &#60; !-- Javascript -- &#62;
                    </p>
                    <figure class="w-100 h-100 flex justify-center items-center p-10 bg-cinza_escuro">
                        <img class="object-contain w-full h-full" src="../../src/assets/logos/javascript.svg" alt="logo" />
                    </figure>
                </div>

                <div class="box_tecnologias">
                    <p class="text-[16px] text-verde" translate="no">
                        &#60; !-- React -- &#62;
                    </p>
                    <figure class="w-100 h-100 flex justify-center items-center p-10 bg-cinza_escuro">
                        <img class="object-contain w-full h-full" src="../../src/assets/logos/react.svg" alt="logo" />
                    </figure>
                </div>

                <div class="box_tecnologias">
                    <p class="text-[16px] text-verde" translate="no">
                        &#60; !-- Nodejs -- &#62;
                    </p>
                    <figure class="w-100 h-100 flex justify-center items-center p-10 bg-cinza_escuro">
                        <img class="object-contain w-full h-full" src="../../src/assets/logos/node.svg" alt="logo" />
                    </figure>
                </div>

                <div class="box_tecnologias">
                    <p class="text-[16px] text-verde" translate="no">
                        &#60; !-- Docker -- &#62;
                    </p>
                    <figure class="w-100 h-100 flex justify-center items-center p-10 bg-cinza_escuro">
                        <img class="object-contain w-full h-full" src="../../src/assets/logos/docker.svg" alt="logo" />
                    </figure>
                </div>

                <div class="box_tecnologias">
                    <p class="text-[16px] text-verde" translate="no">
                        &#60; !-- MongoDB -- &#62;
                    </p>
                    <figure class="w-100 h-100 flex justify-center items-center p-10 bg-cinza_escuro">
                        <img class="object-contain w-full h-full" src="../../src/assets/logos/mongo.png" alt="logo" />
                    </figure>
                </div>

                <div class="box_tecnologias">
                    <p class="text-[16px] text-verde" translate="no">
                        &#60; !-- Git -- &#62;
                    </p>
                    <figure class="w-100 h-100 flex justify-center items-center p-10 bg-cinza_escuro">
                        <img class="object-contain w-full h-full" src="../../src/assets/logos/git.svg" alt="logo" />
                    </figure>
                </div>

                <div class="box_tecnologias">
                    <p class="text-[16px] text-verde" translate="no">
                        &#60; !-- Github -- &#62;
                    </p>
                    <figure class="w-100 h-100 flex justify-center items-center p-10 bg-cinza_escuro">
                        <img class="object-contain w-full h-full" src="../../src/assets/logos/github.svg" alt="logo" />
                    </figure>
                </div>

                <div class="box_tecnologias">
                    <p class="text-[16px] text-verde" translate="no">
                        &#60; !-- Vuejs -- &#62;
                    </p>
                    <figure class="w-100 h-100 flex justify-center items-center p-10 bg-cinza_escuro">
                        <img class="object-contain w-full h-full" src="../../src/assets/logos/vue.svg" alt="logo" />
                    </figure>
                </div>

                <div class="box_tecnologias">
                    <p class="text-[16px] text-verde" translate="no">
                        &#60; !-- Tailwind -- &#62;
                    </p>
                    <figure class="w-100 h-100 flex justify-center items-center p-10 bg-cinza_escuro">
                        <img class="object-contain w-full h-full" src="../../src/assets/logos/tailwind.svg" alt="logo" />
                    </figure>
                </div>

                <div class="box_tecnologias">
                    <p class="text-[16px] text-verde" translate="no">
                        &#60; !-- Axios -- &#62;
                    </p>
                    <figure class="w-100 h-100 flex justify-center items-center p-10 bg-cinza_escuro">
                        <img class="object-contain w-full h-full" src="../../src/assets/logos/axios.svg" alt="logo" />
                    </figure>
                </div>                
            </div>

            <!-- Tag template fechamento -->
            <div class="w-full flex flex-row">
                <p class="box_numero">35</p>
                <Fechamento class="mgm3" titulo="template"></Fechamento>
            </div>

            <!-- Tag div fechamento -->
            <div class="w-full flex flex-row">
                <p class="box_numero">36</p>
                <Fechamento class="mgm2" titulo="div"></Fechamento>
            </div>

        <!-- Tag section fechamento -->
        <div class="w-full flex flex-row">
            <p class="box_numero">37</p>
            <Fechamento class="mgm1" titulo="section"></Fechamento>
        </div>
    </section>
</template>

<script setup>
    import Section from './tags/section.vue'
    import Fechamento from './tags/fechamento.vue'
    import Div from './tags/div.vue'
    import H3 from './tags/h3.vue'
    import Template from './tags/template.vue'
    import Img from './tags/img.vue'
</script>

<style scoped>

</style>
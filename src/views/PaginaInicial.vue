<template>
    <div class="container">
        <div id="log"></div>
        <div class="row justify-content-md-center ">
            <div class="col-12 col-md-6 col-lg-6 align-self-center offset-md-2">
                <svg width="100%" height="100%" viewBox="100 400 400" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                    <path id="path">
                        <animate attributeName="d" from="m0,110 h0" to="m0,110 h1100" dur="7.8s" begin="0s"
                            repeatCount="indefinite" />
                    </path>
                    <text font-size="36" font-family="Montserrat" fill='#ffffff'>
                        <textPath xlink:href="#path">Meu Nome é Mikael Vitor
                        </textPath>
                    </text>
                </svg>
            </div>
            <div class="col-6 col-lg-2 align-self-center d-none d-sm-none d-md-block mt-5">
                <router-link class="btn btn-line float-start " to="/Home/Projetos" active-class="ativo"
                    exact-active-class="ativado">
                    <i class="bi bi-arrow-right"></i></router-link>
            </div>
            <div class="col-12 col-lg-2 align-self-center  d-sm-block d-md-none mt-5">
                <router-link class="btn btn-line float-end " to="/Home/Projetos" active-class="ativo"
                    exact-active-class="ativado">
                    <i class="bi bi-arrow-right"></i></router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "PaginaInicial"
  
}
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat:700);

.container {
    margin-top: 200px;
   
}

.btn-line {
    border: 2px solid #ffffff;
    color: #ffffff;
}

.btn-line:hover {
    border: 2px solid #000000;
    color: #000000;
}
</style>
<template>
    <div>
    <div class="container-fluid rodape-color border-footer">
     
            <div class="row p-3">
                <div class="col text-center">
                    <img src="@/assets/logo-portifolio.png" alt="Logo" width="70" height="70">
                </div>
                <div class="col text-center align-self-center">
                    <p class="text-white fs-5"> &copy;Mikael Vitor Santos de Souza Moraes</p>
                </div>
                <div class="col text-center align-self-center">
                    <P class="text-white fs-5">@2023</P>
                </div>
            </div>
 
    </div>
    </div>
</template>
<script>
export default{
    name: 'rodapeHome'
}
</script>
<style>
.rodape-color {
    background-color: rgb(27, 27, 27);
}
.border-footer {
    border-top: dashed 2px #777777;
}
</style>
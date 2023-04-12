<template>
    <div class="row p-5 ">
        <div class="col-12">
            <h2 class="text-white contato"><strong>Tem alguma proposta ou sujestão?</strong>
            </h2>
        </div>
        <div class="col-12 col-sm-12 col-lg-6 text-center mt-5">
            <form target="_blank" action="https://formsubmit.co/mikael.vitor5@gmail.com" method="POST">
                <div class="row g-3">
                    <div class="col-md-12">
                        <label for="name" class="form-label text-white float-start">Nome</label>
                        <input type="text" name="nome" class="form-control bg-input" required>
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label text-white float-start">E-mail</label>
                        <input type="email" name="E-mail" class="form-control bg-input" required>
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label text-white float-start">Telefone/Whatsapp</label>
                        <input type="text" name="telefone" class="form-control bg-input" id="inputEmail4">
                    </div>
                    <div class="col-12">
                        <label for="inputAddress2" class="form-label text-white float-start">Mensagem</label>
                        <textarea class="form-control bg-input" name="menssagem" cols="30" rows="10"></textarea>
                    </div>
                    <input type="hidden" name="_captcha" value="false">
                    <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html">
                    <div class="col-12">
                        <button type="submit" class="btn btn-secondary float-start">Enviar</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="col-12 col-sm-12 col-lg-6 text-center align-self-center mt-5">

            <div class="row">

                <div class="col-12 col-md-4 mt-5">

                    <a href="https://www.linkedin.com/in/mikael-moraes-4344051b1/" target="_blank"
                        class="mx-5 icon-link icon  card-icon "> <i class="bi bi-linkedin"></i>
                    </a>
                    <p class="text-white mt-3"> <strong>Linkedin</strong> </p>
                    <p class="text-white  "> Mikael Moraes</p>
                </div>

                <div class="col-12 col-md-4 mt-5">
                    <a href="https://api.whatsapp.com/send?phone=5521990842254&text=Ol%C3%A1,%20vim%20pelo%20seu%20portfolio,%20gostaria%20de%20falar%20com%20voc%C3%AA%20sobre%20uma%20proposta!!"
                        target="_blank" class="mx-5 icon-what icon card-icon "> <i class="bi bi-whatsapp"></i>
                    </a>
                    <p class="text-white mt-3"> <strong>Whatsapp</strong> </p>
                    <p class="text-white"> (21) 9 9084-2254</p>

                </div>
                <div class="col-12 col-md-4 mt-5 ">
                    <a href="https://github.com/MikaelMoraes" target="_blank" class="mx-5 icon-git icon card-icon "> <i
                            class="bi bi-github"></i>
                    </a>
                    <p class="text-white mt-3 "> <strong>Github</strong> </p>
                    <p class="text-white ">@MikaelMoraes</p>
                </div>

            </div>



        </div>
    </div>
</template>
<script>
export default {
    name: 'ContatoInicial'
}
</script>
<style scoped>
.icon-what {
    color: #38b849;
}

.icon-git {
    color: #7a31aa;
}

.icon-link {
    color: #3962bd;
}

.bg-input {
    background-color: #303030;
    color: #ffffff;
    border: 2px #ffffff dashed;

}

.contato {
    font-size: 40px;
}

.icon {
    font-size: 40px;
}

.card-icon {
    background-color: #1d1d1d;
    padding: 20px 20px 20px 20px;
    margin: auto;
    border-radius: 20px;
    box-shadow: 5px 5px 10px rgba(24, 24, 24, 0.575);
}
</style>
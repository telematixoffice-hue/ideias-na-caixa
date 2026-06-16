/* ==========================
   MENU MOBILE
========================== */

const menuMobile = document.getElementById("menu-mobile");
const menu = document.getElementById("menu");

if (menuMobile && menu) {
    menuMobile.addEventListener("click", () => {
        menu.classList.toggle("ativo");
    });
}


/* ==========================
   FORMULÁRIO WHATSAPP
========================== */

const formulario = document.getElementById("form-orcamento");

if (formulario) {

    formulario.addEventListener("submit", function (e) {

        e.preventDefault();

        const empresa = document.getElementById("empresa").value;
        const responsavel = document.getElementById("responsavel").value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;
        const kit = document.getElementById("kit").value;
        const quantidade = document.getElementById("quantidade").value;
        const observacoes = document.getElementById("observacoes").value;

        const mensagem = `Olá, gostaria de solicitar um orçamento para kits corporativos.

Empresa: ${empresa}

Responsável: ${responsavel}

E-mail: ${email}

Telefone: ${telefone}

Kit: ${kit}

Quantidade: ${quantidade}

Observações: ${observacoes}`;

        const numero = "553192352700";

        const url =
            `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, "_blank");

    });

}


/* ==========================
   SCROLL SUAVE
========================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const destino = document.querySelector(
            this.getAttribute("href")
        );

        if (destino) {

            e.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* ==========================
   ANO AUTOMÁTICO
========================== */

const ano = document.getElementById("ano");

if (ano) {
    ano.textContent = new Date().getFullYear();
}


/* ==========================
   SLIDER
========================== */

document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    if (slides.length === 0) return;

    let currentSlide = 0;
    let intervalo;

    function showSlide(index) {

        slides.forEach(slide => {
            slide.classList.remove("active");
        });

        dots.forEach(dot => {
            dot.classList.remove("active");
        });

        slides[index].classList.add("active");

        if (dots[index]) {
            dots[index].classList.add("active");
        }

    }

    function nextSlide() {

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);

    }

    function prevSlide() {

        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        showSlide(currentSlide);

    }

    function iniciarSlider() {

        intervalo = setInterval(() => {

            nextSlide();

        }, 5000);

    }

    function reiniciarSlider() {

        clearInterval(intervalo);

        iniciarSlider();

    }


    if (nextBtn) {

        nextBtn.addEventListener("click", () => {

            nextSlide();

            reiniciarSlider();

        });

    }


    if (prevBtn) {

        prevBtn.addEventListener("click", () => {

            prevSlide();

            reiniciarSlider();

        });

    }


    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            currentSlide = index;

            showSlide(currentSlide);

            reiniciarSlider();

        });

    });


    showSlide(0);

    iniciarSlider();

});
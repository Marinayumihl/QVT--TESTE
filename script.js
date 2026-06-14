// ===========================
// NAVBAR AO ROLAR
// ===========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


// ===========================
// ANIMAÇÃO DAS ESTATÍSTICAS
// ===========================

const stats = document.querySelectorAll(".stat h2");

function animateValue(element, start, end, duration){

    let startTime = null;

    function animation(currentTime){

        if(!startTime)
            startTime = currentTime;

        const progress =
        Math.min(
            (currentTime - startTime) / duration,
            1
        );

        const value =
        Math.floor(
            progress * (end - start) + start
        );

        element.textContent = value;

        if(progress < 1){

            requestAnimationFrame(animation);

        }

    }

    requestAnimationFrame(animation);

}

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            stats.forEach(stat => {

                const original =
                stat.textContent;

                const number =
                parseInt(
                    original.replace(/\D/g,'')
                );

                if(number){

                    animateValue(
                        stat,
                        0,
                        number,
                        2000
                    );

                }

            });

        }

    });

});

document
.querySelector(".stats")
&& observer.observe(
document.querySelector(".stats")
);


// ===========================
// SCROLL SUAVE BOTÕES
// ===========================

document
.querySelectorAll('a[href^="#"]')
.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});


// ===========================
// ANIMAÇÃO DOS CARDS
// ===========================

const cards =
document.querySelectorAll(".card");

const cardObserver =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

cards.forEach(card => {

    card.classList.add("hidden");

    cardObserver.observe(card);

});


// ===========================
// BOTÃO DE CONTATO
// ===========================

const ctaButton =
document.querySelector(".cta .btn-primary");

if(ctaButton){

    ctaButton.addEventListener("click", () => {

        alert(
        "Obrigado pelo interesse! Nossa equipe entrará em contato em breve."
        );

    });

}

console.log(
"AtivaRH carregada com sucesso!"
);
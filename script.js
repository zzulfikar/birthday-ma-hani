function enterMagic() {

    const opening = document.getElementById("opening");

    createMagicParticles();

    opening.classList.add("magic-out");

}

function createMagicParticles() {

    const opening = document.getElementById("opening");

    for (let i = 0; i < 40; i++) {

        const particle = document.createElement("span");

        particle.classList.add("magic-particle");

        particle.style.left = "50%";
        particle.style.top = "50%";

        const angle = Math.random() * Math.PI * 2;

        const distance =
            Math.random() * 300 + 100;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

        particle.style.setProperty(
            "--x",
            `${x}px`
        );

        particle.style.setProperty(
            "--y",
            `${y}px`
        );

        particle.style.animationDelay =
            `${Math.random() * 0.2}s`;

        opening.appendChild(particle);

    }

}


/* =========================
   MEMORY SCROLL ANIMATION
========================= */

const memoryCards =
    document.querySelectorAll(".memory-card");


const memoryObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "show"
                        );

                    }

                }
            );

        },

        {
            threshold: 0.2
        }

    );


memoryCards.forEach(
    (card) => {

        memoryObserver.observe(card);

    }
);

/* =========================
   LOVE LETTER
========================= */

function openLetter() {

    const envelope =
        document.getElementById("envelope");

    const letter =
        document.getElementById("loveLetter");

    const button =
        document.querySelector(".letter-button");


    envelope.classList.add("open");

    button.style.opacity = "0";

    button.style.pointerEvents = "none";


    setTimeout(() => {

        letter.classList.add("show");

    }, 700);

}

/* =========================
   STORY TIMELINE ANIMATION
========================= */

const timelineItems =
    document.querySelectorAll(".timeline-item");


const timelineObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "show"
                        );

                    }

                }
            );

        },

        {
            threshold: 0.2
        }

    );


timelineItems.forEach(
    (item) => {

        timelineObserver.observe(item);

    }
);

/* =========================
   MAGIC MOUSE EFFECT
========================= */

document.addEventListener(
    "mousemove",
    (event) => {

        const stars =
            document.querySelectorAll(
                ".magic-stars span"
            );


        const x =
            (event.clientX / window.innerWidth - 0.5);


        const y =
            (event.clientY / window.innerHeight - 0.5);


        stars.forEach(
            (star, index) => {

                const speed =
                    (index + 1) * 2;


                star.style.marginLeft =
                    `${x * speed}px`;


                star.style.marginTop =
                    `${y * speed}px`;

            }
        );

    }
);

function enterMagic() {

    const opening =
        document.querySelector(".opening");

    const music =
        document.getElementById(
            "backgroundMusic"
        );


    opening.classList.add("magic-out");


    if (music) {

        music.volume = 0.35;

        music.play().catch(
            (error) => {

                console.log(
                    "Music could not start:",
                    error
                );

            }
        );

    }

}

/* =========================
   MUSIC CONTROL
========================= */

const music =
    document.getElementById(
        "backgroundMusic"
    );

const musicToggle =
    document.getElementById(
        "musicToggle"
    );

const musicStatus =
    document.getElementById(
        "musicStatus"
    );


if (musicToggle) {

    musicToggle.addEventListener(
        "click",
        () => {

            if (music.paused) {

                music.play();

                musicToggle.textContent =
                    "♪";

                musicStatus.textContent =
                    "Music On";

            } else {

                music.pause();

                musicToggle.textContent =
                    "♫";

                musicStatus.textContent =
                    "Music Off";

            }

        }
    );

}

/* =========================================
   INTERACTIVE BIRTHDAY LETTER
========================================= */

const letterWrapper =
    document.querySelector(".letter-wrapper");

const letterClosed =
    document.querySelector("#letterClosed");


if (letterWrapper && letterClosed) {

    letterClosed.addEventListener("click", () => {

        letterWrapper.classList.add("opened");

    });

}


/* =========================================
   INTERACTIVE BIRTHDAY LETTER
========================================= */

const letterWrapper = document.querySelector(".letter-wrapper");
const letterClosed = document.querySelector("#letterClosed");

if (letterWrapper && letterClosed) {

    letterClosed.addEventListener("click", () => {

        letterWrapper.classList.add("opened");

    });

}

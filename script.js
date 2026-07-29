// =========================
// ELEMENT
// =========================


const music =
document.querySelector("#music");


const memory =
document.querySelector(".memory");


const ribbon =
document.querySelector(".ribbon");


const container =
document.querySelector(".container");


const paper =
document.querySelector(".paper");


const paperTitle =
document.querySelector(
    ".letter-header h1"
);


const paperContent =
document.querySelector(
    ".letter-content"
);



// =========================
// DATA SURAT
// =========================


const letterData = {


    title: "Please Read This",


    content: `

        <p>
            MWHEHWEHHEHWHEHEHHEHHEHHEHHEH
        </p>


        <p>
        MWEHEHHEEHEHHEHEHHHEHEHEHE
        </p>
        <p>
        MWEHEHHEEHEHHEHEHHHEHEHEHE
        </p>
        <p>
        MWEHEHHEEHEHHEHEHHHEHEHEHE
        </p>
        <p>
        MWEHEHHEEHEHHEHEHHHEHEHEHE
        </p>
        <p>
        MWEHEHHEEHEHHEHEHHHEHEHEHE
        </p>
        <p>
        MWEHEHHEEHEHHEHEHHHEHEHEHE
        </p>

    `

};




// =========================
// DATA FOTO BUNGA
// =========================


const flowers = [

    "foto/1.png",
    "foto/2.png",
    "foto/3.png",
    "foto/4.png",
    "foto/5.png",
    "foto/6.png",
    "foto/7.png",
    "foto/8.png",
    "foto/9.png",
    "foto/10.png",
    "foto/11.png",
    "foto/12.png",

];


let flowerTimer;





// =========================
// MASUKKAN ISI SURAT
// =========================


paperTitle.textContent =
letterData.title;



paperContent.innerHTML =
letterData.content;





// =========================
// BUKA AMPLOP
// =========================


ribbon.addEventListener(
    "click",
    () => {


        // sembunyikan pita

        ribbon.style.display =
        "none";



        // aktifkan animasi buka

        container.classList.add(
            "open"
        );


    }
);





// =========================
// KLIK KERTAS
// =========================

paper.addEventListener(
    "click",
    () => {


        // =========================
        // KERTAS FULL
        // =========================

        container.classList.add(
            "show-paper"
        );



        // =========================
        // MUSIC
        // =========================

        music.play();



        // =========================
        // TUNGGU PAPER TERBUKA
        // =========================

        setTimeout(
            () => {


                showFlowers();



                // =========================
                // STOP BUNGA MUNCUL
                // =========================

                setTimeout(
                    () => {


                        clearInterval(
                            flowerTimer
                        );


                    },
                    3000
                );



                // =========================
                // HILANGKAN BUNGA
                // =========================

                setTimeout(
                    () => {


                        hideFlowers();


                    },
                    6000
                );



            },
            1000
        );


    }
);







// =========================
// BUNGA MUNCUL DARI TENGAH
// =========================

function showFlowers() {


    memory.classList.add(
        "show"
    );


    flowerTimer =
    setInterval(
        () => {


            const img =
            document.createElement(
                "img"
            );



            // =========================
            // FOTO RANDOM
            // =========================

            img.src =
            flowers[
                Math.floor(
                    Math.random()
                    *
                    flowers.length
                )
            ];



            // =========================
            // UKURAN BUNGA
            // =========================

            const size =
            Math.floor(
                Math.random()
                *
                400
            ) + 70;



            img.style.width =
            size + "px";



            // =========================
            // TITIK AWAL
            // SEMUA DARI TENGAH
            // =========================

            img.style.left =
            "50%";


            img.style.top =
            "50%";



            img.style.opacity =
            "0";



            img.style.transform =
            `
            translate(-50%, -50%)
            scale(0)
            `;



            memory.appendChild(
                img
            );



            // =========================
            // ARAH BUNGA
            // =========================

            const angle =
            Math.random()
            *
            Math.PI
            *
            2;



            let distance;



            // =========================
            // 80% MENUTUP PAPER
            // 20% MENYEBAR JAUH
            // =========================

            if(
                Math.random() < 0.8
            ){


                distance =
                Math.random()
                *
                180
                +
                40;


            }else{


                distance =
                Math.random()
                *
                400
                +
                200;


            }

            



            const x =
            Math.cos(angle)
            *
            distance;



            const y =
            Math.sin(angle)
            *
            distance;



            // =========================
            // ANIMASI KELUAR
            // =========================

            requestAnimationFrame(
                () => {


                    img.style.transition =
                    "0.8s ease";



                    img.style.opacity =
                    "1";



                    img.style.transform =
                    `
                    translate(
                    calc(-50% + ${x}px),
                    calc(-50% + ${y}px)
                    )
                    scale(1)
                    `;


                }
            );



        },


        // jumlah bunga muncul
        60

    );


}
// =========================
// HILANGKAN BUNGA
// MENGECIL + FADE OUT
// =========================

function hideFlowers() {


    const allFlowers =
    document.querySelectorAll(
        ".memory img"
    );



    allFlowers.forEach(
        (img, index) => {


            setTimeout(
                () => {


                    // animasi mengecil + transparan

                    img.style.transition =
                    "0.8s ease";


                    img.style.opacity =
                    "0";


                    img.style.transform +=
                    " scale(0)";



                    // hapus setelah animasi selesai

                    setTimeout(
                        () => {

                            img.remove();

                        },
                        800
                    );


                },


                // jeda antar bunga hilang

                index * 80

            );


        }
    );



    // hilangkan background memory

    setTimeout(
        () => {


            memory.classList.remove(
                "show"
            );


        },

        allFlowers.length * 80 + 1000

    );


}
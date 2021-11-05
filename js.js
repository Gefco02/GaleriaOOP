$(function () {
    //példányosítjuk a kártyát. 
    const szuloElem = $("article");
    const szuloElemNagy = $("section");

    const sablonElem = $(".kep");
    const galeria = [];
    var kepIndex = 0;
    const kepAdat = [
        {
            cim: "1. kép címe",
            eleresiUt: "kepek/kep1.jpg",
            leiras: "1. kép leírása"

        },
        {
            cim: "2. kép címe",
            eleresiUt: "kepek/kep2.jpg",
            leiras: "2. kép leírása"

        },
        {
            cim: "3. kép címe",
            eleresiUt: "kepek/kep3.jpg",
            leiras: "3. kép leírása"

        }
    ];


    for (let index = 0; index < kepAdat.length; index++) {
        let aktKep = sablonElem.clone().appendTo(szuloElem);
        const kep = new Kep(aktKep, kepAdat[index], index);
        galeria.push(kep);
    }

    sablonElem.remove();

    const nkep = $("#kep2");
    let aktKep = sablonElem.clone().appendTo(nkep);
    const kep = new Kep(aktKep, kepAdat[0], 0);




    $(window).on("kepKattintas", (event) => {
        kep.setAdat(event.detail);

        console.log(event.detail.id);
        kepIndex = event.detail.id;
        //kepIndex=kep.getId();
    });



    $("#elore").click(function () {
        if (kepIndex < 2) {
            kepIndex = kepIndex + 1;
            kep.setAdat(kepAdat[kepIndex]);
        } else {
            kepIndex = 0;
            kep.setAdat(kepAdat[kepIndex]);
        }

        console.log(kepIndex);

    });
    $("#hatra").click(function () {
        if (kepIndex > 0) {
            kepIndex = kepIndex - 1;
            kep.setAdat(kepAdat[kepIndex]);
        } else {
            kepIndex = 2;
            kep.setAdat(kepAdat[kepIndex]);
        }

        console.log(kepIndex);

    });





});
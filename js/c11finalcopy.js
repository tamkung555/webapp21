 var data = {
        spec_ID: " Rc-1531-1234",
        Material: "1050010050",
        descrip: "50 kVA, three-phase transformer, permanently sealed and completely oil filled system (without gas cushion) type, withstand short-circuit, 22,000-416/240V, symbol Dyn11.",
        price_unit: "123",
        volume:"100",
        date: "05/04/2019"
    };
    console.log(data.spec_ID );
    document.getElementById("specidrt153112").innerHTML = "Material ID :" + data.spec_ID;
    document.getElementById("materialid105001").innerHTML = "Spec ID :" + data.Material;
    document.getElementById("spec_dep").innerHTML = data.descrip;
    document.getElementById("priceunit").innerHTML = data.price_unit;
    document.getElementById("minvol").innerHTML = data.volume;
    document.getElementById("datestamp").innerHTML = data.date;
    document.getElementById("vol").innerHTML = data.volume;

    




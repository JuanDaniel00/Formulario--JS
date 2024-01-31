function enviar() {
    let genero = ""
    if (document.getElementById("genderM").checked) {
        genero = "Masculino"
    } else {
        genero = "Femenino"
    }

    let datos = {}
    datos = { name: document.getElementById("name").value, lastname: document.getElementById("lastName").value, genero: genero, numeroTel: document.getElementById("number").value, fechaNac: document.getElementById("birthdate").value, numeroDoc: document.getElementById("documentNumber").value, DocType: document.getElementById("documentType").value, correo: document.getElementById("email").value }

    let data = []
    data.push(datos)
    console.log(data)

    document.getElementById("divDatos").value = ""

    pintar()

    limpiar()

    function pintar() {
        data.forEach((item, index) => {
            let ul = document.createElement("ul")
            let li = document.createElement("li")
            let hr = document.createElement("hr")
            let br = document.createElement("br")
            li.textContent = item.name + " " + item.lastname + " / " + item.genero + " / " + item.numeroTel + " / " + item.fechaNac + " / " + item.numeroDoc + " / " + item.DocType + " / " + item.correo
            ul.appendChild(li)
            ul.appendChild(hr)
            ul.appendChild(br)
            ul.className = 'animated';
            document.getElementById("divDatos").className = 'animated2';
            setTimeout(() => {
                divDatos.classList.remove('animated2');
            }, 1000);
            document.getElementById("divDatos").appendChild(ul)
        });
    }


    function limpiar() {
        document.getElementById("name").value = ""
        document.getElementById("lastName").value = ""
        document.getElementById("number").value = ""
        document.getElementById("birthdate").value = ""
        document.getElementById("documentNumber").value = ""
        document.getElementById("email").value = ""
        document.getElementById("genderM").checked = false
        document.getElementById("genderF").checked = false
    }
}


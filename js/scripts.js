function validarDados() {
    const mensagemErro = document.getElementById('mensagem-erro');
    mensagemErro.style.display = 'none'; 
    mensagemErro.innerText = ''; 

    const nome = document.getElementById('inNome').value.trim();
    const telefone = document.getElementById('inFone').value.trim();
    const email = document.getElementById('inMail').value.trim();
    const cargo = document.getElementById('inCargo').value.trim();
    const depto = document.getElementById('inDepto').value.trim();
    const imgFile = document.getElementById('inImg').files;

    let erro = false; 

    if (!nome) {
        mensagemErro.innerText += "O campo 'Nome do funcionário' não pode estar vazio!\n";
        erro = true;
        resetarCracha(); 
    }

    if (!telefone) {
        mensagemErro.innerText += "O campo 'Telefone' não pode estar vazio!\n";
        erro = true;
        resetarCracha(); 
    }

    if (!email) {
        mensagemErro.innerText += "O campo 'E-mail' não pode estar vazio!\n";
        erro = true;
        resetarCracha(); 
    }

    if (!cargo) {
        mensagemErro.innerText += "O campo 'Cargo do Funcionário' não pode estar vazio!\n";
        erro = true;
        resetarCracha(); 
    }

    if (!depto) {
        mensagemErro.innerText += "O campo 'Departamento do Funcionário' não pode estar vazio!\n";
        erro = true;
        resetarCracha(); 
    }

    if (imgFile.length === 0) {
        mensagemErro.innerText += "Você deve selecionar uma imagem!\n";
        erro = true;
        resetarCracha();
    }

    if (erro) {
        mensagemErro.style.display = 'block';
    } else {
        preencherCracha(nome, cargo, depto);
    }
}

function preencherCracha(nome, cargo, depto) {
    document.getElementById('spNome').innerText = nome;
    document.getElementById('spCargo').innerText = cargo;
    document.getElementById('spDepto').innerText = depto;

    var imgFile = document.getElementById('inImg').files[0];
    if (imgFile) {
        var imgURL = URL.createObjectURL(imgFile);
        document.getElementById('area-foto').innerHTML = '<img src="' + imgURL + '" alt="Foto do Funcionário" width="100" height="100">';
    }
}

function resetarCracha() {
    document.getElementById('spNome').innerText = '';
    document.getElementById('spCargo').innerText = '';
    document.getElementById('spDepto').innerText = '';
    document.getElementById('area-foto').innerHTML = '';
}


function preencherCracha(nome, cargo, depto) {
    document.getElementById('spNome').innerText = nome;
    document.getElementById('spCargo').innerText = cargo;
    document.getElementById('spDepto').innerText = depto;

    const imgFile = document.getElementById('inImg').files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        document.getElementById('area-foto').innerHTML = `<img src="${e.target.result}" alt="Foto do Funcionário" style="width:100%; height:auto;"/>`;
    };

    if (imgFile) {
        reader.readAsDataURL(imgFile);
    }


    function atualizarCracha() {
        const nome = document.getElementById('inNome').value.trim() || '';
        const cargo = document.getElementById('inCargo').value.trim() || '';
        const depto = document.getElementById('inDepto').value.trim() || '';

        document.getElementById('spNome').innerText = nome;
        document.getElementById('spCargo').innerText = cargo;
        document.getElementById('spDepto').innerText = depto;
    }


    if (imgInput.files && imgInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const areaFoto = document.getElementById('area-foto');
            areaFoto.innerHTML = `<img src="${e.target.result}" alt="Foto do funcionário" style="width:100px; height:auto;">`;
        }
        reader.readAsDataURL(imgInput.files[0]);
    } else {
        document.getElementById('area-foto').innerHTML = ''; 
    }

    document.getElementById('frmRegistro').reset(); 
    document.getElementById('area-foto').innerHTML = ''; 


    }


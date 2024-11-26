
const apiBaseUrl = "http://127.0.0.1:8000/api/clientes/";

document.getElementById('addForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const numero_sus = document.getElementById('numero_sus').value;
    const data_nascimento = document.getElementById('data_nascimento').value;
    const horario_atendimento = document.getElementById('horario_atendimento').value;

    await fetch(apiBaseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, cpf, numero_sus, data_nascimento, horario_atendimento })
    });
    alert("Cliente adicionado!");
    location.reload();
});



    
    //Função para listar cliente
async function listarClientes() {
    const response = await fetch(apiBaseUrl);
    const clientes = await response.json();

    // Preenche a tabela de clientes na tela de listagem
    const tabela = document.getElementById('clientesTable');
    tabela.innerHTML = ''; // Limpa a tabela
    clientes.forEach(cliente => {
        const row = `<tr>
            <td>${cliente.nome}</td>
            <td>${cliente.horario_atendimento}</td>
        </tr>`;
        tabela.innerHTML += row;
    });

    // Preenche os selects das telas de atualizar e excluir
    const selectUpdate = document.getElementById('clienteId');
    const selectDelete = document.getElementById('clienteIdDelete');
    selectUpdate.innerHTML = '<option value="">Selecione um cliente</option>';
    selectDelete.innerHTML = '<option value="">Selecione um cliente</option>';
    clientes.forEach(cliente => {
        const option = `<option value="${cliente.id}">${cliente.nome}</option>`;
        selectUpdate.innerHTML += option;
        selectDelete.innerHTML += option;
    });
}

// Função para atualizar cliente
document.getElementById('updateForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const clienteId = document.getElementById('clienteId').value;
    const nome = document.getElementById('nomeUpdate').value || null;
    const cpf = document.getElementById('cpfUpdate').value || null;
    const numero_sus = document.getElementById('numeroSusUpdate').value || null;
    const data_nascimento = document.getElementById('dataNascimentoUpdate').value || null;
    const horario_atendimento = document.getElementById('horarioAtendimentoUpdate').value || null;

    await fetch(`${apiBaseUrl}${clienteId}/`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, cpf, numero_sus, data_nascimento, horario_atendimento })
    });
    alert("Cliente atualizado!");
    listarClientes();
});

// Função para excluir cliente
document.getElementById('deleteForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const clienteId = document.getElementById('clienteIdDelete').value;

    await fetch(`${apiBaseUrl}${clienteId}/`, {
        method: "DELETE"
    });
    alert("Cliente excluído!");
    listarClientes();
});

// Carregar os clientes ao carregar a página
document.addEventListener('DOMContentLoaded', listarClientes);

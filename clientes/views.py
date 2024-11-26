from django.shortcuts import render, get_object_or_404, redirect
from .models import Cliente

# Página inicial
def home(request):
    return render(request, 'clientes/home.html')

# Listar clientes
def listar_clientes(request):
    clientes = Cliente.objects.all()
    return render(request, 'clientes/listar.html', {'clientes': clientes})

# Adicionar cliente
def adicionar_cliente(request):
    if request.method == 'POST':
        Cliente.objects.create(
            nome=request.POST['nome'],
            cpf=request.POST['cpf'],
            numero_sus=request.POST['numero_sus'],
            data_nascimento=request.POST['data_nascimento'],
            horario_atendimento=request.POST['horario_atendimento'],
        )
        return redirect('listar_clientes')
    return render(request, 'clientes/adicionar.html')

# Atualizar cliente
def atualizar_cliente(request, id):
    cliente = get_object_or_404(Cliente, id=id)
    if request.method == 'POST':
        cliente.nome = request.POST['nome']
        cliente.cpf = request.POST['cpf']
        cliente.numero_sus = request.POST['numero_sus']
        cliente.data_nascimento = request.POST['data_nascimento']
        cliente.horario_atendimento = request.POST['horario_atendimento']
        cliente.save()
        return redirect('listar_clientes')
    return render(request, 'clientes/atualizar.html', {'cliente': cliente})

# Excluir cliente
def excluir_cliente(request, id):
    cliente = get_object_or_404(Cliente, id=id)
    cliente.delete()
    return redirect('listar_clientes')


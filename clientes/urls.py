from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name='home'),  # Rota para a página inicial
    path('clientes/', views.listar_clientes, name='listar_clientes'),  # Rota para listar clientes
    path('clientes/adicionar/', views.adicionar_cliente, name='adicionar_cliente'),  # Rota para adicionar cliente
    path('clientes/atualizar/<int:id>/', views.atualizar_cliente, name='atualizar_cliente'),  # Rota para atualizar cliente
    path('clientes/excluir/<int:id>/', views.excluir_cliente, name='excluir_cliente'),
    
    
    
     # Rota para excluir cliente
]

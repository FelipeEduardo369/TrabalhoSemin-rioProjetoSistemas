from django.contrib import admin
from django.urls import path, include
from .views import home  

urlpatterns = [
    path('', home, name='home'),
    path('admin/', admin.site.urls),
    path('clientes/', include('clientes.urls')),  # Certifique-se de incluir 'clientes.urls'
   
]




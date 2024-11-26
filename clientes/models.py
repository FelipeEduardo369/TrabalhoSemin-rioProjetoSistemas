from django.db import models

class Cliente(models.Model):
    nome = models.CharField(max_length=100)
    cpf = models.CharField(max_length=11, unique=True)
    numero_sus = models.CharField(max_length=15, unique=True)
    data_nascimento = models.DateField()
    horario_atendimento = models.TimeField()

    def __str__(self):
        return self.nome

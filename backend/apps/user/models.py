from django.db import models

# Create your models here.


class User(models.Model):
    privilege_options = (
        ('Administrator', 'Administrator'),
        ('Employee', 'Employee'),
    )

    name = models.CharField(max_length=255)
    lastName = models.CharField(max_length=255)
    phone = models.CharField(blank=True, null=True, max_length=50)
    gmail = models.EmailField(max_length=20)
    date_of_birth = models.DateTimeField(auto_created=True)

    privilege = models.CharField(
        max_length=50,
        choices=privilege_options,
        default="Employee"
    )

    old_password = models.CharField(blank=True, null=True, max_length=100)
    password = models.CharField(max_length=100)

    update_at = models.DateTimeField(auto_now=True)
    create_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f"{self.name}-{self.lastName}-{self.privilege}"

from django.db import models

# Create your models here.


class Client(models.Model):
    reputation_options = (
        ('None', 'None'),
        ('Bad', 'Bad'),
        ('Good', 'Good'),
        ('Excellent', 'Excellent'),
    )

    name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=50)
    phone = models.CharField(blank=True, null=True, max_length=50)
    email = models.EmailField(max_length=50)
    localitation = models.TextField(max_length=255)
    reputation = models.CharField(
        max_length=30,
        choices=reputation_options,
        default="None"
    )
    date_of_birth = models.DateTimeField(auto_created=True)
    update_at = models.DateTimeField(auto_now=True)
    create_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f"{self.name}-{self.last_name}-{self.reputation}"

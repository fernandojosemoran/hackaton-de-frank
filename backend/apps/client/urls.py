from django.urls import path
from .views import ClientList, SearchByName, SearchByLastName

urlpatterns = [
    path('clients/', ClientList.as_view(), name="client_list"),
    path('filter_by_name/<slug>', SearchByName.as_view(), name="filter_by_name"),
    path('filter_by_lastname/<slug>',
         SearchByLastName.as_view(), name="filter_by_lastname")
]

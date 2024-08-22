from django.urls import path
from .views import ClientList, SearchByName, CreateClient, DeleteClient, SearchByReputation

urlpatterns = [
    path('clients/', ClientList.as_view(), name="client_list"),
    path('filter-by-name/', SearchByName.as_view(), name="filter_by_name"),
    path('filter-by-reputation/',
         SearchByReputation.as_view(), name="filter_by_reputation"),
    path('create-client/', CreateClient.as_view(), name="create-client"),
    path('delete-client/', DeleteClient.as_view(), name="delete-client")
]

from django.urls import path
from .views import CategoryListCreateView, RecipeListCreateView, RecipeDetailView

urlpatterns = [
    path('categories/', CategoryListCreateView.as_view(), name='category-list-create'),
    path('recipes/', RecipeListCreateView.as_view(), name='recipe-list-create'),
    path('recipes/<int:id>/', RecipeDetailView.as_view(), name='recipe-detail'),
]

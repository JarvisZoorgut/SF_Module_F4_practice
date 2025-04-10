from django.urls import path
from .views import (
    CategoryListCreateView,
    CategoryRecipeListView,
    CategoryDetailView,
    RecipeListCreateView,
    RecipeDetailView,
)

urlpatterns = [
    path('categories/', CategoryListCreateView.as_view(), name='category-list-create'),
    path('categories/<int:pk>/', CategoryDetailView.as_view(), name='category-detail'),
    path('categories/<int:id>/recipes/', CategoryRecipeListView.as_view(), name='category-recipe-list'),
    path('recipes/', RecipeListCreateView.as_view(), name='recipe-list-create'),
    path('recipes/<int:id>/', RecipeDetailView.as_view(), name='recipe-detail'),
]

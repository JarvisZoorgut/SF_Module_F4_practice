from rest_framework import generics
from rest_framework.generics import RetrieveAPIView
from .models import Category, Recipe
from .serializers import CategorySerializer, RecipeSerializer

class CategoryListCreateView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryRecipeListView(generics.ListAPIView):
    serializer_class = RecipeSerializer

    def get_queryset(self):
        category_id = self.kwargs['id']
        return Recipe.objects.filter(category_id=category_id)
    
class CategoryDetailView(RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class RecipeListCreateView(generics.ListCreateAPIView):
    queryset = Recipe.objects.all()  # Получаем все рецепты
    serializer_class = RecipeSerializer

class RecipeDetailView(generics.RetrieveAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    lookup_field = 'id'

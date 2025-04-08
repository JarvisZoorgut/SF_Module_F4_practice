from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import generics
from .models import Category, Recipe
from .serializers import CategorySerializer, RecipeSerializer

class CategoryListCreateView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class RecipeListCreateView(generics.ListCreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

    def perform_create(self, serializer):
        category_id = self.request.data.get('category')
        category = Category.objects.filter(id=category_id).first()

        if category is None:
            return Response({"error": "Category not found"}, status=status.HTTP_400_BAD_REQUEST)

        # Сохраняем рецепт с указанной категорией
        serializer.save(category=category)

class RecipeDetailView(generics.RetrieveAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    lookup_field = 'id'

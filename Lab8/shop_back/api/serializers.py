from rest_framework import serializers
from .models import Product, Category, Book

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'







class BookSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = Book
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Product, Category, Book
from .serializers import ProductSerializer, CategorySerializer, BookSerializer


@api_view(['GET'])
def product_list(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def product_detail(request, id):
    product = Product.objects.get(id=id)
    serializer = ProductSerializer(product)
    return Response(serializer.data)

@api_view(['GET'])
def category_list(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def category_detail(request, id):
    category = Category.objects.get(id=id)
    serializer = CategorySerializer(category)
    return Response(serializer.data)

@api_view(['GET'])
def products_by_category(request, id):
    products = Product.objects.filter(category_id=id)
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)





@api_view(['GET'])
def books(request):
    books = Book.objects.all()
    serializer = BookSerializer(books, many = True)
    return Response(serializer.data)
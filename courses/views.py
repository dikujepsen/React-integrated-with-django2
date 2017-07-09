from rest_framework import viewsets
from .models import Course, Author
from .serializers import CourseSerializer, AuthorSerializer


class CourseViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class AuthorViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer

from rest_framework import viewsets
from .models import Course, Author
from .serializers import CourseHyperlinkedSerializer, AuthorHyperlinkedSerializer
from rest_framework import permissions

class CourseHyperLinkedViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = Course.objects.all()
    serializer_class = CourseHyperlinkedSerializer
    #permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class AuthorHyperlinkedViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = Author.objects.all()
    serializer_class = AuthorHyperlinkedSerializer
    #permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

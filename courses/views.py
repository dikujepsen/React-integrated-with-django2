from rest_framework import viewsets
from .models import Course, Author
from .serializers import CourseHyperlinkedSerializer, AuthorHyperlinkedSerializer, \
  CourseModelSerializer, AuthorModelSerializer
from rest_framework import permissions

class CourseHyperLinkedViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = Course.objects.all()
    serializer_class = CourseHyperlinkedSerializer
    #print(CourseHyperlinkedSerializer().__repr__())
    #permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class CourseModelViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = Course.objects.all()
    serializer_class = CourseModelSerializer
    #permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class AuthorHyperlinkedViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = Author.objects.all()
    serializer_class = AuthorHyperlinkedSerializer
    #permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class AuthorModelViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = Author.objects.all()
    serializer_class = AuthorModelSerializer
    #permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

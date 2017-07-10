from rest_framework import serializers
from .models import Course, Author


class CourseSerializer(serializers.HyperlinkedModelSerializer):
    author_name = serializers.CharField(source='author', read_only=True)
    id = serializers.ReadOnlyField()

    class Meta:
        model = Course
        fields = '__all__'

# fetch('http://localhost:8000/api/courses/3/', {method: "PUT", headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: "{'title': 'Architecting Applications for the Real World333'}"});


class AuthorSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.ReadOnlyField()

    class Meta:
        model = Author
        fields = '__all__'

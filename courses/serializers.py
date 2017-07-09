from rest_framework import serializers
from .models import Course, Author


class CourseSerializer(serializers.HyperlinkedModelSerializer):
    author_name = serializers.CharField(source='author')
    id = serializers.IntegerField()

    class Meta:
        model = Course
        fields = '__all__'


class AuthorSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Author
        fields = '__all__'

from rest_framework import serializers
from .models import Course, Author


class CourseSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Course
        fields = '__all__'


class AuthorSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Author
        # fields = ('url', 'id', 'firstName', 'lastName', 'created')
        fields = '__all__'

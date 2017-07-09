from rest_framework import serializers
from .models import Course, Author


class CourseSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Course
        fields = ('url', 'id', 'title', 'watchHref', 'length',
                  'category', 'created')


class AuthorSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Author
        # fields = ('url', 'id', 'firstName', 'lastName', 'created')
        fields = '__all__'

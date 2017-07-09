from rest_framework import serializers
from .models import Course


class CourseSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Course
        fields = ('url', 'id', 'title', 'watchHref', 'length',
                  'category', 'created')

from rest_framework import serializers, reverse
from .models import Course, Author


class CourseHyperlinkedSerializer(serializers.HyperlinkedModelSerializer):
    author_name = serializers.CharField(source='author_id', read_only=True)
    id = serializers.ReadOnlyField()
    watchHref = serializers.ReadOnlyField()
    # author_id = serializers.IntegerField()

    class Meta:
        model = Course
        fields = '__all__'


        extra_kwargs = {
          'url': {'view_name': 'hyperlinkedcourses-detail'},
          'author': {'view_name': 'hyperlinkedauthors-detail'}
        }


class CourseModelSerializer(serializers.ModelSerializer):
    author_name = serializers.CharField(source='author_id', read_only=True)
    id = serializers.ReadOnlyField()
    url = serializers.HyperlinkedIdentityField(view_name='course-detail')

    class Meta:
        model = Course
        fields = ('id', 'url', 'author_id', 'author_name', 'title', 'length', 'watchHref', 'category')

# fetch('http://localhost:8000/api/courses/3/', {method: "PUT", headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: "{'title': 'Architecting Applications for the Real World333'}"});
#fetch('http://localhost:8000/api-auth/login/', {method: "POST", headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: "{username: 'jacob', password: '1234', csrfmiddlewaretoken: 'sPKQdYma7JMukGPbrT3u3rC3zjX8ZVjVZ1Du7MvNO9EKb8GicwWpZTEGv9V050jX'}", credentials: 'same-origin'});
# fetch('http://localhost:8000/api/courses/3/', {method: "PUT", headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRFTOKEN': 'r9YD6KCqA1p4WGChE6fGjrzxtoVWzNC3szvvBoMY2lGwu8M1JTN95sufJwGqRCEi'}, body: {title: 'Architecting Applications for the Real World333'}, credentials: 'same-origin'});
# var data = new FormData();
# data.append('username', 'jacob');;
# data.append('password', '1234');data.append('csrfmiddlewaretoken', 'CNZN3UjPGcCXXpXVEYprK0HZXtRC6N2XPmnFPZZRQJCi8zVgQbDJXqSUwx9ur7bD');fetch('http://localhost:8000/api-auth/login/', {method: "POST", body: data, credentials: 'same-origin'});


class AuthorHyperlinkedSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.ReadOnlyField()

    class Meta:
        model = Author
        fields = '__all__'
        extra_kwargs = {
          'url': {'view_name': 'hyperlinkedauthors-detail'}
        }


class AuthorModelSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    url = serializers.HyperlinkedIdentityField(view_name='author-detail')

    class Meta:
        model = Author
        fields = '__all__'

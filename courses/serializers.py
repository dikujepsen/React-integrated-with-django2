from rest_framework import serializers, reverse
from .models import Course, Author


class CourseHyperlinkedSerializer(serializers.HyperlinkedModelSerializer):
    author_name = serializers.CharField(source='author_id', read_only=True)
    # id = serializers.ReadOnlyField()
    watchHref = serializers.ReadOnlyField()
    highlight2 = serializers.HyperlinkedIdentityField(view_name='course-detail', format='html')

    class Meta:
        model = Course
        fields = '__all__' #('id', 'url', 'author_name', 'watchHref', 'highlight2') #'__all__'


class CourseModelSerializer(serializers.ModelSerializer):
    author_name = serializers.CharField(source='author_id', read_only=True)
    id = serializers.ReadOnlyField()
    # delete = serializers.SerializerMethodField()
    # delete2 = serializers.HyperlinkedIdentityField(view_name='courses-list', format='json')
    highlight2 = serializers.HyperlinkedIdentityField(view_name='course-detail', format='html')


    class Meta:
        model = Course
        fields = '__all__'

    # def get_delete(self, course):
    #     return reverse.reverse('courses', request=req)


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


class AuthorModelSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()

    class Meta:
        model = Author
        fields = '__all__'

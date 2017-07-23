"""django_with_rest URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""

from django.contrib import admin

from django.conf.urls import url, include
from rest_framework.schemas import get_schema_view
from snippets import views as snippets_views
from courses import views as courses_views
from rest_framework.routers import DefaultRouter, SimpleRouter

schema_view = get_schema_view(title='Pastebin API')
default_router = DefaultRouter()
default_router.register(r'snippets', snippets_views.SnippetViewSet)
default_router.register(r'users', snippets_views.UserViewSet)
default_router.register(r'courses', courses_views.CourseModelViewSet)
default_router.register(r'authors', courses_views.AuthorModelViewSet)


hyperlinked_router = DefaultRouter()
hyperlinked_router.register(r'courses', courses_views.CourseHyperLinkedViewSet)
hyperlinked_router.register(r'authors', courses_views.AuthorHyperlinkedViewSet)


urlpatterns = [
    url(r'^schema/$', schema_view),
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include(default_router.urls)),
    url(r'^api/hyperlinked/', include(hyperlinked_router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^.*', include('react.urls'))
]


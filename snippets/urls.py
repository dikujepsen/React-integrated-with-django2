from django.conf.urls import url, include
from snippets import views
from rest_framework.routers import DefaultRouter


# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'snippets', views.SnippetViewSet)
router.register(r'users', views.UserViewSet)

urlpatterns = [

    url(r'^', include(router.urls))
]

# urlpatterns = format_suffix_patterns(urlpatterns)

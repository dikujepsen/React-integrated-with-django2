from django.shortcuts import render
from django.views import generic
# Create your views here.
class IndexView(generic.ListView):
    template_name = 'react/index.html'
    context_object_name = 'view'

    def get_queryset(self):
        return dict()

from rest_framework.views import exception_handler
from django.db.models.deletion import ProtectedError
from django.http import HttpResponse


def custom_exception_handler(exception, context):
    # Call REST framework's default exception handler first,
    # to get the standard error response.
    if isinstance(exception, ProtectedError):
        response = HttpResponse(content="DELETE_FAILED", status=500)
    else:
        response = exception_handler(exception, context)

    return response

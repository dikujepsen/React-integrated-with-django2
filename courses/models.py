from django.db import models


class Course(models.Model):
    title = models.CharField(max_length=100)
    watchHref = models.CharField(max_length=1000)
    length = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    created = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey('Author')

    class Meta:
        ordering = ('title',)


class Author(models.Model):
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('firstName',)

    def __str__(self):
        return '%s %s' % (self.firstName, self.lastName)

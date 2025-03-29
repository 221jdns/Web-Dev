from django.contrib import admin
from .models import Student

# admin.site.register(Student)

@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ['name', 'avg_scores', 'scores']

    def avg_scores(self, obj: Student):
        return obj.get_average_score()

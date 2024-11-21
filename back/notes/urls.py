from django.urls import path, include
from notes.views import CreateNote, GetListAllCategoryNote, NoteViews
urlpatterns = [
    path('list/all/note/', GetListAllCategoryNote.as_view()),
    path('create/note/', CreateNote.as_view()),
    path('item/note/<int:pk>', NoteViews.as_view()),
]
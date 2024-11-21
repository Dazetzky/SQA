from django.http import Http404
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework import status
from notes.models import Note
from notes.serializers import NoteSerializer

class GetListAllCategoryNote(generics.ListAPIView):
    serializer_class = NoteSerializer

    def get_queryset(self):
        return Note.objects.all()
    
class CreateNote(APIView):

    def post(self, request, format = None):
        serializer = NoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class NoteViews(APIView):
    def get_object(self, pk):
        try:
            return Note.objects.get(pk=pk)
        except Note.DoesNotExist:
            raise Http404
        
    def patch(self, request, pk):
        obj = self.get_object(pk)
        serializer = NoteSerializer(obj, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def post(self, request,pk, format = None ):
        Note.objects.filter(id=pk).delete()
        return Response('del', status=status.HTTP_201_CREATED)

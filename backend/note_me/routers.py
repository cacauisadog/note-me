from rest_framework import routers
from noteme.viewsets import NoteViewSet

router = routers.DefaultRouter()

router.register(r'note', NoteViewSet)

from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
    path('admin/', admin.site.urls),

    # 🔐 AUTH ROUTES
    path('api/auth/login/', TokenObtainPairView.as_view()),
    path('api/auth/', include('malwareapp.auth_urls')),

    # 🚀 APP ROUTES
    path('api/', include('malwareapp.urls')),
]
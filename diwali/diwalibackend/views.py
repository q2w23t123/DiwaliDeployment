from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from google.generativeai import GenerativeModel
from markdown import markdown
from uuid import UUID

from .models import Gallery, GalleryEmbed, GalleryLink, GalleryImage, CarouselImage, SponsorPage, SponsorSection, SponsorImage

# Create your views here.
def home(request):
    return HttpResponse("Home")

def aboutus(request):
    return HttpResponse("About Us")

# Convert Gemini chat history to dicts so that it can be serialised as
# json and stored in a django session
def history_to_dicts(history):
    return ([{"role": content.role, "parts": [{"text": part.text} for part in content.parts]}
        for content in history])

def message_to_html(content):
    html = ""
    for part in content.parts:
        html += markdown(part.text)
    return html

@csrf_exempt
def chat(request, chat_id):
    # normalise UUID, error on strings that aren't UUIDs
    chat_id = f"chat_{str(UUID(chat_id))}"
    
    history = request.session.get(chat_id, [])
    
    if "message" in request.POST:
        model = GenerativeModel("gemini-1.0-pro")
        chat = model.start_chat(history = history)
        response = chat.send_message(request.POST["message"])
        request.session[chat_id] = history_to_dicts(chat.history)
        return HttpResponse(message_to_html(response))
    
    return HttpResponse("you need to post a message")

def image_to_dict(img):
    return {"src": img.image_url, "alt": img.alternate_text}

@csrf_exempt
def gallery_pages(request):
    return JsonResponse({"pages": [g.year for g in Gallery.objects.all()]})

@csrf_exempt
def gallery(request, year):
    g = Gallery.objects.get(year = year)
    return JsonResponse({"embeds": [e.embed_url for e in GalleryEmbed.objects.filter(parent = g)],
        "links": [{"image": l.image_url, "headline": l.headline, "url": l.link_url} for l in GalleryLink.objects.filter(parent = g)],
        "images": [image_to_dict(i) for i in GalleryImage.objects.filter(parent = g)],
        "full_date": g.full_date})

@csrf_exempt
def carousel(request):
    return JsonResponse({"images": [image_to_dict(i) for i in CarouselImage.objects.all()]})

@csrf_exempt
def sponsors_pages(request):
    return JsonResponse({"pages": [s.year for s in SponsorPage.objects.all()]})

@csrf_exempt
def sponsors(request, year):
    page = SponsorPage.objects.get(year = year)
    return JsonResponse({"sections": [
        {"title": section.title, "images": [image_to_dict(i) for i in SponsorImage.objects.filter(parent = section)]}
        for section in SponsorSection.objects.filter(parent = page)]})

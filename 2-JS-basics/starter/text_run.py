# -*- coding: utf-8 -*-
"""
Created on Sun Jun 16 16:27:16 2019

@author: 16822
"""


from bs4 import BeautifulSoup

import requests


''' reads urls from text document '''
lines=[line.rstrip('\n') for line in open('C:/Users/16822/OneDrive/Desktop/sample.txt')] 
stats=[]
v=0
for x in lines:
    page=requests.get(x)
    soup=BeautifulSoup(page.content, 'lxml')
    #likes
    likes=soup.find('div',{'class':'tv-widget-idea js-widget-idea js-userlink-popup-anchor'}).find('span',{'class':'tv-card-social-item__count'})
    #date
    date=soup.find('div',{'class':'tv-widget-idea js-widget-idea js-userlink-popup-anchor'}).find('span',{'class':'tv-card-stats'})['data-timestamp']
    print(date)
    #hits
    hits=soup.find('div',{'class':'tv-widget-idea js-widget-idea js-userlink-popup-anchor'}).find('span',{'class':'tv-card-stats__views'})
    #chart view
    chartview=soup.find('div',{'class':'tv-widget-idea js-widget-idea js-userlink-popup-anchor'}).find('span',{'class':'tv-widget-idea__timeframe'})
    #short or long
    #shortlong=soup.find('div',{'class':'tv-widget-idea js-widget-idea js-userlink-popup-anchor'}).find('span',{'class':'tv-card-label__icone'}) 
    
    likess= likes.text
    #datee= date.text
    hitss=hits.text
    chartvieww= chartview.text
    #shortlongg = shortlong.text
    #print(likess, datee, hitss, chartvieww)
    #print(date + 'wow')
    
    
    
    
    
    
    
    
    
    #<span class="tv-card-social-item__count">12</span>
    #class="tv-widget-idea js-widget-idea js-userlink-popup-anchor"
    
    
    #tv-card-stats__views
    #tv-card-stats__time
    #tv-card-label tv-widget-idea__label tv-card-label--short
    #tv-widget-idea__timeframe
    #tv-card-social-item__count
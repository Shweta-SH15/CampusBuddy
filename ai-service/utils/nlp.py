from transformers import pipeline

summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
sentiment = pipeline("sentiment-analysis")

def summarize_text(text):
    return summarizer(text, max_length=60, min_length=20, do_sample=False)[0]['summary_text']

def analyze_sentiment(text):
    return sentiment(text)[0]

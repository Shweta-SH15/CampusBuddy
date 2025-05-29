import numpy as np

def get_recommendations(user, others):
    user_vec = np.array(user)
    results = []
    for item in others:
        name = item['name']
        score = float(np.dot(user_vec, item['vector']))
        results.append({"name": name, "score": round(score, 3)})
    return sorted(results, key=lambda x: x['score'], reverse=True)

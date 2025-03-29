import json
from django.db import models


class Student(models.Model):
    name = models.CharField(max_length= 255)
    scores = models.JSONField()

    def get_average_score(self):
    
        if isinstance(self.scores, str):
            scores_dict = json.loads(self.scores)  
        elif isinstance(self.scores, dict):
            scores_dict = self.scores  
        else:
            return 0  

        if not scores_dict:  
            return 0

        try:
        
            total = sum(float(value) for value in scores_dict.values())
            count = len(scores_dict)  

            return total / count  
        except ValueError:
            return 0 

    def get_top_score(self):
        if not self.scores:
            return 0
        max = 0
        for i in self.scores:
            if(i > max):
                max = i
        return max
    
    def __str__(self):
        return self.name
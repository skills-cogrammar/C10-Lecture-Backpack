# String Manipulation (replace every odd character)
# .replace() .strip() strip()
word = "Learning Python is fun"
new_word = ""

for character in word:
    new_word = word.replace("n", "*")

print(new_word)



sentence = "Learning-Python-is-fun"
split_sentence = sentence.split('-')
print(split_sentence) # ['Learning', 'Python', 'is', 'fun']

joined_sentence = " ".join(split_sentence)
print(joined_sentence)



# Dictionaries (Highest Score)

#           Key  : Value


# print(scores['athlete_2'])

athlete_lisThabot = ['Thabo', 'Farah', 'Wayne', 'Lisa']

#           Key  :         Value
scores = {
        "Thabo": {"running": 15, "jumping": 8, "throwing": 10},
        "Farah": {"running": 12, "jumping": 10, "throwing": 12},
        "Wayne": {"running": 17, "jumping": 5, "throwing": 9},
        "Lisa": {"running": 14, "jumping": 9, "throwing": 11}
        }

highest_score = 0
for athlete in athlete_list:
    values = scores[athlete].values()
    total_score = sum(values)
    print(total_score)
  
    if total_score > highest_score:
        highest_score = total_score

print(f"\n\nThe highest score of the tournament is: {highest_score}")

scores = {"athlete_1": "Thabo", 
          'athlete_2': 'Farah',
          'athlete_3': 'Wayne'}

scores.pop('athlete_3')
print(scores)

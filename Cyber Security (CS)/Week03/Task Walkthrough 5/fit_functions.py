from random import randint

# Running Calories
def running_calories(minutes):
    """Returns the the amount of calories burnt after running."""
    calories_per_minute = 15
    return minutes * calories_per_minute


# Cycling Calories
def cycling_calories(minutes):
    calories_per_minute = 20
    return minutes * calories_per_minute

# Total Calories
def total_calories(running_minutes, cycling_minutes):
    total = running_calories(running_minutes) + cycling_calories(cycling_minutes)
    return total

# Bonus calories (Bonus 100 calories for workouts longer than 30 minutes)
def bonus_calories(total_minutes):
    if total_minutes > 30:
        return 100
    else:
        return 0

# Workout summary (total, bonus, t and b)
def workout_summary(running_minutes, cycling_minutes):
    total = total_calories(running_minutes, cycling_minutes)
    bonus = bonus_calories(running_minutes + cycling_minutes)

    # print(f"Total calories burned: {total}")
    # print(f"Bonus Calories: {bonus}")
    # print(f"Total calories burned (including bonus): {total + bonus}")

    summary = f"Total calories burned: {total}\nBonus Calories: {bonus}\nTotal calories burned (including bonus): {total + bonus}"
    print(summary)
    return summary

# Motivate Me! (Only if we have enough time!!!)
def motivate_me():
    quotes = ["The hardest thing about exercise is to start doing it. Once you are doing exercise regularly, the hardest thing is to stop it.", 
              "Success isn't always about 'greatness', it's about consistency. Consistent, hard work gains success. Greatness will come.", 
              "All progress takes place outside the comfort zone."]
    
    random_number = randint(0, 2)
    return quotes[random_number]

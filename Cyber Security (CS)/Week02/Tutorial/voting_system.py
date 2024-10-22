total_votes = int(input("Enter the number of votes: "))

votes_a = 0
votes_b = 0
count = 0

while count < total_votes:
    vote = input("Vote for A or B: ").strip().upper()
    if vote == 'A':
        votes_a += 1
    elif vote == 'B':
        votes_b += 1
    else:
        print("Invalid vote. Try again.")
        continue # skip this iteration if input is invalid
    count += 1

if votes_b > votes_a:
    print("B Won")
elif votes_a > votes_b:
    print("A Won")
else:
    print("It's a tie")

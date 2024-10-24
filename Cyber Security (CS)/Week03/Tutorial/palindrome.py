def is_palindrome(s):
    if s == s[::-1]:
        return True
    else:
        return False

s = input("Suggest a palindrome: ")

print(s[::-1])
print(is_palindrome(s))

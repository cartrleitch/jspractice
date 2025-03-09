# jspractice
From https://github.com/DylanWeakly/csc-feb25-programming-comp

1. Reverse Words and Change Case (10 pts)

    Write a function that reverses the order of words in a sentence and toggles the case of each letter.
    Example: "Hello World" → "wORLD hELLO"

2. List Alternator (10 pts)

    Write a function that merges two lists by alternating their elements.
    Example: [1, 2, 3] and [4, 5, 6] → [1, 4, 2, 5, 3, 6]

3. Cumulative Sum List (10 pts)

    Write a function that returns a list where each element is the cumulative sum of the elements before it.
    Example: [1, 2, 3] → [1, 3, 6]

4. String Expansion (10 pts)

    Write a function that repeats each character in a string n times.
    Example: "abc", n=3 → "aaabbbccc"

5. Remove Vowels from String (10 pts)

    Write a function that removes all vowels from a given string.
    Example: "hello world" → "hll wrld"

6. Count Unique Elements (15 pts)

    Write a function that counts the number of unique elements in a list.
    Example: [1, 2, 2, 3, 4, 4, 5] → 5

7. Alternating Case String (15 pts)

    Write a function that converts a string to alternating uppercase and lowercase characters.
    Example: "hello" → "HeLlO"

8. Max Difference in List (15 pts)

    Write a function that finds the maximum difference between any two elements in a list.
    Example: [10, 3, 5, 20] → 17 (20 - 3)

9. Reverse List in Groups (15 pts)

    Write a function that reverses a list in groups of n elements.
    Example: [1, 2, 3, 4, 5, 6], n=2 → [2, 1, 4, 3, 6, 5]

10. Product of List Elements (15 pts)

    Write a function that calculates the product of all elements in a list.
    Example: [2, 3, 4] → 24

11. Capitalize First and Last Letter (15 pts)

    Write a function that capitalizes only the first and last letter of each word in a sentence.
    Example: "hello world" → "HellO WorlD"

12. Find First Non-Repeating Character (20 pts)

    Write a function that finds the first non-repeating character in a string.
    Example: "swiss" → "w"

13. Sum of Odd Numbers (20 pts)

    Write a function that returns the sum of all odd numbers in a given list.
    Example: [1, 2, 3, 4, 5] → 9

14. Swap First and Last Elements (20 pts)

    Write a function that swaps the first and last elements of a list.
    Example: [1, 2, 3, 4] → [4, 2, 3, 1]

15. Sort Words by Length (20 pts)

    Write a function that sorts a list of words by their length.
    Example: ["apple", "banana", "kiwi"] → ["kiwi", "apple", "banana"]

16. Replace Multiples of 3 and 5 (20 pts)

    Write a function that replaces multiples of 3 with "Bethel", multiples of 5 with "Sucks", and multiples of both with "BethelSucks" in a list.
    Example: [1, 3, 5, 15] → [1, "Bethel", "Sucks", "BethelSucks"]

17. Reverse Digits of Number (20 pts)

    Write a function that reverses the digits of a given number.
    Example: 1234 → 4321

18. Second Smallest Number (20 pts)

    Write a function that returns the second-smallest number in a list.
    Example: [3, 1, 4, 2, 5] → 2

19. Find Common Elements in Two Lists (20 pts)

    Write a function that finds the common elements between two lists.
    Example: [1, 2, 3] and [2, 3, 4] → [2, 3]

20. Check if Lists are Rotations (20 pts)

    Write a function that checks if one list is a rotation of another.
    Example: [1, 2, 3, 4] and [3, 4, 1, 2] → True

21. Longest Consecutive Sequence (25 pts)

    Write a function that finds the longest consecutive sequence of numbers in an unsorted list.
    Example: [100, 4, 200, 1, 3, 2] → (sequence: [1, 2, 3, 4])

22. Matrix Transposition (25 pts)
Write a function that transposes a given matrix (i.e., swaps rows and columns).
Example:
Input:

   [[1, 2, 3],
   [4, 5, 6],
   [7, 8, 9]]

Output:

   [[1, 4, 7],
   [2, 5, 8],
   [3, 6, 9]]

23. Group Anagrams (25 pts)

    Write a function that, given a list of words, groups all anagrams together.
    Example: ["bat", "tab", "cat", "tac", "act] → [["bat", "tab"], ["cat", "tac", "act"]]

24. Find Majority Element (25 pts)

    Write a function that, given a list of integers, returns the majority element (appears more than n/2 times).
    Example: [3, 3, 4, 2, 3, 3, 3] → 3

25. Find All Pairs with a Target Sum (25 pts)

    Write a function that finds all pairs of integers in a list that add up to a given target sum.
    Example: [1, 2, 3, 4, 5], target = 6 → [(1, 5), (2, 4)]

26. Convert Integer to Binary Without Built-in Functions (25 pts)

    Write a function that converts a positive integer to its binary representation without using built-in functions.
    Example: 10 → "1010"

27. Spiral Matrix (30 pts)

    Write a function that prints a matrix in spiral order.
    Example: Input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

28. Generate Pascal’s Triangle (30 pts)
Write a function that generates the first n rows of Pascal’s Triangle.
Example: n=5 →

  [
   [1],  
   [1, 1],  
   [1, 2, 1],  
   [1, 3, 3, 1],  
   [1, 4, 6, 4, 1]
  ]

29. Balanced Parentheses (30 pts)

    Write a function to check if a given string has balanced parentheses (), [], {}.
    Example: "({[()]})" → True, "({[)]}" → False

30. Next Greater Element (35 pts)

    Write a function that, given a list of integers, finds the next greater element for each element.
    Example: [4, 5, 2, 10] → [5, 10, 10, -1]

31. Reverse Integer (35 pts)

    Write a function that reverses the digits of an integer without converting it to a string.
    Example: 1234 → 4321, -456 → -654

32. String Compression (35 pts)

    Implement a function that compresses a string using the counts of repeated characters.
    Example: "aabcccccaaa" → "a2b1c5a3"

33. Word Ladder (40 pts)

    Given a dictionary and two words, find the shortest transformation sequence by changing one letter at a time.
    Example: "hit" → "hot" → "dot" → "dog" → "cog"

34. Count Islands in a Grid (40 pts)

    Given a 2D grid of 1s (land) and 0s (water), count the number of islands.
    Example:
    11000
    11000
    00100
    00011
        Output: 3

35. Decode a Run-Length Encoded String (40 pts)

    Write a function that, given a run-length encoded string, decodes it.
    Example: "3a2b4c" → "aaabbcccc"

36. Find the Longest Palindromic Substring (40 pts)

    Write a function that finds the longest palindromic substring in a given string.
    Example: "babad" → "bab" or "aba"

37. Find Kth Largest Element (45 pts)

    Write a function that, given an array and an integer k, returns the kth largest element.
    Example: [3, 2, 1, 5, 6, 4], k=2 → 5

38. Find Subarray with Given Sum (45 pts)

    Given an array of integers, find a subarray that sums to a given value S.
    Example: [1, 2, 3, 7, 5], S=12 → [2, 3, 7]

39. Implement a Stack Using Queues (45 pts)

    Implement a stack using only two queues. The stack should support push(), pop(), and top() operations.

40. Implement a Trie (45 pts)

    Implement a Trie (prefix tree) with insert, search, and startsWith functions.

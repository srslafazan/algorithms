#!/bin/python3

import sys


n = int(input().strip())
arr = [int(arr_temp) for arr_temp in input().strip().split(' ')]

sum = 0

for element in arr:
	sum += element

print(sum)

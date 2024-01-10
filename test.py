some_list = []

answer = input('Введите оценку: ')

while answer != '0':
    some_list.append(answer)
    answer = input('Введите оценку: ')  

print(some_list)
total = 0
marks = 0 
for mark in some_list:
   
    total += int(mark)
    
    marks += 1

print(total/marks)

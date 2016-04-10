let[z,d]=['ズン','ドコ']
while getline(line('$')-4, '$') != [z,z,z,z,d]
  put =[z,d][reltime()[1]%2]
endwhile
put ='キ・ヨ・シ！'

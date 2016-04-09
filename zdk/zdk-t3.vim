let[z,d]=['ズン','ドコ']
while 1
  put =[z,d][reltime()[1]%2]
  if getline(line('$')-4, '$') == [z,z,z,z,d]
    put ='キ・ヨ・シ！'
    break
  endif
endwhile

let[z,d]=['ズン','ドコ']
while 1
  call append('$', [z,d][reltime()[1]%2])
  if getline(line('$')-4, '$') == [z,z,z,z,d]
    call append('$', 'キ・ヨ・シ！')
    break
  endif
endwhile

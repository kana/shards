while 1
  call append('$', ['ズン', 'ドコ'][reltime()[1]%2])
  if getline(line('$')-4, '$') == ['ズン', 'ズン', 'ズン', 'ズン', 'ドコ']
    call append('$', 'キ・ヨ・シ！')
    break
  endif
endwhile

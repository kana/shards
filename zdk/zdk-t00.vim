scriptencoding utf-8

let s:seed = 0
function! s:srand(seed) abort
  let s:seed = a:seed
endfunction

function! s:rand() abort
  let s:seed = s:seed * 214013 + 2531011
  return (s:seed < 0 ? s:seed - 0x80000000 : s:seed) / 0x10000 % 0x8000
endfunction

vnew
call s:srand(localtime())
while 1
  call append('$', ['ズン', 'ドコ'][s:rand()%2])
  if getline(line('$')-4, '$') == ['ズン', 'ズン', 'ズン', 'ズン', 'ドコ']
    call append('$', 'キ・ヨ・シ！')
    break
  endif
endwhile

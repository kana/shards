let s:X_MIN = 0.0
let s:Y_MIN = 0.0
let s:X_MAX = 0.999999999
let s:Y_MAX = 0.999999999
let s:x = 0
let s:y = 0
let s:vx = (s:X_MAX - s:X_MIN) / 30.0
let s:vy = (s:Y_MAX - s:Y_MIN) / 40.0

function! s:step(_timer_id)
  let s:x += s:vx
  if s:x < s:X_MIN
    let s:x = s:X_MIN
    let s:vx = s:vx * -1
  elseif s:X_MAX < s:x
    let s:x = s:X_MAX
    let s:vx = s:vx * -1
  endif

  let s:y += s:vy
  if s:y < s:Y_MIN
    let s:y = s:Y_MIN
    let s:vy = s:vy * -1
  elseif s:Y_MAX < s:y
    let s:y = s:Y_MAX
    let s:vy = s:vy * -1
  endif

  call s:render()
endfunction

function! s:render()
  let tbufnr = bufnr('[TimerTest]', 1)
  let cbufnr = bufnr('%')
  if tbufnr != cbufnr
    split
    execute tbufnr 'buffer'
  endif

  let width = winwidth(0)
  let height = winheight(0)
  let lines = []
  for r in range(height)
    call add(lines, repeat([' '], width))
  endfor
  let lines[float2nr(s:y * height)][float2nr(s:x * width)] = 'o'

  silent % delete _
  silent put =map(lines, {k, v -> join(v, '')})
  1 delete _
endfunction

let s:FPS = 60
let s:timer_id = timer_start(1000 / s:FPS, function('s:step'), {'repeat': s:FPS * 10})

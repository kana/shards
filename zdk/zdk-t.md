0. 500 byte
    * 既存実装
1. 220 byte
    * `:scriptencoding` 省略 - `&encoding ==# 'utf-8'` だと仮定
    * `:vnew` 省略 - `vim -S file` で起動するなら不要
    * 独自擬似乱数実装簡略化(`reltime()`)
2. 195 byte
    * 繰り返し出現する文字列を変数で置き換え
3. 169 byte
    * バッファへの追記方法を変える(`append()` => `:put`)

SGML  # autoload

xml := """
<table>
  <thead>
    <tr>
      <th>Main</th>
      <th>Sub</th>
      <th>Special</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Splattershot Jr.</td>
      <td>Splat Bomb</td>
      <td>Bubbler</td>
    </tr>
    <tr>
      <td>Splattershot</td>
      <td>Burst Bomb</td>
      <td>Bomb Rush</td>
    </tr>
    <tr>
      <td>Splattershot Pro</td>
      <td>Splat Bomb</td>
      <td>Inkstrike</td>
    </tr>
  </tbody>
</table>
""" asXML

# Note that `subitems` include text elements.

xml subitems at(1) subitems at(3) subitems at(1) \
    subitems at(5) subitems at(0) text println
#==> "Bubbler"

xml subitems at(1) subitems at(3) name println
#==> "tbody"

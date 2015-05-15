class ConcatFilter < Nanoc::Filter
  identifier :concat
  type :text

  def run(content, params={})
    item.children.map {|i| i.raw_content}.join()
  end
end

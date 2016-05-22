class Document < ApplicationRecord
  self.inheritance_column = nil

  TYPES = {
    1 => '需求',
    2 => '特性',
    3 => '实现'
  }

  def type_name
    TYPES[type]
  end

  def gfm_content
    GitHub::Markdown.render_gfm(content).html_safe
  end

end

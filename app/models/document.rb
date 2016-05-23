class Document < ApplicationRecord
  self.inheritance_column = nil
  serialize :links, JSON

  after_initialize :set_default_links

  TYPES = {
    1 => '需求',
    2 => '特性',
    3 => '实现'
  }

  def type_name
    TYPES[type]
  end

  def gfm_content
    GitHub::Markdown.render(content).html_safe
  end

  def set_default_links
    self.links ||= {}
  end

end

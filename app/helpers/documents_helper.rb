module DocumentsHelper

  def split_links text
    return [] unless text.present?
    text.lines.map(&:chomp).map do |url|
      match = URI(url).path.match(/\/documents\/(\d+)/)
      internal_id = match && match[1]
      if internal_id
        document = Document.where(id: internal_id).first
        title = document && document.title
      end
      #binding.pry
      OpenStruct.new(
        title: (title || url),
        url: url
      )
    end
  end
end

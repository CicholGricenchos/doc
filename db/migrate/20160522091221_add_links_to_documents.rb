class AddLinksToDocuments < ActiveRecord::Migration[5.0]
  def change
    add_column :documents, :links, :text
  end
end

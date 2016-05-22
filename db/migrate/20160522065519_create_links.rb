class CreateLinks < ActiveRecord::Migration[5.0]
  def change
    create_table :links do |t|
      t.boolean :internal
      t.integer :type
      t.integer :document_id
      t.string :title
      t.string :url

      t.timestamps
    end
  end
end

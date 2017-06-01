class CreateInventions < ActiveRecord::Migration
  def change
    create_table :inventions do |t|
      t.string :title
      t.text :description
      t.references :user
      t.string :permalink
      t.datetime :deleted_at

      t.timestamps null: false
    end
  end
end

class CreateBits < ActiveRecord::Migration
  def change
    create_table :bits do |t|
      t.string :name
      t.datetime :deleted_at

      t.timestamps null: false
    end
  end
end

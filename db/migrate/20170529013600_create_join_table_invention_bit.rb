class CreateJoinTableInventionBit < ActiveRecord::Migration
  def change
    create_join_table :inventions, :bits do |t|
      t.index [:invention_id, :bit_id]
      t.index [:bit_id, :invention_id]
    end
  end
end

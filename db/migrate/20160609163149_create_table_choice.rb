class CreateTableChoice < ActiveRecord::Migration
  def change
    create_table :choices do |t|
      t.integer :parent_id
      t.integer :child_id
    end
  end
end

class CreateCharacters < ActiveRecord::Migration
  def change
    create_table :characters do |t|
      t.string :name
      t.string :gender
      t.text :homeworld
      t.string :skin
      t.string :hair
      t.string :style
      t.string :personality
    end
  end
end

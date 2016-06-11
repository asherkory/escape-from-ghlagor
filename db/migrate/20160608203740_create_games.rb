class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :character_name

      t.timestamps null: false
    end
  end
end

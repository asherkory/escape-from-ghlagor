class CreateStorycards < ActiveRecord::Migration
  def change
    create_table :storycards do |t|
      t.string :title
      t.text :content

      t.timestamps null: false
    end
  end
end

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

intro_title = "Escape from Ghlagor: Introduction"

intro_content = "The year is 2502. Humanity is young, in galactic terms: although their colonies have spread across the galaxy, they are still an Apprentice species, a minor player on the galactic stage. Older races like the lizard-like Nekodiim and the moody Volarians run the Council, and so there is a semblance of peace and order across the stars. But the galaxy is a big place... \n
There are many ways for a lone sapient to fall through the cracks.\n
Welcome to the prison moon Ghlagor. It’s not a particularly pleasant place: scant atmosphere, dry and dusty underground facilities, stern Volarian guards. You may have been imprisoned here justly, or unjustly — but now it’s time to leave. You’ve been preparing for your escape."

intro_story = Storycard.create(title: intro_title, content: intro_content)
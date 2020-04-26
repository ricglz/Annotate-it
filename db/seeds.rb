puts 'Creating users'
users = FactoryBot.create_list :user, 5
users.each_with_index do |user|
  puts "Creating user-#{user.id}"
  folders = FactoryBot.create_list :folder, 3, user: user
  tags = FactoryBot.create_list :tag, 3, user: user
  folders.each do |folder|
    notes_amount = (rand() * 4).to_i + 1
    notes = FactoryBot.create_list :note, notes_amount,
                                   user: user, folder: folder
    notes.each do |note|
      tags_amount = (rand() * 2).to_i + 1
      note.tags = tags.sample(tags_amount)
    end
  end
end

user = User.create(
  email: 'user@mail.com',
  password: '123456',
  password_confirmation: '123456'
)

(1..12).each do |i|
  user.projects.create(
    name: "Project_#{i}",
    accessibility: 'public',
    description: 'project',
    dicom_attributes: {
      file: File.open("#{Rails.root}/db/seed_files/dicom#{i}.dcm")
    }
  )
end

(13..50).each do |i|
  user.projects.create(
    name: "Project_#{i}",
    accessibility: 'public',
    description: 'project'
  )
end

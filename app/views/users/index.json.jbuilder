json.array!(@users) do |user|
  json.extract! user, :id, :name, :digest_password, :role
  json.url user_url(user, format: :json)
end

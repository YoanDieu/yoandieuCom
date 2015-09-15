json.array!(@activities) do |activity|
  json.extract! activity, :id, :title, :type, :institution, :description, :github, :twitter, :url
  json.url activity_url(activity, format: :json)
end

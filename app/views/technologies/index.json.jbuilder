json.array!(@technologies) do |technology|
  json.extract! technology, :id, :name, :logo, :description, :link, :doc
  json.url technology_url(technology, format: :json)
end

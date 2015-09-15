json.array!(@formations) do |formation|
  json.extract! formation, :id, :name, :institution, :startdate, :enddate, :skills, :certificate, :url
  json.url formation_url(formation, format: :json)
end

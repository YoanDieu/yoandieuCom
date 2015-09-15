json.array!(@experiences) do |experience|
  json.extract! experience, :id, :position, :company, :startdate, :enddate, :location, :duties, :url
  json.url experience_url(experience, format: :json)
end

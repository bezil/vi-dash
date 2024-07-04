json.extract! post, :id, :title, :description, :cover, :audio, :created_at, :updated_at
json.url post_url(post, format: :json)
json.description post.description.to_s
json.cover url_for(post.cover)
json.audio url_for(post.audio)

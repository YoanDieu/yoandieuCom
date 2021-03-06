Rails.application.routes.draw do
  resources :years
  resources :technologies, path:"/admin/technologies"
  resources :activities, path:"/admin/activities"
  resources :formations, path:"/admin/formations"
  resources :experiences, path:"/admin/experiences"
  resources :projects, path:"/admin/projects" do
    resources :technologies
    resources :project_technology
  end
  resources :users, path:"/admin/users"



  #get 'admin/users' => 'users#index'
  #post 'admin/users'=> "users#create"
  #get 'admin/users/new' => "users#new"
  #get 'admin/users/:id/edit' => "users#edit"
  #get 'admin/users/:id' => "users#show"
  #patch 'admin/users/:id' => "users#update"
  #put 'admin/users/:id' => "users#update"
  #delete 'admin/users/:id' => "users#destroy"
  get '/admin' => "pages#admin"
  post '/admin' => "sessions#create"
  get '/logout' => "sessions#destroy"

  root 'pages#home'

  get '/projects' => "pages#projects"
  get '/project/:id' => "pages#show_project"
  get '/curriculum' => "pages#curriculum"
  get '/contact' => "pages#contact"
  post '/contact' => "pages#contact_send"


  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end

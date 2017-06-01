Rails.application.routes.draw do
  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'site#index'

  namespace :api, defaults: {format: 'json'} do
    namespace :v1 do
      resources :inventions, only: [:index, :create, :destroy, :update]
      resources :bits, only: [:index]
      get '/inventions/:permalink', to: 'inventions#show'
    end
  end

  get '/site/:permalink', to: 'site#show'
end

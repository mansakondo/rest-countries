Rails.application.routes.draw do
  get 'countries', to: 'countries#index', as: 'home'
  get 'countries/:name', to: 'countries#show', as: 'country'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

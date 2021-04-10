Rails.application.routes.draw do
  root 'countries#index'
  get ':name/', to: 'countries#show', as: 'country'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

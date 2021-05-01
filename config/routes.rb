require "./mini_cable/mini_cable"
Rails.application.routes.draw do
  root 'countries#index'
  get 'countries/:name', to: 'countries#show', as: 'country'
  mount MiniCable.new => "/minicable"
end

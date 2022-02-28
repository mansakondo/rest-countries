Rails.application.routes.draw do
  root 'countries#index', as: 'countries'
  get ':code/', to: 'countries#show', as: 'country'
end

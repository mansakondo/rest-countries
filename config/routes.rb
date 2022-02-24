Rails.application.routes.draw do
  root 'countries#index', as: 'countries'
  get ':name/', to: 'countries#show', as: 'country'
end

Rails.application.routes.draw do
  resources :companies
  resources :trades

  resources :companies, only: [:index, :show] do
    resources :trades, only: [:index, :show]
  end
end

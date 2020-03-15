Rails.application.routes.draw do
  resources :positions
  resources :companies
  resources :trades

  resources :companies, only: [:index, :show] do
    resources :positions, only: [:index, :show]
  end

  resources :companies do
    resources :positions do
      resources :trades
    end
  end
end

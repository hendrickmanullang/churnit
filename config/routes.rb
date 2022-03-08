Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :cards, only: [:show, :index] do
    collection do member
      get :compare, :analysis
    end
  end
  resources :users
end

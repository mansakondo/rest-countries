require_relative "../config/environment"
require_relative "mini_cable"
Rails.application.eager_load!

app = Rack::Builder.app do
  use Rack::Reloader
  use Rack::CommonLogger
  run Rails.application
  map "/minicable" do
    run MiniCable.new
  end
end
run app

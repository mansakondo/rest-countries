class CountriesController < ApplicationController
  before_action :set_theme

  def index
    @countries = fetch_countries
  end

  def show
    @country = Country.find_by_name(country_params[:name])
  end

  private

  def country_params
    params.permit(:name, :region, :theme)
  end

  def fetch_countries
    name = country_params[:name]
    region = country_params[:region]

    if (name && name =~ /[a-z]+/i)
      Country.find_by_name(name)
    elsif region && region =~ /[a-z]/i
      Country.find_by_region(region)
    else
      Country.all
    end
  end

  def set_theme
    if params[:theme]
      cookies[:theme] = params[:theme]
    end
  end
end

class CountriesController < ApplicationController
  def index
    @countries = fetch_countries
  end

  def show
    @country = Country.find_by_name(country_params[:name]).first
  end

  private

  def country_params
    params.permit(:name, :region, :theme)
  end

  def fetch_countries
    name   = country_params[:name]
    region = country_params[:region]

    if (name && name =~ /^[a-z]+/i)
      if (region && region =~ /^[a-z]+/i)
        countries = Country.find_by_name(name)
        countries.select { |country| country.region =~ /#{region}/i } if countries
      else
        Country.find_by_name(name)
      end
    elsif region && region =~ /^[a-z]+/i
      Country.find_by_region(region)
    else
      Country.all
    end
  end
end

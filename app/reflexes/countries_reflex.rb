# frozen_string_literal: true

class CountriesReflex < ApplicationReflex
  def find_by_name
    @countries = Country.find_by_name(params[:name] = element.value)
  end

  def find_by_region
    @countries = Country.find_by_region(params[:region] = element.data_region)
  end
end

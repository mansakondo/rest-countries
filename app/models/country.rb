require 'uri'
require 'net/http'
require 'json'

class Country
  include ActiveModel::Serializers::JSON

  COUNTRIES_INFO = JSON.parse(Net::HTTP.get(
    'restcountries.eu',
    '/rest/v2/all?fields=name;flag;alpha3Code;nativeName;population;region;subRegion;capital;topLevelDomain;currencies;languages;borders'))

  class << self
    def all
      @@countries ||= COUNTRIES_INFO.map { |country_info| new.from_json(country_info.to_json) }
    end

    def find_by_name(name)
      all.select { |country_info| country_info.name =~ /#{name}/i }.first
    end
  end

  def attributes=(hash)
    hash.each do |key, value|
      method = key.underscore.to_sym
      self.class.attr_accessor method
      send("#{method}=", value)
    end
  end

  def to_partial_path
    'country'
  end
end

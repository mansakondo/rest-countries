require 'net/http'
require 'json'

class Country
  include ActiveModel::Serializers::JSON

  COUNTRIES_INFO = JSON.parse(Net::HTTP.get(
    'restcountries.eu',
    '/rest/v2/all?fields=name;flag;alpha3Code;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders'))

  class << self
    def all
      @@countries ||= COUNTRIES_INFO.map { |country_info| new.from_json(country_info.to_json) }
    end

    def find_by_name(name)
      all.select { |country_info| country_info.name =~ /^#{name}/i }.first || all
    end

    def find_by_region(region)
      all.select { |country_info| country_info.region =~ /#{region}/i } || all
    end

    def find_by_code(code)
      all.select { |country_info| country_info.alpha3_code == code }.first
    end
  end

  def attributes=(hash)
    hash.each do |key, value|
      method = key.underscore.to_sym
      self.class.attr_accessor method
      send("#{method}=", value)
    end
  end

  def attributes
    {
      'name': self.name
    }
  end

  def process_attributes
    self.top_level_domain = self.top_level_domain.is_a?(Array) ? top_level_domain.first : top_level_domain
    self.currencies = currencies.map { |currency| currency['name'] }.compact
    self.languages = languages.map { |lang| lang['name'] }.compact
    self.borders = borders.map { |code| self.class.find_by_code(code).name }
  end

  def processed_top_level_domain
    top_level_domain.first
  end

  def processed_currencies
    currencies.map { |currency| currency['name'] }.compact
  end

  def processed_languages
    languages.map { |lang| lang['name'] }.compact
  end

  def processed_borders
    borders.map { |code| self.class.find_by_code(code).name }
  end

  def to_partial_path
    'country'
  end
end

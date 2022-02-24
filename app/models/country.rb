require "net/http"
require "json"

class Country
  include ActiveModel::Serializers::JSON

  uri = URI("https://restcountries.com/v3.1/all")
  COUNTRIES_INFO = JSON.parse(Net::HTTP.get(uri))

  class << self
    def all
      @@countries ||= COUNTRIES_INFO.map { |country_info| new.from_json(country_info.to_json) }
    end

    def find_by_name(name)
      name = name.gsub(/[()]/) { |parenthesis| "\\" + parenthesis }
      all.select { |country_info| country_info.name["common"] =~ /^#{name}/i }
    end

    def find_by_region(region)
      all.select { |country_info| country_info.region =~ /#{region}/i }
    end

    def find_by_code(code)
      all.select { |country_info| country_info.cca3 == code }.first
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

  def common_name
    @name["common"]
  end

  def native_name
    @name["nativeName"].values.first["official"]
  end

  def svg_flag
    @flags.dig("svg")
  end

  def processed_top_level_domain
    tld.first
  end

  def processed_currencies
    currencies.values.map { |currency| currency["name"] }
  end

  def processed_languages
    languages.values
  end

  def processed_borders
    return [] unless borders

    borders.map { |code| self.class.find_by_code(code).name["common"] }
  end

  def to_partial_path
    "country"
  end
end

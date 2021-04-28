require "faye/websocket"
require "json"
require "set"

Rack::Builder.new.use Rack::Reloader

class MiniCable
  def initialize
    @clients = Set.new
  end

  def call(env)
    handshake = Faye::WebSocket.websocket?(env)

    if handshake
      ws = Faye::WebSocket.new(env)

      ws.on :open do
        puts "\nHello from MiniCable!"
        @clients.add(ws)
      end

      ws.on :message do |event|
        data = event.data
        begin
          json = JSON.parse(data)
        rescue
          json = nil
        end
        puts "\nMessage received : #{json || data}"

        @clients.each do |client|
          client.send(data)
        end
      end

      ws.on :close do
        puts "\nGoodbye!"
        @clients.delete(ws)
      end

      ws.rack_response
    else
      [200, {}, ["Hello from MiniCable!"]]
    end
  end
end

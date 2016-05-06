class Api::DummysController < ApplicationController

  def index
    dummy_messages = {
    	messages: [
            "(#{rand(1000)}) Hello World with a random number from an API!",
    		"(#{rand(1000)}) Another Hello World with another random number (what are the chances of these two matching? keep clicking!!)"
    	]
    }
    return render json: dummy_messages, status: :ok
  end

end

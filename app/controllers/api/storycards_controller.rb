module Api
  class StorycardsController < ApplicationController
    respond_to :json

    def show
      respond_with(Storycard.find(params[:id]))
    end
  end
end